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
import Cart from './Cart';

const SaleForm = ({ groupDetail, cats, searchItem, sales, items, carts, deleteEvent, addGO, dashkan, locals, image, addtoListEvent, deleteSale, editKalaEvent }) => {
    const [dana, setDana] = useState('')
    const [kalaId, setKalaId] = useState('')
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

    const _deleteSale = (kalaID) => {
        if(window.confirm("areu sure")){
            deleteSale(kalaID)
        }else{
            console.log('Thing was saved to the database.');
        }
    }

    const _edit = (kalaID) => {
        return (
            <><div className="modal fade" id="editModal" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">?????????? ??????????????</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label for="dana" className="form-label">????????</label>
                                <input type="number" id="dana" className="form-control" aria-describedby="dana" value={dana} onChange={(e) => setDana(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => editKalaEvent(kalaId,
                                    {
                                        'quantity': dana
                                    }
                                )}
                                >??????????????</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div></>
        )
    }

    return (
        <div className="mx-auto" style={{ width: 90 + '%' }} >
            <div className="row mt-2 fs-4 border border-2">
                <div className="col text-center  mt-2">
                    <h2>???????????????????? ????????????</h2>
                    <p className="fs-5">???? ?????????????? ???????? ?? ???????????????????????? ???????????????? / ??????????????</p>
                </div>
                <div className="text-center   col mt-2">
                    <img src={image} className="img-thumbnail" alt="..." width={50 + '%'} />
                </div>
                <div className="col text-center mt-2">
                    <h2>???????????? ????????
                    </h2>
                    <p className="fs-5">
                        ?????????????? - {groupDetail.phone}
                        <p>???????????????? ?????????? - ??????????</p>
                    </p>
                </div>
            </div>
            {waslz.map((wasl, index) => (
                <>
                    <div className="row border border-1 mt-2" >
                        <div className="row col m-2  ">
                            <div className="col-8 text-right  fs-4">
                                <p>?????? : {wasl.local_name}</p>
                                <p>???????????????? : {wasl.local_region}</p>
                            </div>
                            <div className="col text-right fs-6">
                                <p> ?????????????? : {wasl.local_phone}</p>
                                <p>?????? : {wasl.local_code}</p>
                            </div>
                        </div>
                        <div className="col-2 border border-1 text-center  ">
                            <h4>?????????????? </h4>
                            <p> {wasl.vendor_name}</p>
                            <p>   {wasl.vendor_phone}</p>
                        </div>
                        <div className="col-2 border border-1 text-center  ">
                            <h4> {wasl.group_name} </h4>
                            <p> {wasl.id}</p>
                            <p>{moment(new Date(wasl.date)).format("DD/MM/YYYY")}</p>
                        </div>
                    </div>
                    <div key={index} className="table-responsive text-center mt-2 ">
                        <table className=" table table-striped table-hover align-middle caption-top border border-2  ">
                            <thead className="table-dark fs-6">
                                <tr className="text-center  ">
                                    <th scope="col">#</th>
                                    <th scope="col" >??????</th>
                                    <th scope="col" >????????</th>
                                    <th >????</th>
                                    <th>???????? ????????</th>
                                    <th>????</th>
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
                                        <th className="d-print-none">
                                            <button className="btn btn-warning " data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => { setKalaId(kala.id); setDana(kala.quantity) }}><FontAwesomeIcon icon={faEdit} /></button>                                            </th>
                                        <th className="d-print-none"><button className="btn btn-danger" onClick={() => _deleteSale(kala.id)}><FontAwesomeIcon icon={faTrash} /></button></th>
                                        {_edit()}
                                    </tr>
                                ))}
                                {carts.map((kala, index) => (
                                   <Cart waslid={wasl.id} _deleteEvent={_deleteEvent} addGO={addGO} kala={kala} key={index}/>
                                ))}
                            </tbody>
                            <tfoot className=" border">
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th> <p className="d-print-none">
                                        <ItemModal cats={cats} searchItem={_itemFilter} items={itemz} addtoListEvent={addto} />
                                    </p></th>
                                    <th>  {summer} ????????????</th>
                                    <th>  {Math.trunc(wights)} ????????</th>
                                    <th> {Currency(parseFloat(summerprice))}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-4 fs-5  border  border-1">
                            <p>?????????? ?????????? : <Mawe wasl={wasl.datetime} plus={wasl.totallint} localId={wasl.local_id} locals={locals} groupId={wasl.group} /> </p>
                            <p>?????????? ?????????? :<Mawe wasl={wasl.datetime} plus={0} localId={wasl.local_id} locals={locals} groupId={wasl.group} /> </p>
                        </div>
                        <div className="col"></div>
                        <div className="col text-center border  border-1 ">
                            {/* <p>?????? ???????? : {wasl.totall}$</p> */}
                            {wasl.discount > 0 ? <p>???????????? {Currency(parseFloat(wasl.discount))} </p> : ''}
                            <Discount dashkan={dashkan} wasl={wasl} />
                            <p>?????? ???????? : {Currency(parseFloat(wasl.totallint))}</p>
                        </div>
                    </div>
                    <div className="mx-auto row text-center justify-center">
                        <div className="col"></div>
                        <h4 className="col-4 border-bottom border-2"> ?????????? ???????????? </h4>
                        <div className="col"></div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default SaleForm


