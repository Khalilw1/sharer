import React from 'react';

export default class ProblemForm extends React.Component {
    constructor() {
        super();
        this.state = {
            problem: {
                name     : '',
                platform : '',
                tag      : ''
            }
        }
    }

    handleSubmit( e ) {
        e.preventDefault();
        console.log( this.state.problem );
        this.props.handleSubmit( this.state.problem );
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit.bind( this ) }>
                <label>
                    Name:
                    <input type="text" value={ this.state.problem.name } onChange={ (e) => {
                        let name = e.target.value;
                        let problem = this.state.problem;
                        problem = Object.assign({}, problem, { name });
                        this.setState( { problem: problem } );
                    } } />
                </label>
                <label>
                    Platform:
                    <input type="text" value={ this.state.problem.platform } onChange={ (e) => {
                        let platform = e.target.value;
                        let problem = this.state.problem;
                        problem = Object.assign({}, problem, { platform });
                        this.setState( { problem: problem } );
                    } } />
                </label>
                <label>
                    tag:
                    <input type="text" value={ this.state.problem.tag } onChange={ (e) => {
                        let tag = e.target.value;
                        let problem = this.state.problem;
                        problem = Object.assign({}, problem, { tag });
                        this.setState( { problem: problem } );
                    } } />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}