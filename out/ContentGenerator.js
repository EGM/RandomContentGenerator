"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var availableParsers_1 = require("./Parsers/availableParsers");
var Parser_1 = require("./Parsers/Parser");
var InvalidParserException_1 = require("./Exceptions/InvalidParserException");
Parser_1.Parser.AddParsers([
    new availableParsers_1.BasicParser([]),
    new availableParsers_1.MinMaxParser(),
    new availableParsers_1.MultiPickerParser()
]);
var ContentGenerator = /** @class */ (function () {
    function ContentGenerator(schema) {
        this.schema = schema;
    }
    ContentGenerator.prototype.build = function () {
        var newObject = {};
        var schemaFields = Object.keys(this.schema.fields);
        for (var i = 0; i < schemaFields.length; i++) {
            var fieldName = schemaFields[i];
            var fieldObject = this.schema.fields[fieldName];
            var currentParser = Parser_1.Parser.GetValidParser(fieldObject);
            if (currentParser == null)
                throw new InvalidParserException_1.InvalidParserException(fieldObject);
            newObject[fieldName] = currentParser.parse();
        }
        return JSON.stringify(newObject);
    };
    return ContentGenerator;
}());
exports.ContentGenerator = ContentGenerator;
//# sourceMappingURL=ContentGenerator.js.map