import React from 'react';
import ProblemCard from './ProblemCard.jsx';
import ProblemForm from './ProblemForm.jsx';

class ProblemsFeed extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
        problems : []
    };
  }
  
  // TODO(@khalilw1): Add fetch problems to query backend.
  componentWillMount() {
    this.setState({
      problems: [
        {
          id: 1,
          name: 'Vanya and Secrets',
          platform: 'codeforces',
          tag: 'dfs'
        },
        {
          id: 2,
          name: 'Vanya and Podolski',
          platform: 'codeforces',
          tag: 'maxflow'
        },
        {
          id: 3,
          name: 'Vanya and Rim',
          platform: 'codeforces',
          tag: 'greedy'
        },
      ]
    });
  }

  _renderProblems() {
    let problems = this.state.problems;
    
    console.log( problems );

    return problems.map( problem => {
      return this._renderProblem( problem );
    });
  }

  _renderProblem( problem ) {
    return (
      <ProblemCard 
        key     = { problem.id }
        problem = { problem }
      />
    );
  }

  handleSubmit( problem ) {

    let problems = this.state.problems;
    problem.id = problems.length + 1;

    this.setState({
      problems: [...problems, problem],
    });
  }

  render() {
    return (
      <div className="Feed">
        <ProblemForm handleSubmit={ this.handleSubmit.bind( this ) } />
        { this._renderProblems() }
      </div>
    );
  }

}

export default ProblemsFeed;