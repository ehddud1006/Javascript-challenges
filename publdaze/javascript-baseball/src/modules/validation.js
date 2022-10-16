const isNumberArray = arr => {
  arr.forEach(element => {
    if (Number.isNaN(element)) return false;
  });
  return true;
};
