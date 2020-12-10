const { Collection } = require("mongoose");

class Connection{
    constructor(){
        if(Connection.instance instanceof Connection) return Connection.instance;
        else{
            this.settingsObject = {
                backgroundcolor: '#ffff',
                version: Math.floor(Math.random()*4000)
            }
            Object.freeze(this.settingsObject);
            Object.freeze(this);
            Connection.instance = this;
        }
    }

    get(key){
        return this.settingsObject[key];
    }
}

module.exports = Connection;