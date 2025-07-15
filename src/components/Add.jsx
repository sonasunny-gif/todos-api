import React from 'react'
import Navigation from './Navigation'

const Add = () => {
  return (
    <div>
         <div style={{ backgroundColor: '#9addb55f', minHeight: '100vh', padding: '20px' }}>
      <Navigation/>
            <div className="container">
                <div className="row align-items-center">
                    <div className=" col-12 col-sm-6 col-md-4 col-lg-5 col-xl-5 col-xxl-5">
                        <img src="https://img.freepik.com/free-vector/colorful-todo-list-illustration_1308-173328.jpg?semt=ais_hybrid&w=740"  class="img-thumbnail" alt="..."
                        
                        style={{ maxWidth: '100%', maxHeight: '500%', borderRadius: '1px', objectFit: 'cover', }}>
                        </img>
                        
                         </div>
                            <div className=" col-12 col-sm-6 col-md-8 col-lg-7 col-xl-7 col-xxl-7">
                               
                                <div className="row g-4">
                                    <div className="col-col-12 col-6 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
  
                                        <h1 style={{ color: '#0a0b0cff' }}><u>ADD DETAILS</u></h1>
                                        <label htmlFor="" className="form-label">Id</label>
                                        <input type="text" className="form-control" />
                                        <label htmlFor="" className="form-label">UserId</label>
                                        <input type="text" className="form-control" />
                                        <label htmlFor="" className="from-label">Title</label>
                                        <input type="text" className="form-control" />
                                        <label htmlFor="" className="form-label">completed</label>
                                        <input type="text" className="form-control" />
                                        <button className="btn btn-success">SUBMIT</button>

                                    </div>
                                </div>
                            </div>
                       
                     
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Add