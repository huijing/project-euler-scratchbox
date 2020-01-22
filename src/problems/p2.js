import Prism from "prismjs";

const code = `const sumEven = cap => {
  const seedArray = [0, 1];
  const resultsArray = [];

  for (let i = 2; ; i++) {
    seedArray[i] = seedArray[i - 1] + seedArray[i - 2];
    
    if (seedArray[i] > cap) {
      break;
    }

    if (seedArray[i] % 2 === 0) {
      resultsArray.push(seedArray[i])
    }
  }

  const sum = resultsArray.reduce((a, b) => a + b, 0)
  return sum
}
sumEven(4000000) // returns 4613732`;

export const p2solution = () => {
  const sumEven = cap => {
    const seedArray = [0, 1];
    const resultsArray = [];

    for (let i = 2; ; i++) {
      seedArray[i] = seedArray[i - 1] + seedArray[i - 2];

      if (seedArray[i] > cap) {
        break;
      }

      if (seedArray[i] % 2 === 0) {
        resultsArray.push(seedArray[i]);
      }
    }

    const sum = resultsArray.reduce((a, b) => a + b, 0);
    return sum;
  };
  return sumEven(4000000);
};

export const p2code = Prism.highlight(
  code,
  Prism.languages.javascript,
  "javascript"
);
