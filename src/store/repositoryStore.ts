import { makeAutoObservable, runInAction } from 'mobx';
import { IRepository } from '../interfaces/repository';

class RepositoryStore {
  repositories: IRepository | undefined;
  isLoading = false;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

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
