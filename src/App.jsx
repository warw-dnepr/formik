import './App.css'
import { Formik } from 'formik';


function App() {

  return (
    
      <div>
        <h1>Formik</h1>
        <Formik
          initialValues={{ name:'', email: '', tel: '' }}
          validate={values => {
            const errors = {};

            if(!values.name){
              errors.name='Name Required';
            return errors;
            }

            if (!values.email) {
              errors.email = 'Email Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {errors.email = 'Invalid email address';
            return errors
            }

            if(!values.tel){
              errors.name='Phone Required';
        } else if (
          !/^[0-9]{12}$/i.test(values.tel)
          ) {errors.tel = 'Min 12 digit';
        return errors
        }
      }}
      // if(!errors){}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form style={{display:'flex', flexDirection:'column', width:'200px',margin:'auto'}} onSubmit={handleSubmit}>
              <input style={{marginBottom:'20px'}}
                type="text"
                required
                name="name"
                placeholder='Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input style={{marginBottom:'20px'}}
                required
                type="text"
                name="email"
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input style={{marginBottom:'20px'}}
                required
                type="number"
                name="tel"
                placeholder='Phone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tel}
              />
              {errors.tel && touched.tel && errors.tel}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
    
}

export default App
