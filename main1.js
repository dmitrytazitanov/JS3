"use strict"

for (let index = 0; index < 11; index++) {
    if (index == 0) {
        console.log(index + " - это ноль");
    }
    if ((index % 2 == 0) && (index !=0)){
        console.log(index + " - четное число");
    }
    if (index % 2 == 1) {
        console.log(index + " - нечетное число");
    }
    
}