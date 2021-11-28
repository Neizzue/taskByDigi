const decompress = require("decompress");
const path = require("path");

(async () => {

    try {
        const files = await decompress("C:\Users\USER\Desktop\pokemonUnite.zip", "dist", {
            filter: file => path.extname(file.path) !== ".exe"
        });
        console.log(files);
    } catch (error) {
        console.log(error);
    }

})();