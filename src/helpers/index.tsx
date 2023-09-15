enum Seconds {
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
    if (dateSeconds < Seconds.seconds) {
      dateNumber = Math.ceil(dateSeconds);
      dateString = dateNumber + ' second';
    } else if (dateSeconds < Seconds.minutes) {
      dateNumber = Math.floor(dateSeconds / Seconds.seconds);
      dateString = dateNumber + ' minute';
    } else if (dateSeconds < Seconds.hours) {
      dateNumber = Math.floor(dateSeconds / Seconds.minutes);
      dateString = dateNumber + ' hour';
    } else if (dateSeconds < Seconds.days * 7) {
      dateNumber = Math.floor(dateSeconds / Seconds.hours);
      dateString = dateNumber + ' day';
    } else {
      dateNumber = Math.floor((dateSeconds / Seconds.days) * 7);
      dateString = dateNumber + ' week';
    }
  }

  return dateNumber === 1 ? dateString : dateString + 's';
};

export const tagUser = (text: string, replied: boolean) => {
  const data = text.split(' ');

  if (!(data[0][0] === '@') || !replied)
    return <p className="comments-list-comment__text--gray">{text}</p>;

  return (
    <p className="comments-list-comment__text--gray">
      <span className="tag">{data.shift()} </span>
      {data.join(' ')}
    </p>
  );
};
