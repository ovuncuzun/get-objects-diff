let _ = require('lodash');

let firstObj = {
    "authed": true,
    "inForeground": true,
    "deep": {
        "nested": "changed",
    },
    "array": [1, 2, 4],
    "goodConnection": true,
    "inExecutionMode": false,
    "online": false,
    "new": "value"
};

let secondObj = {
    "authed": true,
    "inForeground": true,
    "goodConnection": false,
    "inExecutionMode": false,
    "online": true,
    "array": [1, 2, 3],
    "deep": {
        "nested": "value",
    },
    "removed": "value",
};

// Get updated values (including new values)
let updatedValuesIncl = _.omitBy(firstObj, (value, key) => _.isEqual(secondObj[key], value));
// Get updated values (excluding new values)
let updatedValuesExcl = _.omitBy(firstObj, (value, key) => (!_.has(secondObj, key) || _.isEqual(secondObj[key], value)));
// Get old values (by using updated values)
let oldValues = Object.keys(updatedValuesIncl).reduce((acc, key) => { acc[key] = secondObj[key]; return acc; }, {});
// Get newly added values
let newCreatedValues = _.omitBy(firstObj, (value, key) => _.has(secondObj, key));
// Get removed values
let deletedValues = _.omitBy(secondObj, (value, key) => _.has(firstObj, key));

console.log('oldValues', JSON.stringify(oldValues));
console.log('updatedValuesIncl', JSON.stringify(updatedValuesIncl));
console.log('updatedValuesExcl', JSON.stringify(updatedValuesExcl));
console.log('newCreatedValues', JSON.stringify(newCreatedValues));
console.log('deletedValues', JSON.stringify(deletedValues));