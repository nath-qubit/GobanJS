// Example Goban board game-state:
const board = [
	["#", "#", "."],
	["o", "o", "#"],
	["#", "#", "."]
];

// Function to return what is at a given coordinate
const getStatus = (x, y) => {
	let result = '';

	if (board[x] && board[x][y]) {
		switch (board[x][y]) {
			case "o":
				result = "white";
				break;
			case "#":
				result = "black";
				break;
			case ".":
				result = "empty";
				break;
		}
	} else result = "out";

	return result;
};

// Function to determine if the piece at x, y is taken or not

const isTaken = (x, y) => {
	// Check if stone is saved to guard against infinite loop
	if (board[x][y] == "saved") return true;

	// Use getStatus to check stones
	let center = getStatus(x, y);
	let left = getStatus(x, y - 1);
	let right = getStatus(x, y + 1);
	let top = getStatus(x - 1, y);
	let bottom = getStatus(x + 1, y);

	// Return if the position is empty
	if (center == "empty") return "Position empty - choose another";

	// Check if any of the adjacent positions are empty, if so return false as the stone is not taken
	if (left == "empty" || right == "empty" || top == "empty" || bottom == "empty") return false;

	// Check if stone is surrounded, return true if it is
	if ( (center != left || left == "out") && (center != right || right == "out") && (center != top || top == "out") && (center != bottom || bottom == "out") ) {
		return true;
	}

	// If the stone is not surrounded, save the stone
	board[x][y] = "saved";

	// Recursively check if the surrounding stones have the same color
	let isLeftTaken = left == center ? isTaken(x, y - 1) : true;
	let isRightTaken = right == center ? isTaken(x, y + 1) : true;
	let isTopTaken = top == center ? isTaken(x - 1, y) : true;
	let isBottomTaken = bottom == center ? isTaken(x + 1, y) : true;

	// Return true if the surrounding stones are of the opposite color
	return isLeftTaken && isRightTaken && isTopTaken && isBottomTaken;
};

module.exports = isTaken;