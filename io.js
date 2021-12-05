const fs = require("fs");


class IO {
    createFolder(dir) {
        fs.mkdir(dir, ()=> {});
    }
    createFile(dir){
        fs.mkdir(dir, (name) => {
            console.log(name)
        });
    }
    writeFile(dir, data) {
        fs.writeFileSync(dir, data);
    }
}

module.exports= {IO}