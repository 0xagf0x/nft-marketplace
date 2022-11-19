import React from 'react';
import {RiSendPlaneFill} from 'react-icons/ri';
import Image from 'next/image';

// internal
import Style from './Subscribe.module.css';
import images from '../../img';
import { Title } from '../componentsindex';

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
        <div className={Style.subscribe_box}>
            <div className={Style.subscribe_box_left}>
                <Title 
                    heading="Never miss another drop"
                    paragraph="Subscribe to our super-exclusive drop list and be the first to know about upcoming drops"
                />
                <div className={Style.subscribe_box_left_box}>
                    <span>01</span>
                    <small>Get more</small>
                </div>
                <div className={Style.subscribe_box_left_box}>
                    <span>02</span>
                    <small>Get premium discount</small>
                </div>
                <div className={Style.subscribe_box_left_input}>
                    <input type="email" placeholder="Enter your email" />
                    <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
                </div>
            </div>
            <div className={Style.subscribe_box_right}>
                <Image src={images.update} alt="update icon" width={800} height={600} />
            </div>
        </div>
    </div>
  )
}

export default Subscribe