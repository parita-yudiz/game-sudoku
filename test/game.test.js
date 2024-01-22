// FILEPATH: /Users/yudiz/Documents/Mini-games/GameSudoku/tests/scenes/Game.test.js
import Game from '../src/scenes/Game';

describe('Game scene', () => {
    let game;
    let imageMock;

    beforeEach(() => {
        imageMock = {
            setInteractive: jest.fn().mockReturnThis(),
            on: jest.fn().mockReturnThis(),
            setTint: jest.fn().mockReturnThis(),
            setScale: jest.fn().mockReturnThis(),
        };

        game = new Game();
        game.editorCreate = jest.fn();
        game.add = {
            image: jest.fn().mockReturnValue(imageMock),
            text: jest.fn().mockReturnValue({ setOrigin: jest.fn() }),
        };
        game.events = {
            emit: jest.fn(),
        };
        game.game = {
            config: {
                width: 800,
                height: 600,
            },
        };
    });

    test('create function is defined', () => {
        expect(game.create).toBeDefined();
    });

    test('editorCreate is called when create is invoked', () => {
        game.create();
        expect(game.editorCreate).toHaveBeenCalled();
    });

    test('createnumbers function is defined', () => {
        expect(game.createnumbers).toBeDefined();
    });

    test('createnumbers creates a new text object when a number key is pressed', () => {
        const addEventListenerMock = jest.spyOn(document, 'addEventListener');
        game.createnumbers(100, 100);

        // Simulate a keydown event
        const event = new KeyboardEvent('keydown', { key: '1' });
        document.dispatchEvent(event);

        expect(addEventListenerMock).toHaveBeenCalledWith('keydown', expect.any(Function));
        expect(game.add.text).toHaveBeenCalled();
    });
});