import React from 'react'
import loading from '../assets/loader.png'
import PulseLoader from 'react-spinners/PulseLoader'

const Loading = () => {
  return (
    <section className='loading-page'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='loading_img'>
              <img className='loading-img w-100' src={loading} alt="loading" />        
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loading
