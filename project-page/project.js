const SERVER_URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

window.onload = () => {

    function _getProjectTitleURL() {
        const urlParams = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        return urlParams.title.toLowerCase();
    }

    async function _getProjectsData() {
        const response = await fetch(SERVER_URL);
        const projects = await response.json();
        const [selectedProject] = projects.filter(project => project.name.toLowerCase() === _getProjectTitleURL());
        console.log(selectedProject);

        _updateProjectInfo(selectedProject);
    }

    function _updateProjectInfo(selectedProject) {
        const projectTitleH1 = document.querySelector('#project-title');
        projectTitleH1.textContent = selectedProject.name;
        const projectType = document.querySelector('#project-type');
        projectType.textContent = selectedProject.description;
        const projectText = document.querySelector('#project-description');
        projectText.textContent = selectedProject.content;
        const projectImage = document.querySelector('#project-image');
        projectImage.src = selectedProject.image;
        const projectDate = document.querySelector('#completed-on');
        projectDate.textContent = selectedProject.completed_on;

    }

    _getProjectsData();

}