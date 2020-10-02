import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/layouts/Header';
import Home from './Home';
import Products from './Products';
import ProductDetail from '../components/pages/ProductDetail';
import Posts from '../components/pages/Posts';
import PostDetail from '../components/pages/PostDetail';
import Footer from '../components/layouts/Footer';

import ManageProducts from '../containers/ManageProducts';

class App extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Router>
				<Header />

				<Route exact path="/" component={Home} />

				<Route exact path='/products' component={Products} />
				<Route path='/products/:path' render={(props) => ( 
					<ProductDetail {...props } /> 
				)} />
				
				<Route exact path="/posts" component={Posts} />
				<Route path="/posts/:path" render={(props) => ( 
					<PostDetail {...props } /> 
				)} />

				<Route path="/administrator/products" component={ManageProducts} />

				<Footer />
			</Router>
		);
	}
}

export default App;
