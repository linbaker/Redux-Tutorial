import React, { Component } from 'react';
import './App.css';
import { updateUser, apiRequest } from './actions/user-actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);

  this.onUpdateUser = this.onUpdateUser.bind(this);    
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequst();
    }, 1500)
  }

  onUpdateUser(event) {
    console.log(this.props);
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}



const mapStateToProps = (state, props) => {
  return {
  products: state.products,
  user: state.user,
  userPlusProp: `${state.user} ${props.aRandomProps}`
  }
};

const mapActionsToProps = {
    onUpdateUser: updateUser, 
    onApiRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(App);
