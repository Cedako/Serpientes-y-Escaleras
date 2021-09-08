import Ficha from "./ficha.js";

class Tablero{
    constructor(){
        console.log(this.aCorrer());
        //console.log(this.dado());
    }

    aCorrer(){
        let Juan = new Ficha;
        let Roberto = new Ficha;
        while(Juan.getPosicion()<100 && Roberto.getPosicion()<100){
            Juan.dado();
            let casilla = this.serpienteOEscalera(Juan.getPosicion());
            if(casilla !== 0){
                Juan.setPosicion(casilla)
            }

            Roberto.dado();
            casilla = this.serpienteOEscalera(Roberto.getPosicion());
            if(casilla !== 0){
                Roberto.setPosicion(casilla)
            }
        }
        if(Juan.getPosicion()<100){
            return "Roberto Gana!"
        }
        else{
            return "Juan Gana!"
        }
        
    }

    serpienteOEscalera(casilla){
        switch (casilla){
            //Colocando las escaleras
            case 2:
                console.log("escalera a 10")
                return 10;
            break;
            case 7:
                console.log("escalera a 11")
                return 11;
            break;
            case 19:
                console.log("escalera a 21")
                return 21;
            break;
            case 23:
                console.log("escalera a 24")
                return 24;
            break;
            case 44:
                console.log("escalera a 59")
                return 59;
            break;
            case 51:
                console.log("escalera a 53")
                return 53;
            break;
            case 67:
                console.log("escalera a 71")
                return 71;
            break;
            case 76:
                console.log("escalera a 98")
                return 98;
            break;
            case 88:
                console.log("escalera a 90")
                return 90;
            break;

            //colocando serpientes
            case 99:
                console.log("serpiente a 1")
                return 1;
            break;
            case 87:
                console.log("serpiente a 50")
                return 50;
            break;
            case 70:
                console.log("serpiente a 60")
                return 60;
            break;
            case 61:
                console.log("serpiente a 39")
                return 39;
            break;
            case 52:
                console.log("serpiente a 50")
                return 50;
            break;
            case 40:
                console.log("serpiente a 15")
                return 15;
            break;
            case 17:
                console.log("serpiente a 16")
                return 16;
            break;
            case 13:
                console.log("serpiente a 5")
                return 5;
            break;
            default:
                return 0;
                break;
        }
    }
}
new Tablero;