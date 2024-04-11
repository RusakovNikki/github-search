import React, { useEffect, useState } from 'react';
import Card from '../../components/feature/Card';
import TextField from '../../components/feature/TextField';
import Button from '../../components/core/Button';
import { observer } from 'mobx-react-lite';
import repositoryStore from '../../store/repositoryStore';
import Snackbar from '../../components/core/Snackbar';
import { useThrottle } from '../../hooks/useThrottle';
import Header from '../../components/feature/Header';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { getRepositoriesByName, isError, isLoading, repositories } =
    repositoryStore;
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearch = useThrottle(searchText, 1000);
  const [repositoriesPage, setRepositoriesPage] = useState<number>(1);
  const [isOpenLoadingSnackbar, setOpenLoadingSnackbar] =
    useState<boolean>(false);
  const [isOpenErrorSnackbar, setOpenErrorSnackbar] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) setOpenLoadingSnackbar(true);

    if (isError) setOpenErrorSnackbar(true);
  }, [isLoading, isError]);
  console.log(isError);

  useEffect(() => {
    getRepositoriesByName(debouncedSearch, {
      page: repositoriesPage,
      perPage: 10,
    });
  }, [debouncedSearch, getRepositoriesByName, repositoriesPage]);

  return (
    <>
      <Header title="GitHub search" />
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            label="Поиск"
            placeholder="github-search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button>Копировать</Button>
        </div>
        {repositories && repositories?.items?.length ? (
          repositories?.items?.map((repositoryItem) => (
            <Link
              to={`/repository/${repositoryItem.full_name.split('/').join('_')}`}
            >
              <Card
                title1="Stars count"
                value1={repositoryItem.stargazers_count.toString()}
                title2="Forks count"
                value2={repositoryItem.forks_count.toString()}
                mainTitle={repositoryItem.full_name}
                imageLink={repositoryItem.owner.avatar_url}
                mainDescription={repositoryItem.html_url}
              />
            </Link>
          ))
        ) : (
          <div>Нет данных...</div>
        )}

        <Snackbar
          text="Загрузка..."
          open={isOpenLoadingSnackbar}
          onClose={() => setOpenLoadingSnackbar(false)}
        />
        <Snackbar
          text="Большое количество запросов"
          open={isOpenErrorSnackbar}
          onClose={() => setOpenErrorSnackbar(false)}
        />
      </div>
    </>
  );
};

export default observer(HomePage);
