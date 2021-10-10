import { Switch, Route } from "react-router-dom";
import { Counter, Popular, MovieDetail } from "./features";
import { Nav, Footer } from "./components";

function App() {
    return (
        <div style={{ marginTop: "4rem" }}>
            <Nav />
            <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/movie/:id" component={MovieDetail} />
                <Route exact path="/counter" component={Counter} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
