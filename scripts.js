// Show main content when user clicks the drag bar
function showMainContent() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

// Switch between sections
function switchSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Open a certificate in a new tab
function viewCertificate(file) {
    window.open(file, '_blank');
}
