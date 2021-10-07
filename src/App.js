import { Switch, Route } from "react-router-dom";
import { Nav, Counter, Popular } from "./features";

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/about" component={About} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/counter" component={Counter} />
            </Switch>
        </div>
    );
}

function About(props) {
    const id = props?.match?.params?.id;
    console.log({ id });
    return <div>this is about page</div>;
}
export default App;
