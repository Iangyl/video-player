import React from 'react';
import APlayer from 'APlayer';
import { Container, Typography } from '@mui/material';
import LogsBox from 'LogsBox';

function App() {
  const [data, setData] = React.useState<string[]>([]);

  const handleListen = (value: string) => {
    setData([...data, value.toString()]);
  };

  return (
    <Container>
      <Typography sx={{ marginTop: 20, marginBottom: 15 }} variant="h2">
        Audio Player
      </Typography>
      <APlayer handleListen={handleListen} />
      <LogsBox data={data} />
    </Container>
  );
}

export default App;
