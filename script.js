// Typewriter for hero title
  const titles = [
    'Data Analytics Intern',
    'Python Dashboard Developer',
    'BI & Visualization Enthusiast',
    'Fresher · Open to Work'
  ];
  let ti = 0, ci = 0, deleting = false;
  const el = document.getElementById('typed-title');

  function type() {
    const current = titles[ti];
    if (!deleting) {
      ci++;
      el.innerHTML = current.slice(0, ci) + '<span class="cursor"></span>';
      if (ci === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      ci--;
      el.innerHTML = current.slice(0, ci) + '<span class="cursor"></span>';
      if (ci === 0) {
        deleting = false;
        ti = (ti + 1) % titles.length;
      }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  setTimeout(type, 600);