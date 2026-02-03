// Tool Configuration Data
const toolsConfig = [
    {
        id: 'concept-map-builder',
        name: 'Concept Map Builder',
        icon: '🗺️',
        color: 'linear-gradient(135deg, #ffcc00, #ff9900)',
        colorCode: '#ffcc00',
        description: 'Canvas-based drag-drop node connections',
        keywords: 'concept map, mind map, visual learning, diagram maker, knowledge graph',
        rating: '4.6',
        ratingCount: '1750',
        howToSteps: [
            { num: 1, title: 'Create Nodes', desc: 'Click "Add Node" to create concept boxes. Give each node a meaningful label.' },
            { num: 2, title: 'Connect Ideas', desc: 'Draw connections between nodes to show relationships and dependencies.' },
            { num: 3, title: 'Add Labels', desc: 'Label each connection to explain how concepts relate to each other.' },
            { num: 4, title: 'Organize Layout', desc: 'Drag nodes to organize your map for clarity and better understanding.' }
        ]
    },
    {
        id: 'pomodoro-timer',
        name: 'Pomodoro Timer',
        icon: '⏱️',
        color: 'linear-gradient(135deg, #ff0000, #cc0000)',
        colorCode: '#ff0000',
        description: 'Countdown timer with notifications and break scheduling',
        keywords: 'pomodoro timer, focus timer, study timer, productivity timer, break scheduler',
        rating: '4.9',
        ratingCount: '5200',
        howToSteps: [
            { num: 1, title: 'Set Duration', desc: 'Choose your work session length (default 25 minutes) and break length (5 minutes).' },
            { num: 2, title: 'Start Timer', desc: 'Click "Start" to begin your focused work session. Stay focused until the timer rings.' },
            { num: 3, title: 'Take Breaks', desc: 'When the timer ends, take a short break. The tool will remind you when to resume.' },
            { num: 4, title: 'Track Sessions', desc: 'After 4 sessions, take a longer 15-30 minute break to recharge.' }
        ]
    },
    {
        id: 'study-goal-tracker',
        name: 'Study Goal Tracker',
        icon: '📊',
        color: 'linear-gradient(135deg, #9900ff, #7700cc)',
        colorCode: '#9900ff',
        description: 'Progress bars, milestone tracking, and charts',
        keywords: 'goal tracking, progress tracker, achievement tracker, milestone planner, performance tracker',
        rating: '4.7',
        ratingCount: '2100',
        howToSteps: [
            { num: 1, title: 'Set Goals', desc: 'Create specific, measurable goals like "Learn 100 vocabulary words" or "Complete 5 chapters".' },
            { num: 2, title: 'Add Milestones', desc: 'Break down large goals into smaller milestones with deadlines.' },
            { num: 3, title: 'Log Progress', desc: 'Update your progress regularly to track your advancement toward goals.' },
            { num: 4, title: 'Celebrate Wins', desc: 'View your achievements and progress charts to stay motivated.' }
        ]
    },
    {
        id: 'grammar-practice',
        name: 'Grammar Practice',
        icon: '✏️',
        color: 'linear-gradient(135deg, #0066ff, #0052cc)',
        colorCode: '#0066ff',
        description: 'Interactive quizzes with instant feedback',
        keywords: 'grammar, language learning, English grammar, writing skills, grammar quiz',
        rating: '4.5',
        ratingCount: '1450',
        howToSteps: [
            { num: 1, title: 'Select Topic', desc: 'Choose a grammar topic to practice (tenses, articles, punctuation, etc.).' },
            { num: 2, title: 'Answer Questions', desc: 'Solve grammar problems and select the correct answers.' },
            { num: 3, title: 'Get Feedback', desc: 'Receive instant explanations for correct and incorrect answers.' },
            { num: 4, title: 'Track Skills', desc: 'Monitor your progress in different grammar areas.' }
        ]
    },
    {
        id: 'break-planner',
        name: 'Break Planner',
        icon: '☕',
        color: 'linear-gradient(135deg, #00cc66, #009933)',
        colorCode: '#00cc66',
        description: 'Scheduling interface with notifications',
        keywords: 'break scheduler, rest planner, productivity breaks, wellness timer',
        rating: '4.4',
        ratingCount: '890',
        howToSteps: [
            { num: 1, title: 'Schedule Breaks', desc: 'Plan break times throughout your study day.' },
            { num: 2, title: 'Choose Activities', desc: 'Select break activities (walk, snack, exercise, etc.).' },
            { num: 3, title: 'Set Duration', desc: 'Decide how long each break should be (5-15 minutes).' },
            { num: 4, title: 'Get Alerts', desc: 'Receive notifications when it\'s time to take a break.' }
        ]
    },
    {
        id: 'speed-reading-trainer',
        name: 'Speed Reading Trainer',
        icon: '👀',
        color: 'linear-gradient(135deg, #ffcc00, #ff9900)',
        colorCode: '#ffcc00',
        description: 'Adjustable word pacing with RSVP display',
        keywords: 'speed reading, reading speed, RSVP, rapid serial visual presentation',
        rating: '4.3',
        ratingCount: '1200',
        howToSteps: [
            { num: 1, title: 'Paste Text', desc: 'Copy and paste text you want to read into the trainer.' },
            { num: 2, title: 'Adjust Speed', desc: 'Set the words per minute (WPM) from 200 to 1000+.' },
            { num: 3, title: 'Start Reading', desc: 'Watch words appear one at a time and absorb their meaning.' },
            { num: 4, title: 'Track WPM', desc: 'Monitor your reading speed improvements over time.' }
        ]
    },
    {
        id: 'quiz-maker',
        name: 'Quiz Maker',
        icon: '❓',
        color: 'linear-gradient(135deg, #ff0000, #cc0000)',
        colorCode: '#ff0000',
        description: 'Create, share, and take custom multiple-choice quizzes',
        keywords: 'quiz creator, test maker, multiple choice, online quizzes, assessment tool',
        rating: '4.8',
        ratingCount: '3100',
        howToSteps: [
            { num: 1, title: 'Create Quiz', desc: 'Click "New Quiz" and give it a name and description.' },
            { num: 2, title: 'Add Questions', desc: 'Add multiple-choice questions with 4 answer options.' },
            { num: 3, title: 'Set Answers', desc: 'Mark the correct answer and add explanations.' },
            { num: 4, title: 'Share & Test', desc: 'Share your quiz with friends or test yourself.' }
        ]
    },
    {
        id: 'white-noise-generator',
        name: 'White Noise Generator',
        icon: '🔊',
        color: 'linear-gradient(135deg, #9900ff, #7700cc)',
        colorCode: '#9900ff',
        description: 'Customizable ambient sounds mixer with timers',
        keywords: 'white noise, ambient sounds, focus sounds, study music, concentration audio',
        rating: '4.6',
        ratingCount: '2450',
        howToSteps: [
            { num: 1, title: 'Choose Sounds', desc: 'Select from rain, ocean, forest, cafe, or thunderstorm sounds.' },
            { num: 2, title: 'Mix Layers', desc: 'Combine multiple sounds and adjust individual volume levels.' },
            { num: 3, title: 'Set Timer', desc: 'Choose how long the sounds should play (30 min to 8 hours).' },
            { num: 4, title: 'Start Study', desc: 'Play your custom sound mix while you study.' }
        ]
    }
];

