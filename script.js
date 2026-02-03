// Tools Data
const tools = [
    { name: 'Flashcard Generator', icon: '📚', description: 'Interactive cards with flip animations and CRUD operations', color: 'linear-gradient(135deg, #0066ff, #0052cc)' },
    { name: 'Study Schedule Planner', icon: '📅', description: 'Calendar UI with drag-and-drop functionality', color: 'linear-gradient(135deg, #00cc66, #009933)' },
    { name: 'Concept Map Builder', icon: '🗺️', description: 'Canvas-based drag-drop node connections', color: 'linear-gradient(135deg, #ffcc00, #ff9900)' },
    { name: 'Pomodoro Timer', icon: '⏱️', description: 'Countdown timer with notifications and break scheduling', color: 'linear-gradient(135deg, #ff0000, #cc0000)' },
    { name: 'Study Goal Tracker', icon: '📊', description: 'Progress bars, milestone tracking, and charts', color: 'linear-gradient(135deg, #9900ff, #7700cc)' },
    { name: 'Grammar Practice', icon: '✏️', description: 'Interactive quizzes with instant feedback', color: 'linear-gradient(135deg, #0066ff, #0052cc)' },
    { name: 'Break Planner', icon: '☕', description: 'Scheduling interface with notifications', color: 'linear-gradient(135deg, #00cc66, #009933)' },
    { name: 'Speed Reading Trainer', icon: '👀', description: 'Adjustable word pacing with RSVP display', color: 'linear-gradient(135deg, #ffcc00, #ff9900)' },
    { name: 'Quiz Maker', icon: '❓', description: 'Create, share, and take custom multiple-choice quizzes', color: 'linear-gradient(135deg, #ff0000, #cc0000)' },
    { name: 'White Noise Generator', icon: '🔊', description: 'Customizable ambient sounds mixer with timers', color: 'linear-gradient(135deg, #9900ff, #7700cc)' },
    { name: 'Time Estimator', icon: '⏲️', description: 'Calculate study time based on material complexity', color: 'linear-gradient(135deg, #0066ff, #0052cc)' },
    { name: 'Priority Matrix', icon: '📈', description: 'Eisenhower matrix for task organization', color: 'linear-gradient(135deg, #00cc66, #009933)' },
    { name: 'Quiz Generator', icon: '📝', description: 'Creates multiple-choice and fill-in-the-blank quizzes', color: 'linear-gradient(135deg, #ffcc00, #ff9900)' },
    { name: 'Spaced Repetition', icon: '🔄', description: 'Automatically schedules review sessions', color: 'linear-gradient(135deg, #ff0000, #cc0000)' },
    { name: 'Lecture Transcriber', icon: '🎙️', description: 'Converts audio into searchable text transcripts', color: 'linear-gradient(135deg, #9900ff, #7700cc)' },
    { name: 'Task Manager', icon: '✅', description: 'Organize assignments, deadlines, and priorities', color: 'linear-gradient(135deg, #0066ff, #0052cc)' },
    { name: 'Plagiarism Checker', icon: '🔍', description: 'Scans against online sources for copied content', color: 'linear-gradient(135deg, #00cc66, #009933)' },
    { name: 'Study Guide Generator', icon: '📖', description: 'Produces structured study guides with key concepts', color: 'linear-gradient(135deg, #ffcc00, #ff9900)' },
    { name: 'Concept Clarifier', icon: '💡', description: 'Explains complex topics in simple language', color: 'linear-gradient(135deg, #ff0000, #cc0000)' },
    { name: 'Practice Test Creator', icon: '📋', description: 'Builds realistic mock tests matching exam format', color: 'linear-gradient(135deg, #9900ff, #7700cc)' },
    { name: 'Reference Organizer', icon: '📚', description: 'Stores and formats all your sources and citations', color: 'linear-gradient(135deg, #0066ff, #0052cc)' },
    { name: 'Distraction Blocker', icon: '🚫', description: 'Blocks distracting websites during study sessions', color: 'linear-gradient(135deg, #00cc66, #009933)' },
    { name: 'Group Study Planner', icon: '👥', description: 'Schedule group sessions and share resources', color: 'linear-gradient(135deg, #ffcc00, #ff9900)' },
    { name: 'Formula Generator', icon: '∑', description: 'Formulas with explanations and applications', color: 'linear-gradient(135deg, #ff0000, #cc0000)' },
    { name: 'Presentation Outliner', icon: '🎯', description: 'Structure slides with logical flow and speaker notes', color: 'linear-gradient(135deg, #9900ff, #7700cc)' },
    { name: 'Progress Dashboard', icon: '📊', description: 'Displays study stats, goals, and performance charts', color: 'linear-gradient(135deg, #0066ff, #0052cc)' },
    { name: 'Note Organizer', icon: '📝', description: 'Tag, categorize, and search all your notes', color: 'linear-gradient(135deg, #00cc66, #009933)' },
    { name: 'Active Recall Tester', icon: '🧠', description: 'Tests memory retrieval without showing answers', color: 'linear-gradient(135deg, #ffcc00, #ff9900)' },
    { name: 'Exam Simulator', icon: '🎓', description: 'Creates full-length, timed practice exams', color: 'linear-gradient(135deg, #ff0000, #cc0000)' },
];

