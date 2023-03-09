function Rettangolo(a,b){
    this.altezza = a;
    this.base = b;
}

//aggiungo un metodo con il prototype
Rettangolo.prototype.area = function(){
    return (this.base * this.altezza)
}

Rettangolo.prototype.valoreArea = function(){
    return this.area();
}

function Rettangolo3Dim(a,b,p){
    Rettangolo.call(this, a, b);
    this.profondita = p;
}

Rettangolo3Dim.prototype = new Rettangolo();

Rettangolo3Dim.prototype.volume = function(){
    return (this.area() * this.profondita)
}

var mioRettangolo3D = new Rettangolo3Dim(4,5,6);
console.log(mioRettangolo3D.volume());