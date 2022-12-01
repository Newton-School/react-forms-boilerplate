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
          <label>Email</label>
          <input type="email" name='email' />
          <label>Password</label>
          <input type="password" name='password' />
          <label>Contact Number</label>
          <input type="number" name='contactNo' />
          <button>Submit</button>
        </section>
      </form>
    </div>
  )
}


export default App;
