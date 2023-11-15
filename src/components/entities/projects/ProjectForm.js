import { useState } from "react";
import './ProjectForm.css';
import FormItem from "../../UI/Form.js";

const emptyProject = {
    projectName: "Default title",
    projectDescription: "Default description"
};

function ProjectForm({ intitalProject=emptyProject }) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  const [project, setProject] = useState(intitalProject);
  // Handlers ------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = value;
    setProject({ ...project, [name]: newValue });
  }

  // View ----------------------------------------
  return (
    <form>
      <FormItem
        label="Project Name"
        htmlFor="ProjectName"
        advice="Enter project name..."
        error={null}
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
        error={null}
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