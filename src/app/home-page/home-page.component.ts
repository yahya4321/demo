import { Component, AfterViewInit, inject } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollReveal from 'scrollreveal';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DarkModeService } from '../services/dark-mode.service';
import { CommonModule } from '@angular/common';
gsap.registerPlugin(ScrollTrigger);
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [CommonModule],

})

export class HomePageComponent implements AfterViewInit {

  displayedImage: string = 'assets/img/gifs/truck.gif'; // Default image
  activeTitle: string = 'Truck Loading/Unloading'; // Default active title


  constructor( public darkModeService: DarkModeService , private router: Router, private cdr: ChangeDetectorRef) {

    

  }

  goToSignIn() {
    this.router.navigate(['/SignIn']);
  }
  
  toggleDark(){
  
    this.darkModeService.updateDarkMode();

  
  }
  

  ngAfterViewInit() {
 
  

    const mobileNav = document.querySelector('.mnav');
    const closeBtn = document.querySelector('.mnav__close-btn');
    const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');
    const navOpenedClass = 'left-0';
    const navClosedClass = '-left-[250px]';
    const arrowLeftClass = 'ri-arrow-left-s-line';
    const arrowRightClass = 'ri-arrow-right-s-line';

    closeBtn?.addEventListener('click', () => {
      console.log('btn clicked!!!!!');
      if (mobileNav?.classList.contains(navClosedClass)) {
        mobileNav.classList.remove(navClosedClass);
        mobileNav.classList.add(navOpenedClass);
        closeBtnIcn?.classList.remove(arrowRightClass);
        closeBtnIcn?.classList.add(arrowLeftClass);
      } else {
        mobileNav?.classList.remove(navOpenedClass);
        mobileNav?.classList.add(navClosedClass);
        closeBtnIcn?.classList.remove(arrowLeftClass);
        closeBtnIcn?.classList.add(arrowRightClass);
      }
    });

    if (!closeBtn) {
      console.log('closeBtn not found');
    }
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal', // or 'vertical'
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    
    });


    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach((faqItem) => {
      const faqButton = faqItem.querySelector('.faq__btn');
    
      if (faqButton) {
        faqItem.addEventListener('click', () => {
          const isOpen = faqItem.classList.toggle('open');
          const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
          const iconElement = faqButton.querySelector('i');
    
          if (iconElement) {
            iconElement.className = `${iconClass} text-2xl`; // Use className instead of classList
          }
        });
      }
    });
    





    
 // Initialize ScrollReveal
 ScrollReveal().reveal('.blog__post, .faq__item, .newsletter, .team__slider, .testimonial, .appointment', {
  origin: 'bottom',
  distance: '50px',
  duration: 900,
  easing: 'ease-in-out',
  interval: 200,
});


  }
  onTitleClick(title: string, imageUrl: string) {
    this.displayedImage = imageUrl;
    this.activeTitle = title;
    this.cdr.detectChanges(); // Manually trigger change detection

  }
}
