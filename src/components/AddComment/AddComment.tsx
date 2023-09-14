import {AddUserComment} from '@/Types';
import {Formik, Form, Field} from 'formik';

function AddComment({data, addComment, text, setShowReply}: AddUserComment) {
  return (
    <div className="base-start add-comments__wrapper">
      <div className="test"></div>
      <Formik
        initialValues={{comment: data?.text ?? ''}}
        onSubmit={async (values, {setSubmitting}) => {
          if (values.comment) {
            await addComment(values.comment);
            if (setShowReply) setShowReply(prevState => !prevState);
          }

          setSubmitting(false);
        }}>
        {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form onSubmit={handleSubmit} className="full-hw base-start">
            <Field
              as="textarea"
              name="comment"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Add comment..."
              className="full-hw comment-input"
              required
            />
            <button type="submit" disabled={isSubmitting} className="send-btn">
              {text}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddComment;
