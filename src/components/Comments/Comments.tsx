import {useMutation} from 'react-query';
import AddComment from '../AddComment/AddComment';
import CommentsList from '../CommentsList/CommentsList';
import {addNewComment, queryClient} from '@/queries';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {MainRoutes} from '@/environment/routes';
import { InputButtonText } from '@/environment/variables';

function Comments() {
  const navigate = useNavigate();

  const newComment = useMutation(addNewComment, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('commentsList');
    },
  });

  const addComment = (data: string) => newComment.mutate({text: data});

  useEffect(() => {
    navigate(MainRoutes.Default);
  }, []);

  return (
    <div className="comments">
      <CommentsList />
      <AddComment addComment={addComment} text={InputButtonText.Send} />
    </div>
  );
}

export default Comments;
