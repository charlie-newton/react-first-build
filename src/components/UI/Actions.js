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
    <button className="actionButton" onClick={onClick}>
      { children } { showText && <p>{buttonText}</p> }
    </button>
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
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVR4nGNgGAVUBkcZGBgOM9AQ/IfiUQtwgv+jQUTzIDqKZAi5+DA+Cw5TwYJDlPjw/2gqIgT+jwbRgAfRYUrT+ShgQAcAP99B32IiK8kAAAAASUVORK5CYII=" />
    </ActionButton>
  );
}

ActionSubmit.propTypes = actionPropTypes;

export function ActionSubmit({onClick, showText=false, buttonText=null}) {
  return (
    <ActionButton buttonText={buttonText || "Submit"} onClick={onClick} showText={showText}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVR4nGNgGAVUBkcZGBgOM9AQ/IfiUQtwgv+jQUTzIDqKZAi5+DA+Cw5TwYJDlPjw/2gqIgT+jwbRgAfRYUrT+ShgQAcAP99B32IiK8kAAAAASUVORK5CYII=" align="left" />
    </ActionButton>
  );
}