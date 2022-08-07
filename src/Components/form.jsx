import React from 'react'
  /* <div>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name='name' placeholder='name' />
        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='email' />
        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' placeholder='password' />

        <button type="submit" onClick={saveUser}>Submit</button>
      </div> */
const form = (props) => {
  return (
    <div className={props.codesubmit ? "form_body form_true" : "form_body form_false"}>

        <div action="" className='row form_class'>
            <div className="col-12">
                <input type="text" name="name" value={props.name} onChange={(e) => { props.setName(e.target.value) }} id="" placeholder='Ismingiz' required/>
            </div>
            <div className="col-12">
                <input type="text" name="surname" value={props.surname} onChange={(e) => { props.setSurname(e.target.value) }} id="" placeholder='Familiyangiz' required/>
            </div>
            <div className="col-12">
                <input type="number" name="phonenumber" value={props.phonenumber} onChange={(e) => { props.setPhonenumber(e.target.value) }} id="" placeholder='Telefon raqamingiz' required/>
            </div>
           <button type="submit" onClick={props.saveUser} className='btn btn_form'>Yuborish</button>
        </div>
    </div>
  )
}

export default form