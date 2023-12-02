/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
  
// scripts.js

// Example: Load different content for each page
document.addEventListener("DOMContentLoaded", function () {
     const currentPage = window.location.pathname.split("/").pop();
     
    // Load content based on the current page
    switch (currentPage) {
        case "index.html":
            loadHomePageContent();
            break;
        case "about.html":
            loadAboutPageContent();
            break;
        case "project.html":
            loadProjectsPageContent();
            break;
        case "skills.html":
            loadProjectsPageContent();
            break;
        case "contact.html":
            loadContactPageContent();
            break;
        default:
            // Handle other pages or provide a default behavior
            break;
    }


function loadHomePageContent() {
    // Add content for the home page
    document.querySelector("main").innerHTML = "<h2>Welcome to My Portfolio!</h2><p>This is the home page content.</p>";
}

function loadAboutPageContent() {
    // Add content for the about page
    document.querySelector("main").innerHTML = "<h2>About Me</h2><p>This is the about page content.</p>";
}

function loadProjectsPageContent() {
    // Add content for the projects page
    document.querySelector("main").innerHTML = "<h2>My Projects</h2><p>This is the projects page content.</p>";
}
function loadContactPageContent() {
    // Add content for the skills page
    document.querySelector("main").innerHTML = "<h2>My Skills</h2><p>This is the contact page content.</p>";
}

function loadContactPageContent() {
    // Add content for the contact page
    document.querySelector("main").innerHTML = "<h2>Contact Me</h2><p>This is the contact page content.</p>";
}
}
