import {Formik, Form, Field} from 'formik';

function AddComment() {
  return (
    <div className="base-start">
      <div className="test"></div>
      <Formik
        initialValues={{comment: ''}}
        onSubmit={async (values, {setSubmitting}) => {
          setSubmitting(false);
        }}>
        {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form onSubmit={handleSubmit} className="base-start">
            <Field
              type="text"
              name="comment"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Add comment..."
              className="add-comment"
              required
            />
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddComment;
