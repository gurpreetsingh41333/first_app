import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ApiTable from "./ApiTable";
import Table from "./Table"
import Input from "./Input"
import InputText from "./InputText";
import ApiCall from "./ApiCall";
import SingleInput from "./SingleInput";
import TimeFormat from "./TimeFormat";
import "./ReactRouter.css"

const ReactRouter = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/timeformat">TimeFormat</Link>
          </li>
          <li className="nav-item">
          <Link to="inputtext">Input Text</Link>
          </li>
          <li className="nav-item">
            <Link to="/apitable">ApiTable</Link>
          </li>
          <li className="nav-item">
            <Link to="/table">Table</Link>
          </li>
          <li className="nav-item">
            <Link to="/topics">Topics</Link>
          </li>
          <li className="nav-item">
            <Link to="/apicall">ApiCall</Link>
          </li>
          <li className="nav-item">
            <Link to="/input">Input</Link>
          </li>
          <li className="nav-item">
            <Link to="/singleinput">SingleInput</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/apitable" component={Api} />
      <Route path="/topics" component={Topics} />
      <Route path="/table" component={TableDisplay} />
      <Route path="/input" component={inputdisplay} />
      <Route path="/inputtext" component={inputtextdisplay}/>
      <Route path="/apicall" component={apicalldisplay}/>
      <Route path="/singleinput" component={singleinputdisplay}/>
      <Route path="/timeformat" component={TimeFormatdisplay}/>
    </div>
  </Router>
);
const singleinputdisplay=()=>(
  <div>
    <SingleInput/>
  </div>
);
const TimeFormatdisplay=()=>(
  <div>
    <TimeFormat/>
  </div>
);

const apicalldisplay=()=>(
  <div>
    <ApiCall/>
    </div>
);
const inputtextdisplay=()=>(
  <div>
    <InputText/>
  </div>
);
const inputdisplay = () => (
  <div>
    <Input />
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Api = () => (
  <div>
    <ApiTable />
  </div>
);

const TableDisplay = () => {
  return <div>
    <Table />
  </div>
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default ReactRouter;
