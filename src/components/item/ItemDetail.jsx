import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import axios from 'axios'

const ItemDetail = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/sale/").then(res => {
            console.log(res);
            setData(res.data.filter((mob) => mob.item == id))
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="table-responsive-xl aling.center ">
            <table className="table table-striped table-hover align-middle caption-top">
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
    
    )
}

export default ItemDetail
