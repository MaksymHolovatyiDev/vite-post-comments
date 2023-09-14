import {Comment} from '@/Types';
import {CommentListUserComment} from '../CommentListUserComment/CommentListUserComment';

function CommentsListItem({data}: {data: Comment}) {
  return (
    <div>
      <CommentListUserComment data={data} />
      <div className="reply">
        <CommentListUserComment data={data} />
      </div>
    </div>
  );
}

export default CommentsListItem;
