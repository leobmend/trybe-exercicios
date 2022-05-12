const numberSign = (number) => {
/*   try { */
  if (typeof number != 'number') {
    throw new Error('Error: Parameter is not a number!');
  }
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'neutral';
  }
/*   } catch (err) {
    console.log(err.message)
  } */
};

export { numberSign };