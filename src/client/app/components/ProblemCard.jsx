import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: 500,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
};

class ProblemCard extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
        problem: this.props.problem
    }
  }

  render() {
    return (
      <div className="Problem">
          <Paper style       = { style } 
                 zDepth      = { 3 } 
                 children    = {
                     <div>
                        <h1>{ this.state.problem.name }</h1>
                        <p>{ this.state.problem.platform }</p>
                        <p>{ this.state.problem.tag }</p>
                     </div>
                 }
          />
      </div>
    );
  }

}

export default ProblemCard;