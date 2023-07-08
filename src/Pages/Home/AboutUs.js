import { AboutUs } from "../data/response";
import React from 'react'


export default function TheAboutUs() {


    return (
        <div className='flex flex-wrap flex-center margin-topone paddingTo width80 margin  '>
            
            <header>
            <div className='margin-bottom'>
                <h2 className=''>{AboutUs.title}</h2>

                <div className='text-align margin-topone'>
                    <p className='font-size cursor' >
                        {AboutUs.des}
                    </p>
                </div>
            </div>
            </header>
         


        </div>
    )
}