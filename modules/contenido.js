class Contenido {
    constructor(json) {
        
        json.forEach(item => {
            let h1 = document.createElement('h1');
            h1.className = 'title';
            h1.setAttribute('id', 'title');
            h1.innerHTML  = item.title;

            let h2 = document.createElement('h2');
            h2.className = 'subTitle';
            h2.setAttribute('id', 'subTitle');
            h2.innerHTML  = item.subtitle;
            
            let p = document.createElement('p');
            p.className = 'text';
            p.setAttribute('id', 'text');
            p.innerHTML  = item.text;

            let contenedor = document.createElement('div');
            contenedor.className = 'contenedor';
            contenedor.setAttribute('id', 'contenedor');

            contenedor.appendChild(h1);
            contenedor.appendChild(h2);
            contenedor.appendChild(p);

            let diapositivas = document.getElementById('diapo');

            diapositivas.appendChild(contenedor);

            contenedor.style.left = '-2000px';
            
        })
        
        
        
        
        
    }

}
export {Contenido}