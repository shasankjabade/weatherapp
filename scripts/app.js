const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data =>{

    //destructuring properties
    const {cityDets, weather} = data;

    //updating template
    details.innerHTML = `
                <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>    
    `;

    //updating icon 

    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //updating day/night images

    const timeSrc = (weather.IsDayTime) ? 'img/day.svg' : 'img/night.svg';

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // }
    // else{
    //     timeSrc = 'img/night.svg';
    // }

    time.setAttribute('src', timeSrc);

    //removing d-none class
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }

};

const updateCity = async(city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {cityDets,weather}
    
};


cityForm.addEventListener('submit', event =>{
    event.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then( data => updateUI(data))
        .catch( err => console.log(err));
});