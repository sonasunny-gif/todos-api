import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

const View = () => {

const[isload,changeload]=useState(true)


    const [data, setData] = useState({ todos: [] });

    const fetchData = () => {
        axios
            .get('https://dummyjson.com/todos')
            .then((response) => {
                changeload(false)
                setData(response.data);
            })
            .catch((error) => {
                alert('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navigation />
            <div className="container-fluid py-4" style={{ backgroundColor: '#193843ff', minHeight: '100vh' }}>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-white mb-4">TODOS DETAILS</h1>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover bg-white">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Todo</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                {isload ?<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div> : <tbody>
                                    {data.todos.map((value, index) => (
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.todo}</td>
                                            <td>{value.completed ? <p className='text-success'>completed</p> : <p className='text-danger'>not completed</p>}</td>
                                        </tr>
                                    ))}
                                </tbody>}

                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
