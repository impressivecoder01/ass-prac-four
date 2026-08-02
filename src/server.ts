import app from "./app";
import config from "./config";


if(config.NODE_ENV !== 'production'){
app.listen(5000, ()=>{
    console.log('server is running on 5000');
})
}

export default app