
import './App.css';

function App() {
  return (
    <div>
      <header className='shadow'>
        <div className='containerhead'>
           <h4>Company name</h4>
           <li>Features</li>
           <li>Enterprise</li>
           <li>Support</li>
           <li>Pricing</li>
           <button>Sign up</button>
        </div>
      </header>

<section>
  <div className='container1'>
    <h1>Pricing</h1>
    <p className='h1text'>Quickly build an effective pricing table for your potential customers with this <br />
     Bootstrap example. It's built with default Bootstrap components and utilities with <br /> little customization.
    </p>
    <div className='container11'>
      <div className='onebox'>
        <div className='free'>Free</div>
        <div className='salary'><h3>$0</h3> <span className='salarymo'>/ mo</span></div>
        <div className='paragrap'>
          <p>10 users included</p>
        <p>2 GB of storage</p>
        <p>Email support</p>
        <p>Help center access</p>
        </div>
        <button className='btn1'>Sign up for free</button>
      </div>
      <div className='twobox'>
        <div className='free'>Pro</div>
        <div className='salary'><h3>$15</h3> <span className='salarymo'>/ mo</span></div>
        <div className='paragrap'>
        <p>20 users included</p>
        <p>10 GB of storage</p>
        <p>Priority email support</p>
        <p>Help center access</p>
        </div>
        <button className='btn2'>Get Started</button>
      </div>
      <div className='threebox'>
        <div className='free'>Enterprise</div>
        <div className='salary'><h3>$29</h3> <span className='salarymo'>/ mo</span></div>
        <div className='paragrap'>
        <p>30 users included</p>
        <p>15 GB of storage</p>
        <p>Phone and email support</p>
        <p>Help center access</p>
        </div>
        <button className='btn2'>Contact us</button>
      </div>
    </div>

    <div className='bottombox'>
      <div className='iconbox'>
        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="B ikonka" />
        <p>© 2017-2018</p>
      </div>
      <div className='iconbox1'>
        <h6>Features</h6>
        <p>Cool stuff <br />
          Random feature <br />
          Team feature <br />
          Stuff for developers <br />
          Another one <br />
          Last time
        </p>
      </div>
      <div className='iconbox2'>
        <h6>Resources</h6>
        <p>
        Resource <br />
        Resource name <br />
        Another resource <br />
        Final resource
        </p>
      </div>
      <div className='iconbox3'>
        <h6>About</h6>
        <p>
        Team <br />
        Locations <br />
        Privacy <br />
        Terms
        </p>
      </div>
    </div>

  </div>
</section>

   </div>
  );
}

export default App;