// Load Components
async function loadComponent(componentId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        document.getElementById(componentId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component:`, error);
    }
}

// Load Header
async function loadHeader() {
    const headerHTML = `
        <header class="header">
            <div class="header-content">
                <div class="logo">
                    <span>🎓</span>
                    <span>ESTUDYTOOLS</span>
                </div>
                <nav class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#all-tools">All Tools</a></li>
                    <li><a href="#contact">Contact</a></li>
                </nav>
                <button class="sidebar-toggle" aria-label="Toggle sidebar">☰</button>
            </div>
        </header>
    `;
    document.getElementById('header-container').innerHTML = headerHTML;
    initializeSidebarToggle();
}

// Load Footer
async function loadFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-grid">
                    <div class="footer-widget">
                        <h3>About Us</h3>
                        <p>Student Tools Suite is dedicated to empowering students with free, powerful study tools.</p>
                    </div>
                    <div class="footer-widget">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#all-tools">All Tools</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-widget">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                            <li><a href="terms.html">Terms of Service</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="contact.html">Support</a></li>
                        </ul>
                    </div>
                    <div class="footer-widget">
                        <h3>Connect</h3>
                        <div class="footer-social">
                            <a href="#twitter" class="social-icon" aria-label="Twitter">𝕏</a>
                            <a href="#github" class="social-icon" aria-label="GitHub">⚙️</a>
                            <a href="#discord" class="social-icon" aria-label="Discord">💬</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Student Tools Suite. All rights reserved.</p>
                    <p>Made with ❤️ for students</p>
                </div>
            </div>
        </footer>
    `;
    document.getElementById('footer-container').innerHTML = footerHTML;
}

// Load Sidebar
async function loadSidebar() {
    const sidebarHTML = `
        <div class="sidebar">
            <div class="sidebar-header">
                <span style="font-weight: 700;">Menu</span>
                <button class="sidebar-close" aria-label="Close sidebar">✕</button>
            </div>
            <ul class="sidebar-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#popular">Popular Tools</a></li>
                <li><a href="#all-tools">All Tools</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#blog">Study Tips</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="sidebar-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); display: none; z-index: 150;"></div>
    `;
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
}

// Initialize Sidebar Toggle
function initializeSidebarToggle() {
    const toggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const closeBtn = document.querySelector('.sidebar-close');

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
        });

        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
        });
    }
}

// Render Tools Grid
function renderTools() {
    const container = document.getElementById('tools-container');
    const toolsGrid = document.createElement('div');
    toolsGrid.className = 'tools-grid';

    tools.forEach((tool, index) => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.style.animation = `fadeIn 0.5s ease ${index * 0.05}s both`;
        toolCard.innerHTML = `
            <div class="tool-card-icon" style="background: ${tool.color};">
                ${tool.icon}
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
        `;
        toolsGrid.appendChild(toolCard);
    });

    container.innerHTML = '';
    container.appendChild(toolsGrid);
}

// Hero Slider
class HeroSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slider-item');
        this.dotsContainer = document.querySelector('.slider-dots');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.autoPlayInterval = null;
        this.init();
    }

    init() {
        this.createDots();
        this.updateSlider();
        this.attachEventListeners();
        this.startAutoPlay();
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }

    updateSlider() {
        const offset = -this.currentSlide * 100;
        document.querySelector('.slider-track').style.transform = `translateX(${offset}%)`;

        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    next() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlider();
        this.resetAutoPlay();
    }

    prev() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), 5000);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 0.6s ease forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .tool-preview, .testimonial-card, .blog-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize Everything
async function initialize() {
    // Load components
    await loadHeader();
    await loadFooter();
    await loadSidebar();

    // Initialize features
    renderTools();
    new HeroSlider();
    initSmoothScroll();
    initScrollAnimations();

    // Add keyboard support for slider
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') document.querySelector('.prev-btn').click();
        if (e.key === 'ArrowRight') document.querySelector('.next-btn').click();
    });
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initialize);

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Service Worker registration (optional PWA support)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // Service worker not available, that's ok
    });
}
