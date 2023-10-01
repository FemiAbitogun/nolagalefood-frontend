import React from 'react'
import '../css/Products.css'

function Products() {
    return (
        <div className='ProductContainer'>
            <button className="btn btn-primary col-6" type="button" disabled>
                <span className="spinner-border spinner-border-lg text-white" role="status" aria-hidden="true"></span>
               <b className='text-white' >Loading...</b> 
            </button>
        </div>
    )
}

export default Products