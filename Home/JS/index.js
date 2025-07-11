function toggleCategory(category) {
  const portfolios = document.querySelectorAll('.portfolio');
  const separator = document.querySelector('.separator');

  portfolios.forEach(portfolio => {
    if (category === 'all') {
      portfolio.classList.remove('hidden');
    } else {
      if (portfolio.classList.contains(category)) {
        portfolio.classList.remove('hidden');
      } else {
        portfolio.classList.add('hidden');
      }
    }
  });

  if (category === 'bots') {
    separator.classList.add('hidden');
  } else {
    separator.classList.remove('hidden');
  }
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
  

  document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const maxTilt = 5;
        const tiltX = (centerY - y) / centerY * maxTilt;
        const tiltY = (x - centerX) / centerX * maxTilt;
        
        card.style.transform = `perspective(1000px) scale(1.01) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)';
    });
});
