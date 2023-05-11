import {IDrink} from "./IDrink";

export class Wine implements IDrink{
    
    public Name: string;
    
    
    Prepair(): void {
        console.log("The water has been converted to Wine")
    }
    Drink(): void {
        throw new Error("Method not implemented.");
    }

}