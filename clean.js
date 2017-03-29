var glob = require("glob");
var fs = require("fs");
var async = require('async');

var _mode = process.argv[2]; // clean-dist, clean-cache
var _path = "";

var myRemove = function(location, next) {
    fs.readdir(location, function (err, files) {
        if (files) {
            async.each(files, function (file, cb) {
                file = location + '/' + file
                fs.stat(file, function (err, stat) {
                    if (err) {
                        return cb(err);
                    }
                    
                    if (stat.isDirectory()) {
                        removeFolder(file, cb);
                    } else {                        
                        fs.unlink(file, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            return cb();
                        })
                    }
                })
            }, function (err) {
                if (err) return next(err)
                fs.rmdir(location, function (err) {
                    return next(err)
                })
            })
        } else {
            fs.unlink(location, function (err) {
            })
        }
    })
}


if (_mode == "-dist") {
    _path = "dist/*";
} else if (_mode == "-dev-cache") {
    _path = "cache/*.json.gz";
} else if (_mode == "-dev-bundle") {
    _path = "cache/*.js";
} else if (_mode == "-dev-all") {
    _path = "cache/*";
}

if (_mode != "") {
    console.log("clean dir " + process.cwd() + '/static/' + _path);
    glob(process.cwd() + '/static/' + _path,function(err,files){
        if (err) throw err;
        // console.log(files);
        // Delete files
        files.forEach(function(item,index,array){
            myRemove(item, function() {
                
            });

        });
    });
}