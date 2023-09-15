import {useState} from 'react';
import {Comment} from '@/Types';
import {observer} from 'mobx-react';
import store from '@/store';
import CommentActionButtons from '../CommentActionButtons/CommentActionButtons';
import CommentVote from '../CommentVote/CommentVote';
import EditComment from '../EditComment/EditComment';
import AddComment from '../AddComment/AddComment';
import {queryClient, reply} from '@/queries';
import {useMutation} from 'react-query';
import {getDate, tagUser} from '@/helpers';
import {InputButtonText} from '@/environment/variables';
import BasicModal from '../BasicModal/BasicModal';

export const CommentListUserComment = observer(({data}: {data: Comment}) => {
  const [edit, setEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const newReply = useMutation(reply, {
    onSuccess: () => {
      queryClient.invalidateQueries('commentsList');
    },
  });

  const addComment = (text: string) => newReply.mutate({text, _id: data._id});

  const currentUser = store.userId === data.user._id;

  return (
    <>
      <div className="comments-list-comment">
        <CommentVote vote={data.vote} _id={data._id} />
        <div className="comments-list-comment__wrapper">
          <div className="comments-list-comment__container--flex comments-list-comment__container--between">
            <div className="comments-list-comment__container--flex">
              <img
                src="src/assets/avatar.webp"
                alt="User avatar"
                className="comments-list-comment__img"
              />
              <p className="comments-list-comment__name">{data.user.name}</p>
              {currentUser && <p className="comments-list-comment__you">you</p>}
              <p className="comments-list-comment__text--gray">
                {getDate(data.createdAt)} ago
              </p>
            </div>
            <CommentActionButtons
              currentUser={currentUser}
              setEdit={setEdit}
              setOpenModal={setOpenModal}
              setShowReply={setShowReply}
            />
          </div>
          {edit ? (
            <EditComment setEdit={setEdit} text={data.text} _id={data._id} />
          ) : (
            tagUser(data.text, data.replied)
          )}
        </div>
      </div>
      {showReply && (
        <AddComment
          data={{text: '@' + data.user.name + ' '}}
          text={InputButtonText.Reply}
          addComment={addComment}
          setShowReply={setShowReply}
        />
      )}
      {<BasicModal open={openModal} setOpen={setOpenModal} _id={data._id} />}
    </>
  );
});
