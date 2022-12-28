import React from 'react';

import s from './styles.module.scss';

const AboutUs = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.section}>
        <div className={s.title}>
          <div className={s.titleNumber}><span>1</span></div>
          <span className={s.titleText}>Хто ми?</span>
        </div>
        <div className={s.description}>
          <span>
            Ми команда освітнього центру «Step to Study». Вже 3 роки допомагаємо вступити в омріяні вузи в Польщі.
          </span>
        </div>
      </div>

      <div className={s.section}>
        <div className={s.title}>
          <div className={s.titleNumber}><span>2</span></div>
          <span className={s.titleText}>Для чого ми тобі?</span>
        </div>
        <div className={s.description}>
          <span>
            Ми надаємо чітку покрокову інструкцію зі вступу, яка полегшить тобі життя, збереже нерви та кошти на непотрібні речі ( а їх буде багато на шляху).
          </span>
        </div>
      </div>

      <div className={s.section}>
        <div className={s.title}>
          <div className={s.titleNumber}><span>3</span></div>
          <span className={s.titleText}>Яка наша ціль?</span>
        </div>
        <div className={s.description}>
          <span>
            Зробити здобуття європейської освіти простим кроком для кожного сучасного українця. Step to Study - це відкритість, якісні послуги та сучасний підхід до всього на вступу.  Тому чекаємо саме тебе на першій безкоштовній консультації.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
