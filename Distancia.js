class Punto{
 constructor(puntos){
     this.puntosdistancia = puntos;
 }

    distancia(nuevopuntos){
    this.puntosdistancia += nuevopuntos;

    var total = this.puntosdistancia + ((x2-x1) + (y2-y1))
    document.getElementById("resultado").textContent = total
    }
}