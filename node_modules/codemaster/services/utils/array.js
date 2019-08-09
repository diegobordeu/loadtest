const removeElement = (array, element) => {
  const index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

const hasElement = (array, element) => {
  if (!Array.isArray(array)) return false;
  const index = array.indexOf(element);
  return (index > -1);
};

const contains = (array, element) => {
  return hasElement(array, element);
};

const includes = (array, element) => {
  return hasElement(array, element);
};

const removeDuplicates = (array) => {
  if (!array) return array;
  const uniques = {};
  for (let i = 0; i < array.length; i++) {
    uniques[array[i]] = true;
  }
  return Object.keys(uniques);
};

module.exports = {
  removeElement,
  removeDuplicates,
  hasElement,
  contains,
  includes,
};
