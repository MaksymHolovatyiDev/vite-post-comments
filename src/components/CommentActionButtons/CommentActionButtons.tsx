import {CommentButtons} from '@/Types';
import {ReactComponent as SvgDelete} from '@assets/icon-delete.svg';
import {ReactComponent as SvgEdit} from '@assets/icon-edit.svg';
import {ReactComponent as SvgReply} from '@assets/icon-reply.svg';

function CommentActionButtons({
  currentUser,
  setEdit,
  setShowReply,
  setOpenModal,
}: CommentButtons) {
  const onDeleteClick = () => {
    setOpenModal(true);
  };

  const onEditClick = () => {
    setEdit(prevState => !prevState);
  };

  const onReplyClick = () => {
    setShowReply(prevState => !prevState);
  };

  return (
    <div className="comments-list-comment__container--flex action-btns-container">
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
