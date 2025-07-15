import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'


const View= () => {
        const [data, setdata] = useState(
        {"todos":[]}
 
    )
const fetchdata = ()=>{
    axios.get('https://dummyjson.com/todos').then((response)=>{
        setdata(response.data)
    }).catch()
    
}
useEffect(()=>{fetchdata()},[])
    
    return (
        <div>
          <Navigation/>
            <div className="container-fluid py-4" style={{ backgroundColor: '#193843ff', Height: '100px' }}>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                             <h1 className="text-center" style={{ color: '#faf9ffff' }}>
                 TODOS DETAILS
              </h1>
                            {data.todos.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <div class="card h-100 w-70">
                                                
                                                 
                                                <div class="card-body d-flex flex-column">
                                                    <h5 class="card-title">Title = {value.id}</h5>
                                                     <h5 class="card-title">ID = {value.todo}</h5>
                                                      <h5 class="card-title">UserId ={value.userId}</h5>
                                                         <h5 class="card-title">Status ={value.completed}</h5>
                                                    
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div></div></div>
            </div>
        </div>
    )
}
export default View



