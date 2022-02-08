import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>老吴与小仙</h1>
          <Link to='/'>主页</Link>
          <Link to='/about'>关于我们</Link>
          <Link to='/products'>课程内容</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products/:id'>
            <ProductDetails />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
