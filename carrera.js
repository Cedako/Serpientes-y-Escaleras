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
            Roberto.dado();
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
                //subir a n la ficha
            break;
            case 7:
                //subir a n la ficha
            break;
            case 19:
                //subir a n la ficha
            break;
            case 23:
                //subir a n la ficha
            break;
            case 44:
                //subir a n la ficha
            break;
            case 51:
                //subir a n la ficha
            break;
            case 67:
                //subir a n la ficha
            break;
            case 76:
                //subir a n la ficha
            break;
            case 88:
                //subir a n la ficha
            break;

            //colocando serpientes
            case 99:
                //bajar a n la ficha
            break;
            case 87:
                //bajar a n la ficha
            break;
            case 70:
                //bajar a n la ficha
            break;
            case 61:
                //bajar a n la ficha
            break;
            case 52:
                //bajar a n la ficha
            break;
            case 40:
                //bajar a n la ficha
            break;
            case 17:
                //bajar a n la ficha
            break;
            case 13:
                //bajar a n la ficha
            break;
            case 10:
                //bajar a n la ficha
            break;
            default:
                return;
                break;
        }
    }
}
new Carrera;