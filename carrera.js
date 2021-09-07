import Ficha from "./ficha.js";
import Tablero from "./tablero.js";

class Carrera{
    constructor(){
        console.log(this.aCorrer());
        //console.log(this.dado());
    }


    aCorrer(){
        let Juan = new Ficha;
        let Roberto = new Ficha;
        while(Juan.getPosicion()<100 && Roberto.getPosicion()<100){
            Juan.dado();
            Roberto.dado();
        }
        if(Juan.getPosicion()<100){
            return "Roberto Gana!"
        }
        else{
            return "Juan Gana!"
        }
        
    }
}
new Carrera;