import React, { Fragment } from 'react'
import Services from './Services'
import FirstSlider from './Slider'
import TheAboutUs from './AboutUs'
import MetaDecorator from '../Screen/Title/index'
import { HomeSlider, IemdTitle, PageTitle, TheSite } from '../data/response'
import TheCalling from '../Screen/Calling/index'
import TheFooter from '../Footer/index'
import TheLoading from '../Screen/TheLoading'


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




    return (
        <Fragment>

            <MetaDecorator
                title={`${IemdTitle} - ${TheSite}`}
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

            <React.Suspense fallback={<TheLoading />} >
                <TheFooter
                    Linkinstagram='https://instagram.com/najar_n0'
                    linkwhatApp={HomeSlider.whatApp}
                />
            </React.Suspense>



        </Fragment>


    )
}

