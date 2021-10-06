import { Switch, Route } from "react-router-dom";
import { Nav, Counter } from "./features";

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Blank} />
                <Route exact path="/about" component={About} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/counter" component={Counter} />
            </Switch>
        </div>
    );
}

function Blank() {
    return <div>this is Blank</div>;
}
function About(props) {
    const id = props?.match?.params?.id;
    console.log({ id });
    return <div>this is about page</div>;
}
export default App;
