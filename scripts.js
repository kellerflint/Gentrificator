function getName() {
    // Test Data
    var firstNames = ["Cycle", "Juice", "Babies"]
    var lastNames = ["Organic", "Soul", "Authentic"]

    // Combines first and last names
    document.getElementById('store').innerHTML = firstNames[Math.floor(Math.random() * firstNames.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)];
}
