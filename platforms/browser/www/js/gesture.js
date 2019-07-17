var emisora = document.getElementById('emisora');

var app = {
    // primera función que se ejecutar al cargar la pagina
    inicio: function () {
        this.iniciaBotones();
        this.iniciaFastClick();
    },
    //inicia librería FastClick
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },
    
    iniciaBotones: function () {
        var botonPlay = document.querySelector('#play');
        var botonPause = document.querySelector('#pause');
        //var botonVolMas = document.querySelector('#volumemas');
        //var botonVolMenos = document.querySelector('#volumemenos');
        var slider = document.querySelector("#myRange");

        botonPlay.addEventListener('click', app.play, false);
        botonPause.addEventListener('click', app.pause, false);
        //botonVolMas.addEventListener('click', app.subeVol, false);
       // botonVolMenos.addEventListener('click', app.bajaVol, false);
        slider.addEventListener('input', app.deslizar, false);
    },
    iniciaHammer: function () {

    },
    // función del botón play del reproductor
    play: function () {
            console.log("clic en play");
            document.getElementById('emisora').play();
    },
    // función del botón pausa del reproductor
    pause: function () {   
            console.log("clic en pausa");
            document.getElementById('emisora').pause(); 
    },
    // función del botón subir volume del reproductor
    /*subeVol: function () {
        console.log("clic en sube volumen");
        var mas=document.getElementById('emisora').volume;
        if(mas<=1.0){
            mas +=0.1;
        }

    },
    // función del botón bajar volume del reproductor
    bajaVol: function () {
        console.log("clic en baja volumen");
        document.getElementById('emisora').volume -= 0.1;
    } */
    deslizar: function(){
        console.log(this.value/100)
        document.getElementById('emisora').volume = this.value/100;
    }
};


// inicializar al cargar la pagina
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
}
