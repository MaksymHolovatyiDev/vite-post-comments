import {ReactComponent as SvgPlus} from '@assets/icon-plus.svg';
import {ReactComponent as SvgMinus} from '@assets/icon-minus.svg';
import {queryClient, voteDown, voteUp} from '@/queries';
import {useMutation} from 'react-query';
import {CommentVote} from '@/Types';

function CommentVote({vote, _id}: CommentVote) {
  const userVoteUp = useMutation(voteUp, {
    onSuccess: () => {
      queryClient.invalidateQueries('commentsList');
    },
  });

  const userVoteDown = useMutation(voteDown, {
    onSuccess: () => {
      queryClient.invalidateQueries('commentsList');
    },
  });

  const onAddBtnClick = () => {
    userVoteUp.mutate({_id});
  };

  const onMinusBtnClick = () => {
    userVoteDown.mutate({_id});
  };

  return (
    <div className="comments-list-comment__vote">
      <button
        type="button"
        className="comments-list-comment__vote-btn"
        onClick={onAddBtnClick}>
        <SvgPlus />
      </button>
      <p className="comments-list-comment__vote-text">{vote}</p>
      <button
        type="button"
        className="comments-list-comment__vote-btn"
        onClick={onMinusBtnClick}>
        <SvgMinus />
      </button>
    </div>
  );
}

export default CommentVote;
