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
