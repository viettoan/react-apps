import React from "react";
import './CalculatorComponent.css'
import { NUMBERS, OPERATORS, DECIMAL_POINT } from "../../helpers/constants";
import { connect } from "react-redux";
import { ac, updateCalculation } from "../../actions";

const mapStateToProps = state => {
    return {
        calculation: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAc: () => {
            dispatch(ac())
        },
        onUpdateCalculation: calculation => {
            dispatch(updateCalculation(calculation))
        }
    }
}

class CalculatorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app">
                <div>
                    <div className="calculator">
                        <div className="formulaScreen"></div>
                        <div className="outputScreen" id="display">0</div>
                        <div>
                            <button className="jumbo" id="clear" value="AC" style={{background: `rgb(172, 57, 57)`}}>
                                AC
                            </button>
                            <button id="divide" value="/" style={{background: `rgb(102, 102, 102)`}}>
                                { OPERATORS.devide }
                            </button>
                            <button id="multiply" value="x" style={{background: `rgb(102, 102, 102)`}}>
                                { OPERATORS.multiplication }
                            </button>
                            <button id="seven" value="7">
                                { NUMBERS.seven }
                            </button>
                            <button id="eight" value="8">
                                { NUMBERS.eight }
                            </button>
                            <button id="nine" value="9">
                                { NUMBERS.nine }
                            </button>
                            <button id="subtract" value="‑" style={{background: `rgb(102, 102, 102)`}}>
                                { OPERATORS.minus }
                            </button>
                            <button id="four" value="4">
                                { NUMBERS.four }
                            </button>
                            <button id="five" value="5">
                                { NUMBERS.five }
                            </button>
                            <button id="six" value="6">
                                { NUMBERS.six }
                            </button>
                            <button id="add" value="+" style={{background: `rgb(102, 102, 102)`}}>
                                { OPERATORS.add }
                            </button>
                            <button id="one" value="1">
                                { NUMBERS.one }
                            </button>
                            <button id="two" value="2">
                                { NUMBERS.two }
                            </button>
                            <button id="three" value="3">
                                { NUMBERS.three }
                            </button>
                            <button className="jumbo" id="zero" value="0">
                                { NUMBERS.zero }
                            </button>
                            <button id="decimal" value=".">
                                { DECIMAL_POINT }
                            </button>
                            <button id="equals" value="="
                                    style={{background: `rgb(0, 68, 102)`,position: 'absolute',height: 130,bottom: 5}}>=
                            </button>
                        </div>
                    </div>
                    <div className="author">
                        Designed and Coded By <br/>
                        <a href="https://www.freecodecamp.org/toanpv" target="_blank">Viet Toan</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorComponent);