const fs = require("fs");

let config;
var keys;
var states;
function set(path){
    if(typeof(path) == "string"){
    config = JSON.parse(fs.readFileSync(path));
    }else{
        if(path.oneFileSize){
            config = {dbpath : path.dbpath, oneFileSize : path.oneFileSize};
        }else{
            config = {dbpath : path.dbpath, oneFileSize : 1000};
        }
    }
    fs.openSync(config.dbpath + "/keys.jsn", "a+").toString();
    keys = fs.readFileSync(config.dbpath + "/keys.jsn").toString();
    if(keys.length == 0){
        fs.writeFileSync(config.dbpath + "/keys.jsn", '{"" : ""')
    }
    keys = JSON.parse(fs.readFileSync(config.dbpath + "/keys.jsn") + "}");
    if(!fs.existsSync(config.dbpath + "/states.json")){
        fs.writeFileSync(config.dbpath + "/states.json", JSON.stringify({fileCount : 0, lastSizeCount : 8}));
    }
    states = JSON.parse(fs.readFileSync(config.dbpath + "/states.json"));
    return true;
}

function increaseSize(size){
    let a = states.lastSizeCount + size;
    if(a > config.oneFileSize){
        states.fileCount = states.fileCount + 1;
        states.lastSizeCount = 8;
        increaseSize(size);
    }else{
        states.lastSizeCount = a;
    }
    fs.writeFileSync(config.dbpath + "/states.json", JSON.stringify(states));
}

function add(key, data){
    if(keys[key] !== undefined){
        return 1
    }else{
        increaseSize(String(',' + JSON.stringify(key) + ":" + JSON.stringify(data)).length);
        if(!fs.existsSync(config.dbpath + "/data" + states.fileCount + ".jsn")){
            fs.writeFileSync(config.dbpath + "/data" + states.fileCount + ".jsn", '{"" : ""')
        }
        fs.appendFileSync(config.dbpath + "/data" + states.fileCount + ".jsn", ',' + JSON.stringify(key) + ":" + JSON.stringify(data));
        keys[key] = states.fileCount;
        fs.appendFileSync(config.dbpath + "/keys.jsn", "," + JSON.stringify(key) + ":" + JSON.stringify(states.fileCount))
    }
}

function get(key){
    if(keys[key] !== undefined){
        return JSON.parse(fs.readFileSync(config.dbpath + "/data" + keys[key] + ".jsn") + "}")[key];
    }else{
        return 1;
    }
}

module.exports = {add, get, set}