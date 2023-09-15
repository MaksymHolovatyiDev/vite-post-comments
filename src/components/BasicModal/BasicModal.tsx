import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {BasicModalProps} from '@/Types';
import {deleteUserComment, queryClient} from '@/queries';
import {useMutation} from 'react-query';

export default function BasicModal({open, setOpen, _id}: BasicModalProps) {
  const handleClose = () => setOpen(false);

  const deleteComment = useMutation(deleteUserComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('commentsList');
    },
  });

  const onDeleteClick = () => {
    deleteComment.mutate(_id);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className="modal-container">
          <p className="modal-title">Delete comment</p>
          <p className="comments-list-comment__text--gray">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="modal-btn-container">
            <button type="button" onClick={handleClose} className="modal-btn">
              No, cancel
            </button>
            <button
              type="button"
              onClick={onDeleteClick}
              className="modal-btn modal-btn--red">
              Yes, delete
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
