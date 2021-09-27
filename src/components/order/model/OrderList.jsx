import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const OrderList = ({orders}) => {
    return (
        <div className="table-responsive-xl aling.center">
            <table className="table table-striped table-hover col-12 caption-top">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th>کۆمپانیا</th>
                        <th>کۆدی وەسڵ</th>
                        <th>جۆری مەواد</th>
                        <th>کۆی وەسڵ</th>
                        <th>داشکاندن</th>
                        <th>کۆی داواکراو</th>
                        <th>کۆی پارە قەرز</th>
                        <th>بەروار داخلکردن</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>

                            <th scope="col"><Link to={`/order/${order.id}`}>{order.id}</Link></th>
                            <th><Link to={`/order/${order.id}`}>{order.trader_name}</Link></th>
                            <th>{order.code}</th>
                            <th>{order.group_name}</th>
                            <th>{order.totall}$</th>
                            <th>{order.discount}$</th>
                            <th>{order.totallint}$</th>
                            <th>{order.trader_mawe}$</th>
                            <td>{moment(new Date(order.date)).format("DD/MM/YYYY")}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default OrderList
