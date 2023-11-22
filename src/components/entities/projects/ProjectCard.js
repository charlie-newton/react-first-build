import PropTypes from 'prop-types';
import { Card } from '../../UI/Card.js';
import './ProjectCard.css';

function ProjectCard({ project }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <div className="projectCard">
      <Card>
        <div className="projectName">{project.projectName}</div>
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