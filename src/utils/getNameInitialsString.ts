export function getNameInitialsString(name: string) {
  const splitName = name.split(' ');
  const firstNameInitialString = splitName[0].slice(0, 1).toUpperCase();
  const lastNameInitialString =
    splitName.length > 1
      ? splitName[splitName.length - 1].slice(0, 1).toUpperCase()
      : '';

  return firstNameInitialString + lastNameInitialString;
}
