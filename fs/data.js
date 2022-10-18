console.log("Program Started");

const os = require("os");

// os architecture
console.log("This will be the architecture in the system", os.arch());

// to check the platform
console.log("The platform is",os.platform());

// to check the free space
console.log("The free space is", os.freemem());


console.log(os.cpus());