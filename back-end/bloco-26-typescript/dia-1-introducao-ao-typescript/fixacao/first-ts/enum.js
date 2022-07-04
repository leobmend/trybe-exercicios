var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 1] = "Sunday";
    WeekDays[WeekDays["Monday"] = 2] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 3] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 4] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 5] = "Thursday";
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
    WeekDays[WeekDays["Saturday"] = 7] = "Saturday";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays[5]);
var CardenalsLetters;
(function (CardenalsLetters) {
    CardenalsLetters["North"] = "N";
    CardenalsLetters["East"] = "E";
    CardenalsLetters["West"] = "W";
    CardenalsLetters["South"] = "S";
})(CardenalsLetters || (CardenalsLetters = {}));
console.log(CardenalsLetters.West);
