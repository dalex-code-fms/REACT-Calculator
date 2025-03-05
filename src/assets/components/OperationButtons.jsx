export const OperationButtons = () => {
  const buttons = ["+/-", "CE", "X", "/", "+", "-", "="];
  // const buttons2 = ["+", "-", " ", "="];

  return (
    <div className="operation-container">
      <ul>
        {buttons.map((btn, index) =>
          btn === "+" ? (
            <li className="operation-btn more-btn" key={index}>
              {btn}
            </li>
          ) : (
            <li className="operation-btn" key={index}>
              {btn}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
