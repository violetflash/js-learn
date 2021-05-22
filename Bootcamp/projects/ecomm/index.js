const express = require('express');

const app = express();  //app - an object that describes all the things that express server can do

app.get('/', (req, res) => {    //callback handler on method GET and path "/"
    res.send(`
        <div>
            <form method="POST">
                <input name="email" placeholder="email" autocomplete="off">
                <input name="password" placeholder="password" autocomplete="off">
                <input name="passwordConfirmation" placeholder="password confirmation" autocomplete="off">
                <button>Sign Up</button>
            </form>
        </div>        
    `);
});

app.listen(3000, () => {    //telling Express to watch for incoming requests on port 3000
    console.log('Listening');
});