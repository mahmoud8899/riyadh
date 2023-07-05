import React from "react";
import Caling from '../../../Icons/calling.png'
import WhatApp from '../../../Icons/whatapp.png'
import MyImage from '../../Screen/Images/index'

export default function TheCalling(props) {

    const {TelefonNumbe,Title,ThewhatApp} = props



    return (

        <div className="fixed flex flex-column flex-center align-items">

            <div className="flex flex-row flex-center align-items" >
                <span className="TEXT__">إتصل الآن</span>
                <div className='devCling cursor '>

                    <a href={`tel:${TelefonNumbe}`} className="Telefon_link" title={Title} >
                        <MyImage
                            image={Caling}
                            width='30px'
                            height='30px'
                            alt={Title}
                            key='1'
                        />
                    </a>
                </div>
            </div>


            <div className="flex flex-row flex-center align-items margin-top cursor" >
                <span className="TEXT__ background-wahtapp">واتساب</span>
                <div className='devCling cursor '>

                    <a href={`https://wa.me/${ThewhatApp}`} title={Title} className="Telefon_link" target="_blank" >
                        <MyImage
                            image={WhatApp}
                            width='30px'
                            height='30px'
                            alt={Title}
                            key='2'
                        />
                    </a>
                </div>
            </div>


        </div>


    )
}