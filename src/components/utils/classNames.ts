function classNames(...args: (string | undefined)[]): string {
  const classes = args.reduce((prev, cur) => (cur ? (prev += ' ' + cur) : prev), '');
  return classes || '';
}

export default classNames;
