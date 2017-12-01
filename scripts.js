function getName() {
    // Test Data
    var nouns = ["Bicycles", "Juice", "Babies", "Scarves", "Souls", "Yoga", "Wine", "Jeans"]
    var adjectives = ["Organic", "Authentic", "Vintage", "Natural", "Genuine"]

    // Combines first and last names
    document.getElementById('store').innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)] + " " + 
                                                 nouns[Math.floor(Math.random() * nouns.length)];
}
