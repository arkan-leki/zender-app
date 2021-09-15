import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom';
import * as moment from 'moment'
import { useState } from "react/cjs/react.development"

const SaleForm = ({ sales, items, carts, deleteEvent, addGO, dashkan , locals}) => {
    const [text, setText] = useState('')
    const [DashText, setDashText] = useState('')

    let { id } = useParams();
    let waslz = sales.filter((mob) => mob.id == id)
    let summer = 0
    let summerprice = 0
    return (
        <div className="mx-auto" style={{ width: 700 + 'px' }}>
            {waslz.map((wasl, index) => (

                <>
                    <div key={index} className="table-responsive">
                        <div className="bg-light">
                            <h1>لایەنی کڕیار: {wasl.local_name}</h1> <h1>ژ.وەسڵ : {wasl.id}</h1>
                            <h3>کۆدی کڕیار: {wasl.local_code}</h3>
                            <h3>بەرواری وەسڵ: {moment(new Date(wasl.date)).format("DD/MM/YYYY")}</h3>
                            <h3>کۆی وەسڵ: {wasl.totall}$</h3>
                            <h3>داشکاندن: {wasl.discount}$<button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#dicount">edit</button></h3>
                        </div>
                        <table className="table table-striped table-hover align-middle caption-top">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">کاڵا</th>
                                    <th>نرخ</th>
                                    <th>دانە</th>
                                    <th>کۆی نرخ</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(wasl.sell_detail)}
                                {wasl.sell_detail.map((kala, index) => (
                                    <tr key={index}>
                                        <th hidden={true}>{summer += kala.quantity}</th>
                                        <th hidden={true}>{summerprice += kala.total}</th>
                                        <th scope="row">{kala.item}</th>
                                        <th>{kala.price}$</th>
                                        <th>{kala.quantity}</th>
                                        <th>{kala.total}$</th>
                                        <th></th>
                                    </tr>
                                ))}
                                {carts.map((kala, index) => (
                                    <tr key={index}>
                                        <th scope="row">{kala.name}</th>
                                        <th scope="row">{kala.finalprice}$</th>
                                        <th scope="row"><input id={kala.id} type="number" value={text} onChange={(e) => setText(e.target.value)} /></th>
                                        <th scope="row">{text * kala.finalprice}$</th>
                                        <button className="btn btn-info" type="button" id="button-addon2" onClick={() => deleteEvent(kala.id)}>سڕینەوە</button>
                                        <button className="btn btn-info" onClick={() => addGO({
                                            "quantity": text,
                                            "price": kala.finalprice,
                                            "sell": wasl.id,
                                            "item": kala.id
                                        })}> خەزن </button>
                                    </tr>
                                ))}

                            </tbody>
                            <tfoot>
                                <th>
                                    <Link className="btn btn-info" to={`/itemlist/${wasl.id}`}>زیادکردن</Link>
                                </th>
                                <th></th>
                                <th>{summer}</th>
                                <th>{summerprice}$</th>
                                <th> <Link className="btn btn-info" to={`/`}>گەرانەوە</Link></th>
                            </tfoot>
                        </table>
                    </div>
                    <div className="modal fade" id="dicount" tabIndex="-1" aria-hidden='true'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">لیستەکەم</h5>
                                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label htmlFor="">dashkan: </label>
                                    <input type="number" placeholder={wasl.discount} value={DashText} onChange={(e) => setDashText(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" onClick={() => dashkan(wasl.id, {
                                        "discount": DashText,
                                    })}>go</button>
                                </div>
                            </div>
                        </div>
                    </div></>
            ))}

        </div>
    )
}

export default SaleForm
