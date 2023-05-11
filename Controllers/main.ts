import {IDrink} from "../Models/Drinks/IDrink";
import {Wine} from "../Models/Drinks/Wine"
import {Barman} from "../Models/Barman"

const WineDrink:IDrink= new Wine();
const TheBarman:Barman= new Barman(WineDrink);




