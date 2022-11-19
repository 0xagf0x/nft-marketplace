import React from 'react';
import Image from 'next/image';
import { BsCircleFill } from 'react-icons/bs';

// internal
import Style from './Category.module.css';
import { Title } from '../componentsindex';
import images from '../../img';

const Category = () => {
    const CategoryArray = [
        1,
        2,
        3,
        4,
        5
    ]

    return (
        <div className={Style.category_container}>
            <div className={Style.category}>
                {CategoryArray.map((el, index) => (
                    <div className={Style.category_box} key={1 + 1}>
                        <Image 
                            className={Style.category_box_img} 
                            src={images.creatorbackground1} 
                            alt="background"
                            width={350} 
                            height={150} 
                            objectFit="cover" 
                        />
                        <div className={Style.category_box_title}>
                            <span>
                                <BsCircleFill />
                            </span>
                            <div className={Style.category_box_title_info}>
                                <h4>Entertainment</h4>
                                <small>1995 NFTs</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category