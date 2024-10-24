const formatTime = (date, separator = "-") => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join(separator)} ${[
    hour,
    minute,
    second
  ]
    .map(formatNumber)
    .join(":")}`;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

const formatDate = date => {
  date = new Date(date);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export { formatTime, formatDate };
