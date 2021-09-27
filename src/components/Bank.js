import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import * as moment from 'moment'

const Bank = ({ banks, addBuy, group }) => {

    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

    const eco = Object.values(banks).reduce((r, { income }) => r + parseFloat(income), 0);
    const loa = Object.values(banks).reduce((r, { loan }) => r + parseFloat(loan), 0);

    const chart = () => {
        let empSal = [];
        let empAge = [];
        axios
            .get("http://127.0.0.1:8000/api/bank/")
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    if(!empAge.includes(dataObj.date)){
                        empAge.push(dataObj.date);
                        let bold = res.data.filter((val)=> (
                            val.date == dataObj.date
                        ))
                        empSal.push(Object.values(bold).reduce((r, { income,loan }) => r + (parseFloat(income)-parseFloat(loan)), 0))
                    }
            
                }
                setChartData({
                    labels: empAge,
                    datasets: [
                        {
                            label: "level of thiccness",
                            data: empSal,
                            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                            borderWidth: 4
                        }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            });
        console.log(empSal, empAge);
    };

    useEffect(() => {
        chart();
    }, []);

    return (
        <div className="row">
             <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne">
                            <ul className="list-group col-md-4">
                                <li class="list-group-item"> ماوە {Object.values(banks.filter((voka)=>(moment(new Date(voka.date)).format("DD/MM/YYYY") == moment(new Date()).format("DD/MM/YYYY")))).reduce((r, { income,loan }) => r + (parseFloat(income)-parseFloat(loan)), 0)}$</li>
                                <li class="list-group-item"> هاتوو {Object.values(banks.filter((voka)=>(moment(new Date(voka.date)).format("DD/MM/YYYY") == moment(new Date()).format("DD/MM/YYYY")))).reduce((r, { income,loan }) => r + (parseFloat(income)), 0)}$</li>
                                <li class="list-group-item">دەرچوو {Object.values(banks.filter((voka)=>(moment(new Date(voka.date)).format("DD/MM/YYYY") == moment(new Date()).format("DD/MM/YYYY")))).reduce((r, { income,loan }) => r + (parseFloat(loan)), 0)}$</li>
                            </ul>
                        </button>
                    </h2>
                    <div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>هاتوو </th>
                                        <th>رۆشتوو</th>
                                        <th>گروپ</th>
                                        <th>بەروار</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {banks.filter((voka)=>(moment(new Date(voka.date)).format("DD/MM/YYYY") == moment(new Date()).format("DD/MM/YYYY"))).map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.id}</td>
                                            <td>{e.income}$</td>
                                            <td>{e.loan}$</td>
                                            <td>{e.group_name}</td>
                                            <td>{e.date}</td>
                                        </tr>
                                    ))}

                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <ul className="list-group col-md-4">
                                <li class="list-group-item"> ماوە {eco - loa}$</li>
                                <li class="list-group-item"> هاتوو {eco}$</li>
                                <li class="list-group-item">دەرچوو {loa}$</li>
                            </ul>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>هاتوو </th>
                                        <th>رۆشتوو</th>
                                        <th>گروپ</th>
                                        <th>بەروار</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {banks.map((e) => (
                                        <tr key={e.id}>
                                            <td>{e.id}</td>
                                            <td>{e.income}$</td>
                                            <td>{e.loan}$</td>
                                            <td>{e.group_name}</td>
                                            <td>{e.date}</td>
                                        </tr>
                                    ))}

                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:100+'%'}} dir='rtl'>
                <h1>ئامار</h1>
                <div>
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            title: { text: "THICCNESS SCALE", display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                ],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                ]
                            }
                        }}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Bank
