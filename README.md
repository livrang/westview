# Westview 
# _The fastest, simplest nodejs database._
<img  src="https://img.shields.io/badge/npmjs-sinmenc-red?style=plastic&logo=npm" />

**`⚠ WARNING: In development mode, so not recommended to use for public use.`**  

Westview is a local, computer friendly, offline-storage,
Fast nodejs powered database.

- Simple add, get functions
- See results in blazing fast time
- ✨Magic ✨

## Testing

```sh
mkdir mydb
npm i westview
```

```js
var wv = require("westview");

wv.set({dbpath : "./mydb", oneFileSize : 1200}); // or create config yourself
/*
     or
     wv.set("./config.json") 
 */

console.log(wv.add("name", "Jeff Bezos")); //true
// if it will output 1, then there is an error.

console.log(wv.get("name")) // "Jeff Bezos"
```

## Features

- Simple - Can add and retrieve data with a simple key.
- Feel It - Get the feel of Javascript and JSON.
- Secure - It does not take any queries, so no tension of injections 😁.
- Simplicity - Just a simple config and database folder.
- Transparency - Can see what's going inside and easily understandable.

Westview is a simple module of nodejs which helps to integrate database fast and simply than anything else. It's blazing fast and does not run on network. You just have to add module and type in the database name, create config file and start working on your important project.

Westview does not take any queries or cammand as input, it only takes a key so there is no stress of injection or other attacks.

## Working

It takes a database folder and create two important files =>
- Keys  [JSN] - It stores the keys with number of file in which the data is stored.
- States [JSON] - It contains the current state of database.

- **JSN** 
    - It is an extension for data files or keys in westview.
    - To store data fast in your hdd or ssd we append the data at end of a jsn file.
- **States**
    - It is json file which consists current state of database and is highly important for database.

### Config File
_config.json_
```json
{
    "dbpath" : "./mydb",
    "oneFileSize" : "1000"
}
```
- dbpath : Enter you path for database here.
- oneFileSize [in bytes] : To retrieve and store data faster, westview stores it in chunks of file. So, you'll have to provide the mazimum size of one file. Changing it can affect the performance. You can adjust it according to the average or maximum size of data you can store.

_states.json_

> automatically created, you don't have to create it

```json
{
    "fileCount" : 0,
    "lastSizeCount" :0
}
```
- fileCount : Current file in which it is putting data.
- lastSizeCount : the size of data stored in this file.

## Installation

Westview requires [Node.js](https://nodejs.org/) to run.

Install the Westview, from prompt : 

```sh
npm i westview  
```

## Author
Mridul Thakur

## License

MIT

**Simple Database, Hell Yeah!**
