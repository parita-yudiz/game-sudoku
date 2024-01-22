
// You can write more code here
import Phaser from "phaser";
/* START OF COMPILED CODE */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(965, 540, "background");
		background.scaleX = 4.1;
		background.scaleY = 3.5;

		// logo
		const logo = this.add.image(960, 325, "logo");
		logo.scaleX = 0.6;
		logo.scaleY = 0.6;

		// playArrow
		const playArrow = this.add.image(960, 895, "playArrow");
		playArrow.scaleX = 0.7;
		playArrow.scaleY = 0.7;

		this.background = background;
		this.logo = logo;
		this.playArrow = playArrow;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	playArrow;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.playArrow.setInteractive().on('pointerdown', () => {
			this.scene.stop("Level");
			this.scene.start("Game");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
