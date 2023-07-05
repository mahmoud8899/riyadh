import React from 'react'
import { ListNavBarTop } from '../data/response'


export default function ListNavBar(props) {
    const { ClassName } = props




    return (
        <ul className={ClassName}>
            {ListNavBarTop?.map((item) => (
                <li className='font-size option' key={item?._id}>
                    <a href={item?.link} className='Telefon_link'>
                        {item?.name}
                    </a>
                </li>
            ))}

        </ul>
    )
}