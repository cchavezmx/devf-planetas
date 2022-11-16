import  getPlanetsAsync from './utils/getPlanetsAsync.js'
import { PLANETAS_DIC } from './utils/CONTANTS.js'

// 2022 HAY QUE EVITAR EL USO DE <VAR>
// VAR PERMITE VOLVER A CREAR EN MISMO NOMBRE DE VARIABLE 
// 
let PLANETAS = []


const getPlanets = async () => { 
  // OPTIMIZAR LAS PETICIONES 
  // 1 . - Buscar el objeto de locastorage de planetas
  // SI EXISTE: => USAR EL OBJETO DEL LOCALSTORAGE
  // NO EXISTE: => HACER LA PETICION (fetch) Y GUARDAR LA RESPUESTA EN LOCAL STORAGE

  const planetasLocalStorage = localStorage.getItem('planetas')
  // undefined si no existe
  // objeto en "texto" 

  if (planetasLocalStorage) {
    console.log('cache')
    // 1 - ocupo el objeto y se lo asigno a la variable de scope global de PLANETAS
    PLANETAS = JSON.parse(planetasLocalStorage)
  } else {
    console.log('peticion')
    // 1. - hacer el fetch
    // 2. - Guardar la respuesta en localstorage
    // 3. - Asignarle el valor de la respuesa a la variable GLOBAL PLANETAS
    // await listOfPlanets()
    const planetasResponse = await getPlanetsAsync()
    if (planetasResponse){
      localStorage.setItem('planetas', JSON.stringify(planetasResponse))
      PLANETAS = planetasResponse
    }
  }

  // return listOfPlanets
  
}

getPlanets()
// emepzar a renderizar elementos una vez que el DOM este cargado
// EVENTOS DE DOM => TODOS LOS EVENTOS EJECUTADOS POR EL USUARIO
// EVENTOS PROPIOS DE JS

// //* removeEventListener() /*/ micro-optimizaciones
// DOMContentLoaded => el evento que nos idica que el DOM se termino de cargar
// Escuchar eventos tenmos lo addEventListener
// addEventListener son funciones => escuchan eventos
// reciben un evento y ejectuan una funcion
// 

// crear el menu
addEventListener('DOMContentLoaded', () => {
  
  const nombresPlaneta = PLANETAS.map(planeta => {
    return {
      name: planeta.name,
      key: planeta.key
    }
  })
  console.log(nombresPlaneta)
  // BUSCAR EL ELEMENTO PADRE
  const menuPlanetas = document.querySelector('#planets-menu')
  
  nombresPlaneta.forEach(planet => {
    // DOCUMENTACION
    // crear un elemento a 
    const a = document.createElement('a')    
    // añadir el atributo de key al elemento para que cada menu tenga un id
    a.setAttribute('data-planeta', planet.key)
    // añadir la clase
    a.classList.add('dropdown-item')
    // añadir no texto que llevara el enlace
    a.textContent = PLANETAS_DIC[planet.name]
    // añdir el elemento creado al padre (appenChild)
    menuPlanetas.appendChild(a)
  })


  // buscar los elementos del menu
  // atravez de un addEventlistener escuchar a que elemento se le dio clic
  const menu = document.querySelectorAll('.dropdown-item')  
  menu.forEach(elemento => {
    elemento.addEventListener('click', () => {
      // api de CSS para javascript
      const currentId = elemento.getAttribute('data-planeta')      
      const currentPlaneta = PLANETAS.find(planeta => planeta.key === currentId)
      console.log(currentPlaneta)
      // pintar la imagen
      const imagenPlaneta = document.querySelector('#planeta img')
      
      const { img, imgDescription } = currentPlaneta.imgSrc[0]
      console.log("🚀 ~ file: main.js ~ line 95 ~ elemento.addEventListener ~ img, imgDescription", img)
      // imagenPlaneta.src = '/hola.jpg'
      imagenPlaneta.setAttribute('src', img)
      imagenPlaneta.setAttribute('alt', imgDescription)
    })
  })
})