function removeElement() {
    const element = document.querySelector("#elementToRemove");
    element.remove();
}

// Select the temperature select element
const temperatureSelect = document.getElementById('temperature');

// Select the elements that display temperatures
const temperatureElements = document.querySelectorAll('.highLow span');

// Store the temperatures in both Celsius and Fahrenheit
const temperatures = {
    Celsius: {
        high: '24°',
        low: '18°',
    },
    Fahrenheit: {
        high: '75°F',
        low: '64°F',
    },
};

// Function to update the displayed temperatures
function updateTemperatures(unit) {
    const { high, low } = temperatures[unit];
    temperatureElements.forEach((element, index) => {
        if (index % 2 === 0) {
            element.style.color = 'red';
            element.textContent = high;
        } else {
            element.style.color = 'blue';
            element.textContent = low;
        }
    });
}

// Add an event listener to the select element
temperatureSelect.addEventListener('change', function () {
    // Get the selected value (Celsius or Fahrenheit)
    const selectedUnit = temperatureSelect.value;

    // Update the displayed temperatures
    updateTemperatures(selectedUnit);
});

// Initially, set the temperatures based on the default selected option
const initialUnit = temperatureSelect.value;
updateTemperatures(initialUnit);

const myList = document.querySelector("#myList");

const listItems = myList.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function(){
        alert("You clicked on: " + this.innerText);
    });
}