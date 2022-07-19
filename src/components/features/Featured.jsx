import React from 'react'
import './Featured.css'
const Features = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRva3lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Switizerland</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Features;