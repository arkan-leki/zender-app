import './App.css';
import image from './Lays-Logo.png';
import { useState } from 'react'
import Sales from './components/Sales'
import { useEffect } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SaleForm from './components/SaleForm';
import Header from './components/Header';
import moment from 'moment';
import OrderHatu from './components/OrderHatu';
import OrderForm from './components/OrderForm';
import Items from './components/Items'
import { Locals } from './components/Locals';
import Trader from './components/Trader';
import Bank from './components/Bank';
import Payments from './components/Payments';
import PaymentForm from './components/PaymentForm';
import LocalForm from './components/LocalForm';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



const App = () => {
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
  const [vendorId, setVendorID] = useState('')
  const url = 'http://127.0.0.1:8000/api/'

  useEffect(() => {
    const getOrders = async () => {
      const server = await fetchOrders()
      setOrders(server)
    }
    getOrders()
  }, [])

  useEffect(() => {
    const getPayments = async () => {
      const server = await fetchPayments()
      setPayments(server)
    }
    getPayments()
  }, [])

  useEffect(() => {
    const getCats = async () => {
      const server = await fetchCats()
      setCats(server)
    }
    getCats()
  }, [])

  useEffect(() => {
    const getBanks = async () => {
      const server = await fetchBanks()
      setBanks(server)
    }
    getBanks()
  }, [])

  useEffect(() => {
    const getTraders = async () => {
      const server = await fetchTraders()
      setTraders(server)
    }
    getTraders()
  }, [])

  useEffect(() => {
    const getVendors = async () => {
      const server = await fetchVendors()
      setVendors(server)
    }
    getVendors()
  }, [])

  useEffect(() => {
    const getRegions = async () => {
      const server = await fetchRegions()
      setRegions(server)
    }
    getRegions()
  }, [])


  useEffect(() => {
    const getGroups = async () => {
      const server = await fetchGroups()
      setGroups(server)
    }
    getGroups()
  }, [])


  useEffect(() => {
    const getLocals = async () => {
      const server = await fetchLocals()
      setLocals(server)
    }
    getLocals()
  }, [])

  useEffect(() => {
    const getSales = async () => {
      const server = await fetchSales()
      setSales(server)
    }
    getSales()
  }, [])

  useEffect(() => {
    const getItems = async () => {
      const server = await fetchItems()
      setItems(server)
    }
    getItems()
  }, [])

  const fetchSales = async () => {
    const res = await fetch(url + 'sells/?format=json&group=' + groupId + '&vendor=' + vendorId)
    const data = await res.json()
    return data
  }

  const fetchTraders = async () => {
    const res = await fetch(url + 'traders/?format=json&group=' + groupId)
    const data = await res.json()
    return data
  }

  const fetchVendors = async () => {
    const res = await fetch(url + 'vendors/?format=json')
    const data = await res.json()
    return data
  }

  const fetchOrders = async () => {
    const res = await fetch(url + 'orders/?format=json&group=' + groupId)
    const data = await res.json()
    return data
  }


  const fetchLocals = async () => {
    const res = await fetch(url + 'locals/?format=json')
    const data = await res.json()
    return data
  }

  const fetchItems = async () => {
    const res = await fetch(url + 'items/?format=json&group=' + groupId)
    const data = await res.json()
    return data
  }

  const fetchGroups = async () => {
    const res = await fetch(url + 'groups/?format=json')
    const data = await res.json()
    return data
  }
  const fetchPayments = async () => {
    const res = await fetch(url + 'payment/?format=json')
    const data = await res.json()
    return data
  }
  const fetchRegions = async () => {
    const res = await fetch(url + 'region/?format=json')
    const data = await res.json()
    return data
  }

  const fetchBanks = async () => {
    const res = await fetch(url + 'bank/?format=json&group=' + groupId)
    const data = await res.json()

    return data
  }

  const fetchCats = async () => {
    const res = await fetch(url + 'cat/?format=json&group=' + groupId)
    const data = await res.json()

    return data
  }

  const addtoListEvent = (item) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newCart = { id, ...item }
    setCarts([...carts, item])
  }

  const deleteFromList = (id) => {
    setCarts(carts.filter((mob) => mob.id !== id))
  }

  const dashkanEvent = async (id, discount) => {
    const res = await fetch(url + 'sell/' + id + '/',
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(discount)

      })

    // const data = res.json()
    getState()

  }

  const addGoEvent = async (kala) => {
    const res = await fetch(url + 'sale/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(kala)

      })

    getState()
    setCarts(carts.filter((mob) => mob.id !== kala.item))
  }


  const addOrder = async (args) => {
    const res = await fetch(url + 'order/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(args)

      })

    // const data = res.json()
    getState()

  }

  const addForm = async (args) => {
    const res = await fetch(url + 'sell/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(args)

      })

    // const data = res.json()
    getState()
  }

  const searchTrader = async (text) => {
    const server = await fetchTraders()
    setTraders(server)
    if (text !== "") {
      setTraders(traders.filter((people) => {
        return people.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.code.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.id.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    }

  }


  const search = async (text) => {
    const server = await fetchLocals()
    setLocals(server)
    if (text !== "") {
      setLocals(locals.filter((people) => {
        return people.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.region.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.owner_name.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    }

  }


  const itemFilter = async (text) => {
    const server = await fetchItems()
    setItems(server)
    if (text !== "") {

      setItems(items.filter((kala) => {
        return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.group.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    }

  }

  const getState = async () => {
    let server = await fetchOrders()
    setOrders(server)
    server = await fetchSales()
    setSales(server)
    server = await fetchItems()
    setItems(server)
    server = await fetchTraders()
    setTraders(server)
    server = await fetchBanks()
    setBanks(server)
    server = await fetchLocals()
    setLocals(server)
    server = await fetchCats()
    setCats(server)
    server = await fetchPayments()
    setPayments(server)
    server = await fetchRegions()
    setRegions(server)
    server = await fetchVendors()
    setVendors(server)
  }

  const setGroupEvent = (id) => {
    setGroupID(id)
    setItems([])
    setSales([])
    setTraders([])
    getState()
  }

  const setVendorEvent = (id, group) => {
    setVendorID(id)
    setGroupID(group)
    setItems([])
    setSales([])
    getState()
  }

  const filterBydate = async (date, id) => {
    console.log(id);
    setSales(sales.filter((sale) => (
      sale.local_id === id 
    )))
    if ((Boolean(date))) {

      setSales(sales.filter((sale) => (
        moment(new Date(sale.date)).format("yyyy-MM-DD") === date 
      )))
      setOrders(orders.filter((orders) => (
        moment(new Date(orders.date)).format("yyyy-MM-DD") === date
      )))

    } 
    // const res = await fetch(url+'sells/?group=' + groupId+'&local_id='+id)
    // const data = await res.json()
    // setSales(data)


  }




  const addBuyEvent = async (kala, price) => {
    const res = await fetch(url + 'ordered/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(kala)

      })
    const res2 = await fetch(url + 'item/' + kala.item + "/",
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(price)

      })

    getState()
    setCarts(carts.filter((mob) => mob.id !== kala.item))
  }

  const dashkanBuyEvent = async (id, discount) => {
    const res = await fetch(url + 'order/' + id + '/',
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(discount)

      })

    getState()

  }

  const filterItems = async (traderId, text) => {

    console.log(Boolean(traderId));

    if (traderId && text) {
      setItems(items.filter((kala) => {
        return kala.trader.toString().toLowerCase().includes(traderId.toString().toLowerCase()) && (kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()))
      }))
    } else if (traderId) {
      setItems(items.filter((kala) => {
        return kala.trader.toString().toLowerCase().includes(traderId.toString().toLowerCase())
      }))
    } else if (text) {
      setItems(items.filter((kala) => {
        return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.trader.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    } else {
      const server = await fetchItems()
      setItems(server)
    }
  }

  const itemPost = async (post) => {
    const res = await fetch(url + 'item/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    getState()

  }

  const addGroupEvent = async (post) => {
    const res = await fetch(url + 'group/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    let server = await fetchGroups()
    setGroups(server)
    getState()
  }

  const addLocal = async (post) => {
    const res = await fetch(url + 'local/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    getState()
  }

  const addRegion = async (post) => {
    const res = await fetch(url + 'region/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    getState()
  }


  const addCat = async (post) => {
    const res = await fetch(url + 'cat/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    getState()
  }

  const addTrade = async (post) => {
    const res = await fetch(url + 'trader/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    getState()
  }

  const addVendor = async (post) => {
    const res = await fetch(url + 'vendors/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    getState()
  }

  const addpay = async (pay, bank) => {
    const res = await fetch(url + 'bank/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(bank)

      })

    const data = res.json()
    data.then(async (d) => {
      console.log(d.id)
      await fetch(url + 'payment/',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            "group": pay.group,
            "local": pay.local,
            "bank": d.id
          })
        })
    })

    getState()
  }

  const addPayLoan = async (pay, bank) => {
    const res = await fetch(url + 'bank/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(bank)

      })

    const data = res.json()
    data.then(async (d) => {
      console.log(d.id)
      await fetch(url + 'payloan/',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            "group": pay.group,
            "trader": pay.trader,
            "bank": d.id
          })
        })
    })
    getState()
  }

  const addReSell = async (resell) => {
    const res = await fetch(url + 'resell/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(resell)

      })

    getState()

  }


  const addBuy = async (buy, bank) => {
    const res = await fetch(url + 'bank/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(bank)

      })



    const data = res.json()

    data.then(async (d) => {
      console.log(d.id)
      await fetch(url + 'buy/',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            "name": buy.name,
            "group": buy.group,
            "bank": d.id
          })
        })
    })
    getState()
  }
  return (
    <Router>
      <div className=''>

        <Header addTrade={addTrade}  addLocal={addLocal} cats={cats} items={items} group={groupId} traders={traders} filterItems={filterItems} itemPost={itemPost} addCat={addCat} addRegion={addRegion} regions={regions} addGroup={addGroupEvent} vendors={vendors} groups={groups} setGroupEvent={setGroupEvent} setVendorEvent={setVendorEvent} addVendor={addVendor} />
        <Route path='/' exact render={(props) => (
          <>
            <Bank group={groupId} banks={banks} addBuy={addBuy} />
          </>
        )}
        />
        <Route path='/order' exact render={(props) => (
          <>
            <OrderHatu searchTrader={searchTrader} filterBydate={filterBydate} orders={orders} group={groupId} traders={traders} search={search} addOrder={addOrder} />
          </>
        )}
        />
        <Route path='/locals' exact render={(props) => (
          <>
            <Locals addpay={addpay} locals={locals} group={groupId} regions={regions}  addRegion={addRegion} />
          </>
        )}
        />

        <Route path='/localForm/:id' exact render={(props) => (
          <>
            <LocalForm locals={locals} image={image} />
          </>
        )}
        />
        <Route path='/traders' exact render={(props) => (
          <>
            <Trader traders={traders} group={groupId} addPayLoan={addPayLoan} />
          </>
        )}
        />
        <Route path='/items' exact render={(props) => (
          <>
            <Items cats={cats} items={items} group={groupId} traders={traders} filterItems={filterItems} itemPost={itemPost} />
          </>
        )}
        />
        <Route path='/forms' exact render={(props) => (
          <>
            <Sales addReSell={addReSell} items={items} filterBydate={filterBydate} vendor={vendorId} group={groupId} search={search} locals={locals} sales={sales} addForm={addForm} />
          </>
        )}
        />
        <Route path='/form/:id' exact render={(props) => (
          <>
            <SaleForm addtoListEvent={addtoListEvent} image={image} group={groupId} carts={carts} sales={sales} items={items} deleteEvent={deleteFromList} addGO={addGoEvent} dashkan={dashkanEvent} />
          </>
        )}
        />

        <Route path='/order/:id' exact render={(props) => (
          <>
            <OrderForm items={items} addtoListEvent={addtoListEvent} search={itemFilter} group={groupId} image={image} orders={orders} carts={carts} deleteEvent={deleteFromList} addGO={addBuyEvent} dashkan={dashkanBuyEvent} />
          </>
        )}
        />

        <Route path='/payments' exact render={(props) => (
          <>
            <Payments payments={payments} locals={locals} group={groupId} addpay={addpay} />
          </>
        )}
        />

        <Route path='/paymentForm/:id' exact render={(props) => (
          <>
            <PaymentForm payments={payments} image={image} />
          </>
        )}
        />
      </div>

    </Router>
  )
}

export default App;
