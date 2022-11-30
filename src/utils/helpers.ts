export const timeConvert = (num: number) => {
  const hours = num / 3600;
  const minutes = (num % 3600) / 60;
  const seconds = (minutes * 60) % 60;

  const numberPrettify = (value: number) => {
    if (value < 10) return `0${value}`;
    else return value;
  };

  const h = numberPrettify(Math.trunc(hours));
  const m = numberPrettify(Math.trunc(minutes));
  const s = numberPrettify(Math.trunc(seconds));

  if (h !== 0) return h + ':' + m + ':' + s;
  else if (h === 0 && m !== 0) return h + ':' + m + ':' + s;
  else return h + ':' + m + ':' + s;
};
