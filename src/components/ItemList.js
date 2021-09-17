import React, { useState } from 'react'
import Item from './Item'
import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom';


const ItemList = ({ items, addtoListEvent, url, search }) => {
    let { id } = useParams();
    const [text, setText] = useState('')


    return (

        <div className="modal fade" id="newForm" tabIndex="-1" aria-hidden='true'>
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">کۆمپانیاکان</h5>
                        <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>
                    <div className="container">
                        <Link to={`/${url}/${id}`}><button className="btn btn-danger">go back</button></Link>
                        <h1 className="align-left">items</h1>
                        <div className="row row-cols-1 row-cols-md-4 text-center g-4">
                            {items.map((item, index) => (
                                <Item key={index} item={item} addtoList={addtoListEvent} />
                            )
                            )}
                        </div>
                    </div>
                    <div className="modal-body">
                        <Link to={`/${url}/${id}`}><button className="btn btn-danger">go back</button></Link>
                        <h1 className="align-left">items</h1>
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
        </div>

    )
}

export default ItemList
