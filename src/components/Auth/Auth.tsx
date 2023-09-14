import {MainRoutes} from '@/environment/routes';
import {login, register} from '@/environment/variables';
import {useAuth} from '@/hooks';
import {Formik, Form, Field} from 'formik';
import {observer} from 'mobx-react';
import {Link, useLocation} from 'react-router-dom';

export const Auth = observer(() => {
  const pathname = useLocation().pathname;
  const authMutation = useAuth(pathname);

  const authData = pathname === MainRoutes.Register ? register : login;

  return (
    <>
      <Formik
        initialValues={authData.initialValues}
        onSubmit={async (values, {setSubmitting}) => {
          authMutation.mutate({...values});
          setSubmitting(false);
        }}>
        {({handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <ul className="auth-form">
              {authData.data.map(el => (
                <li key={el.name + el.type}>
                  <Field
                    type={el.type}
                    name={el.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={el.name[0].toUpperCase() + el.name.slice(1)}
                    required
                  />
                </li>
              ))}
            </ul>
            <button type="submit" disabled={isSubmitting}>
              {authData.buttonText}
            </button>
          </Form>
        )}
      </Formik>
      <Link reloadDocument to={authData.link} className="auth-link">
        {authData.linkText}
      </Link>
    </>
  );
});
