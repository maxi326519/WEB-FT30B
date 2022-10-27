import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import './Favorites.css';

import { removeMovieFavourite } from '../../actions/index'

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.favourite.map(movie => {
              return(
                <li key={movie.imdbID}>
                  <span>{ movie.Title }</span>
                  <button onClick={ ()=>{this.props.removeMovieFavourite(movie.imdbID); console.log('remove')} }>x</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapToStateToProps(state){
  return {
    favourite: state.favourite
  }
}

function mapToDispatchToProps(dispatch){
  return {
    removeMovieFavourite: id => dispatch(removeMovieFavourite(id))
  }
}

export default connect(mapToStateToProps, mapToDispatchToProps)(ConnectedList);