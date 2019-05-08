document.getElementById('agregar').addEventListener('click', agregarCoordenadas)
var x,y

function agregarCoordenadas() {
tomar_x1 = document.getElementById('x').value;
tomar_y1= document.getElementById('y').value;
tomar_x2 = document.getElementById('x2').value;
tomar_y2= document.getElementById('y2').value;

x = new Punto(tomar_x1);
y = new Punto(tomar_y1);
x2 = new Punto(tomar_x2);
y2 = new Punto(tomar_y2);

console.log(x);
console.log(y);

}


