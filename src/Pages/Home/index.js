import React, { Fragment } from 'react'
import Services from './Services'
import FirstSlider from './Slider'
import TheAboutUs from './AboutUs'
import MetaDecorator from '../Screen/Title/index'
import { HomeSlider, PageTitle, TheName } from '../data/response'
import TheCalling from '../Screen/Calling/index'


export default function Home() {









    // option 

    // FirstSlider --- slider image and info 
    // TheAboutUs --- about us
    // Services it is about srives... 



    const Home = () => {
        return (
            <>

                <FirstSlider />

                <div className='margin-bottom__' id="about">
                    <div className='Line margin-top2' />
                    <TheAboutUs />

                </div>
                <Services />

                
            </>
        )
    }






    let mahmoud = true




    return (
        <Fragment>

            <MetaDecorator
                title={PageTitle.title}
                description={PageTitle.des}
                imageUrl={PageTitle.image}
                imageAlt={PageTitle.title}
            />

            <TheCalling  
            TelefonNumbe={HomeSlider.telefon}
            Title={HomeSlider.title}
            ThewhatApp={HomeSlider.whatApp}
            />

            <Home />



        </Fragment>


    )
}

