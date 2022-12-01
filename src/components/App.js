import React from 'react'
import '../styles/App.css';

const App = () => {

  return (
    <div id="main">
      {/* {<h3 className='success-alert'>Registered Successfullly</h3>} */}
      <form>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name='username' />
          <p>{formErrors.username}</p>
          <label>Email</label>
          <input type="email" name='email' />
          <p>{formErrors.email}</p>
          <label>Password</label>
          <input type="password" name='password' />
          <p>{formErrors.password}</p>
          <label>Contact Number</label>
          <input type="number" name='contactNo' />
          <p>{formErrors.contactNo}</p>
          <button>Submit</button>
        </section>
      </form>
    </div>
  )
}


export default App;
