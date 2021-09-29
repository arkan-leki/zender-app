import React, { useState } from 'react'
// import { useParams } from 'react-router';
import Select from 'react-select';

const ItemForm = ({ item, cats, itemEdit }) => {
    // let { id } = useParams();
    // let itemz = items.filter((mob) => mob.id == id)
    const [naw, setName] = useState(item.name)
    // const [tradeID, setTradeID] = useState('')
    const [bag, setBag] = useState(item.bag)
    const [wight, setWight] = useState(item.wight)
    const [dana, setDana] = useState(item.quantity)
    const [code, setCode] = useState(item.barcode)
    const [price, setPrice] = useState(item.price)
    const [add, setAdd] = useState(item.addprice * 100)
    const [stock, setStock] = useState(item.stock)
    const [catID, setCatID] = useState(item.category)
    const optioncats = cats.map((city) => ({ value: city.id, label: city.name }))

    return (
        <div>
            <form class="row g-3">
                <h1>زانیاری کڕیار</h1>
                <div className="row">
                    <div className="col-4">
                        <label for="name" className="form-label">ناو</label>
                        <input placeholder={item.name} type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <label for="cat" className="form-label">جۆری کاڵا</label>
                        <Select placeholder={item.category_name} defaultValue={optioncats[item.category - 1]} onChange={(e) => setCatID(e.value)} options={optioncats} />
                    </div>
                    <div className="col-4">
                        <label for="bag" className="form-label">جۆری بار</label>
                        <input placeholder={item.bag} type="text" id="bag" className="form-control" aria-describedby="bag" value={bag} onChange={(e) => setBag(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label for="wight" className="form-label">وەزن دانە</label>
                        <input placeholder={item.wight} type="number" id="wight" className="form-control" aria-describedby="wight" value={wight} onChange={(e) => setWight(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <label for="quantity" className="form-label">دانە</label>
                        <input placeholder={item.quantity} type="number" id="quantity" className="form-control" aria-describedby="quantity" value={dana} onChange={(e) => setDana(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <label for="price" className="form-label">نرخ کڕین</label>
                        <input placeholder={item.price} type="number" id="price" className="form-control" aria-describedby="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label for="add" className="form-label">ڕێژەی قازانج</label>
                        <input placeholder={item.addprice * 100} type="number" id="add" className="form-control" aria-describedby="add" value={add} onChange={(e) => setAdd(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <label for="stock" className="form-label">مانەوەی یەکەمجار</label>
                        <input placeholder={item.stock} type="number" id="stock" className="form-control" aria-describedby="add" value={stock} onChange={(e) => setStock(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <label for="barcode" className="form-label">بارکۆد</label>
                        <input placeholder={item.barcode} type="text" id="barcode" className="form-control" aria-describedby="barcode" value={code} onChange={(e) => setCode(e.target.value)} />
                        <label for="name" className="form-label">کۆمپانیا {item.trader}</label>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-success fa fa-save" type="button" onClick={() => itemEdit(item.id, {
                        "name": naw,
                        "bag": bag,
                        "wight": wight,
                        "quantity": dana,
                        "barcode": code,
                        "price": price,
                        "addprice": add / 100,
                        "stock": stock,
                        "image": null,
                        "deleted": false,
                        "category": catID,
                    })}>نوێکردنەوە </button>

                </div>
            </form>
        </div>
    )
}

export default ItemForm
