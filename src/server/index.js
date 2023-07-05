import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser'
import cors from 'cors'
import 'ignore-styles'
import Render from "./Render";
import { matchRoutes } from 'react-router-dom';
import {RoutersArray} from '../RoutersData'




const PORT = process.env.PORT || 4000;
const app = express();


app.use([
  express.json(),
  bodyParser.urlencoded({ extended: true }),
  morgan('dev'),
  cors({
    origin: "*",
    credentials: true,
  })
])



app.use('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
})


// app.use(express.static('../../build'))
app.use(express.static("build"))


app.use(express.static("build"));


app.get('/*', async (req, res) => {


  const routes = matchRoutes(RoutersArray, req.path)
  const promises = routes?.map(({ route }) => {
    return route?.loadData ? route?.loadData(dispatch, req.url) : null;


  })?.map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(reject);
      });
    }
    return null;
  });
  // console.log('promises',promises)
  Promise.all(promises).then(() => {

    const html = Render(req)

    res.contentType('text/html');


    if (routes[0].route.path === '*') {
      res.status(404);
    } else {
      res.status(200);
    }

    res.send(html);
  })
    .catch((error) => {
      res.status(404);
      res.send(error.message)
  });

});




app.listen(PORT, ()=> console.log(`server is runing...${PORT}`))