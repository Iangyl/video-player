/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, Button } from '@mui/material';
import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { timeConvert } from 'utils/helpers';

import './index.sass';

const SOURCE =
  'https://content.blubrry.com/takeituneasy/lex_ai_balaji_srinivasan.mp3';

export default function APlayer(props: {
  handleListen: (value: string) => void;
}) {
  const audioPlayerRef = React.useRef<H5AudioPlayer>(null);

  const getTime = () => {
    if (
      audioPlayerRef &&
      audioPlayerRef.current &&
      audioPlayerRef.current.audio.current
    ) {
      props.handleListen(
        timeConvert(audioPlayerRef.current.audio.current.currentTime)
      );
    }
  };

  const x025Speed = () => {
    if (
      audioPlayerRef &&
      audioPlayerRef.current &&
      audioPlayerRef.current.audio.current
    ) {
      audioPlayerRef.current.audio.current.playbackRate = 0.25;
    }
  };
  const x1Speed = () => {
    if (
      audioPlayerRef &&
      audioPlayerRef.current &&
      audioPlayerRef.current.audio.current
    ) {
      audioPlayerRef.current.audio.current.playbackRate = 1;
    }
  };
  const x2Speed = () => {
    if (
      audioPlayerRef &&
      audioPlayerRef.current &&
      audioPlayerRef.current.audio.current
    ) {
      audioPlayerRef.current.audio.current.playbackRate = 2;
    }
  };
  return (
    <Box>
      <AudioPlayer
        ref={audioPlayerRef}
        autoPlay
        src={SOURCE}
        listenInterval={1000}
        onListen={getTime}
        onVolumeChange={() => props.handleListen('Volume was changed!')}
      />
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={x025Speed}>
          0.25x
        </Button>
        <Button variant="contained" onClick={x1Speed}>
          1x
        </Button>
        <Button variant="contained" onClick={x2Speed}>
          2x
        </Button>
      </Box>
    </Box>
  );
}
