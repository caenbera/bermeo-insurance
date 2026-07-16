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
  ChevronDown,
  TrendingUp,
  HeartHandshake,
  Award,
  Users,
  Compass,
  FileCheck,
  Check,
  ExternalLink
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
      ChevronDown,
      TrendingUp,
      HeartHandshake,
      Award,
      Users,
      Compass,
      FileCheck,
      Check,
      ExternalLink
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

  // Mobile dropdown menus toggle (on click for mobile viewports)
  const dropdowns = document.querySelectorAll('.nav-item-dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    if (link) {
      link.addEventListener('click', (e) => {
        // Only trigger on mobile screen width
        if (window.innerWidth <= 768) {
          e.preventDefault(); // Prevent navigating if clicked
          dropdown.classList.toggle('active');
          
          // Close other dropdowns
          dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove('active');
            }
          });
        }
      });
    }
  });

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
