const toggleDarkMode = (enable) => {
  enable === true
    ? document.body.classList.add('darkmode')
    : document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', enable);
}

document.getElementById('theme-switch').addEventListener('click', () => {
  toggleDarkMode(localStorage.getItem('darkmode') !== 'true');
})

toggleDarkMode(localStorage.getItem('darkmode') === 'true');
