import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [like, setlike] = useState(0)

  const [change, setchange] = useState(true)
  const [change1, setchange1] = useState(true)
  const [change2, setchange2] = useState(true)
  const [change3, setchange3] = useState(true)
  const [change4, setchange4] = useState(true)

  let buttonvalue = change ? "Add to Cart" : "Remove from cart" 
  let buttonvalue1 = change1 ? "Add to Cart" : "Remove from cart" 
  let buttonvalue2 = change2 ? "Add to Cart" : "Remove from cart" 
  let buttonvalue3= change3 ? "Add to Cart" : "Remove from cart" 
  let buttonvalue4 = change4 ? "Add to Cart" : "Remove from cart" 

  let data = [{
    image:"https://m.media-amazon.com/images/I/61SmsCyfZOL._AC_UL320_.jpg",
    title:"Special item",
    price:"$40.00 - $80.00",
    buttontext:"Add to Cart",    
  },
  {
    image:"https://m.media-amazon.com/images/I/717Qr4ImV+L._AC_UL320_.jpg",
    title:"Fancy item",
    price:"$80.00",
    buttontext:"Add to Cart",
  },
  {
    image:"https://m.media-amazon.com/images/I/7181NjMrq-L._AC_UL320_.jpg",
    title:"Popular item",
    price:"$40.00",
    buttontext:"Add to Cart",
  }]

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Cart {like}</button>
      </form>
    </div>
  </div>
    </nav>
    <div className="container-fluid" id="content">
      <h1>Shop in Style</h1>
      <h5>With this shop homepage Template</h5>
    </div>
    <div className="row">
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
    <img src="https://m.media-amazon.com/images/I/61SmsCyfZOL._AC_UL320_.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Special item</h5>
        <p className="card-text">$50.00</p>

        <button type="button" className="btn btn-light" onClick={()=>{
                    
          setchange(!change);
          if (buttonvalue == 'Add to Cart')
          {
              setlike(like+1);
          }
          else if (buttonvalue == 'Remove from cart')
          {
              setlike(like-1);
          }
        }
          }>{buttonvalue}</button>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
    <img src="https://m.media-amazon.com/images/I/71TzNW2FArL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Popular Item</h5>
        <p className="card-text">$100.00</p>
        <button type="button" className="btn btn-light" onClick={()=>{
          setchange1(!change1);
          if (buttonvalue1 == 'Add to Cart')
          {
              setlike(like+1);
          }
          else if (buttonvalue1 == 'Remove from cart')
          {
              setlike(like-1);
          }
        }}>{buttonvalue1}</button>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
    <img src="https://m.media-amazon.com/images/I/7181NjMrq-L._AC_UL320_.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Fancy Product</h5>
        <p className="card-text">$40.00 - $80.00</p>
        <button type="button" className="btn btn-light" onClick={()=>{
          setchange2(!change2);
          if (buttonvalue2 == 'Add to Cart')
          {
              setlike(like+1);
          }
          else if (buttonvalue2 == 'Remove from cart')
          {
              setlike(like-1);
          }
        }}>{buttonvalue2}</button>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
    <img src="https://m.media-amazon.com/images/I/717Qr4ImV+L._AC_UL320_.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Popular Item</h5>
        <p className="card-text">$40.00</p>
        <button type="button" className="btn btn-light" onClick={()=>{
          setchange3(!change3);
          if (buttonvalue3 == 'Add to Cart')
          {
              setlike(like+1);
          }
          else if (buttonvalue3 == 'Remove from cart')
          {
              setlike(like-1);
          }
        }}>{buttonvalue3}</button>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
    <img src="https://m.media-amazon.com/images/I/51WSD31hsxL._AC_UL320_.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Special Item</h5>
        <p className="card-text">$35.00</p>
        <button type="button" className="btn btn-light" onClick={()=>{
          setchange4(!change4);
          if (buttonvalue4 == 'Add to Cart')
          {
              setlike(like+1);
          }
          else if (buttonvalue4 == 'Remove from cart')
          {
              setlike(like-1);
          }
        }}>{buttonvalue4}</button>
      </div>
    </div>
  </div>
  </div>
  <div className="container-fluid" id="content1">
      <h4>Copyright © Your Website 2023</h4>
    </div>

    </>
  )
}

export default App
