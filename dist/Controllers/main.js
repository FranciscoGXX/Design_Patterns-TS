"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Wine_1 = require("../Models/Drinks/Wine");
const Barman_1 = require("../Models/Barman");
const WineDrink = new Wine_1.Wine();
const TheBarman = new Barman_1.Barman(WineDrink);
