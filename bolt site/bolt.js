const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;

function show(index){
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

next.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  show(current);
});

prev.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  show(current);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    current = i;
    show(current);
  });
});


const faqItems = document.querySelectorAll(".faq-question");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const btn = item.querySelector(".plus");
    answer.classList.toggle("show");
    btn.textContent = answer.classList.contains("show") ? "×" : "+";
  });
})
