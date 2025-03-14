function decoder(code) {
    //console.log(code);

    let cCode = code;
    let cCodeLenght = code.length;
    //console.log("code lenght is: " + cCodeLenght);

    let cChar = "";
    let newCode = "";

    let totalPower = 0;

    for (let i = 0; i < cCodeLenght; i++) {
        // console.log(i);
        cChar = cCode.charAt(i);

        // REGEX method
        //console.log(/[a-z]/.test(cChar)); // true
        cChar = cCode.charAt(i);
        if (/[a-z]/.test(cChar)) {
            cChar = cChar.toUpperCase();
        } else if (/[A-Z]/.test(cChar)) {
            cChar = cChar.toLowerCase();
        }

        // construct new code letter by letter
        newCode += cChar;

        // check if number
        if (cChar >= 0 && cChar <= 9) {
            // console.log("Number: " + cChar);
            totalPower += Number(cChar);
        }
    }
    // final sum
    //console.log("Final power: " + totalPower);

    // final new code
    console.log(newCode);

    if (totalPower > 20) {
        console.log(`The map reveals the your next location! Total power: ${totalPower}`);
    } else {
        console.log(`The map warns of danger! Total power: ${totalPower}`);
    }



}

//decoder("T3r4p_M4p");
decoder("Dangerous_2Clue");