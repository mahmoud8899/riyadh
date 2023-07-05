import React from 'react'
import MetaDecorator from '../../Screen/Title'
import AirConda from '../../../Icons/mok/1.jpeg'
import TheCalling from '../../Screen/Calling'
import MyImage from '../../Screen/Images'


const Airconditioner = () => {


    let InfoX = {

        telefon: '0563505652',
        whatApp: '+966563505652',

        title: 'صيانة مكيفات بالرياض',
        des: `
        صيانة مكيفات الهواء هي عملية توفير الخدمات اللازمة للحفاظ على أداء وأداء مكيفات الهواء في حالة جيدة. تشمل صيانة المكيفات في الرياض تنظيف المرشحات، وتنظيف وتطهير الأجزاء الداخلية والخارجية للوحدة، وفحص وإصلاح التسريبات، وتعبئة غاز التبريد إذا لزم الأمر، وفحص وضبط الأجزاء الميكانيكية، واختبار وضبط أنظمة التحكم. تهدف صيانة المكيفات إلى ضمان تشغيل المكيف بكفاءة عالية، وتحسين جودة الهواء المنبعث، وتحسين عمر المكيف.
        `,
        title2: 'شركة صيانة مكيفات بالرياض',
        des2: `يوجد الكثير من الأسباب التي تدفعكم للتعامل مع شركة صيانة مكيفات بالرياض فيأتي السبب الأول متعلق بمميزات الشركة، حيث تتسم شركتنا بالكثير من المميزات التي من أهمها اعتمدها على مجموعة من الأساليب والتقنيات الحديثة في مجال الصيانة، توفر الشركة إليكم مجموعة من النصائح التي توجهكم للتعامل الصحيح مع المكيف، مع العلم أن شركتنا توفر إليكم مجموعة من العروض التي تساعدكم في الحصول على خدمة مميزة بأقل سعر والآن يمكنكم التوجه إلى شركتنا والحصول على أفضل خدمة.`,

        desx: 'صيانة مكيفات بالرياض هي خدمة تقدمها شركات مختصة في الحفاظ على أداء المكيفات بشكل ممتاز وتوفير تبريد فعال.',
    }


    return (
        <>
            <MetaDecorator
                title={InfoX.title}
                description={InfoX.desx}
                imageUrl={AirConda}
                imageAlt={InfoX.title}
            />
            <div className='paddingTo'>


                <TheCalling

                    TelefonNumbe={InfoX.telefon}
                    Title={InfoX.title}
                    ThewhatApp={InfoX.whatApp}


                />

                <div className='margin-top2' />

                <h1 className='margin-top'>{InfoX.title}</h1>

                <div className='margin-top'>
                    <div className='width50  margin'>
                        <MyImage
                            image={AirConda}
                            className='border-radius cursor ImageSevies'
                            alt={InfoX.title}
                            width='100%'
                            title={InfoX.title}

                        />



                    </div>

                    <div className='width50 margin-top margin'>
                        <p className='font-size'>{InfoX.des}</p>
                    </div>

                </div>

                <div className='margin-top2' />
                <h2 className='margin-top'>{InfoX.title2}</h2>

                <div className='width50 margin-top'>
                    <p className='font-size'>{InfoX.des2}</p>
                </div>





            </div>
        </>

    )
}


export default Airconditioner