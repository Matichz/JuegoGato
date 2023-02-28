// constante player x
const boton_jugador_x = document.querySelector('.player-x');
const jugadorX = 'x';

// constante player o
const boton_jugador_o = document.querySelector('.player-o');
const jugadorO = 'o';

// casillas
const casillas = document.getElementsByClassName('cuadrado');

// casillas individuales
const casilla_1 = document.querySelector('.casilla-1');
const casilla_2 = document.querySelector('.casilla-2');
const casilla_3 = document.querySelector('.casilla-3');
const casilla_4 = document.querySelector('.casilla-4');
const casilla_5 = document.querySelector('.casilla-5');
const casilla_6 = document.querySelector('.casilla-6');
const casilla_7 = document.querySelector('.casilla-7');
const casilla_8 = document.querySelector('.casilla-8');
const casilla_9 = document.querySelector('.casilla-9');

// lineas ganadoras
const linea_horizontal = document.querySelector('.linea-ganadora-horizontal');
const linea_vertical = document.querySelector('.linea-ganadora-vertical');
const linea_diagonal = document.querySelector('.linea-ganadora-diagonal');

// boton para reiniciar partida
const boton_reiniciar_partida = document.querySelector('#boton-volver-jugar');

// colores 
const color_oscuro = 'var(--color-background)';
const color_claro = 'white';

// variables 
var turno = 0;

const empezarPartidaConX = () => {
    boton_jugador_x.addEventListener('click', () => {
        // configutacion para cambiar estilos de los botones
        boton_jugador_x.style.backgroundColor = color_oscuro;
        boton_jugador_x.style.color = color_claro;
        boton_jugador_o.style.background = 'transparent';
        boton_jugador_o.style.color = color_oscuro;

        // configuracion para empezar partida con x
        for(let i = 0; i < casillas.length; i++){
            casillas[i].addEventListener('click', () => {
                if(turno === 0){
                    casillas[i].innerHTML = jugadorX;
                    turno += 1;
                    verificarGanadorX();
                }else {
                    casillas[i].innerHTML = jugadorO;
                    turno -= 1;
                    verificarGanadorO();
                }
            });
        }
        boton_jugador_o.addEventListener('click', () => empezarPartidaConO());
    });
}

empezarPartidaConX();

const empezarPartidaConO = () => {
    boton_jugador_o.addEventListener('click', () => {
        // configutacion para cambiar estilos de los botones
        boton_jugador_o.style.backgroundColor = color_oscuro;
        boton_jugador_o.style.color = color_claro;
        boton_jugador_x.style.background = 'transparent';
        boton_jugador_x.style.color = color_oscuro;

        // configuracion para empezar partida con o
        for(let i = 0; i < casillas.length; i++){
            casillas[i].addEventListener('click', () => {
                if(turno === 0){
                    casillas[i].innerHTML = jugadorO;
                    turno += 1;
                    verificarGanadorO();
                }else {
                    casillas[i].innerHTML = jugadorX;
                    turno -= 1;
                    verificarGanadorX();
                }
            });
        }
        boton_jugador_x.addEventListener('click', () => empezarPartidaConX());
    });
    
}

empezarPartidaConO();

const verificarGanadorX = () => {
    // verificar ganador horizontal
    if(casilla_1.innerHTML == jugadorX && casilla_2.innerHTML == jugadorX && casilla_3.innerHTML == jugadorX){
        linea_horizontal.style.display = 'block';
        linea_horizontal.style.top = '50px';
    }else if(casilla_4.innerHTML == jugadorX && casilla_5.innerHTML == jugadorX && casilla_6.innerHTML == jugadorX){
        linea_horizontal.style.display = 'block';
        linea_horizontal.style.top = '150px';
    }else if(casilla_7.innerHTML == jugadorX && casilla_8.innerHTML == jugadorX && casilla_9.innerHTML == jugadorX){
        linea_horizontal.style.display = 'block';
        linea_horizontal.style.top = '250px';
    }

    // verificar ganador vertical 
    if(casilla_1.innerHTML == jugadorX && casilla_4.innerHTML == jugadorX && casilla_7.innerHTML == jugadorX){
        linea_vertical.style.display = 'block';
        linea_vertical.style.left = '50px';
    }else if(casilla_2.innerHTML == jugadorX && casilla_5.innerHTML == jugadorX && casilla_8.innerHTML == jugadorX){
        linea_vertical.style.display = 'block';
        linea_vertical.style.left = '150px';
    }else if(casilla_3.innerHTML == jugadorX && casilla_6.innerHTML == jugadorX && casilla_9.innerHTML == jugadorX){
        linea_vertical.style.display = 'block';
        linea_vertical.style.left = '250px';
    }

    // verificar ganador diagonal
    if(casilla_1.innerHTML == jugadorX && casilla_5.innerHTML == jugadorX && casilla_9.innerHTML == jugadorX){
        linea_diagonal.style.display = 'block';
        linea_diagonal.style.left = '150px'
    }else if(casilla_3.innerHTML == jugadorX && casilla_5.innerHTML == jugadorX && casilla_7.innerHTML == jugadorX){
        linea_diagonal.style.display = 'block';
        linea_diagonal.style.left = '150px';
        linea_diagonal.style.transform = 'skew(-45deg)';
    }
};

const verificarGanadorO = () => {
    // verificar ganador horizontal
    if(casilla_1.innerHTML == jugadorO && casilla_2.innerHTML == jugadorO && casilla_3.innerHTML == jugadorO){
        linea_horizontal.style.display = 'block';
        linea_horizontal.style.top = '50px';
    }else if(casilla_4.innerHTML == jugadorO && casilla_5.innerHTML == jugadorO && casilla_6.innerHTML == jugadorO){
        linea_horizontal.style.display = 'block';
        linea_horizontal.style.top = '150px';
    }else if(casilla_7.innerHTML == jugadorO && casilla_8.innerHTML == jugadorO && casilla_9.innerHTML == jugadorO){
        linea_horizontal.style.display = 'block';
        linea_horizontal.style.top = '250px';
    }

    // verificar ganador vertical 
    if(casilla_1.innerHTML == jugadorO && casilla_4.innerHTML == jugadorO && casilla_7.innerHTML == jugadorO){
        linea_vertical.style.display = 'block';
        linea_vertical.style.left = '50px';
    }else if(casilla_2.innerHTML == jugadorO && casilla_5.innerHTML == jugadorO && casilla_8.innerHTML == jugadorO){
        linea_vertical.style.display = 'block';
        linea_vertical.style.left = '150px';
    }else if(casilla_3.innerHTML == jugadorO && casilla_6.innerHTML == jugadorO && casilla_9.innerHTML == jugadorO){
        linea_vertical.style.display = 'block';
        linea_vertical.style.left = '250px';
    }

    // verificar ganador diagonal
    if(casilla_1.innerHTML == jugadorO && casilla_5.innerHTML == jugadorO && casilla_9.innerHTML == jugadorO){
        linea_diagonal.style.display = 'block';
        linea_diagonal.style.left = '150px'
    }else if(casilla_3.innerHTML == jugadorO && casilla_5.innerHTML == jugadorO && casilla_7.innerHTML == jugadorO){
        linea_diagonal.style.display = 'block';
        linea_diagonal.style.left = '150px';
        linea_diagonal.style.transform = 'skew(-45deg)';
    }
};


const reiniciarPartida = () => {
    boton_reiniciar_partida.addEventListener('click', () => location.reload())
};

reiniciarPartida();




