const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    MouseConstraint,
    Mouse
} = Matter;

const width = 800;
const height = 600;

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
//adding mouse drag-n-drop ability
World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}));

// Walls that prevents shapes to go through them
const walls = [
    //top wall
    Bodies.rectangle(400, 0, 800, 40, {
        isStatic: true,
        fillStyle: 'yellow',
    }),
    //bottom
    Bodies.rectangle(400, 600, 800, 40, {
        isStatic: true,

    }),
    //left
    Bodies.rectangle(0, 300, 40, 600, {
        isStatic: true,

    }),
    // right
    Bodies.rectangle(800, 300, 40, 600, {
        isStatic: true,

    }),
];

World.add(world, walls);


//Random shapes
for (let i = 0; i < 50; i++) {
    const randX = Math.random() * width;
    const randY = Math.random() * height;
    if (Math.random() > 0.5) {
        World.add(world, Bodies.rectangle(randX, randY, 50, 50));
    } else {
        World.add(world, Bodies.circle(randX, randY, 35, {
            //option how its rendered on the screen
            render: {
                fillStyle: 'green'
            }
        }));

    }

}

