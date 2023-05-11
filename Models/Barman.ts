import { IDrink } from "./Drinks/IDrink";

export class Barman{
    private _drink: IDrink;

    public constructor(Drink:IDrink){
        this._drink=Drink;
        this._drink.Prepair()
    }
}