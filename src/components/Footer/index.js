import React, { useState } from 'react';
import ModalConsult from "../Modal";
import s from './styles.module.scss';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={s.footerWrapper}>
      <div className={s.aboutUs} id='contact'>
        <div className={s.block}>
          <span className={s.title}>Про Нас</span>
          <span className={s.text}>Хто ми</span>
          <span className={s.text}>Кроки до вступу</span>
          <span className={s.text}>Контакти</span>
          <span className={s.text}>Політика конфеденційності</span>
        </div>

        <div className={s.block}>
          <span className={s.title}>Послуги</span>
          <span className={s.text}>Підбір університету</span>
          <span className={s.text}>Переклад документів</span>
          <span className={s.text}>Курси польської мови</span>
          <span className={s.text}>Підбір житла</span>
        </div>

        <div className={s.block}>
          <span className={s.title}>Контакти</span>
          <span className={s.text}>steptostudypl@gmail.com</span>
          <span className={s.text}>+380 95 549 90 41</span>
          <div className={s.links}>
            <div className={s.tgFooter} onClick={() => window.open('tg://resolve?domain=Steptostudypl')} />
            <div className={s.instFooter} onClick={() => window.open('https://instagram.com/step.to.study?igshid=YmMyMTA2M2Y=')} />
          </div>
          <div className={s.vstyp} onClick={handleShow}>Хочу вступити</div>
        </div>
      </div>

      <div className={s.footerText}>© {new Date().getFullYear()} StepToStudy</div>
      <ModalConsult
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};

export default Footer;
