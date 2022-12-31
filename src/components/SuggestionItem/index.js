import './index.css'

const SuggestionItem = props => {
  const {object, addSuggestion} = props

  const addtoinput = () => {
    addSuggestion(object)
  }

  return (
    <li className="li">
      <p className="listheading">{object.suggestion}</p>
      <img
        className="iconimg"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        onClick={addtoinput}
      />
    </li>
  )
}

export default SuggestionItem
