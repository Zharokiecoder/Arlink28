import { useEffect } from 'react';

/**
 * ARLink Global Animation Hook
 * Handles: scroll-reveal, stat counters, staggered grid children, smooth scroll
 * Call this once per page inside a useEffect-capable component
 */
export function useAnimations() {
  useEffect(() => {
    /* ── 1. Scroll-Reveal via IntersectionObserver ───────────── */
    const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
    const revealEls = document.querySelectorAll(revealClasses.join(', '));

    let revealObserver;
    if (revealEls.length > 0) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach(el => revealObserver.observe(el));
    }

    /* ── 2. Staggered Children Auto-Delay ────────────────────── */
    const staggerContainers = document.querySelectorAll(
      '.features-grid, .destinations-grid, .services-grid-new, ' +
      '.featured-travel-grid, .testimonials-grid, .why-choose-grid, ' +
      '.about-values-grid, .partners-grid-row'
    );
    staggerContainers.forEach(container => {
      const children = container.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      children.forEach((child, index) => {
        const delayStep = Math.min(index + 1, 10);
        child.classList.add(`reveal-delay-${delayStep}`);
      });
    });

    /* ── 3. Animated Stat Counters ───────────────────────────── */
    function parseTarget(val) {
      const clean = val.replace(/,/g, '');
      const match = clean.match(/^([\d.]+)/);
      return match ? parseFloat(match[1]) : 0;
    }
    function formatStat(current, original) {
      const clean = original.replace(/,/g, '');
      const suffix = clean.replace(/^[\d.]+/, '');
      const hasComma = original.includes(',');
      let num = Math.round(current);
      let formatted = hasComma ? num.toLocaleString() : String(num);
      return formatted + suffix;
    }
    function animateCounter(el) {
      const original = el.getAttribute('data-target');
      if (!original) return;
      const target = parseTarget(original);
      if (target === 0) return;
      const duration = 2000;
      const startTime = performance.now();
      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        el.textContent = formatStat(current, original);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = original;
        }
      }
      requestAnimationFrame(step);
    }

    const statEls = document.querySelectorAll('[data-target]');
    let counterObserver;
    if (statEls.length > 0) {
      counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      statEls.forEach(el => counterObserver.observe(el));
    }

    /* ── 4. Section Header Reveal ────────────────────────────── */
    document.querySelectorAll('.section-header').forEach(header => {
      const alreadyHasReveal = header.classList.contains('reveal');
      const insideReveal = header.closest('.reveal:not(.section-header)');
      if (!alreadyHasReveal && !insideReveal) {
        header.classList.add('reveal');
        if (revealObserver) revealObserver.observe(header);
      }
    });

    /* ── 5. Smooth Scroll for Anchor Links ───────────────────── */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      if (revealObserver) revealObserver.disconnect();
      if (counterObserver) counterObserver.disconnect();
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
}

/**
 * Carousel hook for the Jobs section
 */
export function useCarousel() {
  useEffect(() => {
    const carouselContainer = document.querySelector('.jobs-carousel-container');
    const track = document.getElementById('jobs-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dotsContainer = document.getElementById('carousel-dots');

    if (!carouselContainer || !track || !dotsContainer) return;

    const slides = track.querySelectorAll('.job-ticket');
    const slideCount = slides.length;
    let activeIndex = 0;

    // Generate dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('span');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('data-index', i);
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function scrollToSlide(index) {
      if (index < 0 || index >= slideCount) return;
      const slideWidth = slides[0].offsetWidth;
      const gap = 24;
      const scrollTarget = index * (slideWidth + gap);
      track.scrollTo({ left: scrollTarget, behavior: 'smooth' });
      activeIndex = index;
      updateActiveDot(activeIndex);
    }

    function updateActiveDot(index) {
      dots.forEach((dot, idx) => {
        idx === index ? dot.classList.add('active') : dot.classList.remove('active');
      });
    }

    const handlePrev = () => {
      let target = activeIndex - 1;
      if (target < 0) target = slideCount - 1;
      scrollToSlide(target);
    };
    const handleNext = () => {
      let target = activeIndex + 1;
      if (target >= slideCount) target = 0;
      scrollToSlide(target);
    };

    if (prevBtn) prevBtn.addEventListener('click', handlePrev);
    if (nextBtn) nextBtn.addEventListener('click', handleNext);

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'), 10);
        scrollToSlide(index);
      });
    });

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const slideWidth = slides[0].offsetWidth;
        if (!slideWidth) return;
        const gap = 24;
        const scrollLeft = track.scrollLeft;
        const index = Math.round(scrollLeft / (slideWidth + gap));
        if (index !== activeIndex && index >= 0 && index < slideCount) {
          activeIndex = index;
          updateActiveDot(activeIndex);
        }
      }, 50);
    };
    track.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (prevBtn) prevBtn.removeEventListener('click', handlePrev);
      if (nextBtn) nextBtn.removeEventListener('click', handleNext);
      track.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
