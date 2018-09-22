import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import test from '../actions';
function Sample(props) {
    console.log(props,"init")
    return (
        <div>
            <h1 className="App-title">dd{props.name}</h1>
            <button onClick ={props.actions}>SsS</button>;
        </div>
    );
}


function mapStateToProps(state) {
    return { name: state.simpleReducer.name }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(test, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);  