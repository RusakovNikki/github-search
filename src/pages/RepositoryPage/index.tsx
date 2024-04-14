import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/feature/Header';
import { observer } from 'mobx-react-lite';
import repositoryStore from '../../store/repositoryStore';
import Button from '../../components/core/Button';
import Card from '../../components/feature/Card';
import Snackbar from '../../components/core/Snackbar';
import noResultLogo from '../../images/no_result.gif';

const RepositoryPage = () => {
  const { getRepository, isLoading, repository } = repositoryStore;
  const { fullName } = useParams();
  const correctFullName = fullName?.split('_').join('/');
  const [isOpenLoadingSnackbar, setOpenLoadingSnackbar] =
    useState<boolean>(false);

  useEffect(() => {
    if (isLoading) setOpenLoadingSnackbar(true);
  }, [isLoading]);

  useEffect(() => {
    if (!correctFullName) return;

    getRepository(correctFullName);
  }, [correctFullName]);

  if (!repository?.id || !repository)
    return (
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
            maxHeight: '400px',
            maxWidth: '100%',
          }}
        />
      </div>
    );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header title={correctFullName ?? ''} />
      <Link to={'/'}>
        <Button>К списку</Button>
      </Link>
      <Card
        info={[
          {
            title: 'Stars count: ',
            value: repository.stargazers_count,
          },
          {
            title: 'Forks count: ',
            value: repository.forks_count,
          },
          {
            title: 'Default branch: ',
            value: repository.default_branch,
          },
          {
            title: 'Open issues count: ',
            value: repository.open_issues_count,
          },
          {
            title: 'language: ',
            value: repository.language,
          },
        ]}
        mainTitle={repository.full_name}
        imageLink={repository.owner.avatar_url}
        mainDescription={repository.html_url}
      />
      <Snackbar
        text="Загрузка..."
        open={isOpenLoadingSnackbar}
        onClose={() => setOpenLoadingSnackbar(false)}
      />
    </div>
  );
};

export default observer(RepositoryPage);
