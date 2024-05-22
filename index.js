import {Contenido} from '/modules/contenido.js';
import {json} from '/modules/json.js';
import {Animacion} from '/modules/animacion.js';

let animacion = new Animacion();
animacion.init();
let contenido = new  Contenido(json);