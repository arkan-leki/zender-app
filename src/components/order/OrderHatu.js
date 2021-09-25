import React, { useState } from 'react'
import Select from 'react-select'
import OrderList from './model/OrderList'

const OrderHatu = ({ orders, filterBydate ,traders }) => {
    const [date, setDate] = useState('')
    const [traderID, setTradeID] = useState('')
    const tradersopt =  [{ value: '', label: 'hich' } ,...traders.map((city) => ({ value: city.id, label: city.name }))]

    return (
        <section className="mx-auto" style={{ width: 100 + '%' }} >
            <div className="container d-print-none p-5">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h5 className="mb-3 mb-md-0">گەران بۆ بارەکان</h5>
                    <div className="input-group news-input">
                        <input id='date' type type="date" className="form-control" placeholder=""
                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={date} onChange={(e) => setDate(e.target.value)} />
                        <Select className="form-control" onChange={(e) => setTradeID(e.value)} options={tradersopt} />
                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filterBydate(date,traderID)}>گەڕان</button>
                    </div>
                </div>
            </div>
            <hr />
            <OrderList orders={orders} />
        </section>
    )
}

export default OrderHatu
