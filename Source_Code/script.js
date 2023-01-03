document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = '-250px';

  const toggleButton = document.getElementById('toggle-button');

  toggleButton.addEventListener('click', () => {
    if (sidebar.style.left === '-250px') {
      console.log('sidebar === -250 will now become 0')
      sidebar.style.left = '0px';
      toggleButton.style.left = '250px';
    } else {
      console.log(sidebar.style.left)
      sidebar.style.left = '-250px';
      toggleButton.style.left = '10px';
    }
  });

  window.addEventListener('scroll', () => {
    sidebar.style.top = window.scrollY + 'px';
    toggleButton.style.top = window.screenY + 'px';
  });
 
});