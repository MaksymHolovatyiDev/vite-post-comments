import {Comment} from '@/Types';
import {CommentListUserComment} from '../CommentListUserComment/CommentListUserComment';

function CommentsListItem({data}: {data: Comment}) {
  return (
    <div>
      <CommentListUserComment data={data} />
      <ul className="reply">
        {data.Comments.map(el => (
          <li key={el._id}>
            <CommentListUserComment data={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsListItem;
