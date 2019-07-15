const key = 'GGNZUuixkYB3di0oCkAkKahn6cRV0vPY';

//get weather
const getWeather = async(id) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

//get City
const getCity = async(city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch( base + query);
    const data = await response.json();

     return data[0];
}

getCity('Manchester').then( data => {
       return getWeather(data.Key);
   }).then( data => console.log('executed'))
   .catch(err => console.log(err));

 //getWeather("329260");

