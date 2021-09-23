import moment from 'moment'
import React, { useState } from 'react'
import PayLoan from './PayLoan'

const Trader = ({ group, traders, addPayLoan }) => {

    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="table-responsive-xl aling.center">
            {group ? <td><PayLoan traders={traders} addPayLoan={addPayLoan} group={group}/></td> : <></>}

                <table className="table table-striped table-hover col-12 caption-top">
                    <caption>کۆمپانیاکان</caption>
                    <thead>
                        <tr>
                            <th scope="col"> زنجیرە</th>
                            <th scope="col"> کۆمپانیا</th>
                            <th scope="col">کۆد</th>
                            <th scope="col">ژ.موبایل</th>
                            <th scope="col">کۆد</th>
                            <th scope="col">نقل حساب</th>
                            <th scope="col">کۆی داواکردن</th>
                            <th scope="col"> دراوە</th>
                            <th scope="col">قەرزی ماوە</th>
                            <th scope="col">بەروار </th>
                        </tr>
                    </thead>
                    <tbody>
                        {traders.map((mob, index) => (
                            <tr key={index}>
                                <td>{mob.id}</td>
                                <td>{mob.name}</td>
                                <td>{mob.code}</td>
                                <td>{mob.address}</td>
                                <td>{mob.phone}</td>
                                <td>{mob.exchange}$</td>
                                <td>{mob.totallBuy}$</td>
                                <td>{mob.totallLoan}$</td>
                                <td>{mob.mawe}$</td>
                                <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>

            </div>
        </div></>
    )
}

export default Trader
