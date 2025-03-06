function generateBirthdays(numPeople) {
    let birthMonths = {};

    // Initialize dictionary for all months
    for (let i = 1; i <= 12; i++) {
        birthMonths[i] = [];
    }

    // Generate birth months for individuals
    for (let i = 1; i <= numPeople; i++) {
        // Random month (1 to 12)
        let month = Math.floor(Math.random() * 12) + 1; 
        let year = Math.random() < 0.5 ? 1992 : 1993; 
        birthMonths[month].push(`Person-${i} (${year})`);
    }

    return birthMonths;
}

function printBirthdaysGrouped(birthMonths) {
    console.log("Individuals grouped by birth month:");
    for (let month in birthMonths) {
        console.log(`Month ${month}:`, birthMonths[month].join(", ") || "No one born");
    }
}

// Generate and print birth month 
let birthdays = generateBirthdays(10);
printBirthdaysGrouped(birthdays);
