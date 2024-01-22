/// FILEPATH: /Users/yudiz/Documents/Mini-games/GameSudoku/tests/scenes/Level.test.js
import Level from '../src/scenes/Level';

describe('Level scene', () => {
    let level;
    let playArrowMock;

    beforeEach(() => {
        playArrowMock = {
            setInteractive: jest.fn().mockReturnThis(),
            on: jest.fn().mockReturnThis(),
        };

        level = new Level();
        level.playArrow = playArrowMock;
        level.editorCreate = jest.fn();
        level.scene = {
            stop: jest.fn(),
            start: jest.fn(),
        };
    });

    test('create function is defined', () => {
        expect(level.create).toBeDefined();
    });

    test('editorCreate is called when create is invoked', () => {
        level.create();
        expect(level.editorCreate).toHaveBeenCalled();
    });

    test('scene changes from "Level" to "Game" when playArrow is clicked', () => {
        level.create();
        expect(playArrowMock.on).toHaveBeenCalledWith('pointerdown', expect.any(Function));

        // Call the function passed to playArrow.on
        const callback = playArrowMock.on.mock.calls[0][1];
        callback();

        expect(level.scene.stop).toHaveBeenCalledWith('Level');
        expect(level.scene.start).toHaveBeenCalledWith('Game');
    });
});