import React from "react";
import './CalculatorComponent.css'
import { NUMBERS, OPERATORS, DECIMAL_POINT } from "../../helpers/constants";
import { connect } from "react-redux";
import { updateFormula, resetFormula, updateOutput, resetOutput } from "../../actions";

const mapStateToProps = state => {
    return {
        formula: state.formula,
        output: state.output
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateFormula: formula => {
            dispatch(updateFormula(formula))
        },
        onResetFormula: () => {
            dispatch(resetFormula())
        },
        onUpdateOutput: output => {
            dispatch(updateOutput(output))
        },
        onResetOutput: () => {
            dispatch(resetOutput())
        },
    }
}

class CalculatorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOperator = (value) => {
        this.props.onResetOutput();
        this.props.onUpdateOutput(value);
        this.props.onUpdateFormula(value);
    }

    handleNumber = (value) => {
        this.props.onResetOutput();
        this.props.onUpdateOutput(value);
        this.props.onUpdateFormula(value);
    }

    calculate = () => {
        const result = eval(this.props.formula);
        this.props.onResetOutput();
        this.props.onResetFormula();
        this.props.onUpdateFormula(result);
    }

    render() {
        console.log(this.props)
        return (
            <div id="app">
                <div>
                    <div className="calculator">
                        <div className="formulaScreen">{ this.props.formula }</div>
                        <div className="outputScreen" id="display">{ this.props.output }</div>
                        <div>
                            <button className="jumbo" id="clear" value="AC" style={{background: `rgb(172, 57, 57)`}} >
                                AC
                            </button>
                            <button id="divide" value="/" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleOperator(OPERATORS.devide)}>
                                { OPERATORS.devide }
                            </button>
                            <button id="multiply" value="x" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleOperator(OPERATORS.multiplication)}>
                                { OPERATORS.multiplication }
                            </button>
                            <button id="seven" value="7" onClick={(e) => this.handleNumber(NUMBERS.seven)}>
                                { NUMBERS.seven }
                            </button>
                            <button id="eight" value="8" onClick={(e) => this.handleNumber(NUMBERS.eight)}>
                                { NUMBERS.eight }
                            </button>
                            <button id="nine" value="9" onClick={(e) => this.handleNumber(NUMBERS.nine)}>
                                { NUMBERS.nine }
                            </button>
                            <button id="subtract" value="‑" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleOperator(OPERATORS.minus)}>
                                { OPERATORS.minus }
                            </button>
                            <button id="four" value="4" onClick={(e) => this.handleNumber(NUMBERS.four)}>
                                { NUMBERS.four }
                            </button>
                            <button id="five" value="5" onClick={(e) => this.handleNumber(NUMBERS.five)}>
                                { NUMBERS.five }
                            </button>
                            <button id="six" value="6" onClick={(e) => this.handleNumber(NUMBERS.six)}>
                                { NUMBERS.six }
                            </button>
                            <button id="add" value="+" style={{background: `rgb(102, 102, 102)`}} onClick={(e) => this.handleOperator(OPERATORS.add)}>
                                { OPERATORS.add }
                            </button>
                            <button id="one" value="1" onClick={(e) => this.handleNumber(NUMBERS.one)}>
                                { NUMBERS.one }
                            </button>
                            <button id="two" value="2" onClick={(e) => this.handleNumber(NUMBERS.two)}>
                                { NUMBERS.two }
                            </button>
                            <button id="three" value="3" onClick={(e) => this.handleNumber(NUMBERS.three)}>
                                { NUMBERS.three }
                            </button>
                            <button className="jumbo" id="zero" value="0" onClick={(e) => this.handleNumber(NUMBERS.zero)}>
                                { NUMBERS.zero }
                            </button>
                            <button id="decimal" value="." onClick={(e) => this.handleNumber(DECIMAL_POINT)}>
                                { DECIMAL_POINT }
                            </button>
                            <button id="equals" value="="
                                    style={{background: `rgb(0, 68, 102)`,position: 'absolute',height: 130,bottom: 5}} onClick={(e) => this.calculate()}>=
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