import Form from "../../UI/Form.js";

const emptyProject = {
    projectName: "Default title",
    projectDescription: "Default description",
    projectImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ja2dMCKrZjWdChEdsGSzBs0d-UNozX46bQ&usqp=CAU",
    projectDeadline: (new Date().getFullYear() + 1) + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
};

function ProjectForm({ onSubmit, onCancel, initialProject=emptyProject }) {
  // Initialisation ------------------------------
  const validation = {
    isValid: {
      projectName: (name) => name.length > 3,
      projectDescription: (description) => description.length > 10,
      projectImage: (url) => /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=/?]|%[0-9a-fA-F]{2})*)?(#([a-zA-Z0-9$\-_.+!*'(),;:@&=/?]|%[0-9a-fA-F]{2})*)?)?$/.test(url),
      projectDeadline: (deadline) => true
    },
    errorMessage: {
      projectName: "Project name is too short",
      projectDescription: "Project description is too short",
      projectImage: "Invalid URL",
      projectDeadline: "Invalid deadline"
    }
  }

  const conformance = [];

  // State ---------------------------------------
  const [project, errors, handleChange, handleSubmit] = Form.useForm(initialProject, conformance, validation, onSubmit, onCancel);

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

      <Form.Item
        label="Project Image"
        htmlFor="ProjectImage"
        advice="Enter image url..."
        error={errors.projectImage}
      >
        <input
          type="text"
          name="projectImage"
          value={project.projectImage}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Project Deadline"
        htmlFor="ProjectDeadline"
        advice="Enter project deadline..."
        error={errors.projectDeadline}
      >
        <input
          type="date"
          name="projectDeadline"
          value={project.projectDeadline}
          onChange={handleChange}
        />
      </Form.Item>
    </Form>
  );
}

export default ProjectForm;