import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import ItemForm from './ItemForm'

const Items = ({ items, traders, filterItems, filterItemsX, sort,image }) => {
    const [tradeID, setTradeID] = useState('')
    const [text, setText] = useState('')
    const tradersopt = [{ value: '', label: 'hich' }, ...traders.map((city) => ({ value: city.id, label: city.name }))]



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
                                <th>زنجیرە</th>
                                <th>کۆد</th>
                                <th>گروپ</th>
                                <th >ناوی کۆمپانیا</th>
                                <th className="d-print-none">جۆر</th>
                                <th>ناوی مەواد</th>
                                <th className="d-print-none">نرخ</th>
                                <th className="d-print-none" > <button className="text-decoration-none" onClick={(e) => sort('addprice')}>رێژەی قازانج</button> </th>
                                <th > نرخ فرۆش</th>
                                <th className="d-print-none">جۆر بار</th>
                                <th className="d-print-none">دانە</th>
                                <th className="d-print-none">وەزن دانە</th>
                                <th className="d-print-none">وەزن بار</th>
                                <th>فرۆشراو</th>
                                <th>ماوە</th>
                                <th className="d-print-none"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <th> <Link className="text-decoration-none text-dark" to={`/itemDetail/${item.id}`}>{item.id}</Link></th>
                                    <th><img src={item.image}
                                        className="img-fluid rounded-start m-2 d-print-none" alt="....." width={50 + 'px'} />{item.barcode}</th>
                                    <th>{item.group}</th>
                                    <th >{item.trader}</th>
                                    <th className="d-print-none">{item.category_name}</th>
                                    <th> {item.name}</th>
                                    <th className="d-print-none">{item.price}$</th>
                                    <th className="d-print-none">{item.addprice * 100}%</th>
                                    <th >{item.finalprice}$</th>
                                    <th className="d-print-none">{item.bag}</th>
                                    <th className="d-print-none"> {item.quantity}</th>
                                    <th className="d-print-none">{item.wight} کگم</th>
                                    <th className="d-print-none">{item.wightAll} کگم</th>
                                    <th>{item.popularity}</th>
                                    <th>{item.mawe}</th>
                                    <td> <Link className="d-print-none btn btn-warning " to={`/itemDetail/${item.id}`}><FontAwesomeIcon icon={faEdit} /></Link></td>
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
