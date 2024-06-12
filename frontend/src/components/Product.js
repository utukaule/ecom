import React, { useEffect, useState } from "react";
import { Card, CardBody } from "react-bootstrap";
import {Link, useParams} from 'react-router-dom'
import Rating from "./Rating";
 const Product = ({product}) => {



  return <>
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <CardBody>
        
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
        
        <Card.Text as="div">
            <Rating value = {product.rating} text = {`${product.numReviews} reviews`}  />
            {/* <div>{product.rating} from {product.numReviews} reviews</div> */}
        </Card.Text>

        <Card.Text as='h3'>{`$${product.price}`}</Card.Text>

      </CardBody>
    </Card>
  
  </>
 }

export default Product;
