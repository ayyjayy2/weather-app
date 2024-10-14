# weather-app
Weather page using openweather api

1. Initial setup of the Angular app with Bootstrap
2. Setup an account and setup api key at [Openweathermap.org](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://openweathermap.org/&ved=2ahUKEwij6NHhgo-JAxWxkYkEHTOTC54QFnoECAsQAQ&usg=AOvVaw018H_9U9cLmoQlvNn8NPy-)
3. Generated a service
    >ng g s weather-service
4. Integrated the connection with OpenWeather in the service using the following link format
    >https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
    - Refer to 'Request by city name' section in the [api documentation](https://openweathermap.org/current#geo).
