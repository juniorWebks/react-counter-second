import React from 'react'

import { connect } from 'react-redux'
import { addAction, substractAction, answerAction, resetAction, divisionAction ,multiplyAction, inputAction } from '../state/calculator'

const styles = {
  center: {
    textAlign: 'center'
  }
}

const Calculator = (props) => (
  <div
    style={styles.center}
  >
    <div>
      <input
        type="text"
        style={{ textAlign: 'right' }}
        disabled={true}
        value={props._isResultShown ? props._result : props._input}
      />
    </div>
    <div>
      <button onClick={props._divisionAction}>/</button>
      <button onClick={props._multiplyAction}>*</button>
      <button onClick={props._substractAction}>-</button>
      <button onClick={props._addAction}>+</button>
    </div>
    <div>
      <button onClick={() => props._inputAction(1)}>1</button>
      <button onClick={() => props._inputAction(2)}>2</button>
      <button onClick={() => props._inputAction(3)}>3</button>
    </div>
    <div>
      <button onClick={() => props._inputAction(4)}>4</button>
      <button onClick={() => props._inputAction(5)}>5</button>
      <button onClick={() => props._inputAction(6)}>6</button>
    </div>
    <div>
      <button onClick={() => props._inputAction(7)}>7</button>
      <button onClick={() => props._inputAction(8)}>8</button>
      <button onClick={() => props._inputAction(9)}>9</button>
    </div>
    <div>
      <button onClick={props._resetAction}>AC</button>
      <button onClick={() => props._inputAction(0)}>0</button>
      <button onClick={props._answerAction}>=</button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  _input: state.calculator.input,
  _result: state.calculator.result,
  _isResultShown: state.calculator.isResultShown
})

const mapDispatchToProps = dispatch => ({
  _inputAction: number => dispatch(inputAction(number)),
  _addAction: () => dispatch(addAction()),
  _substractAction: () => dispatch(substractAction()),
  _answerAction: () => dispatch(answerAction()),
  _resetAction: () => dispatch(resetAction()),
  _divisionAction: () => dispatch(divisionAction()),
  _multiplyAction: () => dispatch(multiplyAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)