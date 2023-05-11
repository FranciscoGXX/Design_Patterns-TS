
import { IDrink } from "./IDrink";

class Beer implements IDrink {
    
    public Name: string;


    Prepair(): void {
        console.log("The beer has been prepared correctly")
    }
    Drink(): void {
        throw new Error("Method not implemented.");
    }

}