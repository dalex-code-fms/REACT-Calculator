export const NumericButtons = () => {
  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "%"];

  return (
    <div className="numericButtons-container">
      <ul>
        {buttons.map((btn, index) => (
          <li className="numeric-btn" key={index}>
            {btn}
          </li>
        ))}
      </ul>
    </div>
  );
};
