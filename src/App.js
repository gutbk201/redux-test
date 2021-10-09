import { Switch, Route } from "react-router-dom";
import { Nav, Counter, Popular, MovieDetail } from "./features";
import Footer from "./components/Footer";

function App() {
    return (
        <div style={{ marginTop: "4rem" }}>
            <Nav />
            <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/about" component={About} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/movie/:id" component={MovieDetail} />
                <Route exact path="/counter" component={Counter} />
            </Switch>
            <Footer />
        </div>
    );
}

function About(props) {
    const id = props?.match?.params?.id;
    console.log({ id });
    return <div>this is about page</div>;
}
export default App;
