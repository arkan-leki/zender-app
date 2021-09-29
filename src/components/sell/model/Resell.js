import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';

const Resell = ({ sale, addReSell }) => {
    const [dana, setDana] = useState(0)
    const [items, setItems] = useState([])
    return (
        <div>
            <button className="btn btn-success fs-4" data-bs-toggle="modal" data-bs-target="#resell" onClick={() =>
                setItems(sale.sell_detail)
            }>گەڕانەوە لەفرۆش <FontAwesomeIcon icon={faBoxOpen} /></button>
            <div className="modal fade" id="resell" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">گەڕانەوە لەفرۆش</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <table className="table table-striped">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">کاڵا</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, index) => (
                                            <tr key={index}>
                                                <td scope="row">{item.item}</td>
                                                <td>{item.item_code}</td>
                                                <td>{item.price}</td>
                                                <td><input type="number" name="dana" id="dana" value={dana} onChange={(e) => setDana(e.target.value)} /></td>
                                                <td><button className="btn btn-info" type="button" onClick={() => addReSell({ "quantity": dana, "price": item.price, "sell": item.sell, "item": item.item_id })}>گەڕانەوە</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resell
