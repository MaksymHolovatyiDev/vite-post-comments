enum seconds {
  seconds = 60,
  minutes = seconds * 60,
  hours = minutes * 60,
  days = hours * 24,
}

export const getDate = (data: string) => {
  const date = new Date();
  const currentDate = new Date(Date.parse(data));
  const dateSeconds = (Date.now() - Date.parse(data)) / 1000;

  let dateString;
  let dateNumber;

  if ((dateNumber = date.getFullYear() - currentDate.getFullYear())) {
    dateString = dateNumber + ' year';
  } else if ((dateNumber = date.getMonth() - currentDate.getMonth())) {
    dateString = dateNumber + ' month';
  } else {
    if (dateSeconds < seconds.seconds) {
      dateNumber = Math.ceil(dateSeconds);
      dateString = dateNumber + ' second';
    } else if (dateSeconds < seconds.minutes) {
      dateNumber = Math.floor(dateSeconds / seconds.seconds);
      dateString = dateNumber + ' minute';
    } else if (dateSeconds < seconds.hours) {
      dateNumber = Math.floor(dateSeconds / seconds.minutes);
      dateString = dateNumber + ' hour';
    } else if (dateSeconds < seconds.days * 7) {
      dateNumber = Math.floor(dateSeconds / seconds.hours);
      dateString = dateNumber + ' day';
    } else {
      dateNumber = Math.floor((dateSeconds / seconds.days) * 7);
      dateString = dateNumber + ' week';
    }
  }

  return dateNumber === 1 ? dateString : dateString + 's';
};
