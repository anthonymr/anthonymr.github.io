const PROJECTS = [
    {
        name: 'Ruby resorts',
        type: 'full-stack',
        description: 'Room booking system',
        image: 'ruby-resorts.svg',
        live: 'https://ruby-resorts-front-end.onrender.com/',
        github: 'https://github.com/anthonymr/ruby-resorts-backend',
        technologies: ['Ruby on Rails', 'PostgreSQL', 'React', 'Redux'],
        captures: ['ruby-resorts-1.png', 'ruby-resorts-2.png', 'ruby-resorts-3.png'],
        descriptions: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.'
        ]
    },
    {
        name: 'BuddGet',
        type: 'full-stack',
        description: 'Budget management web app',
        image: 'buddget.svg',
        live: 'https://buddget-yqtb.onrender.com/welcome',
        github: 'https://github.com/anthonymr/buddget',
        technologies: ['Ruby on Rails', 'PostgreSQL'],
        captures: ['buddget-1.png', 'buddget-2.png', 'buddget-3.png'],
        descriptions: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.'
        ]
    },
    {
        name: 'Stock Screener',
        type: 'front-end',
        description: 'Stock price monitoring web app',
        image: 'stock-screener.svg',
        live: 'https://stock-screaner.onrender.com/',
        github: 'https://github.com/anthonymr/stock-screener',
        technologies: ['JavaScript', 'CSS', 'React', 'Redux'],
        captures: ['stock-screener-1.png', 'stock-screener-2.png', 'stock-screener-3.png'],
        descriptions: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.'
        ]
    },
    {
        name: 'OS Conference 2025',
        type: 'front-end',
        description: 'Open source conference website',
        image: 'os-conference.svg',
        live: 'https://anthonymr.github.io/open-source-conference-2025/',
        github: 'https://github.com/anthonymr/open-source-conference-2025',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        captures: ['os-conference-1.png', 'os-conference-2.png', 'os-conference-3.png'],
        descriptions: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, sed aliquam nisl nisl vitae nisl.'
        ]
    }
]

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
            <p class="kind">${project.type}</p>
        </div>
        `;

        container.appendChild(projectContainer);
    });
}

window.onload = () => {
    populateProjects(PROJECTS);
}