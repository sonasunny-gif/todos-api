import React from 'react'
import Navigation from './Navigation'


const Search = () => {
  return (
      <div style={{ backgroundColor: '#25586b2b', minHeight: '100vh', padding: '20px' }}> 
       <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <h1>SEARCH</h1>
                        <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search