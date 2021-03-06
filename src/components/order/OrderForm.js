import { useParams } from 'react-router-dom';
import * as moment from 'moment'
import { useState } from 'react';
import ItemModal from '../item/ItemModal';
import Discount from '../modals/Discount';
import Currency from '../../Currency';

const OrderForm = ({ orders, carts, cats, searchItem, deleteEvent, addGO, dashkan, image, addtoListEvent, items }) => {
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')
    const [checked, setChecked] = useState(false);
    let { id } = useParams();
    let orderz = orders.filter((o) => o.id == id)
    let summer = 0
    let wights = 0.0
    let summerprice = 0
    return (
        <div className="mx-auto" style={{ width: 90 + '%' }}>
            <div className="row border border-4">
                <div className="col-4 ">
                    <h4>کۆمپانیایی زەندەر</h4>
                    <p>بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                </div>
                <div className="text-center col-4">
                    <img src={image} className="img-thumbnail" alt="..." width={50 + '%'} />
                </div>
                <div className="col-4">
                    <h4>پسولەی کڕین
                    </h4>
                    <p>
                        07719930849 - محمد الزندی
                        {/* {group.phone} */}
                    </p>
                </div>
            </div>
            {orderz.map((order, index) => (
                <>
                    {/* <h4>{order.id}</h4> */}
                    <br />
                    <div className="row border border-4">
                        <div className="row col-8">
                            <div className="col"> <p>ناوی کۆمپانیا : {order.trader_name}</p>
                                <p>گروپ : {order.group_name}</p></div>
                            <div className="col"> <p>ژمارەی داواکاری : {order.code}</p>
                            </div>
                        </div>
                        <div className="col-4 bg-warning border border-4 border-danger text-center">
                            <p>بەرواری کڕین</p>
                            <p>{moment(new Date(order.date)).format("DD/MM/YYYY")}</p>
                            <p>زنجیرە {order.id}</p>
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
                                    <th className="d-print-none">#</th>
                                    <th className="d-print-none">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.order_detail.map((kala, index) => (
                                    <tr key={index}>
                                        <th hidden={true}>{summer += kala.quantity}</th>
                                        <th hidden={true}>{wights += kala.item_wightAll * kala.quantity}</th>
                                        <th hidden={true}>{summerprice += kala.total}</th>
                                        <th scope="row">{kala.item_code}</th>
                                        <th scope="row" >{kala.item}</th>
                                        <th >{kala.item_bag}</th>
                                        <th >{kala.quantity}</th>
                                        <th>{Currency(parseFloat(kala.price))}</th>
                                        <th >{Currency(parseFloat(kala.total))}</th>
                                        <th className="d-print-none">#</th>
                                        <th className="d-print-none">#</th>
                                    </tr>
                                ))}
                                {carts.map((kala, index) => (
                                    <tr key={index}>
                                        {/* <th scope="row">{kala.id}</th> */}
                                        <th scope="row">{kala.barcode}</th>
                                        <th scope="row" >{kala.name}</th>
                                        <th ><input className="form-control" id={kala.id} type="number" value={text} onChange={(e) => setText(e.target.value)} /></th>
                                        <th>{kala.price}</th>
                                        <th ><input className="form-control" id={kala.id} type="number" value={text2} onChange={(e) => setText2(e.target.value)} /></th>
                                        <th><input type="checkbox" name="nrx" id="nrx" defaultChecked={checked} onChange={() => setChecked(!checked)} /></th>
                                        <th >{(text * text2).toFixed(2)}$ </th>
                                        <th>
                                            <div className="row p-3">
                                                <button className="d-print-none btn btn-danger col" type="button" id="button-addon2" onClick={() => deleteEvent(kala.id)}>سڕینەوە</button>
                                                <button className="d-print-none btn btn-info col" onClick={() => addGO({
                                                    "quantity": text,
                                                    "price": text2,
                                                    "order": order.id,
                                                    "item": kala.id
                                                }, { "price": checked ? text2 : kala.price })}> خەزن </button>
                                            </div>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row border  border-4 ">
                        <div className="col-4">
                            <p>پارەدان بە قەرز</p>
                            <p>قەرزی پێشوو : {(order.trader_mawe - order.totallint).toFixed(2)}$</p>
                            <p>قەرزی ئێستا : {(order.trader_mawe).toFixed(2)}$</p>
                        </div>
                        <div className="col-4">
                            <p>
                                <ItemModal cats={cats} searchItem={searchItem} items={items} addtoListEvent={addtoListEvent} />
                            </p>
                            <p>وەزن :  {Math.trunc(wights)} کیلۆ</p>
                            <p>عدد {summer} کارتۆن</p>
                        </div>
                        <div className="col-4">
                            <p>کۆی کڕین : {order.totall}$</p>
                            <p>داشکان : {order.discount}$ <Discount dashkan={dashkan} wasl={order} /></p>
                            <p>کۆو وەسڵ : {order.totallint}$</p>
                        </div>
                        <p>واژۆی وردبینی </p>
                        <h5>واژۆی بەرێوەبەر </h5>
                    </div>
                </>
            ))}
        </div>
    )
}

export default OrderForm
