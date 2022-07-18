# Westview 
# _The fastest, simplest nodejs database._

[![NPM version][npm-version-image]][npm-url] [![Github Repo][github-repo-image]][github-repo-url]

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
- ### .set({config}) or .set("./configfile.json")

    Used to set a config file.
    Config file takes two items : 
    - dbpath : Path (A folder) where you want database to be created
    - oneFileSize [in bytes] : To retrieve and store data faster, westview stores it in chunks of file. So, you’ll have to provide the mazimum size of one file. Changing it can affect the performance. You can adjust it according to the average or maximum size of data you can store.
- ### .add("key", "data")
 Used to add data with a key. You can retrieve the data later using the key. **returns 1 if the key is already used .**
- ### .get("key")
Used to retrieve the data with help of the key, **returns 1 if there is an error.** 
- ### .exists("key")
 **Return *false***, if key does not exists.
 **Return *true***, if key already exists.
- ### .remove("key")
 Removes the key and data, **returns 1 if the key does not exists**
- ### .update("key", "data")
 Update the data in already created key, **return 1 if the key does not exists**
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


## License

MIT

**Simple Database, Hell Yeah!**

[npm-version-image]: https://badgen.net/badge/npm/v1.0.81/red
[npm-url]: https://npmjs.org/package/express
[github-repo-image]: https://badgen.net/badge/repo/westview/green?icon=github
[github-repo-url]: https://github.com/livrang/westview
