"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barman = void 0;
class Barman {
    constructor(Drink) {
        this._drink = Drink;
        this._drink.Prepair();
    }
}
exports.Barman = Barman;
