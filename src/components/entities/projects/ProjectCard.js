import PropTypes from 'prop-types';
import { Card } from '../../UI/Card.js';
import './ProjectCard.css';
import { ActionUpdate, ActionDelete } from '../../UI/Actions.js';

function ProjectCard({ project, handleModify, handleDelete }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <div className="projectCard">
      <Card>
        <div className="topRow">
          <div className="projectName">{project.projectName}</div>
          <div className="buttonContainer">
            <ActionUpdate onClick={() => handleModify} />
            <ActionDelete onClick={() => handleDelete} />
          </div>
        </div>
        <div className="imageHolder">
          <img className="projectImage" src={project.projectImage}/>
        </div>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectID: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
    ProjectDescription: PropTypes.string,
  }),
};

export default ProjectCard;