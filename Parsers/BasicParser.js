"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Parser_1 = require("./Parser");
var utils_1 = require("../utils");
var BasicParser = /** @class */ (function (_super) {
    __extends(BasicParser, _super);
    function BasicParser(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    BasicParser.prototype.parse = function () {
        return this.text[utils_1.randomNumber(0, this.text.length)];
    };
    BasicParser.prototype.cloneObject = function (dataObject) {
        return new BasicParser(dataObject["text"]);
    };
    return BasicParser;
}(Parser_1.Parser));
exports.BasicParser = BasicParser;