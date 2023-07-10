import { HomeSlider } from "../data/response";
import React from 'react'

import Cover from '../../Icons/services/asas.jpeg'
import MyImage from '../Screen/Images/index'
import Calling from '../../Icons/calling.png'


export default function FirstSlider() {



    return (
        <div className='flex flex-wrap align-items position margin-top2'>








            <div className="devloading__">
                <MyImage
                    image={Cover}
                    width='100%'
                    height='500px'
                    className='ImageSlider'
                    alt={HomeSlider.title}
                    title={HomeSlider.titleOnther}
                    key='8'
                />
            </div>



            <div className='backgroundTo width50 paddingTo border-radius Order__ style_border ___x'>
                <header>
                    <h2>{HomeSlider.title}</h2>
                    <div className='flex flex-column'>
                        <h1 className='font-size margin-top '>{HomeSlider.des}</h1>
                        <div className='flex align-items  margin-top cursor option '>
                            <a href={`tel:${HomeSlider.telefon}`} className="Telefon_link font-size" >
                                {HomeSlider.telefon}

                            </a>


                            <MyImage
                                image={Calling}
                                width='30px'
                                height='30px'
                                // className='ImageSlider'
                                alt={HomeSlider.title2}
                                title={HomeSlider.title3}
                                key='7'
                            />






                        </div>
                    </div>
                </header>
            </div>



        </div>
    )
}


