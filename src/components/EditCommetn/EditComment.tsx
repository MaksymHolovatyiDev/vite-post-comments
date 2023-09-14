import {Edit} from '@/Types';
import {editComment, queryClient} from '@/queries';
import {Field, Formik, Form} from 'formik';
import {useMutation} from 'react-query';

function EditComment({setEdit, text, _id}: Edit) {
  const editUserComment = useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('commentsList');
    },
  });

  return (
    <Formik
      initialValues={{comment: text}}
      onSubmit={(values, {setSubmitting}) => {
        editUserComment.mutate({text: values.comment, _id});
        setEdit(false);
        setSubmitting(false);
      }}>
      {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
        <Form
          onSubmit={handleSubmit}
          className="full-hw base-start base-start--col">
          <Field
            as="textarea"
            name="comment"
            onChange={handleChange}
            onBlur={handleBlur}
            className="full-hw comment-input"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="send-btn send-btn--self-end">
            Update
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default EditComment;
