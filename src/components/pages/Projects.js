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
    const [showUpdateProjectForm, setShowUpdateProjectForm] = useState(false);

    // Context -----------------
    // Methods -----------------
    const toggleAdd = () => {
        setShowNewProjectForm(!showNewProjectForm);
        setShowUpdateProjectForm(false);
    }
    const toggleUpdate = () => {
        setShowUpdateProjectForm(!showUpdateProjectForm);
        setShowNewProjectForm(false);
    }    
    const handleDismiss = () => {
        setShowNewProjectForm(false);
        setShowUpdateProjectForm(false);
    }

    const handleModify = () => { }
    const handleDelete = () => { }
    const handleSubmit = async (project) => {
        const response = await API.post(endpoint, project);
        return response.isSuccess
            ? loadProjects(endpoint) || true
            : false;
    }
    const handleCancel = () => { }

    // View --------------------
    return (
        <section>
            <h1>My Projects</h1>
            <ActionAdd showText onClick={toggleAdd} buttonText="Create new project"/>

            { showNewProjectForm && <ProjectForm onSubmit={handleSubmit} onCancel={handleDismiss} /> }
            { showUpdateProjectForm && <ProjectForm onSubmit={handleSubmit} onCancel={handleDismiss} intitalProject={null} /> }

            {
                !projects
                    ? <p>{loadingMessage}</p>
                : projects.length === 0
                    ? <p>No projects found.</p>
                : (
                <div>
                    <CardContainer> 
                        {projects.map((project) =>
                            <ProjectCard project={project} handleModify={handleModify} handleDelete={handleDelete} key={project.projectID} />
                        )}                   
                    </CardContainer>
                </div>
                )
            }
        </section>
    )
}