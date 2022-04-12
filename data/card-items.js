const items = [
  {
    cardTitle: "Q-Trip",
    cardDescription: "Explore the world with fantastic views",
    hostedLink: "https://hd-qtrip-dynamic-frontend.netlify.app/",
    gitLink: "",
    imageLink:
      "https://raw.githubusercontent.com/sorted-hd/MY-FILES/main/qtrip.png",
  },
  {
    cardTitle: "Tweet-App",
    cardDescription: "Post your ideas",
    hostedLink: "",
    gitLink: "https://github.com/sorted-hd/Tweet-App",
    imageLink:
      "https://raw.githubusercontent.com/sorted-hd/MY-FILES/main/tweet-app.png",
  },
  {
    cardTitle: "Q-Kart",
    cardDescription: "Shopping Made Easy",
    hostedLink: "https://qkart-frontend-hd.netlify.app",
    gitLink: "",
    imageLink:
      "https://raw.githubusercontent.com/sorted-hd/MY-FILES/main/qkart.png",
  },
  {
    cardTitle: "X-Flix",
    cardDescription: "An Online Video Streaming Service",
    hostedLink: "https://xflix-hd.netlify.app",
    gitLink: "",
    imageLink:
      "https://raw.githubusercontent.com/sorted-hd/MY-FILES/main/xflix.png",
  },
  {
    cardTitle: "TO-DO App",
    cardDescription: "TO-DO App Made With React",
    hostedLink: "",
    gitLink: "",
    imageLink: "",
  },
  {
    cardTitle: "Task Manager",
    cardDescription: "An App To Manage Task Running On NodeJS",
    hostedLink: "",
    gitLink: "https://github.com/sorted-hd/task-manager.git",
    imageLink:
      "https://raw.githubusercontent.com/sorted-hd/MY-FILES/main/nodejs.png",
  },
];

const projectCard = document.querySelector("#projectCard");

items.map((item) => {
  const markup = `
        <div class="card">
            <div class="hover-items">
                <a href=${item.gitLink} target="__blank">
                <i class="fab fa-github fa-3x" style="color: white"></i>
                </a>
                <a href=${item.hostedLink} target="__blank">
                <i class="fa fa-solid fa-link fa-3x" style="color: white"></i>
                </a>
            </div>
            <div class="card-description">
                <span class="card-title">${item.cardTitle}</span>
                <span class="card-desc">${item.cardDescription}</span>
            </div>
            <div class="card-image">
                <img src=${item.imageLink} alt=${item.cardTitle}/>
            </div>
         </div>
    `;

  return projectCard.insertAdjacentHTML("beforeend", markup);
});
