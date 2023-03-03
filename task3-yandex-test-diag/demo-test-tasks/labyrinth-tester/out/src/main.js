// Не забудьте перед отправкой изменить в module.exports = function main(game, start) {
// Не деструктурируйте game, ваше решение не будет проходить тесты.
const nextStep = (game, point) => {
    console.log('NextStep fired!');
    // TODO добавить решение тут
};
const createTreePoint = (resultObject, prev) => {
    return ({
        state: resultObject,
        isFinish: resultObject.finish,
        isStart: resultObject.start,
        right: resultObject.right ? {} : null,
        bottom: resultObject.bottom ? {} : null,
        left: resultObject.left ? {} : null,
        top: resultObject.top ? {} : null,
        prev: prev ? prev : null
    });
};
export default function main(game, start, prev) {
    let isFinish = false;
    const labyrinthTree = {};
    game.state(start.x, start.y)
        .then((resultObject) => {
        labyrinthTree.start = createTreePoint(resultObject, prev);
        isFinish = resultObject.finish;
    })
        .then(() => {
        console.log(labyrinthTree);
    });
    if (isFinish) {
        return start;
    }
    else {
        nextStep();
        // return game.right(start.x, start.y)
        // .then(() => game.right(start.x + 1, start.y))
        // .then(() => game.right(start.x + 2, start.y))
        // .then(() => game.right(start.x + 3, start.y))
        // .then(() => ({ x: start.x + 4, y: start.y }));
    }
}
// collection of point from where we can move to different paths
// рекурсивное дерео поиска
// у каждоый точки 1-4 потомка (предыдущая точка не потомок а родитель)
// на перекрестке выбираем направление вправо - вниз - влево - вверх. Именно с такми приоритетом
const tree = {
    start: {
        isPreviousPoint: false,
        right: {},
        down: {},
        left: null,
        top: null,
    }
};
const resultObject = {
    start: true,
    finish: false,
    right: true,
    bottom: true,
    left: false,
    top: false
};
