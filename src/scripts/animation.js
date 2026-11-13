
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// 2. Main Intro Animation Timeline
const mainTimeline = gsap.timeline({
  defaults: {
    duration: 0.8,
    ease: 'power3.out',
  },
});

mainTimeline.fromTo(
  '.portfolio-header',
  { opacity: 0, scale: 0.95, y: -15 },
  { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'back.out(1.2)' }
);

// 3. Replay Button
const replayButton = document.querySelector('#replay');
if (replayButton) {
  replayButton.addEventListener('click', function () {
    mainTimeline.restart();
  });
}

// 4. Dark Mode Toggle
const togglebutton = document.querySelector('#togglebuttondark');
const html = document.querySelector('html');

if (togglebutton && html) {
  togglebutton.addEventListener('click', function () {
    html.classList.toggle('dark');
  });
}

// 5. Switch Objective Headline Button
const switchButton = document.querySelector('#switch');
const headline = document.querySelector('#headline');

if (switchButton && headline) {
  switchButton.addEventListener('click', function () {
    if (headline.innerText.includes('We design resilient backends')) {
      headline.innerText = '"Data structure integrity and clean programmatic execution are non-negotiable parameters. I construct software ecosystems that turn technical complexity into business capital."';
    } else {
      headline.innerText = '"We design resilient backends and high-performance user interfaces optimized for speed, scalability, and seamless user experiences."';
    }
  });
}

// 6. Form Submission & Dialog Modal Logic
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

if (contactForm && modal && closeModal) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    modal.showModal();
    contactForm.reset();
  });

  closeModal.addEventListener('click', function () {
    modal.close();
  });
}

// 7. Top Progress Bar Animation
gsap.fromTo(
  '#progress-bar',
  { scaleX: 0 },
  {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);

// 8. PINNED PROJECTS SECTION (High Refresh Priority)
ScrollTrigger.create({
  trigger: '#projects',
  start: 'top top',
  end: '+=800',
  pin: true,
  pinSpacing: true,
  markers: false,
});

// 9. ScrollTrigger Reveal for Remaining Sections (Excluding #projects)
const reveals = gsap.utils.toArray('.reveal:not(#projects)');
reveals.forEach(function (sec) {
  gsap.from(sec, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sec,
      start: 'top 85%',
      end: 'bottom 15%',
      toggleActions: 'play none none reverse',
      markers: false,
    },
  });
});

// 10. Live latency indicator
const liveLatency = document.getElementById('live-latency');
if (liveLatency) {
  const updateLatency = () => {
    const ms = Math.floor(12 + Math.random() * 18);
    liveLatency.textContent = `${ms}ms`;
  };

  updateLatency();
  setInterval(updateLatency, 2400);
}

