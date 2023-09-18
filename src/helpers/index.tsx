import * as dayjs from 'dayjs';

enum Time {
  Base = 60,
  Hours = 24,
  Weeks = 7,
}

export const getDate = (data: string) => {
  const currentDate = dayjs();
  const postDate = dayjs(data);

  let dateString;

  console.log(currentDate.diff(postDate, 'months'));

  if (currentDate.diff(postDate, 'seconds') < Time.Base) {
    dateString = currentDate.diff(postDate, 'seconds') + ' second';
  } else if (currentDate.diff(postDate, 'minutes') < Time.Base) {
    dateString = currentDate.diff(postDate, 'minutes') + ' minute';
  } else if (currentDate.diff(postDate, 'hours') < Time.Hours) {
    dateString = currentDate.diff(postDate, 'hours') + ' hour';
  } else if (currentDate.diff(postDate, 'days') < Time.Weeks) {
    dateString = currentDate.diff(postDate, 'days') + ' days';
  } else if (currentDate.diff(postDate, 'days') < Time.Weeks) {
    dateString = currentDate.diff(postDate, 'days') + ' days';
  } else if (currentDate.diff(postDate, 'months')) {
    dateString = currentDate.diff(postDate, 'weeks') + ' week';
  } else if (currentDate.diff(postDate, 'years')) {
    dateString = currentDate.diff(postDate, 'months') + ' month';
  } else {
    dateString = currentDate.diff(postDate, 'years') + ' year';
  }

  return dateString.split(' ')[0] === '1' ? dateString + 's' : dateString;
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
