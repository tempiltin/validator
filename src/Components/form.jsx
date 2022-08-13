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

        <div  className='row form_class'>
            <div className="col-12">
                <input type="text" name="firstname" value={props.first_name} onChange={(e) => { props.setFirstName(e.target.value) }} id="" placeholder='Ismingiz' required/>
            </div>
            <div className="col-12">
                <input type="text" name="lastname" value={props.last_name} onChange={(e) => { props.setLastname(e.target.value) }} id="" placeholder='Familiyangiz' required/>
            </div>
            <div className="col-12">
                <input type="phone" name="phone" value={props.phone} onChange={(e) => { props.setPhone(e.target.value) }} id="" placeholder='Telefon raqamingiz' required/>
            </div>
           <button type="submit" onClick={props.saveUser} className='btn btn_form'>Yuborish</button>
        </div>
    </div>
  )
}

export default form