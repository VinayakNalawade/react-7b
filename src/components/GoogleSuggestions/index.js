import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {search: ''}

  updateSearch = event => {
    this.setState({search: event.target.value})
  }

  addSuggestion = object => {
    this.setState({search: object.suggestion})
  }

  render() {
    const {search} = this.state
    const {suggestionsList} = this.props

    const list = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="mainContainer">
        <img
          className="img"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="card">
          <div className="searchContainer">
            <img
              className="searchIcon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              value={search}
              onChange={this.updateSearch}
            />
          </div>
          <ul className="suggestionContainer">
            {list.map(each => (
              <SuggestionItem
                object={each}
                addSuggestion={this.addSuggestion}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
