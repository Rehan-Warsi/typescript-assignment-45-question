/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly*/

interface Car {
    Manufacturer: string;
    Model: string;
    [key: string]: string;
  }
  
  function createCar(
    Manufacturer: string,
    Model: string,
    ...options: [string, any][]
  ) {
    const car: Car = { Manufacturer, Model };
  
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  
  const myCar = createCar("Honda", "Civic", ["Color", "Blue"], ["Sunroof", true]);
  console.log(myCar);