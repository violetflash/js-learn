const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Events,
} = Matter;

const cellsHorizontal = 14;
const cellsVertical = 10;
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const boundWallsWidth = 2;
const wallSize = 4;
const wallsFactor = wallSize * 0.25;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const step = 5;

//matter Boilerplate
const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;   //got access to the world that created with this engine

const render = Render.create({
    //tell him where i want to show the representation of everything inside the DOM
    element: document.body,     //additive process (add new additional element)
    engine,     //what engine to use
    options: {
        wireframes: false, //renders a SOLID SHAPE, not just SHAPES OUTLINES
        //properties of our added canvas element that is going to be used to display all this content
        width, //shorthand, because of keys and values are the same
        height
    }
});

Render.run(render);     //render our object
Runner.run(Runner.create(), engine);        //what coordinates all these changes from state A to state B of our engine

// Walls that prevents shapes to go through them
const x = width / 2;    //horizontal center of canvas to create a wall shape
const y = height / 2;   //vertical center of canvas to create a wall shape

const walls = [
    //top wall
    Bodies.rectangle(x, 0, width, boundWallsWidth, {isStatic: true,}),
    //bottom
    Bodies.rectangle(x, height, width, boundWallsWidth, {isStatic: true,}),
    //left
    Bodies.rectangle(0, y, boundWallsWidth, height, {isStatic: true,}),
    // right
    Bodies.rectangle(width, y, boundWallsWidth, height, {isStatic: true,}),
];

World.add(world, walls);


//Maze generation
const shuffle = arr => {
    let counter = arr.length;

    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);

        counter--;

        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
};

// a better way to build nested arrays
const grid = Array(cellsVertical).fill(null)
    .map(() => Array(cellsHorizontal).fill(false));

//verticals array tracks walls in a row
const verticals = Array(cellsVertical).fill(null)
    .map(() => Array(cellsHorizontal - 1).fill(false));
//horizontals array tracks walls in column
const horizontals = Array(cellsVertical - 1).fill(null)
    .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCell = (row, column) => {
    //  if i have visited the cell at [row, column], then return;
    if (grid[row][column]) {   // if grid[row][column] === true
        return;
    }
    //  Mark this cell as being visited
    grid[row][column] = true;
    //  Assemble randomly-ordered list of neighbors
    //coords of neighbor
    const neighbors = shuffle([
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ]);
    //  For each neighbor...
    for (const neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor;
        //  See if that neighbor is out of bounds
        if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
            continue;
        }
        //if we have visited that neighbor, continue to next neighbor
        if (grid[nextRow][nextColumn] === true) {
            continue;
        }
        //  Remove a wall from either horizontals or verticals
        if (direction === 'left') {
            verticals[row][column - 1] = true;
        } else if (direction === 'right') {
            verticals[row][column] = true;
        } else if (direction === 'up') {
            horizontals[row - 1][column] = true;
        } else if (direction === 'down') {
            horizontals[row][column] = true;
        }

        stepThroughCell(nextRow, nextColumn);

    }
    //  visit that next cell
};

stepThroughCell(startRow, startColumn);

//======================= RENDERING WALLS ==========================
horizontals.forEach((row, rowIndex) => {
    row.forEach((way, columnIndex) => {
        if (way) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2,
            rowIndex * unitLengthY + unitLengthY,
            unitLengthX,
            wallSize,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'Tan',
                }
            }
        );
        World.add(world, wall);
    });
});

verticals.forEach((row, rowIndex) => {
    row.forEach((way, columnIndex) => {
        if (way) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,
            rowIndex * unitLengthY + unitLengthY / 2,
            wallSize,
            unitLengthY,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'Tan',
                }
            }
        );
        World.add(world, wall);
    });
});


// =================== GOAL RENDER =============================
const goal = Bodies.rectangle(
    width - unitLengthX / 2 + wallsFactor,
    unitLengthY / 2 + wallsFactor,
    unitLengthX * 0.7,
    unitLengthY * 0.7,
    {
        label: 'goal',
        isStatic: true,
        render: {
            fillStyle: 'GoldenRod',
            sprite: {
                texture: './img/such-coin.gif',
                xScale: 0.3,
                yScale: 0.3
            }
        }
    }
);

World.add(world, goal);

//================= BALL RENDER ===============================
const ballRadius = Math.min(unitLengthX, unitLengthY) * 0.3;

const ball = Bodies.circle(
    unitLengthX / 2 - wallsFactor,
    height - unitLengthY / 2 - wallsFactor,
    ballRadius ,
    {
        label: 'ball',
        render: {
            fillStyle: 'DodgerBlue',
            sprite: {
                texture: './img/runs.gif',
                xScale: 0.5,
                yScale: 0.5
            }
        },
        inertia: Infinity,
        restitution: 0
    },
);

World.add(world, ball);

document.addEventListener('keydown', e => {
    const { x, y } = ball.velocity;
    if (e.key === 'ArrowUp' || e.keyCode === 87) {
        Body.setVelocity(ball, { x, y: y - step });
    }

    if (e.key === 'ArrowRight' || e.keyCode === 68) {
        Body.setVelocity(ball, { x: x + step, y });
    }

    if (e.key === 'ArrowDown' || e.keyCode === 83) {
        Body.setVelocity(ball, { x, y: y + step });
    }

    if (e.key === 'ArrowLeft' || e.keyCode === 65) {
        Body.setVelocity(ball, { x: x - step, y });
    }
});

//================ WIN CONDITION ===========================

Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(collision => {
        const labels = ['ball', 'goal'];

        if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
            const winner = document.querySelector('.winner');
            winner.classList.remove('hidden');
            world.gravity.y = 1;
            world.bodies.forEach(elem => {
                if (elem.label === 'wall') {
                    Body.setStatic(elem, false);
                }
                if (elem.label === 'ball') {
                    Body.setStatic(elem, true);
                }
            });
        }
    });
});
