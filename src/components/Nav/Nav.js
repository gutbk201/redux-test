import { useHistory } from "react-router-dom";
import NavBS from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Nav.module.css";

function Nav() {
    let history = useHistory();
    const toPopular = () => history.push("/");
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
                    <NavBS className="me-auto"></NavBS>
                    <NavBS className={styles.nav}>
                        <NavBS.Link href="#" onClick={toPopular}>
                            Popular
                        </NavBS.Link>
                        <NavBS.Link
                            href="#"
                            onClick={() => history.push("/genres")}
                        >
                            Genres
                        </NavBS.Link>
                        <NavBS.Link
                            href="#"
                            onClick={() => history.push("/bookmark")}
                        >
                            Bookmark
                        </NavBS.Link>
                        <NavBS.Link
                            href="#"
                            onClick={() => history.push("/counter")}
                        >
                            Count
                        </NavBS.Link>
                    </NavBS>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav;
