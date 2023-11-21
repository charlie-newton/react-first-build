import { useState } from "react";
import API from "../../api/api.js";
import useLoad from "../../api/useLoad.js";

import { ActionAdd } from "../UI/Actions.js";
import { CardContainer } from "../UI/Card.js";
import ProjectCard from "../entities/projects/ProjectCard.js";
import ProjectForm from "../entities/projects/ProjectForm.js";

export default function Projects() {
    // Initialisation --------------
    const loggedInUserID = 5;
    const endpoint = `/projects/users/${loggedInUserID}`;

    // State -----------------
    const [projects, , loadingMessage, loadProjects] = useLoad(endpoint);
    const [showNewProjectForm, setShowNewProjectForm] = useState(false);

    // Context -----------------
    // Methods -----------------

    const handleAdd = () => setShowNewProjectForm(!showNewProjectForm);
    const handleDismiss = () => setShowNewProjectForm(false);

    const handleSubmit = async (project) => {
        project.preventDefault();
        const response = await API.post(endpoint, project);
        return response.isSuccess
            ? loadProjects(endpoint) || true
            : false;
    }

    // View --------------------
    return (
        <section>
            <h1>My Projects</h1>
            {
                !projects
                    ? <p>{loadingMessage}</p>
                : projects.length === 0
                    ? <p>No projects found.</p>
                : (
                <div>
                    <ActionAdd showText onClick={handleAdd} buttonText="Create new project"/>
                    {
                        showNewProjectForm && <ProjectForm onSubmit={handleSubmit} onCancel={handleDismiss} />
                    }

                    <CardContainer>                    
                        {projects.map((project) =>
                        <ProjectCard project={project} key={project.projectID} />
                        )}
                    </CardContainer>
                </div>
                )
            }
        </section>
    )
}