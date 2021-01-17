"use strict";

const jsonMerger = require("json-merger");

module.exports = function (path, data = []) {
    let files = [];
    data.forEach(item => {
        files.push(path + '/' + item + '.json')
    })

    if (files.length > 0) {
        return jsonMerger.mergeFiles(files)
    }

    throw new Error('Not find config files')
}