function happyNumbers(startNum, endNum) {
    let foundANumber = false;
    for(let i = startNum; i <= endNum; i++) {
        // check polindrome AS STRING
        let polindromeCheck = false;
        let numberString = String(i);
        let polindromeString = "";

        for(let j = numberString.length-1; j >= 0; j--){
            polindromeString += numberString[j];
        }
        // SUCCESS in finding Polindrome String
        if(polindromeString === numberString){
            polindromeCheck = true;
        }

        // FINAL CHECKS
        if(polindromeCheck  && (i % 2 === 0) && (i % 3 === 0)){
            console.log(i);
            foundANumber = true;
        }
    }
    if(!foundANumber) {
        console.log("The statues remain silent…");
    }
}

happyNumbers(1, 50);
happyNumbers(10, 300);
happyNumbers(50, 60);