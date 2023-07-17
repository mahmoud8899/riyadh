import React from 'react'
import Cover from '../../../Icons/sameh/sameh.jpeg'
import MyImage from '../../Screen/Images'
import Services from '../Services'
import Calling from '../../../Icons/calling.png'
import MetaDecorator from '../../Screen/Title'
import { TheSite } from '../../data/response'
import TheCalling from '../../Screen/Calling'




const IsSameh = () => {



    let Info__ = {


        title: 'نجار موبيليا لجميع اعمال النجارة والتفصيل الخزانة وغرف النوم وجميع اعمال الاثاث والصيانة.',
        des: 'نحن نمتلك فريق كامل يعمل لخدمتك وكل ما يحتاج منزلك من أعمال خشبية',
        des2: 'دقا في التصنيع وسرعة في التنفيذ جميع اعمال الخزانة المتطورة متوفره لدينا بأسعار مناسبة وجميع اعمال الاثاث والديكور الداخلي',
        whatApp: '+966567840471',
        phone: '0567840471',
        instgram: 'https://www.instagram.com/treasury671/',

        image: Cover,



    }




    return (
        <div className=''>



            <MetaDecorator
                title={`${Info__.title} - ${TheSite}`}
                description={Info__.des}
                imageUrl={Info__.image}
                imageAlt={Info__.title}
            />

            <TheCalling
                TelefonNumbe={Info__.phone}
                Title={Info__.title}
                ThewhatApp={Info__.whatApp}
            />




            <div className='margin-top paddingTo'>


                <div className='margin position'>
                    <div className='__postion'>
                        <h2 className='firstClass font-weight margin-left cursor white'>نجار موبيليا</h2>
                    </div>
                    <MyImage
                        image={Info__.image}
                        className='border-radius cursor ImageSevies'
                        alt={Info__.title}
                        width='100%'
                        title={Info__.title}
                        height='300px'

                    />

                </div>




                <div className='margin-top2' />
                <h2 className='margin-top'>{Info__.title}</h2>
                <div className='margin-topOneee'>
                    <p className='font-size cursor'>
                        {Info__.des}
                    </p>
                    <p className='font-size cursor'>
                        {Info__.des2}
                    </p>

                    <div className='flex align-items  margin-top cursor option '>
                        <a href={`tel:${Info__.phone}`} className="Telefon_link font-size" >
                            {Info__.phone}

                        </a>


                        <MyImage
                            image={Calling}
                            width='30px'
                            height='30px'
                            // className='ImageSlider'
                            alt={Info__.title}
                            title={Info__.title}
                            key='7'
                        />






                    </div>
                </div>

                <div className='Line margin-top2' />



            </div>



            <Services />







        </div>
    )
}


export default IsSameh