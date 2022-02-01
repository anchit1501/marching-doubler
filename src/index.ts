function generateNumericSet(runSize: number, seriesLength: number) {
  let maxValue: number = runSize - 1,
    defaultSetvalue = Array.from({length: maxValue}).map((v, i) => i + 1);

  const list = Array.from({length: Math.ceil(seriesLength / runSize)})
    .map((runSize, index: number) => {
      let repeatingNumberIndex = index % maxValue,
        set = [
          ...defaultSetvalue.slice(0, repeatingNumberIndex),
          repeatingNumberIndex + 1,
          ...defaultSetvalue.slice(repeatingNumberIndex),
        ];
      return set;
    })
    .flat()
    .slice(0, seriesLength)
    .join(',');

  console.log(list);
}

function marchingDoubler(length: number, terms: number) {
  if (length && terms && length > 0 && terms > 0) {
    generateNumericSet(length, terms);
  } else {
    return false;
  }
  return;
}

marchingDoubler(5, 20);
