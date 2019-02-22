var fs = require('fs');
var path = require('path');
var name = (new Date().getMonth() + 1) + '-' + (new Date().getDate())
var file = path.join(__dirname, `../files/${name}.txt`)

function writeFile(jsonData) {
    return new Promise((resolve, reject) => {
        var content = JSON.stringify(jsonData) + '\r\n';
        fs.appendFile(file, content, function (error) {
            if (error) {
                return reject();
            }
            console.log('追加内容完成');
            resolve()
        });
    })
}


module.exports = writeFile;