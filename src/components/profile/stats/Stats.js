import React from "react";

import style from "./Stats.module.css";
import PropTypes from "prop-types";

export const Stats = ({ followers, views, likes }) => {
    return (
        <ul className={style.stats}>
            <li className={style.statsItem}>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{followers}</span>
            </li>
            <li className={style.statsItem}>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{views}</span>
            </li>
            <li className={style.statsItem}>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{likes}</span>
            </li>
        </ul>
    )
}

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};