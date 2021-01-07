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

function getObjectsDiff(firstObj, secondObj) {
    let diff = _.transform(firstObj, function (result, value, key) {
        if (!_.isEqual(value, secondObj[key])) {
            result[key] = (_.isObject(value) && _.isObject(secondObj[key])) ? getObjectsDiff(value, secondObj[key]) : value;
        }
    });
    return diff;
}

console.log(JSON.stringify(getObjectsDiff(firstObj, secondObj)));



