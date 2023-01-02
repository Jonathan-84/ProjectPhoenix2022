import React, { Component } from 'react';


 
export default class Tracker extends Component {



    
  render() {
 
    return (
        <>

<h3 className='text-primary text-center'>My Portfolio Scavenger Hunt</h3>
<div class="list-group">
  <li  class="list-group-item list-group-item-action">A simple default list group item</li>

  <li class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</li>
</div>

</>
    )
  }
  };