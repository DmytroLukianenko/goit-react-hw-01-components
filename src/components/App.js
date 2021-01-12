import React from 'react'

import user from '../data/user.json'
import transactions from '../data/transactions.json'
import friends from '../data/friends.json'
import stat from '../data/statisctical-data.json'

import { Profile } from './profile/Profile'
import { Statistics } from './statistic/Statistic'
import { FriendList } from './Friendlist/Friendlist'
import { TransactionHistory } from './transactions/TransactionHistory'
// import { Animaton } from './particls/tsparticles'



const App = () => {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                avatar={user.avatar}
                stats={user.stats}
                location={user.location}
            />
            <Statistics title="Upload stats" items={stat} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    )
}
export default App