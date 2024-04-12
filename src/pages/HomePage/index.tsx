import React, { useEffect, useState } from 'react';
import Card from '../../components/feature/Card';
import TextField from '../../components/feature/TextField';
import { observer } from 'mobx-react-lite';
import repositoryStore from '../../store/repositoryStore';
import Snackbar from '../../components/core/Snackbar';
import { useThrottle } from '../../hooks/useThrottle';
import Header from '../../components/feature/Header';
import { useNavigate } from 'react-router-dom';
import CopyButton from '../../components/core/CopyButton';

import noResultLogo from '../../images/no_result.gif';
import Button from '../../components/core/Button';

const HomePage = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    getRepositoriesByName(debouncedSearch, {
      page: 1,
      perPage: 10 * repositoriesPage,
    });
  }, [debouncedSearch, getRepositoriesByName, repositoriesPage]);

  const handleClickCard = (full_name: string) => {
    navigate(`/repository/${full_name.split('/').join('_')}`);
  };

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
          <CopyButton text={searchText} />
        </div>
        {repositories && repositories?.items?.length ? (
          repositories?.items?.map((repositoryItem) => (
            <Card
              info={[
                {
                  title: 'Stars count: ',
                  value: repositoryItem.stargazers_count,
                },
                {
                  title: 'Forks count: ',
                  value: repositoryItem.forks_count,
                },
              ]}
              mainTitle={repositoryItem.full_name}
              imageLink={repositoryItem.owner.avatar_url}
              mainDescription={repositoryItem.html_url}
              onClick={() => handleClickCard(repositoryItem.full_name)}
            />
          ))
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={noResultLogo}
              alt="Нет данных..."
              style={{
                height: '400px',
                width: 'fit-content',
              }}
            />
          </div>
        )}
        {repositories?.items.length ? (
          <Button onClick={() => setRepositoriesPage((prev) => prev + 1)}>
            Еще...
          </Button>
        ) : undefined}
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
