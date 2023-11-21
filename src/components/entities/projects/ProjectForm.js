import { useState } from "react";
import './ProjectForm.css';
import Form from "../../UI/Form.js";
import { ActionSubmit } from "../../UI/Actions.js";

const emptyProject = {
    projectName: "Default title",
    projectDescription: "Default description"
};

function ProjectForm({ onSubmit, onDismiss, intitalProject=emptyProject }) {
  // Initialisation ------------------------------
  const isValid = {
    projectName: (name) => name.length > 8,
    projectDescription: (name) => name.length > 10
  }
  const errorMessage = {
    projectName: "Project name is too short",
    projectDescription: "Project description is too short"
  }

  // State ---------------------------------------
  const [project, setProject] = useState(intitalProject);
  const [errors, setErrors] = useState(
    Object.keys(intitalProject).reduce((accum,key) => ({...accum, [key]: null}),{})
  );
  // Handlers ------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = value;
    setProject({ ...project, [name]: newValue });
    setErrors({ ...errors, [name]: isValid[name](newValue) ? null : errorMessage[name]});
  }

  const isValidProject = (project) => {
    let isProjectValid = true;
    Object.keys(project).forEach((key) => {
      if(isValid[key](project[key])) {
        errors[key] = null;
      } else {
        errors[key] = errorMessage[key];
        isProjectValid = false;
      }
    });
    return isProjectValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isValidProject(project) && onSubmit(project) && onDismiss();
    setErrors({...errors});
  };

  // View ----------------------------------------
  return (
    <Form onSubmit={handleSubmit} onCancel={onDismiss}>
      <Form.Item
        label="Project Name"
        htmlFor="ProjectName"
        advice="Enter project name..."
        error={errors.projectName}
      >
        <input
          type="text"
          name="projectName"
          value={project.projectName}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Project Description"
        htmlFor="ProjectDescription"
        advice="Enter project description..."
        error={errors.projectDescription}
      >
        <input
          type="text"
          name="projectDescription"
          value={project.projectDescription}
          onChange={handleChange}
        />
      </Form.Item>
    </Form>
  );
}

export default ProjectForm;