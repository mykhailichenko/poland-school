import React, { useState } from 'react';
import ModalConsult from "../Modal";
import s from './styles.module.scss';

const PolandCourses = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={s.coursesWrapper}>
      <div className={s.languageWrapper}>
        <div className={s.text}>
          <div className={s.language} id='courses'>Курси польської мови</div>
          <div className={s.mainText}>
            Онлайн вивчення польської мови для вступу в омріяний університет Польщі.
            <br/>Онлайн - це зручний формат для сучасної людини, яка цінує свій час, націлена на швидкий результат та має лише гаджет з інтернетом.
            <br/>В Step to Study доступно два формати навчання:
            <br/>1. Групові онлайн уроки (групи до 6 осіб) - від 1000 грн/місяць.
            <br/>2. Індивідуальні онлайн уроки (або парні) - від 200 грн/год.
            <br/>По закінченню курсів ти отримаєш сертифікат та цінні знання, які полегшать твоє навчання.
          </div>
          <div className={s.freeConsultBtn} onClick={handleShow}>Безкоштовна консультація</div>
        </div>
        <div className={s.photo} />
      </div>

      <ModalConsult
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};

export default PolandCourses;
