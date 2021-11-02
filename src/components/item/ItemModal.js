import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Select from 'react-select'
import Item from './Item'

const ItemModal = ({ items, addtoListEvent, searchItem, cats }) => {
    const [text, setText] = useState('')
    const [catID, setCatID] = useState('')
    const optioncats = [{ value: '', label: 'hich' }, ...cats.map((city) => ({ value: city.id, label: city.name }))]

    return (
        <><button className=" m-1 col-md-4  btn btn-success d-print-none fs-4" data-bs-toggle="modal" data-bs-target="#newForm">زیادکردن <FontAwesomeIcon icon={faCartPlus} /></button>
            <div className="modal fade" id="newForm" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-1">کاڵاکان</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="container">
                            <div className="d-md-flex justify-content-between align-items-center">
                                <h5 className="mb-3 mb-md-0 fs-3">گەران بۆ کاڵاکان</h5>
                                <div className="input-group news-input">
                                    <Select className="form-control fs-4" onChange={(e) => setCatID(e.value)} options={optioncats} />
                                    <input id='text' type="text" className="form-control fs-4" placeholder=""
                                        aria-label="Eneter Your price " aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />
                                    <button className="btn btn-dark fs-4" type="button" id="button-addon2" onClick={() => searchItem(text, catID)}>گەڕان <FontAwesomeIcon icon={faSearch} /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h1 className="align-left">کاڵاکان</h1>
                            <div className="row row-cols-1 row-cols-md-4 text-center g-4">
                                {items.map((item, index) => (
                                    <Item key={index} item={item} addtoList={addtoListEvent} />
                                )
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default ItemModal
