import { p1code, p1solution } from "./problems/p1.js";
import { p2code, p2solution } from "./problems/p2.js";

document.getElementById(
  "1"
).innerHTML = `<h2><a href="https://projecteuler.net/problem=1">Problem 1</a></h2><pre class="language-javascript"><code>${p1code}</code></pre>
<p>Answer: ${p1solution()}`;

document.getElementById(
  "2"
).innerHTML = `<h2><a href="https://projecteuler.net/problem=2">Problem 2</a></h2><pre class="language-javascript"><code>${p2code}</code></pre>
<p>Answer: ${p2solution()}`;
