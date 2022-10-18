console.log("Program Started");

const os = require("os");

// os architecture
// console.log("This will be the architecture in the system", os.arch());

// // to check the platform
// console.log("The platform is",os.platform());

// // to check the free space
// console.log("The free space is", os.freemem());


// console.log(os.cpus());

const val = require("validator");
const pass = val.isEmail("saihitesh@gmail.com");
console.log(pass);

const axios = require("axios");

axios
.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => {
    console.log(res);
  })

  .catch((err) => {
    console.log(err);
  })