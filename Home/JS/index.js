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

  document.querySelectorAll('.switch').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.switch').forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });  
  
  function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
  
    modalImage.src = imageSrc;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  document.querySelectorAll('.project[data-category="sites"] img').forEach(image => {
    image.addEventListener('click', () => openModal(image.src));
  });
  
  document.getElementById('imageModal').addEventListener('click', closeModal);
  