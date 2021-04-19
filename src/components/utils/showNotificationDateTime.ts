function dropHMS(date: Date) {
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0, 0)
}

function formatNotificationDate(date: Date) {
  const localized = date
    .toLocaleString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    .replace(/[г.,]/g, '')
  return localized;
}

export default function showNotificationDateTime(dateTime: Date) {

  let today = new Date()
  let notificationDate = new Date(dateTime)

  dropHMS(today)
  dropHMS(notificationDate )

  if (dateTime) {
    if (today.getTime() === notificationDate.getTime()) {
      return `сегодня ${dateTime.toLocaleTimeString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric'
      })}`
    } else {
      return formatNotificationDate(dateTime)
    }
  }
}