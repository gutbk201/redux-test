import { useHistory } from "react-router-dom";
import NavBS from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import github from "../../assets/github.png";
import styles from "./Nav.module.css";

function Nav() {
    let history = useHistory();
    const toPopular = () => history.push("/");
    const toGithub = () =>
        window.open("https://github.com/gutbk201/redux-test", "");
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
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className={styles["responsive-navbar-nav"]}
                >
                    <NavBS className="me-auto"></NavBS>
                    <NavBS className={styles.nav}>
                        <NavBS.Link href="#" onClick={toGithub}>
                            <img
                                src={github}
                                alt="github logo"
                                className={styles.github}
                            />
                        </NavBS.Link>
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
                    </NavBS>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav;
