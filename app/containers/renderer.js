import { connect } from 'react-redux'

import Markdown from '../components/markdown'
import { changeText } from '../lib/actions'

const mapStateToProps = (state, ownProps) => ({
  src: state.text
})

const mapDispatchToProps = (dispatch, ownProps) => ({ })

const Renderer = connect(mapStateToProps, mapDispatchToProps)(Markdown)

export default Renderer
