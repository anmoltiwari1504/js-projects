const hamburger = document.getElementById("hamburger");
const nav = document.getElementById('nav')
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
  nav.classList.toggle("show");
  gsap.from('nav li ', {
    opacity: 0,
    x: -50,
    duration: 0.8,

     
  })
})

function goToPage() {
  window.location.href = "meeting.html";
}

function startScroll(colId, duration) {
  const col = document.getElementById(colId);
  if (!col) return;

  gsap.set(col, { y: 0 });

  const totalHeight = col.scrollHeight / 3;  // ← 3 sets hain toh /3

  const tween = gsap.to(col, {
    y: -totalHeight,
    duration: duration,
    ease: 'none',
    repeat: -1,
    modifiers: {
      y: gsap.utils.unitize(y => parseFloat(y) % totalHeight)
    }
  });

  col.addEventListener('mouseenter', () => tween.pause());
  col.addEventListener('mouseleave', () => tween.resume());
}

window.onload = () => {          // ← zaroori hai
  startScroll('container3', 13);
  startScroll('container4', 15);
};
// ___________________________________________________________


    

const sentence = "We help brands grow with standout design, clear  branding, and content that drives results.";
const container = document.getElementById("animText");

sentence.split(" ").forEach(word => {
  const span = document.createElement("span");
  span.className = "word";

  const base = document.createElement("span");
  base.className = "base";
  base.textContent = word;

  const fill = document.createElement("span");
  fill.className = "fill";
  fill.textContent = word;

  span.appendChild(base);
  span.appendChild(fill);
  container.appendChild(span);
});

// Scroll fill animation
gsap.to(".fill", {
  width: "100%",
  ease: "none",
  stagger: 0.6,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  }
});

// Pills fade in
gsap.to(["#p1","#p2","#p3","#p4","#p5"], {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Pills floating animation
gsap.to("#p1", { y: -12, duration: 2.5, ease: "sine.inOut", repeat: -1, yoyo: true });
gsap.to("#p2", { y: 10,  duration: 3,   ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.5 });
gsap.to("#p3", { y: -8,  duration: 2,   ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1 });
gsap.to("#p4", { y: 10,  duration: 2.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.3 });
gsap.to("#p5", { y: -10, duration: 2.2, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.8 });

const pills = document.querySelectorAll('.pills-left');

gsap.from(pills, {
  x: -200,
  opacity: 0 ,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.hero-section',
    start: 'top 40%',        // ← jab hero-section ka top, screen ke 60% pe aaye
    end: 'top 20%',
    toggleActions: 'play none none reverse',

  }
});
const pills_right = document.querySelectorAll('.pills-right');

gsap.from(pills_right, {
  x: 200,
    opacity: 0 ,  
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    scroller: 'body',
    trigger: '.hero-section',
    start: 'top 40%',        // ← jab hero-section ka top, screen ke 60% pe aaye
    end: 'top 20%',
    toggleActions: 'play none none reverse',
  }
});

  const cards = document.querySelectorAll('.card');
 
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '#cardsGrid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });

gsap.registerPlugin(ScrollTrigger);

// 1. Work availability pill — sabse pehle
gsap.from('.work-avalibility', {
  opacity: 0,
  filter: 'blur(10px)',
  y: -30,
  duration: 0.8,
  ease: 'power3.out',
  delay: 0.2,
});

// 2. Brands text
gsap.from('.brands', {
  opacity: 0,
  filter: 'blur(12px)',
  y: 40,
  duration: 1,
  ease: 'power3.out',
  delay: 0.5,
});

// 3. Image slider box
gsap.from('.hero-title1', {
  opacity: 0,
  filter: 'blur(8px)',
  scale: 0.8,
  rotation: -8,
  duration: 1,
  ease: 'back.out(1.7)',
  delay: 0.7,
});

// 4. Grow Fast light text
gsap.from('.light-hero-text', {
  opacity: 0,
  filter: 'blur(12px)',
  x: 40,
  duration: 1,
  ease: 'power3.out',
  delay: 0.9,
});

// 5. Hero title2 box (With us line)
gsap.from('.hero-title2-box', {
  opacity: 0,
  filter: 'blur(10px)',
  y: 40,
  duration: 1,
  ease: 'power3.out',
  delay: 1.1,
});

// 6. Description
gsap.from('.hero-des', {
  opacity: 0,
  filter: 'blur(8px)',
  y: 30,
  duration: 0.9,
  ease: 'power3.out',
  delay: 1.3,
});

// 7. Button
// gsap.from('button', {
//   opacity: 0,
//   y: 30,
//   duration: 0.8,
//   ease: 'power3.out',
//   delay: 1,
// });
gsap.to('#identity1', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '#identity1',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  }
});

gsap.to('#identity2', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 0.25,
  scrollTrigger: {
    trigger: '#identity2',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  }
});
let containerr = document.getElementById('projects-boxes');

const cursor = containerr.querySelector('.cursor');

const boxes = containerr.querySelectorAll('.boxes-p');

boxes.forEach((box) => {

  box.addEventListener('mousemove', (e) => {

    const rect = containerr.getBoundingClientRect();

    const x = e.clientX - rect.left ;
    const y = e.clientY - rect.top - 40;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

  });

  box.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });

  box.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

});


