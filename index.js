const express=require(`express`);


const app=express();
const port=27017;

app.use(`/`,require(`./routes/index.js`));

app.listen(port,(err)=>{

    if(err){
        console.log(`error: ${err}`);
    }

    else{console.log(`server is connected to port:${port}`);}
})