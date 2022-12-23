const formatDate = (day?: string) => {
  let dateStr = new Date().toISOString();
  if (day) dateStr = new Date(day).toISOString();
  const str = dateStr.split('T')[0];
  return str.split('-').reverse().join('/');
};

export { formatDate };
