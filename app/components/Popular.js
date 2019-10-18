import React from 'react';

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
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }


    render() {
        const { selectedLanguage } = this.state;

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </React.Fragment>
        );
    }
}