import {useQuery} from 'react-query';
import {useEffect} from 'react';
import CommentsListItem from '../CommentsListItem/CommentsListItem';
import {getAllComments} from '@/queries';
import Spinner from '../Spinner/Spinner';
import {Comment} from '@/Types';

function CommentsList({list}: any) {
  const {data, isLoading, isSuccess} = useQuery('commentsList', getAllComments);

  useEffect(() => {
    if (data)
      if (list.current) {
        const {scrollHeight, clientHeight} = list.current;
        list.current.scrollTop = scrollHeight - clientHeight;
      }
  }, [isSuccess]);

  return isLoading && !data ? (
    <Spinner />
  ) : (
    <ul className="comments-list" ref={list}>
      {data.map((el: Comment) => (
        <li key={el._id}>
          <CommentsListItem data={el} />
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
