import Notification from '../Notification/Notification'
import styles from './NotificationsList.module.scss'

function NotificationsList(props: {

}) {
  return (
    <div className={styles.NotificationsList}>

      <div className={styles.Notification}>
        <div className={styles.notificationWrap}>
          <p className={styles.title}>Новый промокод</p>
          <p className={styles.date}>сегодня 14:54</p>
          <div className={styles.body}>
            <p className={styles.description}>
              BESTFAN2020 — доступен при покупке билета на сектор 14, 16, 13.
            </p>
            <button 
              onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}
            >
              Скопировать
            </button>
          </div>
        </div>
      </div>

      <div className={styles.Notification}>
        <div className={styles.notificationWrap}>
          <p className={styles.title}>Одобрена заявка на аккредиацию</p>
          <p className={styles.date}>сегодня 14:54</p>
          <div className={styles.body}>
            Заявка №00000 на матч Локомотив-Кубань vs Ростов-Дон.
          </div>
        </div>
      </div>

      <div className={styles.Notification}>
        <div className={styles.notificationWrap}>
          <p className={styles.title}>Новый купон</p>
          <p className={styles.date}>сегодня 14:54</p>
          <div className={styles.body}>
            
          </div>
        </div>
      </div>

      <div className={styles.Notification}>
        <div className={styles.notificationWrap}>
          <p className={styles.title}>+200 баллов</p>
          <p className={styles.date}>сегодня 14:54</p>
          <div className={styles.body}>
            
          </div>
        </div>
      </div>

      <div className={styles.Notification}>
        <div className={styles.notificationWrap}>
          <p className={styles.title}>Старт продаж</p>
          <p className={styles.date}>сегодня 14:54</p>
          <div className={styles.body}>
            <p className={styles.description}>
              Успейте купить билеты на матч Локомотив-Кубань vs Ростов-Дон.
            </p>
            <button 
              onClick={() => console.log('переход к матчу')}
            >
              Перейти к матчу
            </button>
          </div>
        </div>
      </div>

      <div className={styles.Notification}>
        <div className={styles.notificationWrap}>
          <p className={styles.title}>Новые билеты в корзине</p>
          <p className={styles.date}>сегодня 14:54</p>
          <div className={styles.body}>
            <p className={styles.description}>
              Организация «Администрация города»‎ добавила в вашу корзину билеты по квоте.
            </p>
            <button 
              onClick={() => console.log('переход в корзину')}
            >
              Перейти в корзину
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NotificationsList