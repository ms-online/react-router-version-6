import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [cartIsEmpty] = useState(false);
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>老吴与小仙</h1>
          <Link to='/'>主页</Link>
          <Link to='/about'>关于我们</Link>
          <Link to='/products'>课程内容</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/*' element={<About />} />
          <Route path='/products/:id/*' element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/test'
            element={
              <div>
                <h2>测试页面</h2>
                <p>hello wrold</p>
              </div>
            }
          />
          <Route path='/redirect' element={<Navigate to='/about' />} />
          <Route
            path='/checkout'
            element={cartIsEmpty ? <Navigate to='/products' /> : <p>结账</p>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
