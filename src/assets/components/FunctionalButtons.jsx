export const FunctionalButtons = () => {
  const buttons = ["OFF", "√"];
  const buttons2 = ["CM", "RM", "M-", "M+", "C"];

  return (
    <div className="functional-container">
      <ul className="first-functional">
        {buttons.map((btn, index) => (
          <li className="functional-btn" key={index}>
            {btn}
          </li>
        ))}
      </ul>

      <ul>
        {buttons2.map((btn, index) =>
          btn === "C" ? (
            <li className="functional-btn cButton" key={index}>
              {btn}
            </li>
          ) : (
            <li className="functional-btn" key={index}>
              {btn}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
