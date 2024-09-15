import { useState } from "react";

function Home() {
  const [text, setText] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleButtonText = () => {
    setText(true);
    setDisabled(true);
  };

  const titleStyle = {
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#A9A9A9",
    cursor: "not-allowed",
  };

  return (
    <>
      <div style={containerStyle}>
        <h1 style={titleStyle}>
          <strong>De:</strong> André
        </h1>
        <h1 style={titleStyle}>
          <strong>Para:</strong> Amor da minha vida
        </h1>
        <button
          onClick={handleButtonText}
          disabled={disabled}
          style={disabled ? disabledButtonStyle : buttonStyle}
        >
          Clique aqui caso vc queira uma surpresa
        </button>

        {text && (
          <p>
            te amo my love, se você me ama, da uma risadinha
            kkkkkkkkkkkkkkkkkkkkk
          </p>
        )}
      </div>
    </>
  );
}

export default Home;
