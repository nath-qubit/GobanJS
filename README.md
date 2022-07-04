Goban JS - Oasis

`board`
Game state board for use in functions.

`getStatus`
Function which takes in an X and Y coordinate of the 0-indexed array grid and returns what is in that position.

`isTaken`
Function which leverages the `getStatus` function to return `true` if a piece is taken and `false` if not, based on the passes X and Y coordinates of the 0-indexed grid.

`test.js`
Testing suite to validate responses.

Setup:
`npm install` - install Jest dependencies.
`npm test` - executes testing script.