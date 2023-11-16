import { useState, useEffect } from "react";
import API from "../../api/api.js";
import callFetch from "../../api/api.js";
import { ActionAdd } from "../UI/Action.js";
import { CardContainer } from "../UI/Card.js";
import ProjectCard from "../entities/projects/ProjectCard.js";
import ProjectForm from "../entities/projects/ProjectForm.js";

export default function Projects() {
    // Initialisation --------------
    const loggedInUserID = 5;

    const endpoint = `/projects/users/${loggedInUserID}`;

    // State -------------------
    const [projects, setProjects] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState("Loading records...");

    const [showNewProjectForm, setShowNewProjectForm] = useState(false);

    // Context -----------------
    // Methods -----------------
    const getProjects = async () => {
        const response = await API.get(`/projects/users/${loggedInUserID}`);
        response.isSuccess
            ? setProjects(response.result)
            : setLoadingMessage(response.message)
    };

    const handleAdd = () => setShowNewProjectForm(!showNewProjectForm);
    const handleDismiss = () => setShowNewProjectForm(false);

    const handleSubmit = async (project) => {
        const response = await API.post(endpoint, project);
        return response.isSuccess
            ? getProjects() || true
            : false;
    };

    useEffect(() => { getProjects() }, []);

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
                        showNewProjectForm && <ProjectForm onSubmit={handleSubmit} onDismiss={handleDismiss} />
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