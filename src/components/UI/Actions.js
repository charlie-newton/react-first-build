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

ActionUpdate.propTypes = actionPropTypes;

export function ActionUpdate({onClick, showText=false, buttonText=null}) {
  return (
    <ActionButton buttonText={buttonText || ""} onClick={onClick} showText={showText}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABBklEQVR4nM3Vvy5EQRTH8U+zJYpFVBREo1EQDdXSKq54BTyACoWSiD8lCdWGQqcQEYkHkGg9gAfwDDLJKTR79+7cyN5f8kvOnZl7vjMnmTkMSRPYingO6xEvhZM2MBtxWjteJXEbp3jCCw7xjhuc4wPH8f2F/Yi/sYeTyNFTl7jFEZ5j51e4xibuY24br9iN+DNOcYeLMkAXBVqYj7ERTP8pXbIYS3NibSv+7VYB5KpoFGAq6lvmmTqARTz28VodQI6KRgE6+KnoTiNP8O+AhXhnyrzS6HuQo2IQQDte036ezAUs462CV3MBOSqGDjiLrrWT6YfI0VNj0YdTb83xAUZrVGBw/QKBvWtBD9CSwgAAAABJRU5ErkJggg=="/> </ActionButton>
  );
}

ActionDelete.propTypes = actionPropTypes;

export function ActionDelete({onClick, showText=false, buttonText=null}) {
  return (
    <ActionButton buttonText={buttonText || ""} onClick={onClick} showText={showText}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nOXUO2oCYRwE8CkknVcw6AV81BG9gI/aBwHbaNqINpY+WkUvoGir6AUU0yrJBQxaxV5Bg2FlKqv5S0AkA1+x8JtvtlgW+C+pADhdnOo1F53+6NxuwMknkf/8pCXAzoeCJ8Qxw0CcnbGCO8QvhoE8O20Fl6/4SmrslBScJe4aBnrsZBQcJZ4aBmbsRBTsI14ZBr7Y8Sr4AcAPgCMAl+Adc2DH6UrZ8I08gn2kXcOQd5aeBBumnVsGBiylBJum7VsGGiy9CbZIW7cMvLLUFGyLtmAZSLI0FOyINmEZCLG0EOySNmgZcAPYG/7/O3ZMyQHYCpd/A3i2Xn4/+QVXaHujT54Q+AAAAABJRU5ErkJggg=="/></ActionButton>
  );
}