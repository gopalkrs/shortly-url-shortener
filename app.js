const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const shortid = require('shortid');

const users= {

}

app.use(express.static('static'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.get('/:shorturlId',(req,res)=>{
    const longUrl=users[req.params.shorturlId];
    if(longUrl) {
        res.redirect(longUrl);
    }
    else {
        res.status('404').send("url does not exist");
    }
})

app.post('/',(req,res)=>{
    const userData=req.body;
    const longUrl=userData.longUrl;
    const shorturlId=shortid.generate();

    users[shorturlId]=longUrl;
    res.send({shortUrl: `https://shortly-tech.herokuapp.com/${shorturlId}`});
})



app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});