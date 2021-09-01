import './index.css';
import React, {Fragment} from 'react';
import data from './data';

function App() {
  return (
    <Fragment>
    <div className="header">
    <div className="container">
        <div className="navbar">
            <div className="logo">
                <img src="Images/logo.png" width="40px" />
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/account">Account</a></li>        
                </ul>
            </nav>
            <img src="Images/cart1.png" width="30px" height="30px" />
            <img src="Images/menu-icon.png" className="menu-icon" onclick="menutoggle()" />
        </div>
        <div className="row">
            <div className="col-2">
              <h1>Texto ainda por ser pensado</h1>
              <p>Este texto ainda está a ser pensado. Este texto ainda está a ser pensado</p>
              <a href="" className="btn">Explore now</a>
            </div>
            <div className="col-2">
                <img src="Images/imagem3.jpg" />
            </div>
          </div>
        </div>
    </div>
    <div className="categories">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <img src="images/imagem1.jpg" />
                </div>
                <div className="col-3">
                    <img src="images/imagem2.jpg" />
                </div>
                <div className="col-3">
                    <img src="images/imagem3.jpg" />
                </div>
            </div>
        </div>
    </div>
    <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {
            data.products.map(product => (
              <div key={product._id} className="col-4">
                <a href={`/product/${product._id}`}>
                <img src={product.image} />
                </a>
                <h4>{product.name}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>{`\$${product.price}`}</p>
              </div>                
            ))
          }
        </div>
        <h2 className="title">Latest Products</h2>
        <div className="row">
            <div className="col-4">
                <img src="images/produto-1.png" />
                <h4> Currents - Tame Impala</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
            <div className="col-4">
                <img src="images/produto-2.png" />
                <h4> how i'm feeling now - Charli XCX</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
            <div className="col-4">
                <img src="images/produto-3.png" />
                <h4> Pure Heroine - Lorde</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
            <div className="col-4">
                <img src="images/produto-4.png" />
                <h4> NIGHTRIDE - Tinashe</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <img src="images/produto-1.png" />
                <h4> Currents - Tame Impala</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
            <div className="col-4">
                <img src="images/produto-2.png" />
                <h4> how i'm feeling now - Charli XCX</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
            <div className="col-4">
                <img src="images/produto-3.png" />
                <h4> Pure Heroine - Lorde</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
            <div className="col-4">
                <img src="images/produto-4.png" />
                <h4> NIGHTRIDE - Tinashe</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>                
            </div>
        </div>

    </div>

    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src="images/exclusivo.png" className="offer-img" />
                </div>
                <div className="col-2">
                    <p>Texto para conteudo exclusivo</p>
                    <h1>Smart Band 4</h1>
                    <small> Texto de seila o que</small>
                    <a href="" className="btn">Buy Now</a>
                </div>

            </div>

        </div>

    </div>

    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios</p>
                    <div className="app-logo">
                        <img src="Images/logo-aple.png" />
                        <img src="Images/logo-app.png" />
                    </div>
                </div>
                <div className="footer-col-2">
                    <img src="Images/logo.png" />
                    <p>texto</p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupoms</li>
                        <li>Blog Posts</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="copyright">Copyright 2020</p>
        </div>
    </div>
    </Fragment>
  );
}

export default App;
