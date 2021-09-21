import React, { useState } from 'react'

const Items = ({ items, traders, group, filterItems, itemPost, cats }) => {
    const [tradeID, setTradeID] = useState('')
    const [text, setText] = useState('')

    return (
        <section className="mx-auto" style={{ width: 100 + '%' }} id="items">
            <div className="container d-print-none p-5">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h5 className="mb-3 mb-md-0">گەران بۆ کاڵاکان</h5>
                    <div className="input-group news-input">
                        <input id='text' type="text" className="form-control" placeholder=""
                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />

                        <select className=" form-control " aria-label="Default select example" >
                            <option value={tradeID} onClick={() => setTradeID("")}>کۆمپانیا</option>
                            {traders.map((trader) => (
                                <option key={trader.id} value={tradeID} onClick={(e) => setTradeID(trader)} >{trader.name}</option>
                            ))}
                        </select>
                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filterItems(tradeID.name, text)}>گەڕان</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="border border-5">
                <div className="table-responsive-xl aling.center ">
                    <table className="table table-striped table-hover align-middle caption-top">
                        <caption>مەوادەکان</caption>

                        <thead>
                            <tr>
                                <th className="d-print-none">زنجیرە</th>
                                <th>بارکۆۆد</th>
                                <th>جۆر مەواد</th>
                                <th >ناوە بریکار</th>
                                <th>ناو مەواد</th>
                                <th className="d-print-none">نرخ</th>
                                <th className="d-print-none">رێژەی قازانج</th>
                                <th className="d-print-none"> نرخ فرۆش</th>
                                <th>جۆر بار</th>
                                <th  >دانە</th>
                                <th className="d-print-none">وەزن دانە</th>
                                <th>وەزن بار</th>
                                <th>ماوە</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <th className="d-print-none">{item.id}</th>
                                    <th><img src={item.image}
                                        className="img-fluid rounded-start m-2" alt="....."  width={50+'px'}/>{item.barcode}</th>
                                    <th>{item.group}</th>
                                    <th >{item.trader}</th>
                                    <th>{item.name}</th>
                                    <th className="d-print-none">{item.price}$</th>
                                    <th className="d-print-none">{item.addprice}%</th>
                                    <th className="d-print-none">{item.finalprice}$</th>
                                    <th>{item.bag}</th>
                                    <th > {item.quantity} دانە</th>
                                    <th className="d-print-none">{item.wight} کگم</th>
                                    <th >{item.wightAll} کگم</th>
                                    <th>{item.mawe} مەواد</th>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    )
}

export default Items
