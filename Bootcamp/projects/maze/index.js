const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
} = Matter;


const cells = 3;
const width = 600;
const height = 600;
const wallWidth = 40;


//matter Boilerplate
const engine = Engine.create();
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
    Bodies.rectangle(x, 0, width, wallWidth, {
        isStatic: true,
        StrokeStyle: 'yellow',
    }),
    //bottom
    Bodies.rectangle(x, height, width, wallWidth, {
        isStatic: true,

    }),
    //left
    Bodies.rectangle(0, y, wallWidth, height, {
        isStatic: true,

    }),
    // right
    Bodies.rectangle(width, y, wallWidth, height, {
        isStatic: true,

    }),
];

World.add(world, walls);


//Maze generation

const shuffle = (arr) => {
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
        [row - 1, column],
        [row, column + 1],
        [row + 1, column],
        [row, column - 1]
    ]);
    console.log(neighbors);

    //  For each neighbor...

    //  See if that neighbor is out of bounds

    //if we have visited that neighbor, continue to next neighbor

    //  Remove a wall from either horizontals or verticals

    //  visit that next cell
};

stepThroughCell(startRow, startColumn);
console.log(grid);
