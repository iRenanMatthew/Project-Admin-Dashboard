const projectCardContainer = document.querySelector(".project-card-container");
const annoucementCardContainer = document.querySelector(
  ".announcement-container"
);
const trendingCardContainer = document.querySelector(".trending-container");

let projectList = [
  {
    projectTitle: "Super Cool Project",
    projectDesc:
      "Proin commodo non turpis non mollis. Nam sit amet mauris nec velit dapibus ullamcorper quis vitae risus. Pellentesque tristique augue.",
  },
  {
    projectTitle: "Less Cool Project",
    projectDesc:
      "Aliquam id placerat dolor, vitae pulvinar libero. Proin rutrum interdum tellus rhoncus laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
  },
  {
    projectTitle: "Impossible App",
    projectDesc:
      "Nunc eros augue, placerat id condimentum nec, condimentum eget urna. In diam sem, condimentum eget volutpat ac, luctus vel libero.",
  },
  {
    projectTitle: "Easy Peasy App",
    projectDesc:
      "Curabitur mollis dictum dui, eget commodo lectus. Nunc sit amet felis a ipsum suscipit fermentum non et elit. Sed ut rutrum ligula. Etiam molestie ut.",
  },
  {
    projectTitle: "Ad Blocker",
    projectDesc:
      "Praesent at justo eu turpis auctor maximus vel sit amet arcu. Donec molestie metus sed tortor fringilla porta. Phasellus at.",
  },
  {
    projectTitle: "Money Maker",
    projectDesc:
      "Suspendisse et tortor metus. Nulla laoreet mattis orci id faucibus. Praesent nec scelerisque ex, a maximus nisl. Cras volutpat dui nec magna viverra, a ultrices.",
  },
];

let announcementList = [
  {
    title: "Site Maintenance",
    desc: "Suspendisse potenti. Phasellus eros ex, feugiat eget mauris vitae, finibus faucibus sapien. Orci varius natoque.",
  },
  {
    title: "Community Share Day",
    desc: "Nam finibus augue leo, vel semper augue rhoncus non. Vestibulum pellentesque lobortis sapien sit amet.",
  },
  {
    title: "Updated Privacy Policy",
    desc: "Morbi volutpat pretium consequat. Morbi vel sagittis sapien, et euismod mi. Morbi ornare, dolor nec.",
  },
];

let trendingList = [
  {
    name: "tegan",
    type: "World Peace Builder",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "morgan",
    type: "Super Cool Project",
    imgSrc:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "kendall",
    type: "Life Changing App",
    imgSrc:
      "https://images.unsplash.com/photo-1552944150-6dd1180e5999?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "tegalexan",
    type: "No Traffic Maker",
    imgSrc:
      "https://images.unsplash.com/photo-1583404283135-ee11fa80b2a2?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Iitialize a string to hold all project cards

let projectHTML = "";
let annoucementHTML = "";
let trendingHTML = "";

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

announcementList.forEach(({ title, desc }) => {
  annoucementHTML += `     
          <div class="content-item">
            <p>${title}</p>
            <p>${desc}</p>
          </div>`;
});

trendingList.forEach(({ name, type, imgSrc }) => {
  trendingHTML += `     
          <div class="trending-content">
          <img src="${imgSrc}" alt="${name} - Image">
            <div class="trending-text">
              <p>@${name}</p>
              <p>${type}</p>
            </div>
          </div>`;
});

// Update the DOM in one operation for performance
projectCardContainer.innerHTML = projectHTML;
annoucementCardContainer.innerHTML = annoucementHTML;
trendingCardContainer.innerHTML = trendingHTML;
