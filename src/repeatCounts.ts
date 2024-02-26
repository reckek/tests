export const repeatCounts = (str: string, search: string) => {
  let count = 0;
  let currentIndex = 0;

  while (currentIndex < str.length) {
    const slicedVal = str.slice(currentIndex);
    const indexOf = slicedVal.indexOf(search);

    if (indexOf === -1) {
      break;
    }

    currentIndex = currentIndex + indexOf + 1;

    count++;
  }

  return count;
};
