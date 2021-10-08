import { useParams } from 'react-router-dom';
import * as moment from 'moment'
import { useState } from 'react';
import ItemModal from '../item/ItemModal';
import Discount from '../modals/Discount';
import axios from 'axios'
import React, { useEffect } from 'react'
import Mawe from './Mawe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import Currency from '../../Currency';

const SaleForm = ({ groupDetail, cats, searchItem, sales, items, carts, deleteEvent, addGO, dashkan, locals, image, addtoListEvent , deleteSale }) => {
    const [text, setText] = useState(1)
    const [itemz, setItemz] = useState([])
    let { id } = useParams();
    let waslz = sales.filter((mob) => mob.id == id)
    let summer = 0
    let wights = 0.0
    let summerprice = 0

    useEffect(() => {
        setItemz(items)
    }, [])

    const addto = (item) => {
        setItemz(itemz.filter((i) => i.id != item.id))
        addtoListEvent(item)
    }
    const _deleteEvent = (id) => {
        const newItem = items.filter((i) => i.id == id)
        newItem.map((it) => {
            setItemz([...itemz, it])
        })
        deleteEvent(id)
    }


    const _itemFilter = (text, id) => {
        setItemz(items)
        if (text != '' || id != '') {
            setItemz(itemz.filter((kala) => {
                return kala.category == id
            }))
            if (text != '') {
                setItemz(itemz.filter((kala) => {
                    return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
                        kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
                        kala.group.toString().toLowerCase().includes(text.toString().toLowerCase())
                }))
            }
            return
        }
        return
    }

    return (
        <div className="mx-auto" style={{ width: 90 + '%' }} >
            <div className="row mt-2 fs-4 border border-2">
                <div className="col text-center  mt-2">
                    <h2>کۆمپانیایی زەندەر</h2>
                    <p className="fs-5">بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                </div>
                <div className="text-center   col mt-2">
                    <img src={image} className="img-thumbnail" alt="..." width={50 + '%'} />
                </div>
                <div className="col text-center mt-2">
                    <h2>پسولەی فرۆش
                    </h2>
                    <p className="fs-5">
                        {/* 07719930849 - Tel */}

                        تەلەفۆن - ٠٧٧١٩٩٣٠٨٤٩
                        <p>ناونیشان کەلار - لیوکە</p>

                    </p>
                </div>
            </div>
            {waslz.map((wasl, index) => (
                <>
                    <div className="row border border-1 mt-2" >
                        <div className="row col m-2  ">
                            <div className="col-8 text-right  fs-4">
                                <p>ناو : {wasl.local_name}</p>
                                <p>ناونیشان : {wasl.local_region}</p>
                            </div>
                            <div className="col text-right fs-6">
                                <p> تەلەفۆن : {wasl.local_phone}</p>
                                <p>کۆد : {wasl.local_code}</p>
                            </div>
                        </div>
                        <div className="col-2 border border-1 text-center  ">
                            <h4>فرۆشیار </h4>
                            <p> {wasl.vendor_name}</p>
                            <p>   {wasl.vendor_phone}</p>
                        </div>
                        <div className="col-2 border border-1 text-center  ">
                            <h4> {wasl.group_name} </h4>
                            <p> {wasl.id}</p>
                            <p>{moment(new Date(wasl.date)).format("DD/MM/YYYY")}</p>
                        </div>

                    </div>

                    <div key={index} className="table-responsivetext-center mt-2 ">

                        <table className=" table table-striped table-hover align-middle caption-top border border-2  ">
                            <thead className="table-dark fs-6">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" >کۆد</th>
                                    <th scope="col" >کاڵا</th>
                                    <th >بڕ</th>
                                    <th>نرخی دانە</th>
                                    <th>کۆ</th>
                                    <th className="d-print-none">#</th>
                                    <th className="d-print-none">#</th>
                                </tr>
                            </thead>
                            <tbody className="fs-6">
                                {wasl.sell_detail.map((kala, index) => (
                                    <tr key={index}>
                                        <th hidden={true}>{summer += kala.quantity}</th>
                                        <th hidden={true}>{wights += kala.quantity * kala.item_wightAll}</th>
                                        <th hidden={true}>{summerprice += kala.total}</th>
                                        <th scope="row">{kala.id}</th>
                                        <th scope="row" >{kala.item_code}</th>
                                        <th scope="row" >{kala.item}</th>
                                        <th >{kala.quantity}</th>
                                        <th>{Currency(parseFloat(kala.price))}</th>
                                        <th >{Currency(parseFloat(kala.total))}</th>
                                        <th className="d-print-none"><button className="btn btn-warning"><FontAwesomeIcon icon={faEdit} /></button></th>
                                        <th className="d-print-none"><button className="btn btn-danger" onClick={()=> deleteSale(kala.id)}><FontAwesomeIcon icon={faTrash} /></button></th>
                                    </tr>
                                ))}
                                {carts.map((kala, index) => (
                                    <tr key={index}>
                                        <th scope="row">{kala.id}</th>
                                        <th scope="row" >{kala.barcode}</th>
                                        <th scope="row" >{kala.name}</th>
                                        <th ><input className="formt-control" id={kala.id} type="number" value={text} onChange={(e) => setText(e.target.value)} /></th>
                                        <th >{(text * kala.finalprice).toFixed(2)}$</th>
                                        <th>
                                            <div className="row p-3">
                                                <button className="d-print-none btn btn-danger col fs-4" type="button" id="button-addon2" onClick={() => _deleteEvent(kala.id)}>سڕینەوە <FontAwesomeIcon icon={faTrash} /></button>
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
                            <tfoot className=" border">
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th> <p className="d-print-none">
                                        <ItemModal cats={cats} searchItem={_itemFilter} items={itemz} addtoListEvent={addto} />
                                    </p></th>
                                    <th>  {summer} کارتۆن</th>
                                    <th>  {Math.trunc(wights)} کیلۆ</th>
                                    <th> {Currency(parseFloat(summerprice))}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-4 fs-5  border  border-1">
                            <p>حسابی پێشوو : <Mawe wasl={wasl.datetime} plus={wasl.totallint} localId={wasl.local_id} locals={locals} groupId={wasl.group} /> </p>
                            <p>حسابی ئێستا :<Mawe wasl={wasl.datetime} plus={0} localId={wasl.local_id} locals={locals} groupId={wasl.group} /> </p>
                        </div>
                        <div className="col"></div>
                        <div className="col text-center border  border-1 ">
                            {/* <p>کۆی کڕین : {wasl.totall}$</p> */}
                            {wasl.discount > 0 ? <p>داشکان {Currency(parseFloat(wasl.discount))} </p> : ''}
                            <Discount dashkan={dashkan} wasl={wasl} />
                            <p>کۆی وەسڵ : {Currency(parseFloat(wasl.totallint))}</p>
                        </div>
                    </div>
                    <div className="mx-auto row text-center justify-center">
                        <div className="col"></div>
                        <h4 className="col-4 border-bottom border-2"> واژۆی وردبین </h4>
                        <div className="col"></div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default SaleForm
