import React, { useState } from 'react'
import Select from 'react-select'

const NewItem = ({itemPost,traders,cats,group}) => {
    const [naw, setName] = useState('')
    const [tradeID, setTradeID] = useState('')
    const [bag, setBag] = useState('')
    const [wight, setWight] = useState('')
    const [dana, setDana] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [add, setAdd] = useState('')
    const [stock, setStock] = useState('')
    const [catID, setCatID] = useState('')
    const options = traders.map((city) => ({ value: city.id, label: city.name }))
    const optioncats = cats.map((city) => ({ value: city.id, label: city.name }))

    return (
        <div>
            <button className="btn btn-success " data-bs-toggle="modal" data-bs-target="#modal">زیادکردنی کاڵا</button>
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
                                <label for="name" className="form-label">جۆری کاڵا</label>
                                <Select onChange={(e) => setCatID(e.value)} options={optioncats} />
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
                                <label for="name" className="form-label">کۆمپانیا</label>
                                <Select onChange={(e) => setTradeID(e.value)} options={options} />
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
                                "trader": tradeID,
                                "stock": stock,
                                "image": null,
                                "deleted": false,
                                "category": catID,
                            })}>زیادکردن</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewItem
