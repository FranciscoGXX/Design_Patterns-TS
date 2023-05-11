"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wine = void 0;
class Wine {
    Prepair() {
        console.log("The water has been converted to Wine");
    }
    Drink() {
        throw new Error("Method not implemented.");
    }
}
exports.Wine = Wine;
