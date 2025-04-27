// Dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

// Project cards data
const projects = [
  {
    title: "My First Web",
    desc: "A simple landing page based on Figma design."
  },
  {
    title: "Todo List App",
    desc: "My first JavaScript DOM manipulation project."
  },
  {
    title: "Responsive Portfolio",
    desc: "A personal portfolio page using Flexbox and Grid."
  }
];

// Render cards
const container = document.getElementById('projects-container');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  container.appendChild(card);
});