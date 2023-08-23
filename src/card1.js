import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types"




function Players ({x}) {
  console.log(x);
  const mystyle={
    width:"500px"
  }
    return (
      <Card style={mystyle}>
      <Card.Img variant="top" src={x.imagePath} />
      <Card.Body>
        <Card.Title>{x.name}</Card.Title>
        <Card.Text>
        {x.nationality}
        </Card.Text>
        <h2>{x.Age}</h2>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
  }
  Players.propTypes = {
    name: PropTypes.string,
   }
   Players.defaultProps = {
  name:"name"
   };
  export default Players