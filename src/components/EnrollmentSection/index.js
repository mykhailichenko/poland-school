import React from 'react';

import s from './styles.module.scss';

const EnrollmentSection = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.steps}>
        <div className={s.stepWrapper}>
          <div className={s.stepTitle}>Крок 1</div>
          <div className={s.stepDescription}>Запишись на безкоштовну консультацію</div>
          <div className={s.fileConsult}/>
        </div>
        <div className={s.stepWrapper}>
          <div className={s.stepTitle}>Крок 2</div>
          <div className={s.stepDescription}>Збери необхідні документи</div>
          <div className={s.stepTwoFile}/>
        </div>
        <div className={s.stepWrapper}>
          <div className={s.stepTitle}>Крок 3</div>
          <div className={s.stepDescription}>Отримай документи про зарахування</div>
          <div className={s.stepThreeFile}/>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSection;
