const octokit = new Octokit({});

const repoContent = await octokit.rest.repos.getContent({
  owner: 'DaddyLongLegs142',
  repo: 'amazon-web-tool-themes-extension',
  path: '/css'
});

function displayButtons() {
  let buttons;
  for (i of repoContent) {
    buttons += "<button>i</button>";
  }
  document.getElementById("popup-content").innerHTML = buttons;
}


// function listenForClicks() {
//   document.addEventListener("click", (e) => {
//     /**
//      * Given the name of a beast, get the URL to the corresponding image.
//      */
//     function beastNameToURL(beastName) {
//       switch (beastName) {
//         case "Frog":
//           return browser.runtime.getURL("beasts/frog.jpg");
//         case "Snake":
//           return browser.runtime.getURL("beasts/snake.jpg");
//         case "Turtle":
//           return browser.runtime.getURL("beasts/turtle.jpg");
//       }
//     }
//   }
