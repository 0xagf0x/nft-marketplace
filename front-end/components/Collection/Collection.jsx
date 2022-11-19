import React, {useState, useEffect} from 'react'
import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
} from 'react-icons/bs'


// internal
import Style from './Collection.module.css';
import DaysComponent from './DaysComponents/DaysComponent';

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(true);
    const [viewAll, setViewAll] = useState(false);

    const CardArray = [1,2,3,4,5,6,7,8];
    const followingArray = [1,2,34,4];
    const newsArray = [1,2,3,4,5,6]
    const allAllray = CardArray.concat(followingArray).concat(newsArray);


    const openPopular = () => {
        if (!popular) {
            setPopular(true);
            setFollowing(false);
            setNews(false);
            setViewAll(false);
        }
    }

    const openFollower = () => {
        if (!following) {
            setFollowing(true);
            setPopular(false);
            setNews(false);
            setViewAll(false);
        }
    }

    const openNews = () => {
        if (!news) {
            setNews(true);
            setPopular(false);
            setFollowing(false);
            setViewAll(false);
        } 
    }

    const openAll = () => {
        if (!viewAll) {
            setViewAll(true);
            setNews(false);
            setPopular(false);
            setFollowing(false);
        } 
    }

    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => openPopular()}>
                            <BsFillAlarmFill /> Last 24 hours
                        </button>
                        <button onClick={() => openFollower()}>
                            <BsCalendar3 /> Last 7 days
                        </button>
                        <button onClick={() => openNews()}>
                            <BsFillCalendarDateFill /> Last 30 days
                        </button>
                         <button onClick={() => openAll()}>
                            View All
                        </button>
                    </div>
                </div>
            </div>
            {popular && (
                <div className={Style.collection_box}>
                    {CardArray.map((el, i) => (
                        <DaysComponent key={i + 1} />
                    ))}
                </div>
            )}
            {following && (
                <div className={Style.collection_box}>
                    {followingArray.map((el, i) => (
                        <DaysComponent key={i + 1} />
                    ))}
                </div>
            )}
            {news && (
                <div className={Style.collection_box}>
                    {newsArray.map((el, i) => (
                        <DaysComponent key={i + 1} />
                    ))}
                </div>
            )}
            {viewAll && (
                <div className={Style.collection_box}>
                    {allAllray.map((el, i) => (
                        <DaysComponent key={i + 1} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Collection