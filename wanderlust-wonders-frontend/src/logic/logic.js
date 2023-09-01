const sortByName = (a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const sortByCountry = (a, b) => {
  const nameA = a.country.toUpperCase(); // ignore upper and lowercase
  const nameB = b.country.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export { sortByCountry, sortByName };
