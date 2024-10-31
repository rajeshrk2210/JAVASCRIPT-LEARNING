// object destructuring
// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven",
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName,famousSong);

// const {bandName,famousSong} = band;
// this creats 2  constant variables and gets the values of the band object
// console.log(bandName,famousSong);
// bandName = "queen"; // This will throw an error as the bandName is constant

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir"
};

// let {bandName, famousSong} = band;
// console.log(bandName,famousSong);

// let {bandName: var1, famousSong: var2} = band;
// console.log(var1,var2);

let {bandName, famousSong, ...restProps} = band; // Stores all the remaining elements in the restProps object
console.log(bandName);
console.log(restProps);
console.log(typeof(restProps));