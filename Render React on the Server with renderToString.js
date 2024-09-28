class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<div>Render TO String </div>) }
  };
  
  // Change code below this line
  ReactDOMServer.renderToString(<App/>);