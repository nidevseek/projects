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

  document.querySelectorAll('.project[data-category="sites"] img').forEach(image => {
    image.addEventListener('click', (e) => {
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      
      modalImage.src = e.target.src;
      modal.classList.add('show');
    });
  });
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
  }
  
