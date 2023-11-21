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
        <img className="projectImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Aspect_ratio_-_16x9.svg/2560px-Aspect_ratio_-_16x9.svg.png"/>
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