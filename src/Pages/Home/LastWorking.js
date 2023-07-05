
import React from 'react'
import { LastWorkingImage } from '../data/response'


import One1 from '../../Icons/lastworking/1.jpeg'
import One2 from '../../Icons/lastworking/2.jpeg'
import One3 from '../../Icons/lastworking/3.jpeg'
import One4 from '../../Icons/lastworking/4.jpeg'
import One5 from '../../Icons/lastworking/5.jpeg'
import One6 from '../../Icons/lastworking/6.jpeg'
import One7 from '../../Icons/lastworking/7.jpeg'
import One8 from '../../Icons/lastworking/8.jpeg'
import One9 from '../../Icons/lastworking/9.jpeg'
import One10 from '../../Icons/lastworking/10.jpeg'
import MyImage from '../Screen/Images'




export default function LastWorking() {





    const LastWork = [
        {
            _id: 1,
            image: One1,
            Title : 'تركيب اثاث ايكيا',
        },
        {
            _id: 2,
            image: One2,
            Title : 'نجار بالرياض خشب',
        },
        {
            _id: 3,
            image: One3,
            Title : 'نجار بالرياض خشب',
        },
        {
            _id: 4,
            image: One4,
            Title :' نجار خشب طاولات',
        },
        {
            _id: 5,
            image: One5,
            Title :'نجار أثاث',
        },
        {
            _id: 6,
            image: One6,
            Title :'نجار فك وتركيب اثاث',
        },
        {
            _id: 7,
            image: One7,
            Title :'تركيب اثاث غرف النوم',
        },
        {
            _id: 8,
            image: One8,
            Title :'نجار ديكورات',
        },
        {
            _id: 9,
            image: One9,
            Title :'افضل نجار في الرياض',
        },
        {
            _id: 10,
            image: One10,
            Title :'نجار في الرياض',
        },
       

    ]


    return (
        <>
            <div className='flex flex-wrap flex-center margin-topone paddingTo width80 margin backgroundTo style_border'>

                <div className='margin-bottom width100__'>
                    <h2 className='text-align'>{LastWorkingImage.title}</h2>

                    <div className='text-align'>
                        <p className='font-size cursor' >
                            {LastWorkingImage.des}
                        </p>
                    </div>
                </div>


                {LastWork?.map((item) => (
                    <div className='width50 padding__ margin-top' key={item?._id}>
                        <MyImage
                            image={item.image}
                            className='border-radius cursor ImageSevies'
                            alt={item.Title}
                            width='100%'
                            title={item.Title}
                           
                        />



                    </div>
                ))} 
            </div>





        </>

    )
}