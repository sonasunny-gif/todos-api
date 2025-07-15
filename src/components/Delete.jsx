import React from 'react'
import Navigation from './Navigation'


export const Delete = () => {
  return (
    
     <div style={{ backgroundColor: '#2f8daf36', minHeight: '100vh', padding: '20px' }}>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <h1>DELETE</h1>
                        <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
