import './App.css';
import image from './zend.png';
import { useState } from 'react'
import { useEffect } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sales from './components/sell/Sales'
import SaleForm from './components/sell/SaleForm';
import Header from './components/Header';
import moment from 'moment';
import OrderHatu from './components/order/OrderHatu';
import OrderForm from './components/order/OrderForm';
import Items from './components/item/Items'
import { Locals } from './components/local/Locals';
import Trader from './components/trader/Trader';
import Bank from './components/Bank';
import Payments from './components/payment/Payments';
import PaymentForm from './components/payment/PaymentForm';
import LocalForm from './components/local/LocalForm';
import ItemForm from './components/item/ItemForm';
import ItemDetail from './components/item/ItemDetail';
import Pending from './components/Pending';
import axios from 'axios';

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
  const [group, setGroup] = useState([])
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
    setCarts(carts.filter((mob) => mob.id != id))
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
    setCarts(carts.filter((mob) => mob.id != kala.item))
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
    if (text != "") {
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
    if (text != "") {
      setLocals(locals.filter((people) => {
        return people.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.region.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.code.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          people.phone.toString().toLowerCase().includes(text.toString().toLowerCase())
      }))
    }

  }


  const itemFilter = async (text, id) => {
    const server = await fetchItems()

    setItems(server)

    if (text != '' || id != '') {
      setItems(items.filter((kala) => {
        return kala.category == id
      }))
      if (text != '') {
        setItems(items.filter((kala) => {
          return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
            kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
            kala.group.toString().toLowerCase().includes(text.toString().toLowerCase())
        }))
      }
    } else {

    }
    // if (text != '') {
    //   if (id== {
    //     setItems(items.filter((kala) => {
    //       return kala.category == id
    //     }))
    //   }
    //   setItems(items.filter((kala) => {
    //     return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
    //       kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
    //       kala.group.toString().toLowerCase().includes(text.toString().toLowerCase())
    //   }))
    // } 


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
    setGroup(groups.filter((gro) => gro.id == id))
    setItems([])
    setSales([])
    setTraders([])
    getState()
  }

  const setVendorEvent = (id, group) => {
    setVendorID(id)
    // setGroupID(group)
    setItems([])
    setSales([])
    getState()
  }

  const filterBydateSales = async (date, id) => {
    const server = await fetchSales()
    setSales(server)

    if (id != '') {
      setSales(sales.filter((sale) => (
        sale.local_id == id
      )))

    }
    if ((Boolean(date))) {

      setSales(sales.filter((sale) => (
        moment(new Date(sale.date)).format("yyyy-MM-DD") == date
      )))

    }
  }

  const filterBydateOrder = async (date, id) => {

    const server2 = await fetchOrders()
    setOrders(server2)

    if (id != '') {
      setOrders(orders.filter((sale) => (
        sale.trader == id
      )))
    }
    if ((Boolean(date))) {
      setOrders(orders.filter((orders) => (
        moment(new Date(orders.date)).format("yyyy-MM-DD") == date
      )))

    }
  }

  const filterBydatePay = async (date, id) => {

    const server3 = await fetchPayments()
    setPayments(server3)
    if (id != '') {
      setPayments(payments.filter((sale) => (
        sale.local == id
      )))
    }
    if ((Boolean(date))) {
      setPayments(payments.filter((orders) => (
        moment(new Date(orders.date)).format("yyyy-MM-DD") == date
      )))
    }

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
    setCarts(carts.filter((mob) => mob.id != kala.item))
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

    const server = await fetchItems()
    setItems(server)

    if (text != '' || traderId != '') {
      setItems(items.filter((kala) => {
        return kala.trader_id == traderId
      }))
      if (text != '') {
        setItems(items.filter((kala) => {
          return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
            kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
            kala.category_name.toString().toLowerCase().includes(text.toString().toLowerCase())
        }))
      }

      // if (traderId != '' && text != '') {
      //   setItems(items.filter((kala) => {
      //     return kala.trader.toString().toLowerCase().includes(traderId.toString().toLowerCase()) && (kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
      //       kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()))
      //   }))
      // } else if (traderId !='') {
      //   setItems(items.filter((kala) => {
      //     return kala.trader_id == traderId
      //   }))
      // } else if (text!='') {
      //   setItems(items.filter((kala) => {
      //     return kala.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
      //       kala.barcode.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
      //       kala.trader.toString().toLowerCase().includes(text.toString().toLowerCase())
      //   }))
    }
  }

  const itemPost = async (post) => {
    axios({
      method: 'post',
      url: url + 'item/',
      data: post
    }).then(res => {
      alert("تەواو سەرکەوتوو بوو");
      setItems([res.data, ...items])
    }).catch(err => {
      alert("هەڵەیەک ڕوویدا");
    })
  }

  const itemEdit = async (id, post) => {
    const res = await fetch(url + 'item/' + id + "/",
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })


    getState()

  }


  // const itemzPost = async (post) => {

  //   post.map((moo) => {
  //     itemzPost(moo)
  //   })

  // }

  const addGroupEvent = async (post) => {
    const res = await fetch(url + 'group/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)

      })

    // const data = res.json()
    // let server = await fetchGroups()
    // setGroups(server)
    // getState()
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

  const EditLocal = async (id, post) => {
    const res = await fetch(url + 'local/' + id + '/',
      {
        method: 'PATCH',
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

  const addOld = async (old) => {
    const res = await fetch(url + 'oldacc/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(old)

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

  const addPayLoan = async (trader, bank) => {
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
            "group": groupId,
            "trader": trader,
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

  const sort = (sortKey) => {
    let itemsort = items.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
    setItems(itemsort)
  }

  const filterLocalsX = () => {
    let itemsort = locals.filter((local) => local.mawe > 0.0)
    setLocals(itemsort)
  }

  const filterItemsX = () => {
    let itemsort = items.filter((local) => local.mawe > 0.0)
    setItems(itemsort)
  }

  return (
    <Router>
      <Header
        addBuy={addBuy} addpay={addpay} searchTrader={searchTrader} group={groupId}
        traders={traders} search={search} addOrder={addOrder} vendor={vendorId}
        locals={locals} addForm={addForm} search={search} addTrade={addTrade}
        addLocal={addLocal} cats={cats} items={items} group={groupId} traders={traders}
        filterItems={filterItems} itemPost={itemPost} addCat={addCat} addRegion={addRegion}
        regions={regions} addGroup={addGroupEvent} vendors={vendors} groups={groups}
        setGroupEvent={setGroupEvent} setVendorEvent={setVendorEvent} addVendor={addVendor}
      />

      <div className='container-fluid'>
        <Route path='/' exact render={(props) => (
          <>
            <Bank group={groupId} banks={banks} />
          </>
        )}
        />
        <Route path='/order' exact render={(props) => (
          <>
            <OrderHatu filterBydate={filterBydateOrder} orders={orders} traders={traders} />
          </>
        )}
        />
        <Route path='/locals' exact render={(props) => (
          <>
            <Locals  image={image} search={search} addOld={addOld} groupDetail={group} filterLocalsX={filterLocalsX} addpay={addpay} locals={locals} group={groupId} regions={regions} addRegion={addRegion} />
          </>
        )}
        />

        <Route path='/localForm/:id' exact render={(props) => (
          <>
            <LocalForm group={groupId} addOld={addOld} locals={locals} image={image} EditLocal={EditLocal} />
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
            <Items image={image} filterItemsX={filterItemsX} sort={sort} cats={cats} items={items} group={groupId} traders={traders} filterItems={filterItems} itemPost={itemPost} itemEdit={itemEdit} />
          </>
        )}
        />
        <Route path='/item/:id' exact render={(props) => (
          <>
            <ItemForm cats={cats} items={items} group={groupId} traders={traders} />
          </>
        )}
        />
        <Route path='/itemDetail/:id' exact render={(props) => (
          <>
            <ItemDetail sales={sales} itemEdit={itemEdit} />
          </>
        )}
        />
        <Route path='/pending' exact render={(props) => (
          <>
            <Pending sales={sales} />
          </>
        )}
        />
        <Route path='/forms' exact render={(props) => (
          <>
            <Sales addReSell={addReSell} items={items} filterBydate={filterBydateSales} vendor={vendorId} group={groupId} search={search} locals={locals} sales={sales} addForm={addForm} />
          </>
        )}
        />
        <Route path='/form/:id' exact render={(props) => (
          <>
            <SaleForm locals={locals} groupDetail={group} groupId={groupId} groups={groups} searchItem={itemFilter} cats={cats} addtoListEvent={addtoListEvent} image={image} group={groupId} carts={carts} sales={sales} items={items} deleteEvent={deleteFromList} addGO={addGoEvent} dashkan={dashkanEvent} />
          </>
        )}
        />

        <Route path='/order/:id' exact render={(props) => (
          <>
            <OrderForm groupId={groupId} groups={groups} searchItem={itemFilter} cats={cats} items={items} addtoListEvent={addtoListEvent} search={itemFilter} group={groupId} image={image} orders={orders} carts={carts} deleteEvent={deleteFromList} addGO={addBuyEvent} dashkan={dashkanBuyEvent} />
          </>
        )}
        />

        <Route path='/payments' exact render={(props) => (
          <>
            <Payments payments={payments} locals={locals} group={groupId} filterBydate={filterBydatePay} />
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
