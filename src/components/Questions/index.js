import React, { useState } from 'react';

import s from './styles.module.scss';

const Questions = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  return (
    <div className={s.questionsWrapper}>
      <span className={show1 ? s.questionBtnActive : s.questionBtn} onClick={() => setShow1(!show1)}>1. Чи підписуємо ми договір співпраці, чи офіційно працюємо?</span>

      {
        show1 ?
          <span className={s.answer}>
        Так, ми підписуємо договір співпраці. Це можна зробити в нашому офісі у Києві, або онлайн, задля вашої зручності та економії часу. Робота відбувається повністю офіційно, всю інформацію можна перевірити за наступнити данними:
        (буде інфа).
      </span> : null
      }


      <span className={show2 ? s.questionBtnActive : s.questionBtn} onClick={() => setShow2(!show2)}>2. Чи потрібно здавати ЗНО для вступу в Польщу?</span>

      {
        show2 ?
          <span className={s.answer}>
Деякі університети вимагають подачу результатів ЗНО, але більшість приватних університетів не звертають на це увагу.
      </span> : null
      }

      <span className={show3 ? s.questionBtnActive : s.questionBtn} onClick={() => setShow3(!show3)}>3. Коли розпочинається вступна компанія після 11 та 9 класів?</span>

      {
        show3 ?
          <span className={s.answer}>
Набір на літній семестр розпочинається з 1 грудня (старт навчання 1 березня).<br/>
Набір на зимовий семестр розпочинається 1 лютого (старт навчання 1 жовтня).<br/>
Набір у технікуми та ліцеї розпочинається з 1 березня (старт навчання у вересні).<br/>
      </span> : null
      }

      <span className={show4 ? s.questionBtnActive : s.questionBtn} onClick={() => setShow4(!show4)}>4. Якою мовою відбувається навчання?</span>

      {
        show4 ?
          <span className={s.answer}>
Навчання відбувається польською або англійською мовами. Навчання аглійською мовою значно дорожче.
      </span> : null
      }

      <span className={show5 ? s.questionBtnActive : s.questionBtn} onClick={() => setShow5(!show5)}>5. Чи можемо ми одразу у Вас вивчити мову?</span>

      {
        show5 ?
          <span className={s.answer}>
Так, освітній центр Step to Study надає курси вивчення польської та англійської мов. Детальніше можна дізнатися на безкоштовній консультації.
      </span> : null
      }

      <span className={show6 ? s.questionBtnActive : s.questionBtn} onClick={() => setShow6(!show6)}>6. Чи можливо навчатися в Польщі безкоштовно?</span>

      {
        show6 ?
          <span className={s.answer}>
Так, навчання на безкоштовній основі можливо у двох випадках:<br/>
• Якщо ви маєте Карту Поляка<br/>
• Якщо ви пройшли конкурс на безкоштовне навчання у державному ВУЗі.
      </span> : null
      }

    </div>
  );
};

export default Questions;
