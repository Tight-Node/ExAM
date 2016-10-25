function* gunerator() {
    let count = 0;
    do {
        yield ++count;
    } while (1);
}

var gun = gunerator();
console.log(gun.next().value);
console.log(gun.next().value);
console.log(gun.next().value);


function* guneratorSon(times) {
    let count = 0;
    do {
        yield ++count;
    } while (times);
}

// print all passed arguments
if (!isNaN(process.argv[2])) {
    console.log('I expect a number to be passed with my call');
} else {
    console.log(process.argv[2]);
}

// module.exports = Gunes;
