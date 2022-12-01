var projects = [
  {
    name: "Windy City Point of Sale",
    link: "proj_windycitypos.html",
    authors:
      "Tanay Srivastava, Mert Bayturk",
    time_period: "Sep 2018 - May 2020",
    img: "images/windycitypos.png",
    description:
      'After working at Windy City Pizza as a Front Crew Manager, a coworker and\
       I noticed numerous issues with the Point of Sale software\
       We needed to use this software to put in orders that came in from the phone and in person.\
       With added external APIs, Visual Basic programming, and SQL querying for database management\
       Mert and I programmed a functional Point of Sale software for the Windy City Pizza Franchise. <br><br>\
    The project source code is hosted here: <a href="https://github.com/tanaysrivastav1/WindyCityPOS">\
    github</a>.<br>\
    ',
    abstract:
      'Windy City POS is an open source Point of Sale software. \
      It is designed to help easing the effort for taking pizza orders from phone calls,\
       and to support multi-orders. The code is posted at \
       <a href="https://github.com/tanaysrivastav1/WindyCityPOS">Windy City POS</a>.',
  },
  {
    name: "PetBnB App",
    link: "index.html",
    authors: "Tanay Srivastava, Ryan Choi, Truman Marshall",
    time_period: "Mar 2017",
    img: "images/petbnb.png",
    description: "",
    abstract:
      'An airbnb app for pets. When pet owners want to travel on their own, \
      their dog or cat needs to be taken care of. Now, pet owners can drop their pet at a home for a short amount of time! \
      <a href="https://github.com/tanaysrivastav1/PetBnBApp">\
      View Source Code</a>.',
  },
];

function test(projects) {
  console.log("test log");
  for (let project of projects) {
    console.log(project.name);
  }
}

function two_project_abstract(projects, projectSelector) {
  let project_list = document.querySelector(projectSelector);
  if (project_list) {
    if (projects instanceof Array) {
      let counter = 0;
      for (let project of projects) {
        let html = `
            <a href="${project.link}">
            <img class="project_pic" src="${project.img}"/>
            </a>
            <div class="project_txt">
                <div class="project_name">${project.name}</div>
                <div class="project_auth">${project.authors}</div>
                <div class="project_time">${project.time_period}</div>
                <div class="project_abst">${project.abstract}</div>
            </div>`;
        let container = document.createElement("div");
        container.className = "project";
        container.innerHTML = html;
        project_list.append(container);
        counter++;
        if (counter >= 2) break;
      }
    }
  }
}

function all_project_abstract(projects, projectSelector) {
  let project_list = document.querySelector(projectSelector);
  if (project_list) {
    if (projects instanceof Array) {
      for (let project of projects) {
        let html = `
            <a href="${project.link}">
            <img class="project_pic" src="${project.img}"/>
            </a>
            <div class="project_txt">
                <div class="project_name">${project.name}</div>
                <div class="project_auth">${project.authors}</div>
                <div class="project_time">${project.time_period}</div>
                <div class="project_abst">${project.abstract}</div>
            </div>`;
        let container = document.createElement("div");
        container.className = "project";
        container.innerHTML = html;
        project_list.append(container);
      }
    }
  }
}

function load_project_info(project, projectSelector) {
  let project_content = document.querySelector(projectSelector);
  if (project_content) {
    let html = `
              <img class="project_pic" src="${project.img}"/>
              <div class="project_txt">
                  <div class="project_name">${project.name}</div>
                  <div class="project_auth">${project.authors}</div>
                  <div class="project_time">${project.time_period}</div>
              </div>`;
    let container = document.createElement("div");
    container.className = "project";
    container.innerHTML = html;
    project_content.append(container);
  }
}

function load_project_detail(project, projectSelector) {
  let project_content = document.querySelector(projectSelector);
  if (project_content) {
    let html = `<div class="project_detail">${project.description}</div>`;
    let container = document.createElement("div");
    container.className = "project";
    container.innerHTML = html;
    project_content.append(container);
  }
}
