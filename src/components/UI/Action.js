import PropTypes from "prop-types";
import "./Action.css";

export function ActionAdd(props) {
  return (
    <div className="actionAdd">
      <button onClick={props.onClick}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVR4nGNgGAVUBkcZGBgOM9AQ/IfiUQtwgv+jQUTzIDqKZAi5+DA+Cw5TwYJDlPjw/2gqIgT+jwbRgAfRYUrT+ShgQAcAP99B32IiK8kAAAAASUVORK5CYII=" align="left" />
        <div>{props.buttonText}</div>
      </button>
    </div>
  );
}

ActionAdd.propTypes = {
  children: PropTypes.node,
};