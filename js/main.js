document.addEventListener('DOMContentLoaded', function() {
  const features = document.querySelectorAll('.feature');

  features.forEach(feature => {
    const modulesElement = feature.querySelector('.modules');
    if (modulesElement) {
      const imgElement = document.createElement('img');
      imgElement.src = 'img/icons/modules.svg';
      modulesElement.insertBefore(imgElement, modulesElement.firstChild);
    }
  
    const timeElement = feature.querySelector('.time');
    if (timeElement) {
      const img2Element = document.createElement('img');
      img2Element.src = 'img/icons/clock.svg';
      timeElement.insertBefore(img2Element, timeElement.firstChild);
    }
  
    const onofElement = feature.querySelector('.onof');
    if (onofElement) {
      const img3Element = document.createElement('img');
      img3Element.src = 'img/icons/display.svg';
      onofElement.insertBefore(img3Element, onofElement.firstChild);
    }
  
    const langElement = feature.querySelector('.lang');
    if (langElement) {
      const img4Element = document.createElement('img');
      img4Element.src = 'img/icons/english.svg';
      langElement.insertBefore(img4Element, langElement.firstChild);
    }
  });

  const featureLists = document.querySelectorAll('.feature');
  featureLists.forEach(feature => {
    const listItems = feature.querySelectorAll('li'); 
    listItems.forEach(li => {
      if (!li.textContent.trim()) { 
        li.style.display = 'none';
      }
    });
  });
  var swiper = new Swiper(".swiper", {
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
      el: ".pagination",
      
      
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  });
  const accordions = document.querySelectorAll('.accordeon');

  if (accordions.length > 0) {
    const firstAccordeon = accordions[0];
    const firstContent = firstAccordeon.querySelector('.content');
    const firstButton = firstAccordeon.querySelector('button');
    const firstParagraphs = firstAccordeon.querySelectorAll('div > p');
    
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    firstContent.style.marginTop = '53px';
    firstContent.classList.add('open');
    firstButton.classList.add('open');
    
    firstParagraphs.forEach(paragraph => {
      paragraph.classList.add('open');
    });
  }
  
  accordions.forEach(accordeon => {
    accordeon.addEventListener('click', () => {
      const content = accordeon.querySelector('.content');
      const button = accordeon.querySelector('button');
      const paragraphs = accordeon.querySelectorAll('div > p');
      
      document.querySelectorAll('.accordeon .content').forEach(otherContent => {
        if (otherContent !== content) {
          otherContent.style.maxHeight = null;
          otherContent.style.marginTop = '0px';
          otherContent.classList.remove('open');
          
          const otherButton = otherContent.closest('.accordeon').querySelector('button');
          otherButton.classList.remove('open');
  
          const otherParagraphs = otherContent.closest('.accordeon').querySelectorAll('div > p');
          otherParagraphs.forEach(paragraph => {
            paragraph.classList.remove('open');
          });
        }
      });
  
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.marginTop = '0px';
        content.classList.remove('open');
        button.classList.remove('open');
        
        paragraphs.forEach(paragraph => {
          paragraph.classList.remove('open');
        });
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.marginTop = '53px';
        content.classList.add('open');
        button.classList.add('open');
        
        paragraphs.forEach(paragraph => {
          paragraph.classList.add('open');
        });
      }
    });
    document.querySelectorAll('nav > ul > li > a').forEach(function(link) {
      link.addEventListener('click', function() {
        document.querySelectorAll('nav > ul > li > a').forEach(function(item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
    document.querySelectorAll('.submenu a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
    
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 
    
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 150, 
            behavior: 'smooth' 
          });
        }
      });
    });
  });