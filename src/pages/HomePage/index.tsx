import React from 'react';
import Card from '../../components/feature/Card';
import TextField from '../../components/feature/TextField';
import Button from '../../components/core/Button';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Button>Обновить</Button>
      <TextField label="Position" placeholder="Unspecified" />
      <Card
        mainTitle="redbell"
        mainDescription="Big Techs grip on social media is a growing problem"
      />
    </div>
  );
};

export default HomePage;
