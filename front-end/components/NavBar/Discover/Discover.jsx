import React from "react";
import Link from 'next/link';

// internal import
import Style from './Discover.module.css';

const Discover = () => {
    // Discover Navigation Menu

    const discover = [
        {
            name: "Collection",
            link: "collection",
        },
        {
            name: "Search",
            link: "searchPage",
        },
        {
            name: "Author Profile",
            link: "author-profile",
        },
        {
            name: "NFT Details",
            link: "nft-details",
        },
        {
            name: "Account Setting",
            link: "account",
        },
        {
            name: "Upload NFT",
            link: "uploadNFT"
        },
        {
            name: "Connect Wallet",
            link: "connectWallet",
        },
        {
            name: "Blog",
            link: "blog",
        },
    ];

    return (
        <div>
            {discover.map((el, i) => (
                <div className={Style.discover} key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Discover;