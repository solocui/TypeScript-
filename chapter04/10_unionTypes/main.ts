"use strict";

let isVisible: boolean | number = true;
isVisible = 1; // OK
// isVisible = "yes"; // Error: Not assignable to boolean|number

function append(text: string, appendix: any): string {
    if (typeof appendix === "number") {
        return text + Array(appendix).join(" ");
    }
    if (typeof appendix === "string") {
        return text + appendix;
    }
    throw new Error("appendix must be string or number");
}
