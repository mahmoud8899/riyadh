import React, { useState } from 'react'
import CallIcons from '../../Icons/call.png'
import MapsIcons from '../../Icons/map.png'
import ListNavBar from './ListNavBar'
import { MyAddress, TelefonNumber, TheName } from '../data/response'
import MyImage from '../Screen/Images/index'


export default function NavBar() {







    const [css, setCss] = useState({
        menubar: 'menu-btn',
        hidden: 'hidden'
    })

    const Change = () => {
        if (css.menubar === 'menu-btn') {
            setCss({
                ...css,
                menubar: 'menu-btn open',
                hidden: 'hidden open'
            })
        } else {
            setCss({
                ...css,
                menubar: 'menu-btn',
                hidden: 'hidden'
            })
        }
    }


    return (
        

   
        <div className='padding__ '>

           

            <nav className='flex flex-row align-items flex-wrap margin-top2'>
               
               <a href='/' className='Telefon_link'>
               <h2 className='firstClass font-weight margin-left cursor'> {TheName}</h2>
               </a>

                <div onClick={Change} className='widthbar flex  flex-row align-items' >
                    <div className={css.menubar}  >
                        <div className='menu-btn__burger' />
                    </div>
                </div>

                <div className={css.hidden}>
                    <ListNavBar
                        ClassName='flex flex-row flex-wrap cursor'
                    />
                </div>

            </nav>


        </div>
       
    )
}
