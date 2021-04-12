import styles from './Notification.module.scss'

function Notification(props: {

}) {
  return (
    <div className={styles.Notification}>
      <div className={styles.notificationWrap}>
        <p className={styles.title}></p>
      </div>
    </div>
  )
}

export default Notification