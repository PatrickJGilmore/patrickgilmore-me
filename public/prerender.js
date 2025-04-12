
// This script runs during prerendering to ensure content is visible to crawlers
(function() {
  // Force all elements to be visible for search engines
  document.addEventListener('DOMContentLoaded', function() {
    // Ensure all content is immediately visible
    document.querySelectorAll('*').forEach(function(el) {
      if (el.style) {
        el.style.opacity = "1";
        el.style.visibility = "visible";
        if (el.style.display === "none") {
          el.style.display = "block";
        }
      }
    });
    
    // Ensure all sections are visible
    document.querySelectorAll('section').forEach(function(section) {
      section.style.opacity = "1";
      section.style.visibility = "visible";
      section.style.display = "block";
    });
    
    // Add static content for SEO in case JavaScript fails
    const mainContent = document.querySelector('main') || document.body;
    const seoContent = document.createElement('div');
    seoContent.style.position = 'absolute';
    seoContent.style.left = '-9999px';
    seoContent.style.height = '1px';
    seoContent.style.overflow = 'hidden';
    
    // Add critical SEO content
    seoContent.innerHTML = `
      <h1>Patrick Gilmore | IT Leadership & Technical Excellence</h1>
      <p>IT Leader with 25+ years experience in technical leadership and team management. Specialized in enterprise systems and automation.</p>
      <h2>About Me</h2>
      <p>Proven leader with 25+ years managing high-performing IT teams, achieving superior system reliability in FinTech industries.</p>
      <h2>Skills</h2>
      <p>Technical Leadership, Team Management, Enterprise Systems, Automation, FinTech Operations</p>
      <h2>Contact</h2>
      <p>Connect with Patrick Gilmore for IT leadership opportunities.</p>
      <a href="https://www.linkedin.com/in/patrickjgilmore/">LinkedIn Profile</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#awards">Awards</a>
      <a href="#activities">Activities</a>
      <a href="#contact">Contact</a>
    `;
    
    mainContent.appendChild(seoContent);
  });
})();
