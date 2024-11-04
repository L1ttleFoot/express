const express =  require('express');

const app = express()
const PORT = 8080

app.get('/api', (req, res) => {
    res.send('Hello, World!');
});

async function startApp() {
    try{
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        
    }
    catch(e){
        console.log(e)
    }
}


module.exports = app;