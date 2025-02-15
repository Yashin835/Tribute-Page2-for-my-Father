document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Section with ID "${sectionId}" not found.`);
        }
      });
    });
  });