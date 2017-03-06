'use strict'

import fbPerformanceNow from 'fbjs/lib/performanceNow';
const PerformanceNow = global.nativePerformanceNow || global.performanceNow || fbPerformanceNow;

let startTimes = {};

console.time = label => {
    startTimes[label] = PerformanceNow();
};

console.timeEnd = label => {
    let endTime = PerformanceNow();
    if (startTimes[label]) {
        let delta = endTime - startTimes[label];
        console.log(`${label}: ${delta.toFixed(3)}ms`);
        delete startTimes[label];
    } else {
        console.warn(`Warning: No such label '${label}' for console.timeEnd()`);
    }
};
