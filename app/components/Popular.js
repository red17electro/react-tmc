import React from 'react';
import {fetchPopularRepos} from '../utils/api';

function LanguagesNav({selected, onUpdateLanguage}) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='flex-center'>
            {
                languages.map((language, index) => <li key={language}>
                    <button onClick={() => onUpdateLanguage(language)}
                            style={language === selected ? {color: 'blue'} : null}
                            className="btn-clear nav-link">{language}</button>
                </li>)
            }
        </ul>
    );
}

export default class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
        this.isLoading = this.isLoading.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
            repos: null
        })

        fetchPopularRepos(selectedLanguage)
            .then((repos) => this.setState({
                repos,
                error: null
            }))
            .catch((error) => {
                console.warn("Error while fetching our apps: ", error);

                this.setState({
                    error: 'There was an error fetching the repositories'
                });
            });

    }

    isLoading() {
        return this.state.repos === null && this.state.error === null;
    }

    render() {
        const {selectedLanguage, repos, error} = this.state;

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />

                {this.isLoading() && <p>LOADING...</p>}

                {error && <p> {error} </p>}

                {repos && <pre> {JSON.stringify(repos, null, 2)} </pre>}
            </React.Fragment>
        );
    }
}
