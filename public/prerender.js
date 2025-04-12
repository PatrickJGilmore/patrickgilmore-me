
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
    
    // Ensure all headings and links are visible and properly exposed to search engines
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(function(heading) {
      heading.style.opacity = "1";
      heading.style.visibility = "visible";
      heading.style.display = "block";
      // Ensure any parent containers are visible
      let parent = heading.parentElement;
      while (parent) {
        parent.style.opacity = "1";
        parent.style.visibility = "visible";
        parent.style.display = parent.style.display === "none" ? "block" : parent.style.display;
        parent = parent.parentElement;
      }
    });

    // Ensure all links are properly exposed
    document.querySelectorAll('a').forEach(function(link) {
      link.style.opacity = "1";
      link.style.visibility = "visible";
      link.style.display = link.style.display === "none" ? "inline" : link.style.display;
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
