import React, {useState, useRef} from 'react';
import { Modal } from 'antd';
import { Field, Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';

import s from './styles.module.scss';

const ModalConsult = ({show, handleClose}) => {
  const [highEducation, setHighEducation] = useState(false);
  const [regularEducation, setRegularEducation] = useState(false);
  const [languageCourses, setLanguageCourses] = useState(false);

  const form = useRef();

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
    emailjs.send('service_99za1h9', 'template_9n87sw6', {
      "name": values.name,
      "email": values.email,
      "message": `Доброго дня, в мене є питання по: ${highEducation ? 'Вища освіта' : ''}, ${regularEducation ? 'Середня освіта' : ''}, ${languageCourses ? 'Курси польської мови' : ''}. Дякую. ${values.phone}`
    }, 'J5uRoJvmtyMlUHAP6')
      .then((result) => {
        console.log(result.text);
        handleClose();
      }, (error) => {
        console.log(error.text);
        handleClose();
      });
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
              <Form ref={form}>
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

                  <div className={s.containerCheckBox}>
                    <div className={s.checkboxInactive} onClick={() => setHighEducation(!highEducation)}>
                      {
                        highEducation ? <div className={s.checkboxActive} /> : null
                      }
                    </div>
                    <div className={s.checkboxText}>Вища освіта</div>
                  </div>

                  <div className={s.containerCheckBox}>
                    <div className={s.checkboxInactive} onClick={(e) => setRegularEducation(!regularEducation)}>
                      {
                        regularEducation ? <div className={s.checkboxActive} /> : null
                      }
                    </div>
                    <div className={s.checkboxText}>Середня освіта</div>
                  </div>

                  <div className={s.containerCheckBox}>
                    <div className={s.checkboxInactive} onClick={(e) => setLanguageCourses(!languageCourses)}>
                      {
                        languageCourses ? <div className={s.checkboxActive} /> : null
                      }
                    </div>
                    <div className={s.checkboxText}>Курси польської мови</div>
                  </div>
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
