import React, { useState } from 'react';
import ModalConsult from "../Modal";
import s from './styles.module.scss';

const Universities = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={s.universitiesWrapper}>
      <>
        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.yagelon} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Ягеллонський Університет</div>
            <div className={s.subTitle}>Краків, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>530€ - 4000€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Лінгвістика  • Біотехнології  • Менеджмент  • Інформатика  • Міжнародні відносини  • Фільмознавство та нові медіа
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.varshava} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Варшавський Національний Університет</div>
            <div className={s.subTitle}>Варшава, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>2000€ - 5200€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Економіка  • Гуманітарні науки  • Менеджмент  • Політологія  • Біологія  • Біоінформатика  • Неофілологія  • Адміністрація
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.vroclav} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Вроцлавський Політехнічний Університет</div>
            <div className={s.subTitle}>Вроцлав, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>2000€ - 4000€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Архітектура  • Біотехнологія  • Кібербезпека  • Космонавтика  • Енергетика  • Управління  • Механіка  та будівництво
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.skadovska} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Державний Університет ім. Марії Складовської - Кюрі </div>
            <div className={s.subTitle}>Люблін, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1450€ - 4000€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Джаз та естрадна музика  • Англ. філологія  • Менеджмент  • Біологія  • Фінанси  • Туризм та відпочинок  • Європеїстика
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.krakov} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Краківська Академія ім. Моджевського</div>
            <div className={s.subTitle}>Краків, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1360€ - 10560€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Кіно і телевиробництво  • Міжнародні відносини  • Менеджмент  • Дієтетика  • Косметологія  • Рятувальна медицина  • Філологія
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.krakoveconom} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Краківський Економічний Університет  </div>
            <div className={s.subTitle}>Краків, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>2415€ - 3165€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Прикладна інформатика  • Міжнародні відносини  • Менеджмент  • Економіка  • Туризм та готельний бізнес  • Товарознавство
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.japanUni} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Польсько - Японська Академія Інформаційних Технологій</div>
            <div className={s.subTitle}>Варшава, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1800€ - 4260€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Інформатика  • Дизайн інтер’єру  • Графіка  • Культура Японії  • Управління інформацією
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.vincentPolya} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Університет Суспільно - Природничих Наук ім. Вінцента Поля  </div>
            <div className={s.subTitle}>Варшава, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>990€ - 3500€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Фізичне виховання  • Косметологія  • Філологія  • Туризм та оздоровлення
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.bankUni} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Університет Банківської Справи у Познані </div>
            <div className={s.subTitle}>Познань, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1075€ - 2680€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Право та бізнес  • Міжнародна торгівля  • Адміністрація  • Туризм та відпочинок  • Фінанси та облік  • Управління
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.mickevich} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Університет ім. Адама Міцкевича у Познані</div>
            <div className={s.subTitle}>Познань, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1365€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Англ. філологія  • Права та адміністрації  • Політичні науки  • Полоністика  • Неофілологія  • Фізика • Хімія • Географія
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.managementTech} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Університет Інформаційних Технолологій і Менеджменту</div>
            <div className={s.subTitle}>Варшава, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1210€ - 2415€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Інформатика  • Графіка  • Менеджмент  • Комп’ютерні технології в системах управління
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.kosmetolog} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Університет Косметології у Варшаві</div>
            <div className={s.subTitle}>Варшава, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1230€ - 1735€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Косметологія  • Дієтика  • Хімія косметична
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.logicPoznan} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Університет Логістики у Познані</div>
            <div className={s.subTitle}>Познань, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>915€ - 1845€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Логістика  • Управління
            </div>
          </div>
        </div>

        <div className={s.divider} />
        <div className={s.universityRow}>
          <div className={s.photoWrapper}>
            <div className={s.vistula} />
            <div className={s.btn} onClick={handleShow}>Детальніше</div>
          </div>
          <div className={s.info}>
            <div className={s.title}>Академія фінансів та бізнесу “VISTULA”</div>
            <div className={s.subTitle}>Варшава, Польща</div>
            <div className={s.costText}>Вартість навчання за рік: <span className={s.cost}>1300€ - 3000€</span></div>
            <div className={s.faculties}>Факультети :</div>
            <div className={s.additionalText}>
              • Економіка • Менеджмент • Біотехнологія • Журналістика • Міжнародні відносини • Англ. філологія • Туризм і Рекреація
            </div>
          </div>
        </div>
        <div className={s.divider} />
      </>
      <ModalConsult
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};

export default Universities;
