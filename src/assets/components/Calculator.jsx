import "./Calculator.css";
import { NumericButtons } from "./NumericButtons";
import { FunctionalButtons } from "./FunctionalButtons";
import { OperationButtons } from "./OperationButtons";

export const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="name-container">
        <p className="name">SHARP</p>
        <span className="solar-pannel"></span>
      </div>
      <div className="screen-container">
        <div className="screen">
          <p>15689945</p>
        </div>
        <p>
          ELSI MATE <span>EL-310AN</span>
        </p>
      </div>
      <div className="functional-container">
        <FunctionalButtons />
      </div>
      <div className="numericNumbers-container">
        <NumericButtons />
      </div>
      <div className="operation-container">
        <OperationButtons />
      </div>
    </div>
  );
};
