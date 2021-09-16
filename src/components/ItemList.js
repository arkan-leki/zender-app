import React from 'react'
import Item from './Item'
import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom';


const ItemList = ({ items ,addtoListEvent, url}) => {
    let { id } = useParams();

    return (
        <section className="p-5" id="items">
            <div className="container">
                <Link to={`/${url}/${id}`}><button className="btn btn-danger">go back</button></Link>
                <h1 className="align-left">items</h1>
                <div className="row row-cols-1 row-cols-md-4 text-center g-4">
                    {items.map((item,index) => (
                        <Item key={index} item={item} addtoList={addtoListEvent} />
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default ItemList
