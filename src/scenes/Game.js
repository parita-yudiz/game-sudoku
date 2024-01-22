
// You can write more code here
//import Phaser from "phaser";
/* START OF COMPILED CODE */
 class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(960, 540, "background");
		background.scaleX = 4.1;
		background.scaleY = 3.5;

		this.background = background;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;

	/* START-USER-CODE */

	create() {
		this.editorCreate();
		// Create a 9x9 matrix
		const rows = 9;
		const cols = 9;

		const squareSize = 40; // Adjust the size as needed
		const gap = 35; // Adjust the gap as needed

		const gridWidth = cols * (squareSize + gap) - gap;
		const gridHeight = rows * (squareSize + gap) - gap;

		const startX = (this.game.config.width - gridWidth) / 2;
		const startY = (this.game.config.height - gridHeight) / 2;

		// Create an array to store the numbers 1 to 9
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		// Shuffle the numbers array randomly
		for (let i = numbers.length - 1; i > 0; i--) {
			console.log(i);
			const j = Math.floor(Math.random() * (i + 1));
			console.log(j);
			[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
			console.log(numbers);
		}

		for (let row = 0; row < rows; row++) {
			let aTempArr = [];

			for (let col = 0; col < cols; col++) {
				let image = this.add.image(startX + col * (squareSize + gap), startY + row * (squareSize + gap), "square");
				image.setScale(0.15);
				image.name = `${row}_${col}`;

				image.setInteractive().on("pointerdown", () => {
					// Handle pointerdown event for each image
					this.createnumbers(image.x, image.y);
					image.setTint(0x1ECBE1); // Change the color of the clicked image
					console.log("Image clicked:", image.name); // Log a message to the console
				});

				this.image = image;
				aTempArr.push(image);

				// Add the shuffled number to the image
				const number = numbers[(row * 3 + Math.floor(row / 3) + col) % 9];
				if (Math.random() < 0.5) { // Adjust the probability to control the number of blank cells
					const text = this.add.text(image.x, image.y, number, { fontSize: '50px', fill: '#98677A', fontFamily: 'Purple Smile' });
					text.setOrigin(0.5);
				}

				// Create a 3x3 subgrid
				if (row % 3 === 2 && col % 3 === 2) {
					for (let subRow = row - 2; subRow <= row; subRow++) {
						for (let subCol = col - 2; subCol <= col; subCol++) {
							// Add subgrid-specific code here
							console.log(subRow, subCol);

						}

					}
				}
			}
		}
	}

	createnumbers(x, y) {
		// Event listener for number keys
		document.addEventListener("keydown", (event) => {
			const key = event.key;
			if (key >= "1" && key <= "9") {
				const number = event.key;
				const text = this.add.text(x, y, number, { fontSize: '50px', fill: '#98677A', fontFamily: 'Purple Smile' });
				text.setOrigin(0.5);
				console.log("Number key pressed:", key);

				// Check if the number already exists in the same row or column
				//const [row, col] = text.name.split('_');

			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
