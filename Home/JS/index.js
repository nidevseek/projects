function toggleCategory(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      if (category === 'all' || project.dataset.category === category) {
        project.classList.remove('hidden');
      } else {
        project.classList.add('hidden');
      }
    });
  }