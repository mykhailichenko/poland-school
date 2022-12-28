import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import s from './styles.module.scss';

const TableSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={s.tableWrapper}>
      <Table striped hover className={s.table}>
        <thead className={s.tableHead}>
        <tr className={s.titleTr}>
          <th className={s.titlePoslugy}>Послуги</th>
          <th className={s.titleBase}>Базовий <br/> 290€</th>
          <th className={s.titleStandard}>Стандарт <br/> 490€</th>
          <th className={s.titleVIP}>VIP <br/> 990€</th>
        </tr>
        </thead>
      </Table>
      <div className={s.tableBody}>
        <Table striped hover className={s.table}>
          <tbody>
          <tr className={s.contentTr}>
            <td className={s.textWrapper}>Консультація щодо вступу, процесу навчання, необхідних документах.</td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
          </tr>
          <tr className={s.contentTr}>
            <td className={s.textWrapper}>Допомога при
              виборі ВНЗ у Польщі за побажанням та фінансовими можливостями абітурієнта. </td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
          </tr>
          <tr className={s.contentTr}>
            <td className={s.textWrapper}>Нанесення апостиля на атестат/диплом в Міністерстві освіти та науки України, з одночасним присяжним перекладом.</td>
            <td className={s.checkWrapper}></td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
            <td className={s.checkWrapper}><div className={s.check}/></td>
          </tr>
          {
            showMore ?
              <>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Формування необхідного пакету документів для вступу в ВНЗ відповідно до вимог університету та Міністерству Освіти Польщі.</td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Електронна реєстрація в ВНЗ Польщі по обраній спеціальності (одночасна реєстрація до кількох університетів в пакеті ВІП)</td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Міжнародна пересилка документів в ВНЗ Польщі.</td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Консультація та допомога з оплатою навчання: іменний інвойс на оплату, перевірка рахунків, контроль платежів.</td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Консультація щодо отримання обов’язкового медичного страхування в Україні та Польщі в перший рік навчання</td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Допомога в отриманні обов’язкового медичного страхування
                    (страховий поліс не входить у вартість)
                  </td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Отримання підтвердження про вступ, видача студенту офіційного засвідчення про зарахування, що необхідне при оформленні студентської візи, відстрочки від військової служби</td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Консультації та допомога у відкритті візи категорії D (заповнення анкети для отримання візи категорії D й збір документів згідно з актуальних правил Консульства)</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Підбір і бронювання місця в гуртожитку (стандарт лише підбір)</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Вивчення польської мови від А1 до В1 з видачею сертифіката ( групові уроки)</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Кураторство і допомога в 1 рік навчання</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Консультації щодо правил перетину кордону студентів</td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Доступ до закритого телеграм каналу, тематичних зустрічей, вебінарів та лекцій щодо навчання та життя в Польщі.</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>
                    Адаптація після приїзду на навчання:<br/>
                    • Вручення стартового пакета польського мобільного оператора;<br/>
                    • Активація мобільного номеру;<br/>
                    • Візит в пункти обміну валют;<br/>
                    • Супровід та ознайомлення із ВНЗ;<br/>
                    • Оформлення проїзного студентського квитка;<br/>
                    • Відкриття банківського рахунку (за бажанням);<br/>
                    Юридичні консультації.
                  </td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}><div className={s.check}/></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.subHeader}>Інші послуги</td>
                  <td className={s.subBlock}></td>
                  <td className={s.subBlock}></td>
                  <td className={s.subBlock}></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Вступ на магістратуру.</td>
                  <td className={s.checkWrapper}>+50€</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Подача в різні університети.</td>
                  <td className={s.checkWrapper}>+30€ <br/> (за кожний)</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Вступ з картою поляка.</td>
                  <td className={s.checkWrapper}>+100€</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Підбір університетів.</td>
                  <td className={s.checkWrapper}>15€</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Переклад документів.</td>
                  <td className={s.checkWrapper}>від 150 грн.</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                </tr>
                <tr className={s.contentTr}>
                  <td className={s.textWrapper}>Підготовка до отримання Карти Поляка.</td>
                  <td className={s.checkWrapper}>150€</td>
                  <td className={s.checkWrapper}></td>
                  <td className={s.checkWrapper}></td>
                </tr>
              </>
              : null
          }

          </tbody>
        </Table>
      </div>
      <div className={s.freeConsultBtn} onClick={() => setShowMore(!showMore)}>
        {
          showMore ? <span>Показати менше</span> : <span>Детальніше</span>
        }

      </div>
    </div>
  );
};

export default TableSection;
