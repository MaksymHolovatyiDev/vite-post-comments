import {CommentButtons} from '@/Types';
import {deleteUserComment, queryClient} from '@/queries';
import {ReactComponent as SvgDelete} from '@assets/icon-delete.svg';
import {ReactComponent as SvgEdit} from '@assets/icon-edit.svg';
import {ReactComponent as SvgReply} from '@assets/icon-reply.svg';
import {useMutation} from 'react-query';

function CommentActionButtons({
  currentUser,
  _id,
  setEdit,
  setShowReply,
}: CommentButtons) {
  const deleteComment = useMutation(deleteUserComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('commentsList');
    },
  });

  const onDeleteClick = () => {
    deleteComment.mutate(_id);
  };

  const onEditClick = () => {
    setEdit(prevState => !prevState);
  };

  const onReplyClick = () => {
    setShowReply(prevState => !prevState);
  };

  return (
    <div className="comments-list-comment__container--flex">
      {currentUser ? (
        <>
          <button
            type="button"
            onClick={onDeleteClick}
            className="comments-list-comment__btn comments-list-comment__btn--red">
            <SvgDelete />
            <p>Delete</p>
          </button>
          <button
            type="button"
            className="comments-list-comment__btn"
            onClick={onEditClick}>
            <SvgEdit />
            <p>Edit</p>
          </button>
        </>
      ) : (
        <button
          type="button"
          className="comments-list-comment__btn"
          onClick={onReplyClick}>
          <SvgReply />
          <p>Reply</p>
        </button>
      )}
    </div>
  );
}

export default CommentActionButtons;
