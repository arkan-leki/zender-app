import axios from 'axios';
import { useEffect, useState } from 'react';
import { APIContext } from './APIContext';

const APIContextProvider = (props) => {
    const url = 'http://127.0.0.1:8000/api/'

    const [sales, setSales] = useState([])
    const [items, setItems] = useState([])
    const [cats, setCats] = useState([])
    const [carts, setCarts] = useState([])
    const [locals, setLocals] = useState([])
    const [traders, setTraders] = useState([])
    const [groups, setGroups] = useState([])
    const [vendors, setVendors] = useState([])
    const [orders, setOrders] = useState([])
    const [regions, setRegions] = useState([])
    const [banks, setBanks] = useState([])
    const [payments, setPayments] = useState([])
    const [groupId, setGroupID] = useState('')
    const [group, setGroup] = useState([])
    const [vendorId, setVendorID] = useState('')
    const [chartData, setChartData] = useState({});

    const fetchGroups = async () => {
        const res = await fetch(url + 'groups/?format=json')
        const data = await res.json()
        return data
    }
    const fetchVendors = async () => {
        const res = await axios.get(url + 'vendors/?format=json')
        const data = await res.data
        return data
    }
    const fetchTraders = async () => {
        const res = await axios.get(url + 'traders/?format=json&group=' + groupId)
        const data = await res.data
        return data
    }
    const fetchItems = async () => {
        const res = await fetch(url + 'items/?format=json&group=' + groupId)
        const data = await res.json()
        return data
    }

    const chart = () => {
        let empSal = [];
        let empAge = [];
        axios
            .get(url + 'bank/?format=json')
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    if (!empAge.includes(dataObj.date)) {
                        empAge.push(dataObj.date);
                        let bold = res.data.filter((val) => (
                            val.date == dataObj.date
                        ))
                        empSal.push(Object.values(bold).reduce((r, { income, loan }) => r + (parseFloat(income) - parseFloat(loan)), 0))
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

    useEffect(() => {
        const getItems = async () => {
            const server = await fetchItems()
            setItems(server)
        }
        getItems()
    }, [])
    useEffect(() => {
        const getGroups = async () => {
            const server = await fetchGroups()
            setGroups(server)
        }
        getGroups()
    }, [])
    useEffect(() => {
        const getVendors = async () => {
            const server = await fetchVendors()
            setVendors(server)
        }
        getVendors()
    }, [])
    useEffect(() => {
        const getTraders = async () => {
            const server = await fetchTraders()
            setTraders(server)
        }
        getTraders()
    }, [])


    const setGroupEvent = (id) => {
        setGroupID(id)
    }
    const setVendorEvent = (id) => {
        setVendorID(id)
    }

    const Currency = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const value = { groups, setGroupEvent, vendors, setVendorEvent, chartData, traders, items, Currency }

    return (
        <APIContext.Provider value={value}>
            {props.children}
        </APIContext.Provider>
    )
}

export default APIContextProvider
