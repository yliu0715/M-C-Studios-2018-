import React, { Component } from 'react';
import Header from '../elements/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';
import Login from '../NavigationBar/Login/Login';
import reduxCart from '../NavigationBar/Cart/ReduxCart';
import WishList from '../NavigationBar/WishList/WishList';
import { createStore } from 'redux';
import reducer from '../../store/reducers';
import { Provider } from 'react-redux';
// import Bar from '../elements/Bar/Bar';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment> {/* instead of using many divs */}
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path = "/Login" component={Login} />
            <Route exact path = "/WishList" component={WishList} />
          <Route exact path = "/Cart" component={reduxCart} />
            <Route exact path= "/:movieId" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
