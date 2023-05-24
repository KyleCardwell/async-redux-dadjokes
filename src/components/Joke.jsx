import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getJoke } from '../actions/titleActions'

function Joke(props) {

  useEffect(() => {
    props.getJoke()
  }, [props.getJoke])


  if (props.loading) {
    return (
      <><h2>Loading...</h2></>
    )
  }

  return (
    <div>
      <p>Dad says...</p>
      <p>{props.joke}</p>
      <button onClick={() => {props.getJoke()}}>Get New Joke</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    error: state.error,
    loading: state.loading
  }
}

const mpaDispatchToProps = {getJoke}

export default connect(mapStateToProps, mpaDispatchToProps)(Joke);