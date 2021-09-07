export default class Ficha{
    constructor(){
        this._tablero = new Array;
        for(let i=0;i=100;i++){
            this._tablero.push(i);
        }
        return this._tablero
    }
}