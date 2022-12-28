import React, { useState } from 'react';

import MainHeader from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';
import LogoComponent from '../../components/LogoComponent';
import EnrollmentSection from '../../components/EnrollmentSection';
import AboutUs from '../../components/AboutUs';
import TableSection from '../../components/Table';
import Universities from '../../components/Universities';
import Questions from   '../../components/Questions';
import Footer from '../../components/Footer';
import ModalConsult from "../../components/Modal";

import s from './styles.module.scss';
import PolandCourses from "../../components/PolandCourses";

const HomePage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className={s.mainWrapper}>
      <MainHeader />
      <div className={s.divider} />
      <SubHeader />
      <LogoComponent />
      <div className={s.polandText}><span>Як вступити до ВНЗ Польщі?</span></div>
      <EnrollmentSection />
      <div className={s.polandText} id='about'><span>Про нас</span></div>
      <AboutUs />
      <div className={s.freeConsultBtn} onClick={handleShow}>Безкоштовна консультація</div>
      <div className={s.polandText} id='services'><span>Наші послуги</span></div>
      <TableSection />
      <PolandCourses />
      <div className={s.polandText} id='universities'><span>Університети</span></div>
      <Universities />
      <div className={s.polandText} id='questions'><span>Найпоширеніші питання</span></div>
      <Questions />
      <Footer />
        <ModalConsult
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
    </div>
  );
};

export default HomePage;
