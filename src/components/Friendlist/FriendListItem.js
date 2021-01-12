import React from 'react'
import styles from "./Friendlist.module.css"
import PropTypes from 'prop-types'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? styles.statusOnline : styles.statusOffline;
    return (
        <li className={styles.item}>
            <span className={status}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

FriendListItem.protoTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number
}