const projectCardContainer = document.querySelector(".project-card-container");

let projectList = [
  {
    projectTitle: "Super Cool Project",
    projectDesc: "Test1",
  },
  {
    projectTitle: "Less Cool Project",
    projectDesc: "Test2",
  },
  {
    projectTitle: "Impossible App",
    projectDesc: "Test3",
  },
  {
    projectTitle: "Easy Peasy App",
    projectDesc: "Test4",
  },
  {
    projectTitle: "Ad Blocker",
    projectDesc: "Test5",
  },
  {
    projectTitle: "Money Maker",
    projectDesc: "Test6",
  },
];

let projectHTML = ""; // Initialize a string to hold all project cards

projectList.forEach(({ projectTitle, projectDesc }) => {
  projectHTML += `
    <div class="project-card">
      <div class="project-title">
        <p>${projectTitle}</p>
        <p class="project-description">${projectDesc}</p>
      </div>
      <div class="project-btn">
        <span class="mdi mdi-star-plus-outline"></span>
        <span class="mdi mdi-eye-plus-outline"></span>
        <span class="mdi mdi-source-fork"></span>
      </div>
    </div>`;
});

// Update the DOM in one operation for performance
projectCardContainer.innerHTML = projectHTML;
