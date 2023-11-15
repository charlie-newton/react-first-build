import { useState } from "react";
import './ProjectForm.css';
import FormItem from "../../UI/Form.js";

const emptyProject = {
    projectName: "Default title",
    projectDescription: "Default description"
};

function ProjectForm({ intitalProject=emptyProject }) {
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

  // View ----------------------------------------
  return (
    <form>
      <FormItem
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
      </FormItem>

      <FormItem
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
      </FormItem>
    </form>
  );
}

export default ProjectForm;