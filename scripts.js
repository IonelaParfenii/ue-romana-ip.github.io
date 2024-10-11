document.addEventListener('DOMContentLoaded', function() {
    // Ascunde toate secțiunile la început
    const sections = document.querySelectorAll('#mainContent > div');
    sections.forEach(section => section.style.display = 'none');

    // Afișează secțiunea "Introducere" la început
    const homeContent = document.getElementById('homeContent');
    homeContent.style.display = 'block';
    homeContent.scrollIntoView({ behavior: 'smooth' });

    // Adaugă event listeners pentru butoane
    document.getElementById('homeBtn').addEventListener('click', function() {
        showContent('homeContent');
    });

    document.getElementById('imagesBtn').addEventListener('click', function() {
        showContent('imagesContent');
    });

    document.getElementById('videoBtn').addEventListener('click', function() {
        showContent('videoContent');
    });

    document.getElementById('catalogBtn').addEventListener('click', function() {
        showContent('catalogContent');
    });

    document.getElementById('integritate').addEventListener('click', function() {
        showContent('personalitatiContent');
    });
});

function showContent(contentId) {
    const sections = document.querySelectorAll('#mainContent > div');

    // Ascunde toate secțiunile
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Afișează secțiunea dorită
    const activeSection = document.getElementById(contentId);
    activeSection.style.display = 'block';
    activeSection.scrollIntoView({ behavior: 'smooth' });
}
