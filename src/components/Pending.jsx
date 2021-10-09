import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Currency from '../Currency';

const Pending = ({ image, items, groupId, solds }) => {
    const [data, setData] = useState([]);
    const [tday, setTday] = useState([]);
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))

    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/sales/?format=json").then(res => {
            console.log(res);
            // alert(groupId)

            if (groupId) {
                setData(res.data.filter((mob) => mob.date == date && mob.item_group == groupId))
            } else {
                setData(res.data.filter((mob) => mob.date == date))
            }
        }).catch(err => {
            console.log(err);
        })

        const _item_sell = []
        items.map((_item) => {
            let item_sell = _item.item_sell.filter((mob) => mob.date == date)
            let quantity = Object.values(item_sell).reduce((r, { quantity }) => r + quantity, 0)
            let price = Object.values(item_sell).reduce((r, { price, quantity }) => r + parseFloat(quantity * price), 0);
            _item_sell.push({ "item": _item.name, "item_price": _item.price, "qazanc": Currency(price - (_item.price * quantity)), "barcode": _item.barcode, "quantity": quantity, "mawe": _item.mawe, "maweprice": (_item.mawe * _item.price), "price": price, "date": date, "group": _item.group, 'itemp': Currency(price / quantity) })
        })
        setTday(_item_sell.filter((_items) => _items.quantity != 0))
    }

    useEffect(() => {
        fetchData();
    }, []);


    const setStat = (item) => {
        axios.patch("http://127.0.0.1:8000/api/sale/" + item.id + "/", { "status": (!item.status) }).then(res => {
            console.log(res);
            // fetchData();
        }).catch(err => {
            console.log(err);
        })
    }

    const filter = (date) => {
        fetchData()
    }

    let totalqazanj = 0

    return (

        <div className="row">
            <div className="col table-responsive-xl aling.center ">
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
                                <h4>دەرچوو مەخزەن
                                </h4>
                                <p>
                                    {/* 07719930849 - Tel */}
                                    {moment(new Date()).format("DD/MM/YYYY")}
                                </p>
                            </div>
                        </div></caption>
                    <thead>
                        <tr>
                            <th>گروپ</th>
                            <th> کۆد </th>
                            <th> ناو </th>
                            <th> کڕین</th>
                            <th> نرخ</th>
                            <th> فرۆشراو </th>
                            <th> ماوە </th>
                            <th>  داهات</th>
                            <th>  سەرمایە</th>
                            <th> قازانج</th>
                            <th> بەروار</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tday.map((item, i) => (
                            <tr key={i}>
                                <th>{item.group}</th>
                                <th>{item.barcode}</th>
                                <th>{item.item}</th>
                                <th>{item.item_price}</th>
                                <th>{item.itemp}</th>
                                <th>{item.quantity}</th>
                                <th>{item.mawe}</th>
                                <th>{Currency(item.price)}</th>
                                <th>{Currency(item.maweprice)}</th>
                                <th>{item.qazanc}</th>
                                <th>{item.date}</th>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>{data.length}</th>
                            <th></th>
                            <th>{Currency(Object.values(data).reduce((r, { item_price, quantity }) => r + parseFloat(quantity * item_price), 0))}</th>
                            <th>{Object.values(data).reduce((r, { quantity }) => r + parseFloat(quantity), 0)}</th>
                            <th>{Object.values(data).reduce((r, { mawe }) => r + parseFloat(mawe), 0)}</th>
                            <th>{Currency(Object.values(data).reduce((r, { price, quantity }) => r + parseFloat(quantity * price), 0))}</th>
                            <th>{Currency(Object.values(data).reduce((r, { finalprice, mawe }) => r + parseFloat(mawe * finalprice), 0))}</th>
                            <th>{Currency(Object.values(data).reduce((r, { quantity, item_price, price }) => r + (quantity * (parseFloat(price) - parseFloat(item_price))), 0))}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="col table-responsive-xl aling.center d-print-none">
                <div className="container d-print-none p-5">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-3 mb-md-0">گەران بۆ بارەکان</h5>
                        <div className="input-group news-input">
                            <input id='date' type type="date" className="form-control" placeholder=""
                                aria-label="Eneter Your price" aria-describedby="button-addon2" value={date} onChange={(e) => setDate(e.target.value)} />
                            <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filter(date)}>گەڕان</button>
                        </div>
                    </div>
                </div>
                <hr />
                <table className="table table-striped table-hover align-middle caption-top">
                    <thead>
                        <tr>
                            <th># زنجیرە</th>
                            <th> ناو </th>
                            <th> دانە </th>
                            <th> نرخ</th>
                            <th> بەروار</th>
                            <th> وەسڵ</th>
                            {/* <th> حاڵەت</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i}>
                                <th>{item.id}</th>
                                <th>{item.item}</th>
                                <th>{item.quantity} دانە</th>
                                <th>{item.price}$</th>
                                <th>{item.date}</th>
                                <th>{item.sell}</th>
                                {/* <th><input type="checkbox" name="status" id={i} checked={item.status} onClick={(e) => setStat(item)} /></th> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Pending
