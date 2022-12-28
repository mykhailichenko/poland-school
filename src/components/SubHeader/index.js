import React from 'react';

import s from './styles.module.scss';

const SubHeader = () => {
  return (
    <div className={s.wrapper}>
      <a style={{textDecoration: 'none'}} href='#about'><div className={s.listItemFirst}>Про нас</div></a>
      <a style={{textDecoration: 'none'}} href='#services'><div className={s.listItem}>Послуги</div></a>
      <a style={{textDecoration: 'none'}} href='#courses'><div className={s.listItem}>Курси польської</div></a>
      <a style={{textDecoration: 'none'}} href='#universities'><div className={s.listItem}>Університети</div></a>
      <a style={{textDecoration: 'none'}} href='#contact'><div className={s.listItem}>Контакти</div></a>
      <a style={{textDecoration: 'none'}} href='#questions'><div className={s.listItemLast}>Запитання</div></a>
    </div>
  );
};

export default SubHeader;
