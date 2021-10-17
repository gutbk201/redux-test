import { Switch, Route, Redirect } from "react-router-dom";
import { Counter, Popular, MovieDetail, Search, Genres } from "./features";
import { Nav, Footer } from "./components";

function App() {
    return (
        <div
            style={{
                marginTop: "4rem",
                backgroundColor: "var(--main-background-color)",
            }}
        >
            <Nav />
            <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/movie/:id" component={MovieDetail} />
                <Route exact path="/search/:keyword" component={Search} />
                <Route exact path="/genres/" component={Genres} />
                <Route exact path="/genres/:genre" component={Genres} />
                <Route exact path="/counter" component={Counter} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
