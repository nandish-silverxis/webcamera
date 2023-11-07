import React from 'react'
import { Link } from 'react-router-dom'

function Scanner() {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>QR Scanner</h1>
        <div class="col-md-12 text-center mt-5">
      <Link to="/First" className='btn btn-success'>Scan QR</Link>
      </div>
    </div>
  )
}

export default Scanner
