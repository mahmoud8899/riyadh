import React from 'react'
import ListNavBar from '../NavBar/ListNavBar'
import facebook from '../../Icons/facebook.png'
import whatapp from '../../Icons/whatapp.png'
import instagram from '../../Icons/instagram.png'
import MyImage from '../Screen/Images/index'
import { TheName } from '../data/response'


export default function TheFooter() {



    const FooterLinke = [
        {
            _id: 1,
            image: facebook,
            name: 'facebook',
            link: 'https://www.facebook.com/profile.php?id=100092699676341&mibextid=ZbWKwL',
        },
        {
            _id: 2,
            image: instagram,
            name: 'instagram',
            link: 'https://www.instagram.com/atefsmair1994/',
        },
        {
            _id: 3,
            image: whatapp,
            name: 'whatapp',
            link: 'https://wa.me/+966568970473',
        }

    ]


    return (
        <footer className='flex flex-wrap flex-center margin-topone paddingTo width80 margin backgroundTo style_border'>

            <div className='width50 margin-top'>
                <h2 className='firstClass'>{TheName}</h2>
            </div>

            <div className='width50'>
                <ListNavBar ClassName='flex' />
            </div>
            <div className='Line margin-top' />


            <div className='margin-topone text-align'>
                <p className='font-size option'>© جميع الحقوق محفوظة</p>
            </div>

            <div className='margin-topone'>
                <h2 className='firstClass'>تستطيع متابعة حساباتنا</h2>

                <div className='flex align-items'>
                     {FooterLinke?.map((item) => (
                        <div className='margin-leftOne  cursor' key={item?._id}>

                            <a href={item.link} title={item.name} target="_blank" text={item.name} _id={item.name}>
                                <MyImage
                                    image={item.image}
                                    className='border-radius cursor '
                                    alt={item?.name}
                                    width='40px'
                                    height='40px'
                                    title={item?.name}
                                   

                                />
                            </a>

                        </div>
                    ))} 





                </div>
            </div>

        </footer>

    )
}