const journey = document.querySelectorAll('.journey');

gsap.from(journey, {
  y: -20,
  opacity: 0,
  stagger: 0.5,
  duration: 0.8,

  scrollTrigger: {
    trigger: '#founder',
    start: 'top 20%',
    toggleActions: 'play none none reverse',
  }
});
  
const founder_name = document.querySelector('.founder-name');
gsap.from(founder_name, {
    y: -50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    scroller: 'body',
    trigger: '#founder',
    start: 'top 30%',
    end: 'top 60%',

  }
  
})
 let isPricingBranding = false;
 
  const pricingData = {
    design: {
      text: "Deniz created a website for us that exceeded all expectations. Professional, creative, and reliable. No one could have done it better. He is simply the best designer in the World.",
      name: "David Krzemien",
      company: "FeuersteinCars",
      avatar: "Feuer<br>stein"
    },
    branding: {
      text: "I'm very happy with the work Deniz did on my website. He was creative, professional, and paid great attention to detail. I can highly recommend his services.",
      name: "Hassan Kirto",
      company: "KS Abbruch",
      avatar: "▶KS"
    }
  };
 
  function switchPricingMode() {
    isPricingBranding = !isPricingBranding;
 
    const toggle         = document.getElementById('pricing-toggle');
    const lblDesign      = document.getElementById('pricing-lbl-design');
    const lblBranding    = document.getElementById('pricing-lbl-branding');
    const amountDesign   = document.getElementById('pricing-amount-design');
    const amountBranding = document.getElementById('pricing-amount-branding');
    const featDesign     = document.getElementById('pricing-features-design');
    const featBranding   = document.getElementById('pricing-features-branding');
 
    const d = isPricingBranding ? pricingData.branding : pricingData.design;
 
    if (isPricingBranding) {
      toggle.classList.add('branding');
      lblDesign.classList.remove('active');
      lblBranding.classList.add('active');
      fadeSwap(amountDesign, amountBranding);
      fadeSwap(featDesign, featBranding);
    } else {
      toggle.classList.remove('branding');
      lblDesign.classList.add('active');
      lblBranding.classList.remove('active');
      fadeSwap(amountBranding, amountDesign);
      fadeSwap(featBranding, featDesign);
    }
 
    document.getElementById('pricing-testimonial-text').textContent = d.text;
    document.getElementById('pricing-author-name').textContent = d.name;
    document.getElementById('pricing-author-company').textContent = d.company;
    document.getElementById('pricing-avatar-text').innerHTML = d.avatar;
  }
 
  function fadeSwap(hide, show) {
    hide.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    hide.style.opacity = '0';
    hide.style.transform = 'translateY(-6px)';
    setTimeout(() => {
      hide.style.display = 'none';
      hide.style.opacity = '';
      hide.style.transform = '';
      show.style.display = 'flex';
      show.style.opacity = '0';
      show.style.transform = 'translateY(6px)';
      requestAnimationFrame(() => {
        show.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        show.style.opacity = '1';
        show.style.transform = 'translateY(0)';
      });
    }, 260);
} 
  
// const question = document.querySelector('.questions');
// const answer = document.querySelector('.answer');
// const ans = document.querySelector('.answer-icon');


// question1.addEventListener('click', () => {
//   //  if (answer1.style.display === 'block') {
//   //   answer1.style.display = 'none';
//   // } else {
//   //   answer1.style.display = 'block';
//   // }
//   answer1.classList.toggle('active');
// })

// other way

const questions = document.querySelectorAll('.questions');
questions.forEach((question) => {
  question.addEventListener('click', () => {


    const currentAnswer = question.nextElementSibling; 
    const currentIcon = question.querySelector('.answer-icon');
    document.querySelectorAll('.answer').forEach((answer) => {
      if (answer !== currentAnswer) {
        answer.classList.remove('active')
      }
    })
    document.querySelectorAll('.answer-icon').forEach((icon) => {
      if (icon !== currentIcon) {
        icon.classList.remove('rotate')
      };

    });
    currentAnswer.classList.toggle('active')
    currentIcon.classList.toggle('rotate')
  

  })
})


const content = document.querySelector('.content-item');

gsap.from(content, {
  y: -300,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: '#footer',
    start: 'top 20%',
    toggleActions: 'play none none reverse',
    
  }
});
 gsap.registerPlugin(ScrollTrigger);

  const wrapper = document.querySelector('.testimonials-wrapper');
  const label   = document.getElementById('scrollLabel');

  gsap.set(label, { y: 10 }); // thoda neeche se start karega

  ScrollTrigger.create({
    trigger: wrapper,
    start: "top 80%",  
    end: "top 100%", 
      onEnter: () => {
      gsap.to(label, {
        opacity: 1, y: -150, rotate: -40, 
        duration: 0.6, ease: "power2.out"
      });
    },
    onLeave: () => {
      gsap.to(label, { opacity: 0, duration: 0.3 });
    },
    onEnterBack: () => {
      gsap.to(label, { opacity: 1, duration: 0.4 });
    }
  });