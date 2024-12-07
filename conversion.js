document.getElementById('toCelsius').addEventListener('click', function() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsiusResult').textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
});

document.getElementById('toFahrenheit').addEventListener('click', function() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheitResult').textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById('toFeet').addEventListener('click', function() {
    const meters = document.getElementById('meters').value;
    const feet = meters * 3.28084;
    document.getElementById('feetResult').textContent = `${meters} meters is ${feet.toFixed(2)} feet`;
});

document.getElementById('toMeters').addEventListener('click', function() {
    const feet = document.getElementById('feet').value;
    const meters = feet / 3.28084;
    document.getElementById('metersResult').textContent = `${feet} feet is ${meters.toFixed(2)} meters`;
});