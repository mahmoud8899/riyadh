import React from "react";
import { renderToString } from 'react-dom/server'
import Log from './logo.ico'
import { StaticRouter } from "react-router-dom/server";
import Routes from '../Router'
import { Helmet } from 'react-helmet';


export default function Render(req) {

  const appString = renderToString(

    <StaticRouter location={req.url}  >
        <Routes />
    </StaticRouter>

)


const helmet = Helmet.renderStatic()

  const html = `
  <!DOCTYPE html>
<html lang="ar" class="ar">
<head>
<title>خدمات بالرياض</title>  
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">   
<link rel="icon" href=${Log} />
<meta name="google-site-verification" content="nudTrOck7CCX6fQdknp6WZMOE27dUN_w89Dm5zcmhFM" />
${helmet.title.toString()}
${helmet.meta.toString()}
${helmet.link.toString()}
      <meta name="theme-color" content="#d8bc64" />
    <link rel="stylesheet" type="text/css" href="/css/main.css" />





</head>
<body ${helmet.bodyAttributes.toString()}>
    <div id="Mahmoud-Almadhoun+467098520">
         ${appString}
    </div>
    <script src="/client/bundle.js" defer ></script>

    
</body>
</html>
  `



  return html

}