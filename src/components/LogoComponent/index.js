import React, { useState } from 'react';
import ModalConsult from "../Modal";

import s from './styles.module.scss';

const LogoComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={s.wrapper}>
      <div className={s.mainText}><span>Твій перший крок до освіти за кордоном</span></div>
      <div className={s.stepBtn} onClick={handleShow}><span>Зроби перший крок</span></div>

      <ModalConsult
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};

export default LogoComponent;
