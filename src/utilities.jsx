export const timeFormat = timeStamp => {
  let newDate = new Date(timeStamp);

  // let year = newDate.getFullYear(),
  //   month = newDate.getMonth(),
  //   date = newDate.getDate(),
  //   hours = newDate.getHours(),
  //   minutes = newDate.getMinutes(),
  //   seconds = newDate.getSeconds();
  //   return `${date}-${month}-${year},${hours}:${minutes}:${seconds}`;
  let options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
  };

  return Intl.DateTimeFormat('en-US', options).format(newDate);
};
