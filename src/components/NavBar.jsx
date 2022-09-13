import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Muhammad Sahil</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
