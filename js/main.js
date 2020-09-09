//'use strict';

//#1
var counter = (function (x) {
    var i = 0;
    return function (x) {
        i = x !== undefined ? x : i;
        return i++;
    };
}());
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log('----------------------------------');

//#2
var counting = (function () {
    var i = 0;

    return {
        value(x) {
            i = x !== undefined ? x : i;
            return i;
        },
        increment(x) {
            return i++;
        },
        decrement() {
            return i--;
        }
    }
}());
console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value());
console.log('----------------------------------');

//#3
var myPrint = function (a, b, res) {
    return a + '^' + b + '=' + res;
}
var myPow = function (a, b, callback) {
    var func = (a, b) => {
        if (b === 0) {
            return 1;
        }
        else if (b === 1) {
            return a;
        }
        else {
            return a *= func(a, b - 1);
        }
    }
    return callback(a, b, func(a, b));
}
console.log(myPow(3, 0, myPrint));
console.log(myPow(3, 1, myPrint));
console.log(myPow(3, 4, myPrint));
console.log('----------------------------------');

//#4
var car = new Object({
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    used: 'used'
});
var car2 = new Object({
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infiniti',
    year: 2019,
    used: 'new'
});


//#5
var info = function () {
    return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year ' + this.year + ', ' + this.used;
}

car = new Object({
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    used: 'used',
    info
});
car2 = new Object({
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infiniti',
    year: 2020,
    used: 'new',
    info
});
console.log(car.info());
console.log(car2.info());
console.log('----------------------------------');

//#6
car = new Object({
    name: 'Chevrolet',
    model: 'Lacetti',
    engine: 2000,
    year: 2010,
    get used() {
        let currentYear = new Date().getFullYear();
        return this.year === currentYear ? 'new' : 'used';
    },
    set used(value) {
        let currentYear = new Date().getFullYear();
        if ((value === 'new') && (this.year < currentYear)) {
            this.year = currentYear;
        }
    },
    info
});
car2 = new Object({
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infiniti',
    year: 2020,
    get used() {
        let currentYear = new Date().getFullYear();
        return this.year === currentYear ? 'new' : 'used';
    },
    set used(value) {
        let currentYear = new Date().getFullYear();
        if ((value === 'new') && (this.year < currentYear)) {
            this.year = currentYear;
        }
    },
    info
});
console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used
car.used = 'new';
console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2020, new -- год изменен
car.used = 'used';
console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2020, new -- изменения не выполняются
console.log(car2.info()); // Infiniti FX50 AWD, 5000cc, year 2020, new
car.used = 'used';
console.log(car2.info()); // Infiniti FX50 AWD, 5000cc, year 2020, new -- изменения не выполняются
console.log('----------------------------------');

//#7
let list = [12, 23, 100, 34, 56, 9, 233];
var myMax = function (arr) {
    return Math.max.apply(null, arr);
};
console.log(myMax(list)); // 233
console.log('----------------------------------');

//#8
var myMul = function (a, b) {
    return a * b;
}
var myDouble = myMul.bind(null, 2);
var myTriple = myMul.bind(null, 3);

console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10
console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15

//#9
let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
var myUniq = function(arr){
    return new Set(arr);
}
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));