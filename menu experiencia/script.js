const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('activo')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('activo')
    })
}

let current = 0;

function showPanel(n) {
  panels[current].classList.remove('activo');
  panels[n].classList.add('activo');
  current = n;
  
  const prev = document.querySelector('#prev');
  prev.style.display = current === 0 ? 'none' : 'block';
  
  const next = document.querySelector('#next');
  next.style.display = current === panels.length - 1 ? 'none' : 'block';
}

document.querySelector('#next').addEventListener('click', () => {
  showPanel(current + 1);
});

document.querySelector('#prev').addEventListener('click', () => {
  showPanel(current - 1);
});