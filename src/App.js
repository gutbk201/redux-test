import { Switch, Route, Redirect } from "react-router-dom";
import { Counter, Popular, MovieDetail, Search } from "./features";
import { Nav, Footer } from "./components";

function App() {
    return (
        <div style={{ marginTop: "4rem" }}>
            <Nav />
            <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/movie/:id" component={MovieDetail} />
                <Route exact path="/search/:keyword" component={Search} />
                <Route exact path="/counter" component={Counter} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
