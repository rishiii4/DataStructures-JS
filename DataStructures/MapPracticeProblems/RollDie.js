function rollDie() {
    // Generates a number between 1 and 6
    return Math.floor(Math.random() * 6) + 1; 
}

function simulateDiceRolls() {
    let occurrences = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    let maxCount = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        occurrences[roll]++;

        // Check if any number reached 10 times
        if (occurrences[roll] === maxCount) {
            reachedMax = true;
        }
    }

    console.log("Final Counts:", occurrences);

    // Finding min and max occurrences
    let maxNum = Object.keys(occurrences).reduce((a, b) => occurrences[a] > occurrences[b] ? a : b);
    let minNum = Object.keys(occurrences).reduce((a, b) => occurrences[a] < occurrences[b] ? a : b);

    console.log(`Number that reached maximum times: ${maxNum} (${occurrences[maxNum]} times)`);
    console.log(`Number that reached minimum times: ${minNum} (${occurrences[minNum]} times)`);
}

// Run the simulation
simulateDiceRolls();
