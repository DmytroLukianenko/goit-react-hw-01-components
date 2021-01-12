import React from 'react'
import { StatisticItem } from './StatsItem'

import style from './statistic.module.css'

export const Statistics = ({ items, title }) => {
    return (<section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}
        {items.length !== 0 && (
            <ul className={style.statList}>
                {items.map((item) => {
                    return (
                        <StatisticItem
                            key={item.id}
                            label={item.label}
                            percentage={item.percentage}
                            id={item.id}
                        />
                    );
                })}
            </ul>
        )}
    </section>
    );
};