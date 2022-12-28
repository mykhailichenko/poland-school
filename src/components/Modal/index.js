import React, {useState} from 'react';
import { Modal } from 'antd';
import { Field, Form, Formik } from 'formik';

import s from './styles.module.scss';

const ModalConsult = ({show, handleClose}) => {
  const [highEducation, setHighEducation] = useState(false);
  const [regularEducation, setRegularEducation] = useState(false);
  const [languageCourses, setLanguageCourses] = useState(false);

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const sendEmail = (values) => {
    console.log(
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        highEducation: highEducation ? 'Вища освіта' : '',
        regularEducation: regularEducation ? 'Середня освіта' : '',
        languageCourses: languageCourses ? 'Курси польської мови' : '',
      }
    );

    // Email.send({
    //   SecureToken : "2821beb3-20f5-4b8c-8de8-8c785dc23199",
    //   To : 'iam.mivinka@gmail.com',
    //   From : "ghf.mivinka@gmail.com",
    //   Subject : "Безкоштовна консультація",
    //   Body : "sdfsdfsdfsdsdfsdf"
    // }).then();
  };

  return (
    <>
      <Modal
        title=''
        open={show}
        onOk={handleClose}
        onCancel={handleClose}
        footer={[]}
        width={1200}
      >
        <div className={s.modalBody}>
          <span className={s.consultText}>Безкоштовна консультація</span>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
            }}
            onSubmit={async (values) => {
              sendEmail(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={s.inputSection}>
                  <span className={s.sectionText}>Ім’я</span>
                  <div className={errors.name && touched.name ? s.inputFieldErr : s.inputField}>
                    <Field
                      id={'name'}
                      type={'text'}
                      className={s.inputData}
                      name={'name'}
                      placeholder={'Ім’я'}
                    />
                  </div>
                  {errors.name && touched.name && <div className={s.formError}>{errors.name}</div>}
                </div>
                <div className={s.inputSection}>
                  <span className={s.sectionText}>Номер телефону</span>
                  <div className={errors.phone && touched.phone ? s.inputFieldErr : s.inputField}>
                    <Field
                      id={'phone'}
                      type={'text'}
                      className={s.inputData}
                      name={'phone'}
                      placeholder={'+380'}
                    />
                  </div>
                  {errors.phone && touched.phone && <div className={s.formError}>{errors.phone}</div>}
                </div>
                <div className={s.inputSection}>
                  <span className={s.sectionText}>Актуальний email</span>
                  <div className={errors.email && touched.email ? s.inputFieldErr : s.inputField}>
                    <Field
                      id={'email'}
                      type={'text'}
                      className={s.inputData}
                      name={'email'}
                      placeholder={'hi@ukr.net'}
                      validate={validateEmail}
                    />
                  </div>
                  {errors.email && touched.email && <div className={s.formError}>{errors.email}</div>}
                </div>

                <div className={s.modalBodyCheck}>
                  <span className={s.infoText}>Що вас цікавить?</span>

                  <label className={s.containerCheck}>Вища освіта
                    <input type="checkbox" onClick={(e) => setHighEducation(!highEducation)}></input>
                    <span className={s.checkmark}></span>
                  </label>

                  <label className={s.containerCheck}>Середня освіта
                    <input type="checkbox" onClick={(e) => setRegularEducation(!regularEducation)}></input>
                    <span className={s.checkmark}></span>
                  </label>

                  <label className={s.containerCheck}>Курси польської мови
                    <input type="checkbox" onClick={(e) => setLanguageCourses(!languageCourses)}></input>
                    <span className={s.checkmark}></span>
                  </label>
                </div>

                {
                  Object.keys(errors).length === 0 ?
                    <button type={'submit'} className={s.consultBtn}>Залишити заявку</button>
                    : <div className={s.consultBtnDisabled}>Залишити заявку</div>
                }

                <div className={s.footerText}>
                  Наш спеціаліст зв’яжеться з Вами та розповість все про навчання у Польщі.
                </div>

              </Form>
            )}
          </Formik>

        </div>
      </Modal>
    </>
  );
};

export default ModalConsult;
