import React from 'react'
import PropTypes from 'prop-types'
import styles from './Friend.module.css'
import { FriendListItem } from './FriendListItem';


export let FriendList = ({ friends }) => {
    if (friends.length === 0) return null;
    return (
        <ul className={styles.friendsList}>
            {friends.map(({ avatar, name, id, isOnline }) => {
                return (
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        key={id}
                    />
                );
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array,
};