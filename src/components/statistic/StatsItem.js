import React from 'react'
import style from './statistic.module.css'

export const StatisticItem = ({ label, percentage }) => {
    return (
        <li className={style.item}>
            <span className={style.label}>{label}</span>
            <span className={style.percentege}>{percentage}%</span>
        </li>
    );
};

