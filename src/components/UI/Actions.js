import PropTypes from "prop-types";
import "./Actions.css";

ActionTray.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}

export function ActionTray({children}) {
  return (
    <div className="actionTray">
      { children }
    </div>
  );
}

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showText: PropTypes.bool,
  buttonText: PropTypes.string.isRequired
};

function ActionButton({ children, onClick, showText, buttonText }) {
  return(
    <div className="buttonContainer">
      <button className="actionButton" onClick={onClick}>
        { children } { showText && <p>{buttonText}</p> }
      </button>
    </div>
  );
}

// Actions ----------------------------------------------------------------------

const actionPropTypes = {
  onClick: PropTypes.func.isRequired,
  showText: PropTypes.bool
};

ActionAdd.propTypes = actionPropTypes;

export function ActionAdd({onClick, showText=false, buttonText=null}) {
  return (
    <ActionButton buttonText={buttonText || "Add"} onClick={onClick} showText={showText}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVR4nO2WuUpDQRSGvyLaGDS22qoJWLgkvobLs6jR3qUVQ0pjfAcrjRF8CbfKrVVwS6oYOfAHBtS75V5UyA8HBu5/ljvnzPwDPfwzZIE14AS4AN5ktq4BRWAiicQFoA60A5oVmI8jcR9QBj4U+BHYA+a1GwMyWy8AFXHa8ikBqajJh4FTBXsHNoDBAH7G2QQazm5kovx5XQEe1IKwmAJuFOMM6A/jXJbjHTBCdJjvvWLtBnUqqH+27TN0j1m1o6W1L+qq2HoeF7YU046qJ7LOtAcZuM6x88MQ8CTuuBdxXSQ7asRYgGFf3FUvUk2khQQKWBL32It0LdJYAgV02nvpRXoVKe2T0M++Q1rfLMePeEmwgEF9e/Yq4EqkiQRakBPXlPNXh/DIi1QUqZJAAQfiLv/piwjJZ1uSGhe2g2x/B3mJUSOoeAQQt6bEaDqoU0kVm5SOdpF81JHjnTCOKacV9iCZi5Dc/vbWUcHQT7OMU0RDkmrD5Ich9bzp3P2hn2QdpPSSaSmYTXIVWNTFkpbldM6rzrS3tO2RH6UuJoHDEFdxLaYB/oJx6fmxrtRX2bmO2EoIJe3hb+AT+Ly4iyA1K5MAAAAASUVORK5CYII=" />
    </ActionButton>
  );
}

ActionSubmit.propTypes = actionPropTypes;

export function ActionSubmit({onClick, showText=false, buttonText=null}) {
  return (
    <ActionButton buttonText={buttonText || "Submit"} onClick={onClick} showText={showText}>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgElEQVR4nO2VQQqAIBBF3yWMuv9JWkVYm1x0nNoMESGhokPBPHDpPGaYr2AYRhkdsAKjtjQABzBrSR2wiXQHepPWxMb77fFOwCLZK8lpyLx74TMLVJHGRjaguL0uQd4sMu5F3jynLiJXexy6x/JUWaRU7l2q/jJId15O804N45+cDxpD3zLXsAsAAAAASUVORK5CYII=" />    </ActionButton>
  );
}