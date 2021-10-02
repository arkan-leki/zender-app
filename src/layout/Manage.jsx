import { useContext } from 'react'
import { Line } from 'react-chartjs-2'
import { APIContext } from '../helper/APIContext'

const Manage = () => {
    const { chartData } = useContext(APIContext)

    return (
        <div className="container">
            <div style={{ width: 75 + '%' }} dir='rtl'>
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

export default Manage
