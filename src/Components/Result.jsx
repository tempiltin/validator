import React from 'react'
import well from '.././images/Saly-10.png'
const Result = () => {
  return (
    <section className='result_section'>
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
                <h2>Kodingiz natijasi</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-8">
                <h1>Salom, Programmer uZ!</h1>
            </div>
            <div className="col-auto">
                <img src={well} alt="" />
            </div>
        </div>
     </div>
    </section>
  )
}

export default Result