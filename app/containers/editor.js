import { connect } from 'react-redux'

import TextInput from '../components/text-input'
import { changeText } from '../lib/actions'

const mapStateToProps = (state, ownProps) => ({
  changed: state.changed,
  text: ownProps.text
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInput: (e) => { dispatch(changeText(e.target.innerText)) }
})

const Editor = connect(mapStateToProps, mapDispatchToProps)(TextInput)

export default Editor
