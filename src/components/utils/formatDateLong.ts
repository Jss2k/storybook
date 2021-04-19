function formatDateLong(date: Date) {
  const localized = date
    .toLocaleString('ru-RU', {
      weekday: 'short',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    .replace('г.', '');
  return localized.charAt(0).toUpperCase() + localized.slice(1);
}

export default formatDateLong;
