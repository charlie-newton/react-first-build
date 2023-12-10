import PropTypes from 'prop-types';
import { Card } from '../../UI/Card.js';
import './ProjectCard.css';
import { ActionUpdate, ActionDelete } from '../../UI/Actions.js';

function ProjectCard({ project, toggleModify, onModify, onDelete }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  const setModifyForm = () => toggleModify(project);
  const handleModify = () => onModify();
  const handleDelete = () => onDelete();
  // View ----------------------------------------
  return (
    <div className="projectCard">
      <Card>
        <div className="topRow">
          <div className="projectName">{project.projectName}</div>
          <div className="buttonContainer">
            <ActionUpdate onClick={setModifyForm} />
            <ActionDelete onClick={handleDelete} />
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