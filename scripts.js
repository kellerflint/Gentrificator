function getName() {
    // Test Data
    var nouns = ["Bicycles", "Juice", "Babies", "Scarves", "Souls"]
    var adjectives = ["Organic", "Authentic", "Vintage", "Natural"]

    // Combines first and last names
    document.getElementById('store').innerHTML = adjectives[Math.floor(Math.random() * nouns.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)];
}
