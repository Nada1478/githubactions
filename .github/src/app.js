const fs = require('fs');

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet; // Make it reusable

// Run directly
if (require.main === module) {
  // Read from JSON
//  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  console.log(greet(data.name));
}
