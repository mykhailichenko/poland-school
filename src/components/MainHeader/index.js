import React, { useState } from 'react';

import ModalConsult from '../Modal';

import s from './styles.module.scss';

const MainHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={s.headerWrap}>
      <div className={s.navBlock}>
        <div className={s.mri} onClick={() => window.open('https://instagram.com/step.to.study?igshid=YmMyMTA2M2Y=')} />
        <div className={s.mrt} onClick={() => window.open('tg://resolve?domain=Steptostudypl')} />
        <span className={s.numberText}>+380 95 549 90 41</span>
      </div>

      <div className={s.mainText}>Step to study</div>

      <div className={s.consultBlock}>
        <div className={s.consultBtn} onClick={handleShow}>Безкоштовна консультація</div>
      </div>
      <ModalConsult
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};

export default MainHeader;
