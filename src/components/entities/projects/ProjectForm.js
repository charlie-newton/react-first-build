import './ProjectForm.css';
import Form from "../../UI/Form.js";

const emptyProject = {
    projectName: "Default title",
    projectDescription: "Default description"
};

function ProjectForm({ onSubmit, onCancel, intitalProject=emptyProject }) {
  // Initialisation ------------------------------
  const validation = {
    isValid: {
      projectName: (name) => name.length > 8,
      projectDescription: (name) => name.length > 10
    },
    errorMessage: {
      projectName: "Project name is too short",
      projectDescription: "Project description is too short"
    }
  }

  const conformance = [];

  // State ---------------------------------------
  const [project, errors, handleChange, handleSubmit] = Form.useForm(intitalProject, conformance, validation, onSubmit, onCancel);

  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <Form onSubmit={handleSubmit} onCancel={onCancel}>
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