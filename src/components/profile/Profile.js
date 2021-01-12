import React from "react";
import PropTypes from 'prop-types';
import s from './Profile.module.css'
import { Stats } from './stats/Stats'

export const Profile = ({ avatar, tag, location, name, stats }) => {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img src={avatar} alt={name} className={s.avatar} />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>{tag}</p>
                <p className={s.location}>{location}</p>
            </div>
            <Stats
                followers={stats.followers}
                views={stats.views}
                likes={stats.likes}
            />
        </div>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};