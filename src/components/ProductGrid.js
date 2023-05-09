import React from "react";

export default function ProductGrid(props) {
  return (
    <div className="panel panel-default" style={{pb: '10px'}} >
      <input
        type="checkbox"
        className="delete-checkbox"
        id={props.id}
        name="product_ids"
        onChange={props.runHandleCheckboxChange}
        value={props.id}
      />
      <br />

      {props.sku}
      <br />

      {props.name}
      <br />

      {props.price} <b>$</b>
      <br />
      {props.product_type == 3?"Weight: "+props.book_weight+' KG':"" }
      {props.product_type == 2?'Dimensions: '+props.furniture_length+'x'+props.furniture_width+'x'+props.furniture_height:"" }
      {props.product_type == 1?'Size: '+props.dvd_size+' MB':"" }
      
    </div>
  );
}
