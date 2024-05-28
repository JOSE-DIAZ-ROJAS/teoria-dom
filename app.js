//DOM (DOCUMENT OBJECT MODEL)

//-------------SELECCIONAR ELEMENTOS---------------------------

// 1.[getElementById ](selecciona un elemento mediante el atributon id)

// selecionamos el el elemento mediante el atributo id 'title' (no permite el uso de selectores)
// const title = document.getElementById('title');
// console.log(title);
// title.style.backgroundColor = 'green';




// // 2. [querySelector ](seleciona la primera coincidencia con el selector css)

// // tenemos  3 enlaces, pero solo se cambia el color de fondo al primero es decir 
// //toma la primera coincidencia con el selector (permite usar los selectores)
// const enlaces = document.querySelector('.sub');
// enlaces.style.backgroundColor = 'green';
// console.log(enlaces);



// // 3. [querySelectorAll] (seleciona todas las  coincidencias con el selector css)
// //
// const enlaces1 = document.querySelectorAll('.prueba');

// console.log(enlaces1);

// //------------------MODIFICAR ELEMENTOS----------------------

// // 1. [textContent] (mdofica  el texto de los elementos)
// // [EXPLICACION] se selecciona  con getElementById y se modifica el contenido del texto con textContent.

// const title1 = document.getElementById('title');
// title1.textContent = 'DOM modificado';

// // 2. innerHTML permite agregar contenid HTML
// // seleccionamos  los li con querySelectorAll
// const agregar = document.querySelectorAll('nav ul li ').innerHTML = '<a class="prueba" href="#">proveedores</a>';
// console.log(agregar);

// //--------------------property-styles---------------------------

//property style. se usa para dar estilos previamente habiendo seleccionado el elemento
const estilo = document.querySelector('.sub');
estilo.style.color = 'red';


//property classList.add 
// seleccionamos con querySelector mediante la clase sub y luego agregamos una clase adicional.
const clase = document.querySelector('nav ul li a')
clase.classList.add('card1', 'card2');

//property classLIst.remove. Se usa para eliminar una clase,previamente habiendo seleccionado el lelemento
clase.classList.remove('card2');
clase.classList.toggle('prueba'); // si la clase existe lo quita y si no existe lo coloca

//-----------------------Dom Traversing-----------------------------------------
const navigation = document.querySelector('nav');

// partimos desde nav y bajamos hasta li(nosotros)
console.log(navigation.children[0].children[1]);

// partimos desde li y subimos 2 niveles hata llegar a nav (usamos parent element)
const listitem = document.querySelector('nav ul li');
console.log(listitem.parentElement.parentElement);

// nextElementSibling  para moverse al siguiente elenento
const nextE = document.querySelector('nav');
console.log(nextE.nextElementSibling);

//---------------------CREAR ELEMENTOS--------------------------------------
// crear  y seleccionar elemento
const element = document.createElement('article'); // se crea el elemento
console.log(element);
const container = document.getElementById('container');
// Agregar contenido
element.innerHTML = '<p>soy un article creado desde js</>';

// Agregar Atributos
element.classList.add('main','firstclass');
element.setAttribute('id','firstid');
// renderizar (pintar el elemento)
container.appendChild(element);