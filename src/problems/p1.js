import Prism from "prismjs";

const code = `let array = [];
for (let num = 0; num < 1000; num++) {
  if (num % 3 === 0 || num % 5 === 0) {
    array.push(num);
  }
}
const sum = array.reduce((a, b) => a + b, 0);
return sum;`;

export const p1solution = () => {
  let array = [];
  for (let num = 0; num < 1000; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      array.push(num);
    }
  }
  const sum = array.reduce((a, b) => a + b, 0);
  return sum;
};

export const p1code = Prism.highlight(
  code,
  Prism.languages.javascript,
  "javascript"
);
