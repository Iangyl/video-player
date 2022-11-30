import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './index.sass';

const SOURCE =
  'https://content.blubrry.com/takeituneasy/lex_ai_balaji_srinivasan.mp3';

export default function APlayer(props: {
  handleListen: (value: number) => void;
}) {
  return (
    <AudioPlayer
      autoPlay
      src={SOURCE}
      listenInterval={1000}
      onListen={(e) => props.handleListen(e.timeStamp)}
    />
  );
}
