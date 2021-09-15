// import './App.css';
import { useState } from 'react'
import Sales from './components/Sales'
import { useEffect } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'
import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom';
import SaleForm from './components/SaleForm';
import ItemList from './components/ItemList';

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
    const res = await fetch('http://127.0.0.1:8000/sells/?format=json')
    const data = await res.json()
    return data
  }

  const fetchLocals = async () => {
    const res = await fetch('http://127.0.0.1:8000/locals/?format=json')
    const data = await res.json()
    return data
  }

  const fetchItems = async () => {
    const res = await fetch('http://127.0.0.1:8000/items/?format=json')
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

  const dashkanEvent = async (id,discount) => {
    const res = await fetch('http://127.0.0.1:8000/sell/'+id+'/',
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

  return (
    <Router>
      <div className=''>
        <Route path='/' exact render={(props) => (
          <>
            <Sales search={search} locals={locals} sales={sales} addForm={addForm}/>
          </>
        )}
        />
        <Route path='/form/:id' exact render={(props) => (
          <>
            <SaleForm  carts={carts} sales={sales} items={items} deleteEvent={deleteFromList} addGO={addGoEvent} dashkan={dashkanEvent} />
          </>
        )}
        />
        <Route path='/itemlist/:id' exact render={(props) => (
          <>
            <ItemList items={items} addtoListEvent={addtoListEvent} />
          </>
        )}
        />
      </div>

    </Router>
  )
}

export default App;
