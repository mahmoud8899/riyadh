import React from 'react'
import App from './App'
import TheLoading from './Pages/Screen/TheLoading'
import Services from './Pages/Home/Services'
const Home = React.lazy(() => import('./Pages/Home'))
const Airconditioner = React.lazy(() => import('./Pages/Home/Airconditioner/index'))
const TheTransfer = React.lazy(() => import('./Pages/Home/Transfer/index'))
const TheMpas = React.lazy(() => import('./Pages/Home/TheMpas'))
const Title = React.lazy(() => import('./Pages/Screen/Title/index'))
import Imagesd from './Icons/services/asas.jpeg'
import LastWork from './Icons/lastworking/7.jpeg'


export const RoutersArray = [
    {
        element: <App.element />,
        path: '/',
        children: [

            {
                element: <React.Suspense fallback={
                    <div className='devloading'>
                        <TheLoading />
                    </div>
                } >
                    <Home />
                </React.Suspense>,
                path: '/',

            },

            {
                element: <React.Suspense
                    fallback={
                        <div className='devloading'>
                            <TheLoading />
                        </div>
                    }
                >

                    <Airconditioner />
                   
                </React.Suspense>,
                path: '/تصليح-مكيفات-بالرياض/',

            },

            {
                element: <React.Suspense
                    fallback={
                        <div className='devloading'>
                            <TheLoading />
                        </div>
                    }
                >

                   
                    <TheTransfer />
                    


                </React.Suspense>,
                path: '/نقل-عفش-في-الرياض/',



            },

            {
                element: <React.Suspense
                    fallback={
                        <div className='devloading'>
                            <TheLoading />
                        </div>
                    }
                >

                    <Home  />


                </React.Suspense>,
                path: '/نجار-بالرياض/',



            },



            {
                element: <React.Suspense fallback={
                    <div className='devloading'>
                        <TheLoading />
                    </div>
                }
                >
                    <Home />
                </React.Suspense>,
                path: '*',

            },





        ]
    }
]