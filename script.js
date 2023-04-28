function toTitleCase(str) {
  // Split the string into an array of words
  let words = str.toLowerCase().split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Join the words back into a string with spaces
  return words.join(" ");
}

// Example usage
console.log(toTitleCase("the lord of the rings: the fellowship of the ring")); // "The Lord Of The Rings: The Fellowship Of The Ring"
