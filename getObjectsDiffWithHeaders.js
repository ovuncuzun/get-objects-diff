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
    let diff = {};
    headers = {};
    let potentialHeaders = {
        authed: "Authed",
        inForeground: "InForeground",
        goodConnection: "GoodConnection",
        inExecutionMode: "InExecutionMode",
        online: "Online",
        array: "Array",
        deep: "Deep",
        removed: "Removed"
    }

    headers = _.pickBy(potentialHeaders, (value, key) => {
        if (!_.isEqual(firstObj[key], secondObj[key])) {
            diff[key] = firstObj[key];
            return true;
        }
        return false;
    });
    return { difference: diff, header: headers }
}

console.log(JSON.stringify(getObjectsDiff(firstObj, secondObj)));
