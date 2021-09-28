import { useParams } from 'react-router-dom';
import * as moment from 'moment'
import { useState } from 'react';
import ItemModal from '../item/ItemModal';
import Discount from '../modals/Discount';
import axios from 'axios'
import React, { useEffect } from 'react'
import Mawe from './Mawe';

const SaleForm = ({ cats, searchItem, sales, items, carts, deleteEvent, addGO, dashkan, locals, image, addtoListEvent }) => {
    const [text, setText] = useState('')

    let { id } = useParams();
    let waslz = sales.filter((mob) => mob.id == id)
    let summer = 0
    let wights = 0.0
    let summerprice = 0
    
    return (
        <div className="mx-auto" style={{ width: 90 + '%' }} >
            <div className="row border border-4 ">
                <div className="col-4 ">
                    <h4>کۆمپانیایی زەندەر</h4>
                    <p>بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                </div>
                <div className="text-center col-4">
                    <img src={image} className="img-thumbnail" alt="..." width={50 + '%'} />
                </div>
                <div className="col-4">
                    <h4>پسولەی فرۆش
                    </h4>
                    <p>
                        07719930849 - Tel
                        {/* {group.phone} */}
                    </p>
                </div>
            </div>
            {waslz.map((wasl, index) => (
                <>
                    <br />
                    <div className="row border border-4">
                        <div className="row col-8 ">
                            <div className="col"> <p>ناو : {wasl.local_name}</p>
                                <p>ناوچە : {wasl.local_region}</p>
                                <p>ژمارەی موبایل : {wasl.local_phone}</p></div>
                            <div className="col"> <p>کۆد : {wasl.local_code}</p>
                                <p>فرۆشیار : {wasl.vendor_name}</p>
                                <p>ژمارەی موبایل : {wasl.vendor_phone}</p></div>
                        </div>
                        <div className="col-4 bg-warning border border-4 border-danger text-center">
                            <p>بەرواری فرۆش</p>
                            <p>{moment(new Date(wasl.date)).format("DD/MM/YYYY")}</p>
                            <p>زنجیرە {wasl.id}</p>
                        </div>

                    </div>
                    <br />

                    <div key={index} className="table-responsive">

                        <table className=" table table-striped table-hover align-middle caption-top border border-5">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" >کاڵا</th>
                                    <th >دانە</th>
                                    <th >بڕ</th>
                                    <th>نرخی دانە</th>
                                    <th>کۆی</th>
                                    {/* <th className="d-print-none">#</th>
                                    <th className="d-print-none">#</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {wasl.sell_detail.map((kala, index) => (
                                    <tr key={index}>
                                        <th hidden={true}>{summer += kala.quantity}</th>
                                        <th hidden={true}>{wights += kala.quantity * kala.item_wightAll}</th>
                                        <th hidden={true}>{summerprice += kala.total}</th>

                                        <th scope="row">{kala.id}</th>
                                        <th scope="row" >{kala.item}</th>
                                        <th >{kala.item_bag}</th>
                                        <th >{kala.quantity}</th>
                                        <th>{kala.price}$</th>
                                        <th >{kala.total}$</th>
                                        {/* <th className="d-print-none">#</th>
                                        <th className="d-print-none">#</th> */}
                                    </tr>
                                ))}
                                {carts.map((kala, index) => (
                                    <tr key={index}>
                                        <th scope="row">{kala.id}</th>
                                        <th scope="row" >{kala.name}</th>
                                        <th scope="row">{kala.bag}</th>
                                        <th ><input className="form-control" id={kala.id} type="number" value={text} onChange={(e) => setText(e.target.value)} /></th>
                                        <th >{(text * kala.finalprice).toFixed(2)}$</th>
                                        <th>
                                            <div className="row p-3">
                                                <button className="d-print-none btn btn-danger col" type="button" id="button-addon2" onClick={() => deleteEvent(kala.id)}>سڕینەوە</button>
                                                <button className="d-print-none btn btn-info col" onClick={() => addGO({
                                                    "quantity": text,
                                                    "price": kala.finalprice,
                                                    "sell": wasl.id,
                                                    "item": kala.id
                                                })}> خەزن </button>
                                            </div>
                                        </th>
                                    </tr>
                                ))}

                            </tbody>
                            {/* <tfoot>
                                <th>
                                    <Link className="btn d-print-none btn-info" to={`/itemlist/${wasl.id}`}>زیادکردن</Link>
                                </th>
                                <th></th>
                                <th> وەزن {Math.trunc( wights )} کیلۆ</th>
                                <th> عدد {summer} کارتۆن</th>
                                <th> {summerprice}$</th>
                                <th> <Link className="btn d-print-none btn-info" to={`/`}>گەرانەوە</Link></th>
                            </tfoot> */}
                        </table>
                    </div>
                    <div className="row border  border-4 ">
                        <div className="col-4">
                            <p>پارەدان بە قەرز</p>
                            <p>قەرزی پێشوو :<Mawe wasl={wasl.datetime} plus={wasl.totallint} localId={wasl.local_id} locals={locals} groupId={wasl.group}/>$</p>
                            <p>قەرزی ئێستا :<Mawe wasl={wasl.datetime} plus={0} localId={wasl.local_id} locals={locals} groupId={wasl.group}/>$</p>
                        </div>
                        <div className="col-4 ">
                            <p>
                                <ItemModal cats={cats} searchItem={searchItem} items={items} addtoListEvent={addtoListEvent} />
                            </p>
                            <p>وەزن :  {Math.trunc(wights)} کیلۆ</p>
                            <p>عدد {summer} کارتۆن</p>
                        </div>
                        <div className="col-4">
                            <p>کۆی کڕین : {wasl.totall}$</p>
                            <p>داشکان : {wasl.discount}$ <Discount dashkan={dashkan} wasl={wasl} /></p>
                            <p>کۆو وەسڵ : {wasl.totallint}$</p>
                        </div>
                        <p>ناونیشان کەلار-لیوکە</p>
                    </div>                   
                </>
            ))}
        </div>
    )
}

export default SaleForm
