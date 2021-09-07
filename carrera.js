import Ficha from "./ficha.js";

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
            let casilla = this.serpienteOEscalera(Juan.getPosicion());
            if(casilla !== 0){
                Juan.setPosicion(casilla)
                console.log("mocos!");
            }

            Roberto.dado();
            casilla = this.serpienteOEscalera(Roberto.getPosicion());
            if(casilla !== 0){
                Roberto.setPosicion(casilla)
                console.log("mocos!");
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
                return 10;
            break;
            case 7:
                return 11;
            break;
            case 19:
                return 21;
            break;
            case 23:
                return 24;
            break;
            case 44:
                return 59;
            break;
            case 51:
                return 53;
            break;
            case 67:
                return 71;
            break;
            case 76:
                return 98;
            break;
            case 88:
                return 90;
            break;

            //colocando serpientes
            case 99:
                return 1;
            break;
            case 87:
                return 50;
            break;
            case 70:
                return 60;
            break;
            case 61:
                return 39;
            break;
            case 52:
                return 50;
            break;
            case 40:
                return 0;
            break;
            case 17:
                return 16;
            break;
            case 13:
                return 5;
            break;
            default:
                return 0;
                break;
        }
    }
}
new Carrera;