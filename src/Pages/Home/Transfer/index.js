import React from 'react'
import MetaDecorator from '../../Screen/Title'
import AirConda from '../../../Icons/mok/2.jpeg'
import TheCalling from '../../Screen/Calling'
import MyImage from '../../Screen/Images'


const TheTransfer = () => {


    let InfoX = {

        telefon: '0545529273',
        whatApp: '+966545529273',

        title: ' نقل اثاث بالرياض | نقل عفش بالرياض',
        des: `
        شركة نقل عفش بالرياض هي شركة متخصصة في تقديم خدمات نقل الأثاث والممتلكات بمهنية وكفاءة في منطقة الرياض. تعتبر عملية نقل العفش من المهام التي تحتاج إلى تخطيط وتنظيم جيدين لضمان أمان الأثاث ووصوله بسلامة إلى وجهته الجديدة. تهدف شركات نقل العفش في الرياض إلى تسهيل وتسريع هذه العملية للعملاء، وتوفير خدمة شاملة تلبي احتياجاتهم وتلبي توقعاتهم.
تمتاز شركات نقل العفش بالرياض بوجود فرق مدربة ومؤهلة تتمتع بالخبرة في تنفيذ عمليات النقل. يعمل هؤلاء الفنيين والعمال على إتمام المهمة بأقصى درجات الدقة والحرفية، حيث يتعاملون مع الأثاث والممتلكات بعناية واحترام للحفاظ على حالتها وتفادي أي أضرار أو كسور.

        `,
        title2: 'شركة نقل عفش بالرياض',
        des2: `
        شركة نقل عفش بالرياض هي شركة تقدم خدمات نقل الأثاث والممتلكات من مكان إلى آخر في منطقة الرياض. تهدف هذه الشركات إلى تسهيل وتبسيط عملية نقل العفش للعملاء، وتوفير خدمة محترفة وآمنة لضمان وصول الأثاث بسلامة وحفظه من أي ضرر.
تتميز شركات نقل العفش بالرياض بفرق عمل مدربة ومجهزة بأحدث الأدوات والمعدات لضمان التعامل السلس والفعال في عملية نقل العفش. يتم التعامل مع الأثاث بعناية فائقة واحترام للتأكد من عدم حدوث أي تلفيات أو كسور أثناء النقل.
        `,
        desx: `شركة نقل عفش بالرياض توفر خدمة سريعة ومحترفة لنقل الأثاث والممتلكات بأمان وكفاءة.`
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
                <div className='margin-top2' />

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


export default TheTransfer