import React, { useState } from 'react'

const Items = ({ items, traders, group, filterItems, itemPost }) => {
    const [tradeID, setTradeID] = useState('')
    const [text, setText] = useState('')
    const [naw, setName] = useState('')
    const [bag, setBag] = useState('')
    const [wight, setWight] = useState('')
    const [dana, setDana] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [add, setAdd] = useState('')
    const [stock, setStock] = useState('')

    return (
        <section className="mx-auto" style={{ width: 100 + '%' }} id="items">
            <div className="container d-print-none p-5">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h5 className="mb-3 mb-md-0">گەران بۆ کاڵاکان</h5>
                    <div className="input-group news-input">
                        <input id='text' type="text" className="form-control" placeholder=""
                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />

                        <select className=" form-control " aria-label="Default select example" >
                            <option value={tradeID} onClick={()=>setTradeID("")}>کۆمپانیا</option>
                            {traders.map((trader) => (
                                <option key={trader.id} value={tradeID} onClick={(e) => setTradeID(trader)} >{trader.name}</option>
                            ))}
                        </select>
                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filterItems(tradeID.name, text)}>گەڕان</button>
                    </div>
                    {(group !== "" & tradeID !== "") ? <button className="btn btn-info d-print-none btn btn-info" data-bs-toggle="modal" data-bs-target="#modal">نوێ</button> : <></>}
                    <div className="modal fade" id="modal" tabIndex="-1" aria-hidden='true'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">کاڵایی نوێ</h5>
                                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form >

                                        <label for="name" className="form-label">ناو</label>
                                        <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />


                                        <label for="bag" className="form-label">جۆری بار</label>
                                        <input type="text" id="bag" className="form-control" aria-describedby="bag" value={bag} onChange={(e) => setBag(e.target.value)} />

                                        <label for="wight" className="form-label">وەزن دانە</label>
                                        <input type="number" id="wight" className="form-control" aria-describedby="wight" value={wight} onChange={(e) => setWight(e.target.value)} />

                                        <label for="quantity" className="form-label">دانە</label>
                                        <input type="number" id="quantity" className="form-control" aria-describedby="quantity" value={dana} onChange={(e) => setDana(e.target.value)} />

                                        <label for="price" className="form-label">نرخ کڕین</label>
                                        <input type="number" id="price" className="form-control" aria-describedby="price" value={price} onChange={(e) => setPrice(e.target.value)} />

                                        <label for="add" className="form-label">دێژەی قازانج</label>
                                        <input type="number" id="add" className="form-control" aria-describedby="add" value={add} onChange={(e) => setAdd(e.target.value)} />
                                        
                                        <label for="add" className="form-label">مانەوەی یەکەمجار</label>
                                        <input type="number" id="add" className="form-control" aria-describedby="add" value={stock} onChange={(e) => setStock(e.target.value)} />

                                        <label for="barcode" className="form-label">بارکۆد</label>
                                        <input type="text" id="barcode" className="form-control" aria-describedby="barcode" value={code} onChange={(e) => setCode(e.target.value)} />

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-success" type="button" onClick={() => itemPost({
                                        "name": naw,
                                        "bag": bag,
                                        "wight": wight,
                                        "quantity": dana,
                                        "barcode": code,
                                        "price": price,
                                        "addprice": add / 100,
                                        "group": group,
                                        "trader": tradeID.id,
                                        "stock": stock,
                                    })}>زیادکردن</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div className="border border-5">
                <div className="table-responsive-xl aling.center ">
                    <table className="table table-striped table-hover align-middle caption-top">
                    <caption>مەوادەکان</caption>

                        <thead>
                            <tr>
                                <th className="d-print-none">زنجیرە</th>
                                <th>بارکۆۆد</th>
                                <th>جۆر مەواد</th>
                                <th >ناوە بریکار</th>
                                <th>ناو مەواد</th>
                                <th className="d-print-none">نرخ</th>
                                <th className="d-print-none">رێژەی قازانج</th>
                                <th className="d-print-none"> نرخ فرۆش</th>
                                <th>جۆر بار</th>
                                <th  >دانە</th>
                                <th className="d-print-none">وەزن دانە</th>
                                <th>وەزن بار</th>
                                <th>ماوە</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <th className="d-print-none">{item.id}</th>
                                    <th>{item.barcode}</th>
                                    <th>{item.group}</th>
                                    <th >{item.trader}</th>
                                    <th>{item.name}</th>
                                    <th className="d-print-none">{item.price}$</th>
                                    <th className="d-print-none">{item.addprice}%</th>
                                    <th className="d-print-none">{item.finalprice}$</th>
                                    <th>{item.bag}</th>
                                    <th > {item.quantity} دانە</th>
                                    <th className="d-print-none">{item.wight} کگم</th>
                                    <th >{item.wightAll} کگم</th>
                                    <th>{item.mawe} مەواد</th>
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
