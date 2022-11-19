import React from 'react';
import Image from 'next/image';
import {MdVerified} from 'react-icons/md';

import Style from './DaysComponent.module.css';
import images from '../../../img';

const DaysComponent = () => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image 
            src={images.creatorbackground1} 
            className={Style.daysComponent_box_img_img}
            alt="image"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image 
            src={images.creatorbackground2} 
            className={Style.daysComponent_box_img_1}
            alt="nft" 
            width={200}
            height={200}
            objectFit="cover"
          />
          <Image 
            src={images.creatorbackground2} 
            className={Style.daysComponent_box_img_2}
            alt="nft" 
            width={200}
            height={200}
            objectFit="cover"
          />
          <Image 
            src={images.creatorbackground2} 
            className={Style.daysComponent_box_img_3}
            alt="nft" 
            width={200}
            height={200}
            objectFit="cover"
          />
        </div>  

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image 
                className={Style.daysComponent_box_title_info_profile_img}
                src={images.user1}
                alt="profile"
                width={30}
                height={30}
                objectFit="cover"
              />
              <p>Creator
                <span>Charles B {""}
                  <small><MdVerified/></small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_profile}>
              <small>1.24 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaysComponent