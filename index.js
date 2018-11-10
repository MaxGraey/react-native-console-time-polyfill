'use strict'

const PerformanceNow =
  global.performanceNow ||
  global.nativeQPLTimestamp ||
  global.nativePerformanceNow  ||
  require('fbjs/lib/performanceNow');

const DEFAULT_LABEL = 'default';
const DEFAULT_PREC  = 3;

let counts     = {};
let startTimes = {};

console.time = console.time || ((label = DEFAULT_LABEL) => {
  startTimes[label] = PerformanceNow();
});

console.timeEnd = console.timeEnd || ((label = DEFAULT_LABEL) => {
  let endTime = PerformanceNow();
  if (startTimes[label]) {
    let delta = endTime - startTimes[label];
    console.log(`${label}: ${delta.toFixed(DEFAULT_PREC)}ms`);
    delete startTimes[label];
  } else {
    console.warn(`Timer '${label}' does not exist`);
  }
});

console.count = console.count || ((label = DEFAULT_LABEL) => {
  if (!counts[label])
    counts[label] = 0;

  counts[label]++;
  console.log(`${label}: ${counts[label]}`);
});

console.countReset = console.countReset || ((label = DEFAULT_LABEL) => {
  if (counts[label]) {
    counts[label] = 0;
  } else {
    console.warn(`Count for '${label}' does not exist`);
  }
});
