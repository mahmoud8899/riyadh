import React, { Fragment } from 'react'
import Services from './Services'
import LastWorking from './LastWorking'
import TheMpas from './TheMpas'
import FirstSlider from './Slider'
import TheAboutUs from './AboutUs'
import MetaDecorator from '../Screen/Title/index'
import { PageTitle, TheName } from '../data/response'
import MyImage from '../Screen/Images'
import Mok from '../../Icons/mok/1.jpeg'
import TheCalling from '../Screen/Calling'
import Airconditioner from './Airconditioner'
import TheTransfer from './Transfer'

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

            <Home />



        </Fragment>


    )
}

