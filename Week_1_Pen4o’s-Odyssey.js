// Вход:
// Tри числа - размерите на страните на триъгълника

// - Ако триъгълникът е валиден, да се отпечата на конзолата:
//     - “The Triangle of Truth with sides {размер на първата страна}, {размер на втората страна}, and {размер на третата страна} has been validated. Pen4o, you may begin your journey!”
// - Ако триъгълникът е невалиден, да се отпечата на конзолата:
//     - "The Triangle of Truth with sides {размер на първата страна}, {размер на втората страна}, and {размер на третата страна} is invalid. Pen4o remains stuck!”

function isTriangleValid(a, b, c) {
    let check1 = 0;
    let check2 = 0;
    let check3 = 0;

    // check 1
    if(a + b > c) {
        check1 = 1;
    }
    else {
        check1 = 0;
    }

    // check 2
    if(a + c > b) {
        check2 = 1;
    }
    else {
        check2 = 0;
    }

    // check 3
    if(b + c > a) {
        check3 = 1;
    }
    else {
        check3 = 0;
    }

    // final check
    if(check1 && check2 && check3) {
        console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} has been validated. Pen4o, you may begin your journey!`);
    }
    else {
        console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} is invalid. Pen4o remains stuck!`);
    }
}

// isTriangleValid(1, 2, 3);
isTriangleValid(3, 4, 5);