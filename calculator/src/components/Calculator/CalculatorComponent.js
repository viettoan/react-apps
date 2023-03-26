import React from "react";
import './CalculatorComponent.css'
import { NUMBERS, OPERATORS, DECIMAL_POINT } from "../../helpers/constants";
import { connect } from "react-redux";
import { ac, updateCalculation } from "../../actions";

const mapStateToProps = state => {
    return {
        calculation: state.newCalculation
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

    handleUpdate = (value) => {
        console.log(value)
        this.props.onUpdateCalculation(value);
    }

    render() {
        console.log(this.props)
        return (
            <div id="app">
                <div>
                    <div className="calculator">
                        <div className="formulaScreen"></div>
                        <div className="outputScreen" id="display">{ this.props.calculation }</div>
                        <div>
                            <button className="jumbo" id="clear" value="AC" style={{background: `rgb(172, 57, 57)`}} >
                                AC
                            </button>
                            <button id="divide" value="/" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleUpdate(OPERATORS.devide)}>
                                { OPERATORS.devide }
                            </button>
                            <button id="multiply" value="x" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleUpdate(OPERATORS.multiplication)}>
                                { OPERATORS.multiplication }
                            </button>
                            <button id="seven" value="7" onClick={(e) => this.handleUpdate(NUMBERS.seven)}>
                                { NUMBERS.seven }
                            </button>
                            <button id="eight" value="8" onClick={(e) => this.handleUpdate(NUMBERS.eight)}>
                                { NUMBERS.eight }
                            </button>
                            <button id="nine" value="9" onClick={(e) => this.handleUpdate(NUMBERS.nine)}>
                                { NUMBERS.nine }
                            </button>
                            <button id="subtract" value="‑" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleUpdate(OPERATORS.minus)}>
                                { OPERATORS.minus }
                            </button>
                            <button id="four" value="4" onClick={(e) => this.handleUpdate(NUMBERS.four)}>
                                { NUMBERS.four }
                            </button>
                            <button id="five" value="5" onClick={(e) => this.handleUpdate(NUMBERS.five)}>
                                { NUMBERS.five }
                            </button>
                            <button id="six" value="6" onClick={(e) => this.handleUpdate(NUMBERS.six)}>
                                { NUMBERS.six }
                            </button>
                            <button id="add" value="+" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleUpdate(OPERATORS.add)}>
                                { OPERATORS.add }
                            </button>
                            <button id="one" value="1" onClick={(e) => this.handleUpdate(NUMBERS.one)}>
                                { NUMBERS.one }
                            </button>
                            <button id="two" value="2" onClick={(e) => this.handleUpdate(NUMBERS.two)}>
                                { NUMBERS.two }
                            </button>
                            <button id="three" value="3" onClick={(e) => this.handleUpdate(NUMBERS.three)}>
                                { NUMBERS.three }
                            </button>
                            <button className="jumbo" id="zero" value="0" onClick={(e) => this.handleUpdate(NUMBERS.zero)}>
                                { NUMBERS.zero }
                            </button>
                            <button id="decimal" value="." onClick={(e) => this.handleUpdate(DECIMAL_POINT)}>
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