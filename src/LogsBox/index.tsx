import React from 'react';
import { Box, Typography } from '@mui/material';

import styles from './index.module.sass';

export default function LogsBox(props: { data: string[] }) {
  const ref = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [props.data]);

  return (
    <Box className={styles.logBox}>
      {props.data &&
        props.data.map((item, index: number) => (
          <Typography className={styles.logrow} key={index} variant="body1">
            {index + 1 + ')'} {item}
          </Typography>
        ))}
      <div style={{ float: 'left', clear: 'both' }} ref={ref} />
    </Box>
  );
}
