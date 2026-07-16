import { 
  createIcons, 
  Shield, 
  Landmark, 
  UserCheck, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  BookOpen, 
  Calculator, 
  Play, 
  Calendar, 
  Download, 
  HelpCircle, 
  FileText, 
  Percent, 
  ChevronRight,
  TrendingUp,
  HeartHandshake,
  Award,
  Users,
  Compass,
  FileCheck,
  Check
} from 'lucide';

// Initialize Lucide Icons globally
export function initIcons() {
  createIcons({
    icons: {
      Shield,
      Landmark,
      UserCheck,
      Briefcase,
      Phone,
      Mail,
      MapPin,
      Menu,
      X,
      ArrowRight,
      BookOpen,
      Calculator,
      Play,
      Calendar,
      Download,
      HelpCircle,
      FileText,
      Percent,
      ChevronRight,
      TrendingUp,
      HeartHandshake,
      Award,
      Users,
      Compass,
      FileCheck,
      Check
    }
  });
}

// Sticky Header & Mobile Nav Logic
document.addEventListener('DOMContentLoaded', () => {
  // Sticky header
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.setAttribute('data-lucide', 'x');
        } else {
          icon.setAttribute('data-lucide', 'menu');
        }
        initIcons();
      }
    });
  }

  // Scroll animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  // Initialize icons on page load
  initIcons();
});
