let colores =["blue","white","gray","purple","red"]

function CambiarFondo(){
    let indice = parseInt(Math.random() * 5) -1;
    let color = colores[indice];
    document.querySelector("body").style.background =color;

}