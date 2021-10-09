import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import Currency from '../../Currency'

const Cart = ({waslid, addGO, kala,_deleteEvent }) => {
    const [text, setText] = useState(kala.mawe)

    return (
        <tr className="d-print-none">
            <th scope="row">{kala.id}</th>
            <th scope="row" >{kala.barcode}</th>
            <th scope="row" >{kala.name}</th>
            <th ><input placeholder={kala.mawe} className="formt-control" id={kala.id} type="number" onChange={(e) => setText(e.target.value)} /></th>
            <th scope="row" >{Currency(parseFloat(kala.price))}</th>
            <th >{Currency(text * kala.finalprice)}</th>
            <th className="d-print-none ">
                <button className="btn btn-danger  fs-4" type="button" id="button-addon2" onClick={() => _deleteEvent(kala.id)}>سڕینەوە <FontAwesomeIcon icon={faTrash} /></button>
            </th>
            <th className="d-print-none ">
                <button className="btn btn-info fs-4" onClick={() => addGO({
                    "quantity": text,
                    "price": kala.finalprice,
                    "sell": waslid,
                    "item": kala.id
                })}> خەزن <FontAwesomeIcon icon={faSave} /></button>
            </th>
        </tr>
    )
}

export default Cart
