const VoltImage = require("../assets/volt-front.jpeg");
const TeslaImage = require("../assets/tesla.jpeg");

export const cars = [
  {
    make: "Chevrolet",
    model: "Volt",
    year: "2014",
    mileage: "73,400",
    description:
      "A beautiful PHEV that has seen some miles but still keeps a great charge. Single owner",
    exteriorColor: "Sky Blue",
    interiorColor: "Grey",
    image: VoltImage,
    owner: {
      firstName: "Thomas",
      lastName: "Davenport",
      phone: "5016789999"
    }
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: "2019",
    mileage: "13,400",
    description: "Low mileage with amazing sleeper performance.",
    exteriorColor: "Red",
    interiorColor: "Black",
    image: TeslaImage,
    owner: {
      firstName: "Elon",
      lastName: "Musk",
      phone: "3169871111"
    }
  }
];
