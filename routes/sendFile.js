let path = require('path')

exports.html = function(req,res){
    res.sendFile(path.resolve('index.html'))
}