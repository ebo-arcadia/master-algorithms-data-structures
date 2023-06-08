"use strict";
exports.__esModule = true;
exports.getNewNumber = exports.doSideProject = void 0;
var actionItem = "deploy a web application on AWS";
function doSideProject(what) {
    if (what === void 0) { what = actionItem; }
    console.info("The next project is to ".concat(what, "!"));
    return "next action item is ".concat(what);
}
exports.doSideProject = doSideProject;
var newCellNumber = 4458882220;
function getNewNumber(newNum) {
    if (newNum === void 0) { newNum = newCellNumber; }
    console.info("new cell number is: " + newCellNumber);
    return newNum;
}
exports.getNewNumber = getNewNumber;
doSideProject();
getNewNumber();
