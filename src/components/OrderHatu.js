import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const OrderHatu = ({ orders ,group , traders , searchTrader, addOrder , filterBydate}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    return (
        <div className="mx-auto" style={{
            width: 100 + '%'
        }} ><div className="d-print-none">
                <div className="container-fluid">
                    <div className="">
                        {group != '' ? <button className=" m-1 col-md-4  btn btn-info" data-bs-toggle="modal" data-bs-target="#newForm">وەسڵی نوێ</button> : <></>}
                        <button className=" m-1 col-md-4 btn btn-info">بۆ</button>
                        <div className="row">
                            <input className="col-md-8 " type="date" value={date} placeholder="11/01/2021" aria-label="date" onChange={(e) => setDate(e.target.value)} />
                            <button className="col-md-4 btn btn-outline-success" type="submit" onClick={() => filterBydate(date)}>گەڕان</button>
                        </div>
                    </div>
                </div>
            </div><div className="table-responsive-xl aling.center">
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
                                <th>{order.trader_name}</th>
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
                <div className="modal fade" id="newForm" tabIndex="-1" aria-hidden='true'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">کڕیارەکان</h5>
                                <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                            </div>
                            <div className="container">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <h5 className="mb-3 mb-md-0">گەران بۆ کڕیارەکان</h5>
                                    <div className="input-group news-input">
                                        <input id='text' type="text" className="form-control" placeholder="بەرزترین نرخ بنوسە کە دەتوانیت بیبەخشی"
                                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />
                                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => searchTrader(text)}>گەڕان</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <table className="table table-striped table-hover align-middle caption-top">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">کاڵا</th>
                                            <th>کۆد</th>
                                            <th>وەسل</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {traders.map((trader, index) => (
                                            <tr key={index}>
                                                <td scope="row">{trader.name}</td>
                                                <td>{trader.code}</td>
                                                <button className="btn btn-info" type="button" onClick={() => addOrder({"group": group, "trader": trader.id })}>کڕین</button>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default OrderHatu