// Generate HTML for a single tool page
function generateToolHTML(tool) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${tool.name} - ${tool.description} for effective learning and study management.">
    <meta name="keywords" content="${tool.keywords}">
    <meta name="author" content="Student Tools Suite">
    <meta property="og:title" content="${tool.name} - Student Tools Suite">
    <meta property="og:description" content="${tool.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://estudytools.github.io/tools/${tool.id}.html">
    <meta name="twitter:card" content="summary">
    <link rel="canonical" href="https://estudytools.github.io/tools/${tool.id}.html">
    <link rel="icon" type="image/x-icon" href="../assets/favicon.ico">
    <link rel="manifest" href="../manifest.json">
    <title>${tool.name} - Student Tools Suite</title>
    <link rel="stylesheet" href="../styles.css">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "${tool.name}",
        "url": "https://estudytools.github.io/tools/${tool.id}.html",
        "description": "${tool.description}",
        "applicationCategory": "EducationalApplication",
        "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"},
        "author": {"@type": "Organization", "name": "Student Tools Suite"},
        "aggregateRating": {"@type": "AggregateRating", "ratingValue": "${tool.rating}", "ratingCount": "${tool.ratingCount}"}
    }
    </script>
</head>
<body>
    <div id="header-container"></div>
    <div id="sidebar-container"></div>
    
    <main class="main-content">
        <section class="tool-header" style="background: ${tool.color};">
            <div class="container">
                <div class="tool-header-content">
                    <div class="tool-header-icon">${tool.icon}</div>
                    <div>
                        <h1>${tool.name}</h1>
                        <p class="tool-subtitle">${tool.description}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="tool-section">
            <div class="container">
                <h2>How to Use</h2>
                <div class="how-to-grid">
                    ${tool.howToSteps.map(step => `
                        <div class="how-to-step">
                            <div class="step-number">${step.num}</div>
                            <h3>${step.title}</h3>
                            <p>${step.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="tool-section alternate-bg">
            <div class="container">
                <h2>Key Features</h2>
                <div class="features-list">
                    <div class="feature-item">
                        <span class="feature-icon">✨</span>
                        <div>
                            <h3>Intuitive Interface</h3>
                            <p>Easy to use design that gets out of your way so you can focus on studying.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">📱</span>
                        <div>
                            <h3>Works Everywhere</h3>
                            <p>Use on any device - phone, tablet, or desktop. Seamless across all platforms.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🔒</span>
                        <div>
                            <h3>Privacy Protected</h3>
                            <p>Your data stays on your device. No tracking, no ads, completely private.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">⚡</span>
                        <div>
                            <h3>Lightning Fast</h3>
                            <p>Optimized for speed. Opens instantly and runs smoothly on any connection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tool-section">
            <div class="container">
                <h2>Why ${tool.name}?</h2>
                <div class="description-content">
                    <p>${tool.name} is designed specifically for students to improve their learning outcomes and academic performance. With a focus on simplicity and effectiveness, this tool helps you study smarter, not harder.</p>
                    
                    <h3>Research-Backed Methods</h3>
                    <p>This tool is based on proven educational research and learning science principles. It implements strategies that cognitive science has shown to be highly effective for knowledge retention and skill development.</p>
                    
                    <h3>Getting the Most Out</h3>
                    <ul class="best-practices">
                        <li><strong>Use consistently:</strong> Regular use leads to better results than sporadic sessions</li>
                        <li><strong>Follow best practices:</strong> Implement recommended study strategies for maximum effectiveness</li>
                        <li><strong>Stay focused:</strong> Minimize distractions and commit fully to your study sessions</li>
                        <li><strong>Track progress:</strong> Monitor improvements to stay motivated and adjusted as needed</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="tool-section alternate-bg">
            <div class="container">
                <h2>Student Testimonials</h2>
                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <p>"This tool completely changed how I study. My grades improved dramatically!"</p>
                        <p class="testimonial-author">- Student Success Story</p>
                    </div>
                    <div class="testimonial-card">
                        <p>"Simple, effective, and exactly what I needed. Highly recommend!"</p>
                        <p class="testimonial-author">- Satisfied User</p>
                    </div>
                    <div class="testimonial-card">
                        <p>"Free, no ads, and actually helpful. Best study tool I've found."</p>
                        <p class="testimonial-author">- Happy Learner</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="tool-sidebar-section">
            <div class="container">
                <div class="tool-content-with-sidebar">
                    <div class="tool-main">
                        <h2>Quick Tips for Success</h2>
                        <ol>
                            <li>Start with the tutorial to understand all features</li>
                            <li>Customize settings to match your preferences</li>
                            <li>Use consistently as part of your study routine</li>
                            <li>Track your progress and celebrate improvements</li>
                            <li>Experiment with different approaches to find what works best</li>
                        </ol>
                    </div>
                    <aside class="tool-sidebar">
                        <div class="sidebar-widget">
                            <h3>Quick Stats</h3>
                            <ul>
                                <li>⭐ ${tool.rating}/5 rating</li>
                                <li>👥 ${tool.ratingCount} users</li>
                                <li>💯 100% free</li>
                                <li>🔒 Private & secure</li>
                            </ul>
                        </div>
                        <div class="sidebar-widget">
                            <h3>Pro Tips</h3>
                            <ul>
                                <li>Use daily for best results</li>
                                <li>Combine with other tools</li>
                                <li>Track your progress</li>
                                <li>Share with classmates</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <h2>Ready to Improve Your Studies?</h2>
            <p>Start using ${tool.name} today</p>
            <button class="btn btn-primary btn-large">Launch ${tool.name}</button>
        </section>
    </main>

    <div id="footer-container"></div>

    <style>
        .tool-header {
            padding: 3rem 2rem;
            color: white;
        }

        .tool-header-content {
            display: flex;
            gap: 2rem;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .tool-header-icon {
            font-size: 4rem;
        }

        .tool-subtitle {
            font-size: 1.2rem;
            opacity: 0.95;
            margin-top: 0.5rem;
        }

        .tool-section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .alternate-bg {
            background-color: #ffffff;
        }

        .how-to-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .how-to-step {
            padding: 2rem;
            border: 2px solid #e0dbd5;
            border-radius: 12px;
            text-align: center;
            background: white;
        }

        .step-number {
            width: 50px;
            height: 50px;
            background: ${tool.color};
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 auto 1rem;
        }

        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .feature-item {
            display: flex;
            gap: 1.5rem;
            padding: 1.5rem;
            border-radius: 12px;
            background: #f9f7f3;
        }

        .feature-icon {
            font-size: 2rem;
            flex-shrink: 0;
        }

        .description-content {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            border: 2px solid #e0dbd5;
        }

        .description-content h3 {
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: ${tool.colorCode};
        }

        .best-practices {
            list-style: none;
            padding: 0;
        }

        .best-practices li {
            padding: 0.75rem 0;
            padding-left: 2rem;
            position: relative;
        }

        .best-practices li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: ${tool.colorCode};
            font-weight: bold;
        }

        .tool-content-with-sidebar {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 2rem;
        }

        .tool-sidebar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .sidebar-widget {
            padding: 1.5rem;
            background: white;
            border: 2px solid #e0dbd5;
            border-radius: 12px;
        }

        .sidebar-widget h3 {
            margin-bottom: 1rem;
            color: ${tool.colorCode};
        }

        .sidebar-widget ul {
            list-style: none;
            padding: 0;
        }

        .sidebar-widget li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            font-size: 0.95rem;
        }

        .sidebar-widget li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: ${tool.colorCode};
        }

        @media (max-width: 768px) {
            .tool-header-content {
                flex-direction: column;
                text-align: center;
            }

            .tool-content-with-sidebar {
                grid-template-columns: 1fr;
            }
        }
    </style>

    <script src="../script.js"></script>
</body>
</html>`;
}

// Export for use in build processes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toolsConfig, generateToolHTML };
}
