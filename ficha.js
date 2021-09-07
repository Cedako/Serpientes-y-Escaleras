export default class Ficha{
    constructor(){
        this.posicion = 0
    }

    getPosicion(){
        return this.posicion;
    }

    setPosicion(posicion){
        this.posicion = posicion
    }
    
    dado(){
        let dado = Math.floor(Math.random()*6)+1;
        this.posicion+=dado
        return this.posicion
    }
}