const baseURL = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list'

const getPlanetsAsync = async () => {
  const response = await fetch(baseURL, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '20833e1faemsh1ac4de30e1e813dp14d672jsnfcbb2e631bed',
      'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
  })
  .then(res => res.json())
  .then(json => json)
  .catch((err) => console.log(err, 'error getPlanetsAsync'))
  .finally(() => console.log('soy una funcion'))

  return response
}

export default getPlanetsAsync


// () => //flecha implicitamente lleva un return si es que se regresa en la misma linea