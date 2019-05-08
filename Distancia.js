class Punto {
    constructor(puntos) {
        this.puntosdistancia = puntos;
    }

    distancia() {
       var x1 = document.getElementById('x').value;
       var y1 = document.getElementById('y').value;
       var x2 = document.getElementById('x2').value;
       var y2 = document.getElementById('y2').value;
        var total1 = (x2 - x1);
        var total2 = (y2 - y1);

        var resultado = Math.sqrt(Math.pow(total1, 2) + Math.pow(total2, 2))
        document.getElementById("resultado").innerHTML = resultado;
        
    }
}