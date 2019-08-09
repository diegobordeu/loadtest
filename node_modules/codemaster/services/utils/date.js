const max = (dateArray) => {
  let maxDate = new Date(dateArray[0]);
  for (let i = 0; i < dateArray.length; i++) {
    const currentDate = new Date(dateArray[i]);
    if (currentDate.getTime() > maxDate.getTime()) maxDate = currentDate;
  }
  return maxDate;
};


module.exports = {
  max,
};
