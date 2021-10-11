import { useHistory } from "react-router-dom";
import NavBS from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Nav() {
    let history = useHistory();
    const toPopular = () => history.push("/", { getNew: true });
    return (
        <Navbar
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
            fixed="top"
        >
            <Container>
                <Navbar.Brand href="#" onClick={toPopular}>
                    Movie Lookup
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavBS className="me-auto">
                        <NavBS.Link href="#" onClick={toPopular}>
                            Popular
                        </NavBS.Link>
                        <NavBS.Link
                            href="#"
                            onClick={() => history.push("/counter")}
                        >
                            Count
                        </NavBS.Link>
                    </NavBS>
                    <NavBS>
                        <NavBS.Link href="#deets">More deets</NavBS.Link>
                        <NavBS.Link eventKey={2} href="#memes">
                            Dank memes
                        </NavBS.Link>
                    </NavBS>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav;
