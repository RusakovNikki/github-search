import React from 'react';
import Card from '../../components/feature/Card';
import TextField from '../../components/feature/TextField';
import Button from '../../components/core/Button';

const HomePage = () => {
  return (
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
        <TextField label="Position" placeholder="Unspecified" />
        <Button>Обновить</Button>
      </div>
      <Card
        title1="ссылку на репозиторий, текст ссылки - полное название репозитория"
        title2="число старов"
        title3="число форков"
        mainTitle="redbell"
        imageLink="https://avatars.githubusercontent.com/u/79338989?v=4"
        mainDescription="Big Techs grip on social media is a growing problem"
      />
    </div>
  );
};

export default HomePage;
