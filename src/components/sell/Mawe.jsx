

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Currency from '../../Currency'

const Mawe = ({ wasl, locals, groupId, localId, plus }) => {

    let localz = locals.filter((mob) => mob.id == localId)
    let attemptsValue = 0
    let oldValue = 0
    let mawe = 0
    let pay = 0

    useEffect(() => {
        // console.log(localz);
        // if (localz.length > 0) {
        //     localz.map((local)=>{
        //     attemptsValue = Object.values(local.attempts.filter((para) => {
        //         return (para.group) == groupId
        //     })).reduce((r, { totallint }) => r + parseFloat(totallint), 0)

        //     oldValue = Object.values(local.oldacc_compnay.filter((para) => {
        //         return (para.group) == groupId
        //     })).reduce((r, { loan }) => r + parseFloat(loan), 0)

        //     pay = Object.values(local.payment_compnay.filter((para) => {
        //         return (para.group) == groupId
        //     })).reduce((r, { bank_income }) => r + parseFloat(bank_income), 0)
        //     mawe = attemptsValue + oldValue + parseFloat(local.exchange)
        //        })
        // }
    }, []);


    return <>
        {localz.map((mob) => {
            attemptsValue = Object.values(mob.attempts.filter((para) => {
                return (para.group) == groupId && para.datetime <= wasl
            })).reduce((r, { totallint }) => r + parseFloat(totallint), 0)

            oldValue = Object.values(mob.oldacc_compnay.filter((para) => {
                return (para.group) == groupId && para.datetime <= wasl
            })).reduce((r, { loan }) => r + parseFloat(loan), 0)

            pay = Object.values(mob.payment_compnay.filter((para) => {
                return (para.group) == groupId && para.datetime <= wasl
            })).reduce((r, { bank_income }) => r + parseFloat(bank_income), 0)

            return Currency(parseFloat((attemptsValue + oldValue + parseFloat(mob.exchange)) - pay - plus))
        })}
    </>;
}

export default Mawe
