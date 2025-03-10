function checkTreasureDoor(num) {
    // Generate random door number
    let treasureDoorNumber = Math.floor(Math.random() * 3) + 1;
    console.log("treasure door is: " + treasureDoorNumber);

    // check if number is valid
    if(num >= 1 && num <= 3) {
        // number is valid
        if(num === treasureDoorNumber) {
            console.log(`Congratulations, Pen4o! You found the treasure behind Door ${num}!`);
        } else {
            console.log("A bucket of cold water splashes on you! Unlucky Pen4o!");
        }
    } else {
        // number is invalid
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
    }
}

checkTreasureDoor(1);