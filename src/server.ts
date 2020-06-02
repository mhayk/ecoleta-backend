import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    console.log('The user list')
    response.json({ msg: 'the user listttt'})
} )

app.listen(3333)