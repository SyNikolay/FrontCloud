export const getInitials = (name: string, component?: string): string => {
  const nameArray = name.split(' ');

  if (nameArray.length !== 2) {
    console.error(`${component ?? ''} Неверный формат имени`);
    return '';
  }

  return nameArray.map((el) => el[0].toUpperCase()).join('');
};
