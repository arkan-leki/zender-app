import { useParams } from 'react-router-dom';
import * as moment from 'moment'
import { useState } from 'react';
import ItemModal from '../item/ItemModal';
import Discount from '../modals/Discount';
import axios from 'axios'
import React, { useEffect } from 'react'
import Mawe from './Mawe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

const SaleForm = ({ groupDetail, cats, searchItem, sales, items, carts, deleteEvent, addGO, dashkan, locals, image, addtoListEvent }) => {
    const [text, setText] = useState('')

    let { id } = useParams();
    let waslz = sales.filter((mob) => mob.id == id)
    let summer = 0
    let wights = 0.0
    let summerprice = 0

    return (
        <div className="mx-auto" style={{ width: 90 + '%' }} >
            <div className="row m-2">
                <div className="col text-center m-2">
                    <h4>کۆمپانیایی زەندەر</h4>
                    <p>بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                </div>
                <div className="text-center col m-2">
                    <img src={image} className="img-thumbnail" alt="..." width={50 + '%'} />
                </div>
                <div className="col text-center m-2">
                    <h4>پسولەی فرۆش
                    </h4>
                    <p>
                        {/* 07719930849 - Tel */}

                        تەلەفۆن - ٠٧٧١٩٩٣٠٨٤٩
                        <p>ناونیشان کەلار - لیوکە</p>

                    </p>
                </div>
            </div>
            {waslz.map((wasl, index) => (
                <>
                    <div className="row  m-2" >
                        <div className="row col border border-3 text-right m-2">
                            <div className="col">
                                <p>ناو : {wasl.local_name}</p>
                                <p>ناونیشان : {wasl.local_region}</p>
                            </div>
                            <div className="col">
                                <p>ژمارەی موبایل : {wasl.local_phone}</p>
                                <p>کۆد : {wasl.local_code}</p>
                            </div>
                        </div>
                        <div className="col-2 border border-3  m-2">
                            <p>فرۆشیار : {wasl.vendor_name}</p>
                            <p>ژمارەی موبایل : {wasl.vendor_phone}</p>
                        </div>
                        <div className="col-2 border border-3 text-center m-2">
                            <h4>  {wasl.group_name} </h4>
                            <p> {wasl.id}</p>
                            <p>{moment(new Date(wasl.date)).format("DD/MM/YYYY")}</p>
                        </div>

                    </div>

                    <div key={index} className="table-responsivetext-center ">

                        <table className=" table table-striped table-hover align-middle caption-top  border border-2 ">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" >کۆد</th>
                                    <th scope="col" >کاڵا</th>
                                    <th >بڕ</th>
                                    <th>نرخی دانە</th>
                                    <th>کۆ</th>
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
                                        <th scope="row" >{kala.item_code}</th>
                                        <th scope="row" >{kala.item}</th>
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
                                        <th scope="row" >{kala.barcode}</th>
                                        <th scope="row" >{kala.name}</th>
                                        <th scope="row">{kala.bag}</th>
                                        <th ><input className="form-control" id={kala.id} type="number" value={text} onChange={(e) => setText(e.target.value)} /></th>
                                        <th >{(text * kala.finalprice).toFixed(2)}$</th>
                                        <th>
                                            <div className="row p-3">
                                                <button className="d-print-none btn btn-danger col fs-4" type="button" id="button-addon2" onClick={() => deleteEvent(kala.id)}>سڕینەوە <FontAwesomeIcon icon={faTrash} /></button>
                                                <button className="d-print-none btn btn-info col fs-4" onClick={() => addGO({
                                                    "quantity": text,
                                                    "price": kala.finalprice,
                                                    "sell": wasl.id,
                                                    "item": kala.id
                                                })}> خەزن    <FontAwesomeIcon icon={faSave} /></button>
                                            </div>
                                        </th>
                                    </tr>
                                ))}

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th> <p className="d-print-none">
                                        <ItemModal cats={cats} searchItem={searchItem} items={items} addtoListEvent={addtoListEvent} />
                                    </p></th>
                                    <th> عدد {summer} کارتۆن</th>
                                    <th> وەزن {Math.trunc(wights)} کیلۆ</th>
                                    <th> {summerprice}$</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="row  m-2">
                        <div className="col-4 m-2 border  border-3">
                            <p>حسابی پێشوو :<Mawe wasl={wasl.datetime} plus={wasl.totallint} localId={wasl.local_id} locals={locals} groupId={wasl.group} />$</p>
                            <p>حسابی ئێستا :<Mawe wasl={wasl.datetime} plus={0} localId={wasl.local_id} locals={locals} groupId={wasl.group} />$</p>
                        </div>
                        <div className="col"></div>
                        <div className="col text-center">
                            {/* <p>کۆی کڕین : {wasl.totall}$</p> */}
                            {wasl.discount > 0 ? <p>داشکان {wasl.discount} $</p> : ''}
                            <Discount dashkan={dashkan} wasl={wasl} />
                            <p>کۆی وەسڵ : {wasl.totallint}$</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <h3 className="col"> </h3>
                        <h3 className="col-4 border border-4"> واژۆی وردبین </h3>
                        <h3 className="col">  </h3>
                    </div>
                </>
            ))}
        </div>
    )
}

export default SaleForm
