import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import Currency from '../../Currency'
import ItemForm from './ItemForm'

const Items = ({ items, traders, filterItems, filterItemsX, sort, image, setDeleted }) => {
    const [tradeID, setTradeID] = useState('')
    const [text, setText] = useState('')
    const tradersopt = [{ value: '', label: 'hich' }, ...traders.map((city) => ({ value: city.id, label: city.name }))]
    const [status, setStatus] = useState(true)

    let counter = items.filter((i) => i.deleted != status).length
    let sumsell = Object.values(items.filter((i) => i.deleted != status)).reduce((r, { ordered, stock }) => r + parseFloat(ordered + stock), 0);
    let sumpay = Object.values(items.filter((i) => i.deleted != status)).reduce((r, { popularity }) => r + parseFloat(popularity), 0);
    let summony = Object.values(items.filter((i) => i.deleted != status)).reduce((r, { mawe, finalprice }) => r + (parseFloat(finalprice) * mawe), 0);
    let summawe = Object.values(items.filter((i) => i.deleted != status)).reduce((r, { mawe }) => r + parseFloat(mawe), 0);


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
                                <th className="d-print-none">ناوی کۆمپانیا</th>
                                <th className="d-print-none">جۆر</th>
                                <th>ناوی مەواد</th>
                                <th className="d-print-none">نرخی کڕین</th>
                                <th className="d-print-none" >نسبە</th>
                                <th className="d-print-none">نرخ</th>
                                <th className="d-print-none">جۆر بار</th>
                                <th className="d-print-none">دانە</th>
                                <th className="d-print-none">وەزن دانە</th>
                                <th className="d-print-none">وەزن بار</th>
                                <th>نقل مخزن</th>
                                <th>هاتوو</th>
                                <th>فرۆشراو</th>
                                <th>ماوە</th>
                                <th> <button className="text-decoration-none btn btn-danger" onClick={(e) => setStatus(!status)}>مەوجودین</button> </th>
                                <th className="d-print-none"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.filter((i) => i.deleted != status).map((item, index) => (
                                <tr key={index}>
                                    <td hidden>
                                        {/* {counter = index + 1} */}
                                        {/* {sumsell += item.ordered + item.stock}
                                        {sumpay += item.popularity} */}
                                        {/* {summawe += item.mawe} */}
                                        {/* {summony += parseFloat(item.finalprice) * item.mawe} */}
                                    </td>
                                    <th> <Link className="text-decoration-none text-dark" to={`/itemDetail/${item.id}`}>{item.id}</Link></th>
                                    <th><img src={item.image}
                                        className="img-fluid rounded-start m-2 d-print-none" alt="....." width={50 + 'px'} />{item.barcode}</th>
                                    <th>{item.group}</th>
                                    <th className="d-print-none">{item.trader}</th>
                                    <th className="d-print-none">{item.category_name}</th>
                                    <th> {item.name}</th>
                                    <th className="d-print-none">{Currency(parseFloat(item.price))} </th>
                                    <th className="d-print-none">{parseFloat(item.addprice * 100).toFixed(2)}%</th>
                                    <th >{Currency(parseFloat(item.finalprice))} </th>
                                    <th className="d-print-none">{item.bag}</th>
                                    <th className="d-print-none"> {item.quantity}</th>
                                    <th className="d-print-none">{item.wight} کگم</th>
                                    <th className="d-print-none">{item.wightAll} کگم</th>
                                    <th>{item.stock}</th>
                                    <th>{item.ordered}</th>
                                    <th>{item.popularity}</th>
                                    <th>{item.mawe}</th>
                                    <th><input type="checkbox" name="status" id={index} checked={item.deleted} onChange={(e) => setDeleted(item)} /></th>
                                    <td> <Link className="d-print-none btn btn-warning " to={`/itemDetail/${item.id}`}><FontAwesomeIcon icon={faEdit} /></Link></td>
                                </tr>
                            )
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th > </th>
                                <th > </th>
                                <th  ></th>
                                <th className="d-print-none"> </th>
                                <th className="d-print-none"> </th>
                                <th>{counter} ماددە</th>
                                <th className="d-print-none"> </th>
                                <th className="d-print-none"> </th>
                                <th className="d-print-none"> </th>
                                <th className="d-print-none"> </th>
                                <th className="d-print-none"> </th>
                                <th className="d-print-none"> </th>
                                <th>{Currency(summony)}ماوە</th>
                                <th></th>
                                <th> هاتوو {sumsell}</th>
                                <th> فرۆشراو {sumpay}</th>
                                <th>ماوە {summawe} </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>

    )
}

export default Items
