```` javascript 
// la forma de hacer una peticion con promesas
  const listOfPlanets = () => {
  const response = new Promise((resolve, reject) => {    
    return fetch(baseURL, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '20833e1faemsh1ac4de30e1e813dp14d672jsnfcbb2e631bed',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
      }
    })
    .then(res => res.json())
    .then(json => {
      // podemos manejar los erroes con el reject que es un callback
      // reject(() => 'otra cosa')
      // throw new Error('hubo un errro')
      console.log("🚀 ~ file: main.js ~ line 23 ~ listOfPlanets ~ json", json)
      resolve(json)
    })
  })
  .then(res => {
    // aqui quiero guardar la respuesta en el localstorage a manera de cache
    // la respuesta de la promesa
    // redis
    localStorage.setItem('planetas', JSON.stringify(res))
    PLANETAS = res
    return res
  })
  .catch(errores => console.log(errores))
  
  return response

  }
````