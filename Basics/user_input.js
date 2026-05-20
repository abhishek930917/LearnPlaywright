// user_input.js - Demonstrating User Input in Node.js
// ===================================================
//
// User input is how a program receives data from the user during execution.
// In Node.js (server-side JavaScript), there are several ways to handle user input:
//
// 1. readline (Built-in Module) - Standard way to read from stdin
// 2. process.argv - Command-line arguments
// 3. process.stdin - Raw standard input stream
//
// This file demonstrates all three approaches.

const readline = require('readline');

// ============================================================
// APPROACH 1: Using readline (Interactive Terminal Input)
// ============================================================
// Best for: Interactive CLI applications where you prompt the user
// and wait for their response.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

// ============================================================
// APPROACH 2: Command-line Arguments (process.argv)
// ============================================================
// Best for: Passing arguments when running the script
// Example: node user_input.js hello world

function showCommandLineArgs() {
  // process.argv[0] = node executable path
  // process.argv[1] = script file path
  // process.argv[2+] = user arguments
  const args = process.argv.slice(2);
  console.log('Command-line arguments:', args);
  return args;
}

// ============================================================
// APPROACH 3: Reading from stdin directly
// ============================================================
// Best for: Piping data into the script (e.g., cat file.txt | node user_input.js)

function readFromStdin() {
  return new Promise((resolve) => {
    let data = '';
    process.stdin.on('data', (chunk) => {
      data += chunk;
    });
    process.stdin.on('end', () => {
      resolve(data);
    });
  });
}

// ============================================================
// MAIN EXECUTION
// ============================================================

async function main() {
  // Show any command-line arguments first
  const args = showCommandLineArgs();

  if (args.length > 0) {
    console.log(`You passed ${args.length} argument(s): ${args.join(', ')}`);
  }

  // Interactive prompts using readline
  console.log('\n--- Interactive Mode ---');
  const name = await askQuestion('What is your name? ');
  console.log(`Hello, ${name}!`);

  const color = await askQuestion('What is your favorite color? ');
  console.log(`${color} is a great choice!`);

  const number = await askQuestion('Enter a number: ');
  const doubled = parseFloat(number) * 2;
  console.log(`${number} doubled is ${doubled}`);

  // Close the readline interface
  rl.close();

  console.log('\n--- Program Complete ---');
}

// Run the main function
main().catch(err => {
  console.error('Error:', err);
  rl.close();
});

// Export functions for testing or reuse
module.exports = { askQuestion, showCommandLineArgs, readFromStdin };
