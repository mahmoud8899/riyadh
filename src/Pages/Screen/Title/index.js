import React from "react";
import { Helmet } from "react-helmet";


let metaDecorator = {
  hostname: "https://www.lattspis.online",
  twitterUsername: "@نجار بالرياض"
}



const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => {


  const condation = typeof window !== 'undefined' ? window?.location?.pathname + window?.location?.search : 'loading'

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="profile" href="https://gmpg.org/xfn/11"  />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="ar_AR" /> 
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={title}/>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content='900' />
      <meta property="og:image:height" content='900' />
      <meta property="og:image:type" content={imageUrl} />
      <meta name="author" content="admin"  />  
      <meta
        property="og:url"
        content={metaDecorator.hostname + condation}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content={metaDecorator.twitterUsername} />
      <meta property='og:type' content='https://www.lattspis.online/' />
      <link rel="canonical" href={metaDecorator.hostname + condation} />
      






    </Helmet>
  )
}



export default MetaDecorator;
