var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
var Person = /** @class */ (function () {
    function Person(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    Person.prototype.speak = function () {
        console.log("".concat(this.name, " est\u00E1 falando."));
    };
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " est\u00E1 comendo."));
    };
    Person.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando."));
    };
    return Person;
}());
var Dog = /** @class */ (function () {
    function Dog(name, color, age) {
        this._name = name;
        this._color = color;
        this._age = age;
    }
    Dog.prototype.bark = function (times) {
        for (var i = 1; i <= times; i += 1) {
            console.log('Au\n');
        }
    };
    return Dog;
}());
var Skye = new Dog('Skye', 'brown and gray', 4);
Skye.bark(5);
