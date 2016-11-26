import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProblemsFeed from './components/ProblemsFeed.jsx';

class App extends React.Component {
  render () {
    return (
        <MuiThemeProvider>
            <div className="container">
                <ProblemsFeed />
            </div>
        </MuiThemeProvider>

    );
  }
}

render(<App/>, document.getElementById('app'));