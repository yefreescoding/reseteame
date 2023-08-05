export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.setAttribute('aria-hidden', 'true');
    }
  });
});

// observer.observe();
