import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("prod")) || []);

  const deleteProduct = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("prod", JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-white p-4">
        <div className="logo">
          <NavLink to="/"><img src="./images/bg1.jpg" alt="" /></NavLink>
        </div>
        <div className="nav">
          <ul>
            <li><NavLink to="/productpage.html">Medicine</NavLink></li>
            <li><NavLink to="/productpage.html">Lab Tests</NavLink></li>
            <li><NavLink to="/productpage.html">Healthcare</NavLink></li>
            <li><NavLink to="/productpage.html">Surgeries</NavLink></li>
            <li><NavLink to="/productpage.html"><span>Health Blogs</span></NavLink></li>
            <li>
              <input type="search" placeholder="What are you looking for?" />
            </li>
            <li><NavLink to="/productpage.html">More</NavLink><span>|</span></li>
            <li><NavLink to="#"><i className="fas fa-bell"></i></NavLink></li>
            <li><NavLink to="#"><i className="fas fa-heart"></i></NavLink></li>
            <li><NavLink to="/cart.html"><i className="fas fa-shopping-bag"></i></NavLink></li>
            <li><NavLink to="/signup.html"><i className="fas fa-user"></i> Hello, Log in</NavLink></li>
          </ul>
        </div>
      </nav>

      {/* Home Redirect */}
      <div id="homeRedirect" className="my-4">
        <NavLink to="/">Home</NavLink>
        <img src="https://assets.pharmeasy.in/web-assets/_next/static/media/arrow.06e204478975743304d84a18bc2ba93b.svg" alt="" />
        <span>Cart</span>
      </div>

      {/* Main content */}
      <div id="main" className="container mx-auto flex justify-between mt-4">
        {/* Container */}
        <div id="container" className="w-3/5 border border-gray-300 rounded-lg">
          {/* Products */}
          <div id="products">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between border-b border-gray-300 p-4">
                <div className="flex">
                  <img src={item.avatar} alt="" className="w-1/5" />
                  <div className="ml-4">
                    <p>{item.Title}</p>
                    <p>{item.createdAt}</p>
                    <p>{item.description}</p>
                    <div>
                      <span>MRP</span>
                      <span className="ml-2 line-through text-gray-700">₹{item.price}</span>
                      <span className="ml-2">₹{(Number(item.price) - (Number(item.price) / 10) * 2).toFixed(2)}</span>
                    </div>
                    <div>Delivery by <span>Tomorrow, before 10:00 pm</span></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={() => deleteProduct(index)} className="text-red-500 mr-4">Remove</button>
                  <select>
                    <option value="">Qty</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((qty, i) => (
                      <option key={i} value={qty}>{qty}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div id="mainPayment" className="w-2/5">
          {/* Payment Section content */}
        </div>
      </div>

      {/* Pointers */}
      <div id="pointers" className="container mx-auto mt-8">
        {/* Pointers content */}
      </div>

      {/* Footer */}
      <footer className="footer-body bg-gray-200">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default CartPage;
