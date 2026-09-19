import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const githubRepos = [
  {
    name: 'ai-chatbot',
    description: 'An AI-powered chatbot application built with modern web technologies. Implements conversational AI interfaces with sleek CSS-driven UI.',
    language: 'CSS',
    url: 'https://github.com/sachinm-52/ai-chatbot',
    stars: 0,
    forks: 0,
    updated: 'May 2026'
  },
  {
    name: 'driver-drowsiness-detection',
    description: 'AI-based driver drowsiness detection system using Python. Leverages computer vision and machine learning to detect fatigue and alert drivers in real-time.',
    language: 'Python',
    url: 'https://github.com/sachinm-52/driver-drowsiness-detection',
    stars: 0,
    forks: 0,
    updated: 'May 2026'
  },
  {
    name: 'machin-learning',
    description: 'A collection of machine learning experiments, algorithms, and data science explorations. Covers core ML concepts and practical implementations.',
    language: 'Python',
    url: 'https://github.com/sachinm-52/machin-learning',
    stars: 0,
    forks: 0,
    updated: 'Mar 2026'
  }
];

const langColors = {
  Python: '#3572A5',
  CSS: '#563d7c',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
};

const GitHub = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      cardRefs.current,
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Mouse spotlight per card
    const cards = cardRefs.current;
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
    });

    return () => {
      cards.forEach((card) => {
        if (!card) return;
        card.removeEventListener('mousemove', () => {});
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="github"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-red-500 font-bold">EPISODE 05</span>
              <span className="text-white/40">|</span>
              <span>GITHUB REPOSITORIES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
              OPEN SOURCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
                CODE VAULT.
              </span>
            </h2>
          </div>

          {/* GitHub Profile Link */}
          <a
            href="https://github.com/sachinm-52"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-red-600/20 border border-white/15 hover:border-red-600/50 rounded-xl text-sm font-mono text-white/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-xl shadow-xl self-start md:self-end"
          >
            {/* GitHub Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="tracking-wider uppercase text-xs font-bold">View GitHub Profile</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* GitHub Stats Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60 tracking-wider uppercase">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            @sachinm-52
          </span>
          <span className="text-white/30">•</span>
          <span>{githubRepos.length} Public Repos</span>
          <span className="text-white/30">•</span>
          <span>Building data pipelines • Exploring AI • Learning every day</span>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubRepos.map((repo, index) => (
            <a
              key={index}
              ref={addToRefs}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col justify-between relative hover:border-red-600/60 transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(229,9,20,0.15)]"
              style={{ minHeight: '280px' }}
            >
              {/* Mouse Spotlight */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)'
                }}
              ></div>

              {/* Card Number Watermark */}
              <div className="absolute top-0 right-0 p-6 text-white/5 font-mono text-6xl font-black pointer-events-none">
                0{index + 1}
              </div>

              {/* Top: Repo Name & External Link */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white/40 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300 tracking-tight">
                      {repo.name}
                    </h3>
                  </div>
                  <svg className="w-4 h-4 text-white/30 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {repo.description}
                </p>
              </div>

              {/* Bottom: Language & Meta */}
              <div className="relative z-10 flex items-center justify-between pt-6 mt-auto border-t border-white/10">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-white/70">
                      <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: langColors[repo.language] || '#8b8b8b' }}
                      ></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="text-xs font-mono text-white/40">
                    Updated {repo.updated}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW REPO →
                </span>
              </div>

              {/* Red Glow Corner */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:shadow-[0_0_12px_#E50914] transition-all z-10"></div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-center pt-4">
          <a
            href="https://github.com/sachinm-52?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900/80 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-xl backdrop-blur-md hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Repositories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default GitHub;
