import { useContext } from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { APIContext } from '../helper/APIContext'

const Trader = () => {
    const { traders } = useContext(APIContext)

    const columns = [{
        Header: 'ID',
        accessor: 'id' // String-based value accessors!
    }, {
        Header: 'Name',
        accessor: 'name',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
        Header: 'Pohne',
        accessor: 'phone' // Custom value accessors!
    },]

    return <ReactTable
        data={traders}
        columns={columns}
    />
}

export default Trader
