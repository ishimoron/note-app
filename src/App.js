import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import CreateNote from "./components/CreatNote";
import EditNote from "./components/EditNote";
// import Note from "./components/Note";


const App = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/create" component={CreateNote}/>
            <Route exact path="/edit/:id" component={EditNote}/>
        </Switch>
    );
}

export default App;
