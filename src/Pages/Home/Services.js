import React from 'react'
import { Serives, ServicesTitle, Servies2, TelefonNumber } from '../data/response'
import asas from '../../Icons/services/asas.jpeg'
import MyImage from '../Screen/Images'
import TheButton from '../Screen/TheButton'


export default function Services() {






    // <p className='font-size option  cursor'>{item.TitleButtom}</p>
    return (
        <div id='services'>
            <header>
                <div className='flex flex-wrap flex-center margin-topone paddingTo width80 margin backgroundTo style_border'>


                    <div className='margin-bottom'>
                        <h3 className='text-align'>{ServicesTitle.title}</h3>

                        <div className='text-align'>
                         
                            <h4 className='font-size cursor'>{ServicesTitle.des2}</h4>
                        </div>
                    </div>



                    <div className='flex space-between flex-wrap '>

                         {Serives?.map((item) => (
                            <div className='width50 padding__ margin-top' key={item?._id}>

                                <MyImage
                                    image={item.image}
                                    className='border-radius cursor ImageSevies'
                                    alt={item.title}
                                    title={item.title}
                                    width='100%'
                                    
                                />


                                <div>
                                    <h2 className='margin-topOneee'>{item.title}</h2>

                                    <div className=''>
                                        <p className='font-size   cursor'>{item.des}</p>
                                        <div className='margin-top'>
                                            <div className='margin-topOneee margin-bottom____'>

                                                <TheButton
                                                    TheName={item.TitleButtom}
                                                    LinkCall={`tel:${TelefonNumber.telefon}`}

                                                />



                                            </div>

                                        </div>

                                    </div>

                                    <div className='Line margin-top' />

                                </div>
                            </div>
                        ))} 


                    </div>
                </div>


                <div className='flex flex-wrap flex-center margin-topone paddingTo width80 margin backgroundTo style_border'>

                    <div className='width50 flex flex-center padding__'>
                        <div>
                            <h2>{Servies2.Title}</h2>
                            <div className='margin-top'>
                                <p className='font-size option '>{Servies2.TitleTo}</p>

                                <div className='margin-topOneee margin-bottom____'>
                                    <TheButton TheName={Servies2.TitleButtom} />

                                </div>

                            </div>
                            <div className='Line margin-top' />
                        </div>

                    </div>

                    <div className='width50 flex flex-center padding__'>
                        <MyImage
                            image={asas}
                            className='border-radius cursor ImageSevies'
                            alt={Servies2.Title}
                            width='100%'
                            title={Servies2.Title}
                            key='9'
                        />

                    </div>

                </div>
            </header>

        </div>

    )
}