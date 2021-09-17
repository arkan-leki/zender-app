import React, { useState } from 'react'
import Item from './Item'
import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom';


const ItemList = ({ items, addtoListEvent, url ,search}) => {
    let { id } = useParams();
    const [text, setText] = useState('')


    return (
        <section className="p-5" id="items">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h5 className="mb-3 mb-md-0">گەران بۆ کاڵاکان</h5>
                    <div className="input-group news-input">
                        <input id='text' type="text" className="form-control" placeholder="بەرزترین نرخ بنوسە کە دەتوانیت بیبەخشی"
                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />
                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => search(text)}>گەڕان</button>
                    </div>
                </div>
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
        </section>
    )
}

export default ItemList
