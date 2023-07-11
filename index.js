const PROJECTS = [
    {
        name: 'Ruby resorts',
        type: 'full-stack',
        description: 'Room booking system',
        longDescription: 'Ruby Resorts project was developed using React, Redux, Ruby on Rails, and PostgreSQL. We used JWT tokens for authentication between the front and back ends. A JWT token will be generated every time a user logs in. A regular user can signup, then log in with a username and password. The user can get a list of Suites, can get details of each suite, will be able to reserve a suite, and can access their past reservations.',
        image: 'ruby-resorts.svg',
        live: 'https://ruby-resorts-front-end.onrender.com/',
        github: 'https://github.com/anthonymr/ruby-resorts-backend',
        technologies: ['Ruby on Rails', 'PostgreSQL', 'React', 'Redux'],
        captures: [
            {
                src: 'ruby-resorts-1.png',
                active: true,
            },
            {
                src: 'ruby-resorts-2.png',
                active: false,
            },
            {
                src: 'ruby-resorts-3.png',
                active: false,
            }
        ],
    },
    {
        name: 'BuddGet',
        type: 'full-stack',
        description: 'Budget management web app',
        longDescription: 'BuddGet is an full-stack application to handle budgets and save some money. A regular user can create categories, add paiments and see the total spended by category. BuddGet was built using Ruby on Rails for both, front and back ends, and PostgreSQL fro data storage. BuddGet uses Devise for authentication and CanCanCan for authorization.',
        image: 'buddget.svg',
        live: 'https://buddget-yqtb.onrender.com/welcome',
        github: 'https://github.com/anthonymr/buddget',
        technologies: ['Ruby on Rails', 'PostgreSQL'],
        captures: [
            {
                src: 'buddget-1.png',
                active: true,
            },
            {
                src: 'buddget-2.png',
                active: false,
            },
            {
                src: 'buddget-3.png',
                active: false,
            }
        ],
    },
    {
        name: 'Stock Screener',
        type: 'front-end',
        description: 'Stock price monitoring web app',
        longDescription: 'A mobile front-end application to live checking stock prices consuming the Financial Modeling Prep API. Stock Screener was created with JavaScript, React, and Redux following market best practices.',
        image: 'stock-screener.svg',
        live: 'https://stock-screaner.onrender.com/',
        github: 'https://github.com/anthonymr/stock-screener',
        technologies: ['JavaScript', 'CSS', 'React', 'Redux'],
        captures: [
            {
                src: 'stock-screener-1.png',
                active: true,
            },
            {
                src: 'stock-screener-2.png',
                active: false,
            },
            {
                src: 'stock-screener-3.png',
                active: false,
            }
        ],
    },
    {
        name: 'OS Conference 2025',
        type: 'front-end',
        description: 'Open source conference website',
        longDescription: 'OS Conference 2025 is a static website for an umbrella conference, composed of a collection of events covering the most important technologies, topics, and issues affecting open source today. Created with HTML, CSS, and JavaScript. The website is fully responsive and was created using mobile-first approach.',
        image: 'os-conference.svg',
        live: 'https://anthonymr.github.io/open-source-conference-2025/',
        github: 'https://github.com/anthonymr/open-source-conference-2025',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        captures: [
            {
                src: 'os-conference-1.png',
                active: true,
            },
            {
                src: 'os-conference-2.png',
                active: false,
            },
            {
                src: 'os-conference-3.png',
                active: false,
            }
        ],
    }
]

let activeProject = null;

function goTo(id) {
    let element = document.getElementById(id);

    window.scroll({
        top: element.offsetTop - 43,
        behavior: 'smooth'
    });
    
    toggleMenu();
}

function toggleMenu() {
    let menu = document.getElementById('menu');
    let mobileMenu = document.getElementById('mobile-menu');

    menu.classList.toggle('hidden');
    mobileMenu.classList.toggle('close');
}

function populateProjects(projects) {
    const container = document.getElementById('js-projects');

    projects.forEach(project => {
        const projectContainer = document.createElement('article');
        projectContainer.classList.add('project');

        projectContainer.innerHTML = `
        <div class="project-screen">
            <img src="images/projects/${project.image}" alt="${project.name}">
        </div>
        <div class="project-info">
            <h5>${project.name}</h5>
            <p class="description">${project.description}</p>
            <p class="kind ${project.type}">${project.type}</p>
        </div>
        <div class="see-more"><span>see more</span></div>
        `;

        projectContainer.addEventListener('click', () => {
            openModal(project);
        });

        container.appendChild(projectContainer);
    });
}

function openModal(project) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    activeProject = project;
    setCapture(project.captures);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

function resetCaptures(captures) {
    captures.forEach(capture => {
        capture.active = false;
    });

    capture[0].active = true;
}

function setCapture(captures) {
    captures.forEach(capture => {
        if (capture.active) {
            const slideDescription = document.getElementById('slide-description');
            const slideScreen = document.getElementById('slide-screen');
            const liveVersion = document.getElementById('live-version');
            const githubRepo = document.getElementById('github-repo');
            const slideTitle = document.getElementById('slide-title');

            slideScreen.src = `images/captures/${capture.src}`;
            slideScreen.alt = capture.description;

            liveVersion.href = activeProject?.live;
            githubRepo.href = activeProject?.github;

            slideTitle.innerHTML = activeProject?.name;

            slideDescription.innerHTML = activeProject?.longDescription;
            slideDescription.appendChild(generateTechnologies(activeProject?.technologies));
        }
    });
}

function generateTechnologies(technologies) {
    let container = document.createElement('span');

    technologies.forEach(technology => {
        const technologyLabel = document.createElement('span');
        technologyLabel.classList.add('tech-label');
        technologyLabel.innerHTML = technology;
        container.appendChild(technologyLabel);
    });

    return container;
}


function nextCapture(captures) {
    let activeCaptureIndex = captures.findIndex(capture => capture.active);
    captures[activeCaptureIndex].active = false;

    if (activeCaptureIndex === captures.length - 1) {
        activeCaptureIndex = 0;
    } else {
        activeCaptureIndex++;
    }

    captures[activeCaptureIndex].active = true;
    setCapture(captures);
}

function previousCapture(captures) {
    let activeCaptureIndex = captures.findIndex(capture => capture.active);
    captures[activeCaptureIndex].active = false;

    if (activeCaptureIndex === 0) {
        activeCaptureIndex = captures.length - 1;
    } else {
        activeCaptureIndex--;
    }

    captures[activeCaptureIndex].active = true;
    setCapture(captures);
}

window.onload = () => {
    populateProjects(PROJECTS);
}