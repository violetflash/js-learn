const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Events,
} = Matter;


const cellsHorizontal = 4;
const cellsVertical = 3;
const width = window.innerWidth;
const height = window.innerHeight;
const boundWallsWidth = 2;
const wallSize = 10;
const wallsFactor = wallSize * 0.25;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const goalSize = unitLength * 0.7;
const ballSize = unitLength * 0.3;

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
    Bodies.rectangle(x, 0, width, boundWallsWidth, {
        isStatic: true,
        StrokeStyle: 'yellow',
    }),
    //bottom
    Bodies.rectangle(x, height, width, boundWallsWidth, {
        isStatic: true,

    }),
    //left
    Bodies.rectangle(0, y, boundWallsWidth, height, {
        isStatic: true,

    }),
    // right
    Bodies.rectangle(width, y, boundWallsWidth, height, {
        isStatic: true,

    }),
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
const grid = Array(cells).fill(null)
    .map(() => Array(cells).fill(false));

//verticals array tracks walls in a row
const verticals = Array(cells).fill(null)
    .map(() => Array(cells - 1).fill(false));
//horizontals array tracks walls in column
const horizontals = Array(cells - 1).fill(null)
    .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

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
        if (nextRow < 0 || nextRow >= cells || nextColumn < 0 || nextColumn >= cells) {
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
            columnIndex * unitLength + unitLength / 2,
            rowIndex * unitLength + unitLength,
            unitLength,
            wallSize,
            {
                label: 'wall',
                isStatic: true,
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
            columnIndex * unitLength + unitLength,
            rowIndex * unitLength + unitLength / 2,
            wallSize,
            unitLength,
            {
                label: 'wall',
                isStatic: true,
            }
        );
        World.add(world, wall);
    });
});


// =================== GOAL RENDER =============================
const goal = Bodies.rectangle(
    width - unitLength / 2 + wallsFactor,
    height - unitLength / 2 + wallsFactor,
    goalSize,
    goalSize,
    {
        label: 'goal',
        isStatic: true,
    }
);

World.add(world, goal);

//================= BALL RENDER ===============================
const ball = Bodies.circle(
    unitLength / 2 - wallsFactor,
    unitLength / 2 - wallsFactor,
    ballSize,
    {
        label: 'ball',
        // isStatic: true,
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
            world.gravity.y = 1;
            world.bodies.forEach(elem => {
                if (elem.label === 'wall') {
                    Body.setStatic(elem, false);
                }
                if (elem.label === 'ball') {
                    console.dir(Body);
                    Body.setScale(elem, 2);
                }
            });
        }
    });
});
