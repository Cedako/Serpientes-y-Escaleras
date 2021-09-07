import Ficha from "./ficha.js";
import Tablero from "./tablero.js";

class Carrera{
    constructor(){
        this.Juan = new Ficha;
        this.Roberto = new Ficha;

    }

    dado(){
        return Math.floor(Math.random()*6)+1;
    }

    aCorrer(){
    }
}
new Carrera;