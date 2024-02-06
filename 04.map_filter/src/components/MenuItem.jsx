import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MenuItem = ({name, price, img}) => {

  let imgStyle = {
    height : '286.67px'
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={imgStyle} variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">주문하기</Button>
      </Card.Body>
    </Card>
  )
}

export default MenuItem