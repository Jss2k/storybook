function formatDateShort(date: Date) {
  const localized = date
    .toLocaleString('ru-RU', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    .replace(/[г.,]/g, '');
  return localized;
}

export default formatDateShort;
