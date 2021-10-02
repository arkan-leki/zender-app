import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Currency from '../../../Currency'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                        <th className="d-print-none"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>

                            <th scope="col"><Link to={`/order/${order.id}`}>{order.id}</Link></th>
                            <th className="fs-5">{order.trader_name}</th>
                            <th>{order.code}</th>
                            <th>{order.group_name}</th>
                            <th>{Currency(parseFloat(order.totall))} </th>
                            <th>{Currency(parseFloat(order.discount))} </th>
                            <th>{Currency(order.totallint)} </th>
                            <th>{Currency(parseFloat(order.trader_mawe))} </th>
                            <td>{moment(new Date(order.date)).format("DD/MM/YYYY")}</td>
                            <td  className="d-print-none"><Link className="btn btn-warning" to={`/order/${order.id}`}><FontAwesomeIcon icon={faEdit} /></Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default OrderList
