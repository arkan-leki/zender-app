import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import axios from 'axios'
import ItemForm from './ItemForm';

const ItemDetail = ({ itemEdit }) => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [cats, setCat] = useState([]);
    const [items, setItems] = useState([]);

    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/sale/").then(res => {
            console.log(res);
            setData(res.data.filter((mob) => mob.item == id))
        }).catch(err => {
            console.log(err);
        })
    }

    const fetchCats = () => {
        axios.get("http://127.0.0.1:8000/api/cat/").then(res => {
            console.log(res);
            setCat(res.data)
        }).catch(err => {
            console.log(err);
        })
    }
    const fetchItems = () => {
        axios.get("http://127.0.0.1:8000/api/items/" + id + "/").then(res => {
            console.log(res);
            setItems(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData();
        fetchCats();
        fetchItems()
    }, []);

    return (
        <div className="row">
            <div className="d-print-none col border border-3 m-5">
                <ItemForm item={items} cats={cats} itemEdit={itemEdit} />
            </div>
            <div className="table-responsive-xl aling.center border border-3 col m-5 ">
                <table className="table table-striped table-hover align-middle caption-top">
                    <caption>دەرچوونەکان {items.name}</caption>
                    <thead>
                        <tr>
                            <th># زنجیرە</th>
                            <th> دانە </th>
                            <th> نرخ</th>
                            <th> بەروار</th>
                            <th> وەسڵ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <th>{item.id}</th>
                                <th>{item.quantity}</th>
                                <th>{item.price}$</th>
                                <th>{item.date}</th>
                                <th>{item.sell}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemDetail
