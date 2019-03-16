import { Parser } from "./Parser";
import { randomNumber } from "../utils";

export class MultiPickerParser extends Parser {
	options: Array<Array<string>>;

	constructor() {
		super();
		this.options = new Array();
	}

	parse(): string {
		let parsedString = "";

		// pick one string from each array at random
		for (let i = 0; i < this.options.length; i++) {
			const currentArray = this.options[i];

			parsedString += currentArray[randomNumber(0, currentArray.length)];
		}

		return parsedString;
	}

	protected cloneObject(data: object): MultiPickerParser {
		let newParser = new MultiPickerParser();
		newParser.options = data["options"];

		return newParser;
	}
}