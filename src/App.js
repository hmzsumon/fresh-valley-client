import { useEffect } from 'react';

import Home from './components/Home/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';
import ProtectedRoute from './components/Route/ProtectedRoute';
import Profile from './components/User/Profile';
import store from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './components/Admin/Dashboard';
import ProductsList from './components/Admin/ProductsList';
import AddProduct from './components/Admin/AddProduct';
import EditProduct from './components/Admin/EditProduct';

import { loadUser } from './actions/userAction';
import UserOptions from './components/Header/UserOptions';
import { useSelector } from 'react-redux';

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<ProtectedRoute exact path='/account' component={Profile} />
				<ProtectedRoute
					exact
					isAdmin={true}
					path='/admin/dashboard'
					component={Admin}
				/>
				<ProtectedRoute
					exact
					path='/admin/products'
					isAdmin={true}
					component={ProductsList}
				/>
				<ProtectedRoute
					exact
					path='/admin/product'
					isAdmin={true}
					component={AddProduct}
				/>

				<ProtectedRoute
					exact
					path='/admin/update'
					isAdmin={true}
					component={EditProduct}
				/>
			</Switch>
		</Router>
	);
}

export default App;
