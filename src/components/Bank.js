import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import * as moment from 'moment'

const Bank = ({ banks, addBuy, group }) => {

    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [ho, setHo] = useState('')
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
            {group ? <button className="btn btn-success " data-bs-toggle="modal" data-bs-target="#pay">گۆرینی قاسە</button> : <></>}
            <div className="modal fade" id="pay" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی قاسە</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <label for="ho" className="form-label">هۆکار</label>
                                <input type="text" id="ho" className="form-control" aria-describedby="ho" value={ho} onChange={(e) => setHo(e.target.value)} />
                                <label for="income" className="form-label">رۆشتوو</label>
                                <input type="number" id="income" className="form-control" aria-describedby="income" value={income} onChange={(e) => setIncome(e.target.value)} />
                                <label for="loan" className="form-label">هاتوو </label>
                                <input type="number" id="loan" className="form-control" aria-describedby="loan" value={loan} onChange={(e) => setLoan(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addBuy(
                                    {
                                        "name": ho,
                                        "group": group,
                                        "bank": null
                                    },
                                    {
                                        "group": group,
                                        "income": loan,
                                        "loan": income
                                    }
                                )}
                                >خەزن</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
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
