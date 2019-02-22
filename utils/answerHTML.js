var fs = require('fs');
var path = require('path');
var name = (new Date().getMonth() + 1) + '-' + (new Date().getDate());
var file = path.join(__dirname, `../files/${name}.txt`);
var html = path.join(__dirname, `../views/index.html`);

function answerHTML() {
    var component = fs.readFileSync(html, 'utf-8')
    var txt = fs.readFileSync(file, 'utf-8')
    return component.replace('$answers', txt)
}


module.exports = answerHTML;