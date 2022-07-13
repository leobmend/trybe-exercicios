"use strict";
class Television {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`Brand: ${this._brand}`);
        console.log(`Size: ${this._size}`);
        console.log(`Resolution: ${this._resolution}`);
        console.log(`Connections: ${this._connections}`);
        this._connectedTo && console.log(`ConnectedTo: ${this.connectedTo}`);
    }
    get connectedTo() {
        return this._connectedTo || 'None';
    }
    set connectedTo(connection) {
        if (this._connections.includes(connection)) {
            this._connectedTo = connection;
            console.log(`Connected to ${this._connectedTo}`);
        }
        else {
            console.log(`Sorry, connection ${connection} unavailable!`);
        }
    }
}
const myTv = new Television('LG', 49, 'Full HD', ['HDMI', 'VGA']);
myTv.turnOn();
myTv.connectedTo = 'VGA';
myTv.connectedTo = 'USB3.0';
console.log(myTv.connectedTo);
