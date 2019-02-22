var fs = require('fs');
var path = require('path');
var name = (new Date().getMonth() + 1) + '-' + (new Date().getDate())
var file = path.join(__dirname, `../files/${name}.txt`)

// 删除最后一项
function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(file,'utf8',function(error,data){
            if (error) return reject();
			var result = data.replace(/([^\r\n]*)(\r\n)?$/, '');
            // console.log(result);
			fs.writeFile(file, result, 'utf8', function (error) {
			     if (error) return reject();
                 console.log('succ')
                 resolve();
			});
		})
    })
}



module.exports = deleteFile;