import React, { useEffect, useState } from 'react';
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css'

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://infinite-waters-92433.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    })

    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>
                <div className='w-100 table-container p-4'>
                    <table className="table table-hover w-100 bg-white custom-table-style">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Status</th>
                                <th scope="col">Change Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <OrderListDetail order={order}></OrderListDetail>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;