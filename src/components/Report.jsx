import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import Currency from '../Currency'

const Report = ({ items, traders, filterItems, filterItemsX, image, setDeleted }) => {
    const [tradeID, setTradeID] = useState('')
    const [text, setText] = useState('')
    const tradersopt = [{ value: '', label: 'hich' }, ...traders.map((city) => ({ value: city.id, label: city.name }))]
    items = items.filter((item) => item.deleted == false)

    let counter = items.length
    let sumprice = Object.values(items).reduce((r, { price }) => r + parseFloat(price), 0);
    let sumaddprice = Object.values(items).reduce((r, { addprice }) => r + parseFloat(addprice * 100), 0);
    let sumfinalprice = Object.values(items).reduce((r, { finalprice }) => r + parseFloat(finalprice), 0);
    let summawe = Object.values(items).reduce((r, { mawe }) => r + parseFloat(mawe), 0);
    let summaye = Object.values(items).reduce((r, { mawe, price }) => r + (parseFloat(price) * mawe), 0);
    let summony = Object.values(items).reduce((r, { mawe, finalprice }) => r + (parseFloat(finalprice) * mawe), 0);
    let sumsell = Object.values(items).reduce((r, { mawe, price, finalprice }) => r + parseFloat(finalprice - price) * mawe, 0);

    return (
        <section className="mx-auto" style={{ width: 100 + '%' }} id="items">
            <div className="container d-print-none p-5">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h5 className="mb-3 mb-md-0 fs-2">گەران بۆ کاڵاکان</h5>
                    <div className="input-group news-input">
                        <button className="btn btn-info fs-4" type="button" id="button-addon2" onClick={() => filterItemsX()}>مەوجودەکان</button>
                        <input className="form-control fs-4" type="text" value={text} placeholder="" aria-label="date" onChange={(e) => setText(e.target.value)} />
                        <Select className="form-control fs-4" onChange={(e) => setTradeID(e.value)} options={tradersopt} />
                        <button className="btn btn-dark fs-4" type="button" id="button-addon2" onClick={() => filterItems(tradeID, text)}>گەڕان  <FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="border border-5">
                <div className="table-responsive-xl aling.center ">
                    <table className="table table-striped table-hover align-middle caption-top">
                        <caption>
                            <div className="row m-2">
                                <div className="col text-center m-2">
                                    <h4>کۆمپانیایی زەندەر</h4>
                                    <p>بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                                </div>
                                <div className="text-center col m-2">
                                    <img src={image} className="img-thumbnail" alt="..." width={40 + '%'} />
                                </div>
                                <div className="col text-center m-2">
                                    <h4>جەردی مەخزەن
                                    </h4>
                                    <p>
                                        {/* 07719930849 - Tel */}
                                        {moment(new Date()).format("DD/MM/YYYY")}
                                    </p>
                                </div>
                            </div></caption>
                        <thead>
                            <tr>
                                <th className="d-print-none">زنجیرە</th>
                                <th>کۆد</th>
                                <th className="d-print-none">گروپ</th>
                                <th>ناوی مەواد</th>
                                <th>نرخ</th>
                                <th> نسبە</th>
                                <th>نرخ فرۆش</th>
                                <th>ماوە</th>
                                <th>مایە</th>
                                <th>فرۆش</th>
                                <th >قازانج</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <th className="d-print-none" >{item.id}</th>
                                    <th className="d-print-none" ><img src={item.image}
                                        className="img-fluid rounded-start m-2 d-print-none" alt="....." width={50 + 'px'} />{item.barcode}</th>
                                    <th>{item.group}</th>
                                    <th> {item.name}</th>
                                    <th>{Currency(parseFloat(item.price))} </th>
                                    <th>{parseFloat(item.addprice * 100).toFixed(2)}%</th>
                                    <th>{Currency(parseFloat(item.finalprice))} </th>
                                    <th>{item.mawe}</th>
                                    <th>{Currency(parseFloat(item.price) * item.mawe)} </th>
                                    <th> {Currency(parseFloat(item.finalprice) * item.mawe)} </th>
                                    <th>{Currency((parseFloat(item.finalprice) - parseFloat(item.price)) * item.mawe)} </th>
                                </tr>
                            )
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th > </th>
                                <th>{counter} ماددە</th>
                                <th>{Currency(sumprice)}</th>
                                <th >{(sumaddprice / counter).toFixed(2)}%</th>
                                <th>{Currency(sumfinalprice)}</th>
                                <th>{summawe} </th>
                                <th>{Currency(summaye)}</th>
                                <th>{Currency(summony)}</th>
                                <th>{Currency(sumsell)}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Report
