import foo from './utils/foo.js';
import app from './utils/app.js';
import { add, subtract } from './utils/math.js';

const sumA = `2 + 1 = ${add(2, 1)}`;
// const sumB = `2 - 1 = ${subtract(2, 1)}`;

const content =
  `${sumA}`;

app(content)
