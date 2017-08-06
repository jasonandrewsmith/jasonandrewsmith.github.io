let $home = $(".navHome"),
    $projects = $(".navProjects"),
    $about = $(".navAbout"),
    $contact = $(".navContact");

function loadHome() {
    $(".contentArea").load("pages/home.html");
}
function loadProjects() {
    $(".contentArea").load("pages/projects.html");
}
function loadAbout() {
    $(".contentArea").load("pages/about.html");
}
function loadContact() {
    $(".contentArea").load("pages/contact.html");
}

loadHome();

$home.click( () => {loadHome();} );
$projects.click( () => {loadProjects();} );
$about.click( () => {loadAbout();} );
$contact.click( () => {loadContact();} );
