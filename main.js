const baseURL = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list'

const getPlanets = async () => {
  console.log('ejecutado!!!')

  const listOfPlanets = new Promise((resolve, reject) => {
    
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
      resolve(json)
    })
  })
  .then(res => {
    // aqui quiero guardar la respuesta en el localstorage a manera de cache
    // la respuesta de la promesa
    // redis
    localStorage.setItem('planetas', JSON.stringify(res))
    return res
  })
  .catch(errores => console.log(errores))


  // return listOfPlanets
  
}
console.log()
getPlanets()

