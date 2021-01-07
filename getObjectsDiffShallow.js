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
    let diff = _.transform(firstObj, (result, value, key) => {
        if (!_.isEqual(value, secondObj[key])) {
            result[key] = value;
        }
    });
    return diff;
}



console.log(JSON.stringify(getObjectsDiff(firstObj, secondObj)));



