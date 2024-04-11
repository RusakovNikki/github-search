import { makeAutoObservable, runInAction } from 'mobx';
import { IRepository, IRepositoryItem } from '../interfaces/repository';

class RepositoryStore {
  repositories?: IRepository;
  repository?: IRepositoryItem;
  isLoading = false;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  getRepository = async (full_name: string) => {
    try {
      this.isLoading = true;
      const response = await fetch(
        `https://api.github.com/repos/${full_name}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = (await response.json()) as IRepositoryItem;

      runInAction(() => {
        this.repository = data;
      });
    } catch (error) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  };

  getRepositoriesByName = async (
    name: string,
    queries?: { page: number; perPage: number },
  ) => {
    try {
      this.isLoading = true;
      const response = await fetch(
        `https://api.github.com/search/repositories?q=$${name}${queries ? `&page=${queries?.page}&per_page=${queries?.perPage}` : ``}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 403)
        throw new Error('403 is unacceptable for me!');
      else this.isError = false;
      const data = (await response.json()) as IRepository;

      runInAction(() => {
        this.repositories = data;
      });
    } catch (error) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  };
}

export default new RepositoryStore();
