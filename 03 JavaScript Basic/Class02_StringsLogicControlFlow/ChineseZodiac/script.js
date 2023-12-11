let year = prompt("Please enter the year: "); // Prompt the user
let chineseZodiacYear = (year - 4) % 12; // Chinese Zodial calculation

// Output
if (chineseZodiacYear === 0) {
    console.log(`Year ${year} is Year of Rat in Chinese Zodiac.`)
} else if (chineseZodiacYear === 1) {
    console.log(`Year ${year} is Year of Ox in Chinese Zodiac.`)
} else if (chineseZodiacYear === 2) {
    console.log(`Year ${year} is Year of Tiger in Chinese Zodiac.`)
} else if (chineseZodiacYear === 3){
    console.log(`Year ${year} is Year of Rabbit in Chinese Zodiac.`)    
} else if (chineseZodiacYear === 4) {
    console.log(`Year ${year} is Year of Dragon in Chinese Zodiac.`)
} else if (chineseZodiacYear === 5) {
    console.log(`Year ${year} is Year of Snake in Chinese Zodiac.`)
} else if (chineseZodiacYear === 6){
    console.log(`Year ${year} is Year of Horse in Chinese Zodiac.`)    
} else if (chineseZodiacYear === 7) {
    console.log(`Year ${year} is Year of Goat in Chinese Zodiac.`)
} else if (chineseZodiacYear === 8) {
    console.log(`Year ${year} is Year of Monkey in Chinese Zodiac.`)
} else if (chineseZodiacYear === 9){
    console.log(`Year ${year} is Year of Rooster in Chinese Zodiac.`)    
} else if (chineseZodiacYear === 10) {
    console.log(`Year ${year} is Year of Dog in Chinese Zodiac.`)
} else if (chineseZodiacYear === 11) {
    console.log(`Year ${year} is Year of Pig in Chinese Zodiac.`)
}