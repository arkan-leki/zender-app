import './App.css';
import image from './Lays-Logo.png';

import { useState } from 'react'
import Sales from './components/Sales'
import { useEffect } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SaleForm from './components/SaleForm';
import Header from './components/Header';
import moment from 'moment';
import OrderHatu from './components/OrderHatu';
import OrderForm from './components/OrderForm';
import Items from './components/Items'
import { Locals } from './components/Locals';
import Trader from './components/Trader';
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
  const [carts, setCarts] = useState([])
  const [locals, setLocals] = useState([])
  const [traders, setTraders] = useState([])
  const [groups, setGroups] = useState([])
  const [vendors, setVendors] = useState([])
  const [orders, setOrders] = useState([])
  const [regions, setRegions] = useState([])
  const [groupId, setGroupID] = useState('')
  const [vendorId, setVendorID] = useState('')


  useEffect(() => {
    const getOrders = async () => {
      const server = await fetchOrders()
      setOrders(server)
    }
    getOrders()
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
    const res = await fetch('http://127.0.0.1:8000/sells/?format=json&group=' + groupId + '&vendor=' + vendorId)
    const data = await res.json()
    return data
  }

  const fetchTraders = async () => {
    const res = await fetch('http://127.0.0.1:8000/traders/?format=json&group=' + groupId)
    const data = await res.json()
    return data
  }

  const fetchVendors = async () => {
    const res = await fetch('http://127.0.0.1:8000/vendors/?format=json')
    const data = await res.json()
    return data
  }

  const fetchOrders = async () => {
    const res = await fetch('http://127.0.0.1:8000/orders/?format=json&group=' + groupId)
    const data = await res.json()
    return data
  }


  const fetchLocals = async () => {
    const res = await fetch('http://127.0.0.1:8000/locals/?format=json')
    const data = await res.json()
    return data
  }

  const fetchItems = async () => {
    const res = await fetch('http://127.0.0.1:8000/items/?format=json&group=' + groupId)
    const data = await res.json()
    return data
  }

  const fetchGroups = async () => {
    const res = await fetch('http://127.0.0.1:8000/groups/?format=json')
    const data = await res.json()
    return data
  }

  const fetchRegions = async () => {
    const res = await fetch('http://127.0.0.1:8000/region/?format=json')
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
    const res = await fetch('http://127.0.0.1:8000/sell/' + id + '/',
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(discount)

      })

    const data = res.json()
    const getSales = async () => {
      const server = await fetchSales()
      setSales(server)
    }
    getSales()

  }

  const addGoEvent = async (kala) => {
    const res = await fetch('http://127.0.0.1:8000/sale/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(kala)

      })

    const data = res.json()
    const getSales = async () => {
      const server = await fetchSales()
      setSales(server)
    }
    getSales()
    setCarts(carts.filter((mob) => mob.id !== kala.item))
  }


  const addOrder = async (args) => {
    const res = await fetch('http://127.0.0.1:8000/order/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(args)

      })

    const data = res.json()
    const getOrders = async () => {
      const server = await fetchOrders()
      setOrders(server)
    }
    getOrders()

  }

  const addForm = async (args) => {
    const res = await fetch('http://127.0.0.1:8000/sell/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(args)

      })

    const data = res.json()
    const getSales = async () => {
      const server = await fetchSales()
      setSales(server)
    }
    getSales()

  }

  const search = async (text) => {
    console.log(text);
    const server = await fetchLocals()
    setLocals(server)
    if (text != "") {
      setLocals(locals.filter((people) => {
        return people.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.region.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.owner_name.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    }

  }


  const itemFilter = async (text) => {
    console.log(text);
    const server = await fetchItems()
    setItems(server)
    if (text != "") {

      setItems(items.filter((kala) => {
        return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.group.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
      console.log(items);
    }

  }

  const getState = async () => {
    const server = await fetchOrders()
    setOrders(server)
    const server1 = await fetchSales()
    setSales(server1)
    const server2 = await fetchItems()
    setItems(server2)
    const server4 = await fetchTraders()
    setTraders(server4)
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

  const filterBydate = async (date) => {
    if (date) {
      setSales(sales.filter((sale) => (
        moment(new Date(sale.date)).format("yyyy-MM-DD") == date
      )))
      setOrders(orders.filter((sale) => (
        moment(new Date(orders.date)).format("yyyy-MM-DD") == date
      )))
    }
  }




  const addBuyEvent = async (kala, price) => {
    const res = await fetch('http://127.0.0.1:8000/ordered/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(kala)

      })
    const res2 = await fetch('http://127.0.0.1:8000/item/' + kala.item + "/",
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
    const res = await fetch('http://127.0.0.1:8000/order/' + id + '/',
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
    const server = await fetchItems()
    setItems(server)
    if (text != "") {

      setItems(items.filter((kala) => {
        return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.trader.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    } else if (traderId != "") {
      setItems(items.filter((kala) => {
        return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          kala.trader.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    }
  }

  const itemPost = async (post) => {
    const res = await fetch('http://127.0.0.1:8000/item/',
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
    const res = await fetch('http://127.0.0.1:8000/group/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    const getGroups = async () => {
      const server = await fetchGroups()
      setGroups(server)
    }
    getGroups()
  }

  const addLocal = async (post) => {
    const res = await fetch('http://127.0.0.1:8000/local/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    const getLocals = async () => {
      const server = await fetchLocals()
      setLocals(server)
    }
    getLocals()
  }

  const addRegion = async (post) => {
    const res = await fetch('http://127.0.0.1:8000/region/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    const getRegions = async () => {
      const server = await fetchRegions()
      setRegions(server)
    }
    getRegions()
  }

  const addTrade = async (post) => {
    const res = await fetch('http://127.0.0.1:8000/trader/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    const getTraders = async () => {
      const server = await fetchTraders()
      setTraders(server)
    }
    getTraders()
  }

  const addVendor = async (post) => {
    const res = await fetch('http://127.0.0.1:8000/vendors/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    const getVendors = async () => {
      const server = await fetchVendors()
      setVendors(server)
    }
    getVendors()
  }

  return (
    <Router>
      <div className=''>

        <Header regions={regions} addGroup={addGroupEvent} vendors={vendors} groups={groups} setGroupEvent={setGroupEvent} setVendorEvent={setVendorEvent} addVendor={addVendor} />
        <Route path='/order' exact render={(props) => (
          <>
            <OrderHatu filterBydate={filterBydate} orders={orders} group={groupId} traders={traders} search={search} addOrder={addOrder} />
          </>
        )}
        />
        <Route path='/locals' exact render={(props) => (
          <>
            <Locals locals={locals} group={groupId} regions={regions} addLocal={addLocal} addRegion={addRegion} />
          </>
        )}
        />
         <Route path='/traders' exact render={(props) => (
          <>
            <Trader traders={traders} group={groupId}  addTrade={addTrade}  />
          </>
        )}
        />
        <Route path='/items' exact render={(props) => (
          <>
            <Items items={items} group={groupId} traders={traders} filterItems={filterItems} itemPost={itemPost} />
          </>
        )}
        />
        <Route path='/forms' exact render={(props) => (
          <>
            <Sales filterBydate={filterBydate} vendor={vendorId} group={groupId} search={search} locals={locals} sales={sales} addForm={addForm} />
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
      </div>

    </Router>
  )
}

export default App;
