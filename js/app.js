// app.js - Main Application Controller for sirleegameprediction
// Full PWA, Navigation, Match Rendering, Live Ticker, Stats, and Contact Form

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentTab: 'today',
    selectedLeague: 'all',
    selectedMarket: 'all',
    searchQuery: '',
    deferredPrompt: null,
    isOnline: navigator.onLine,
    selectedStandingLeague: 'epl',
    standingsSearchQuery: '',
    currentStandingsData: [],
    liveTimerInterval: null
  };

  // DOM Elements
  const els = {
    tabs: document.querySelectorAll('[data-tab-target]'),
    sections: {
      today: document.getElementById('section-today'),
      tomorrow: document.getElementById('section-tomorrow'),
      live: document.getElementById('section-live'),
      stats: document.getElementById('section-stats'),
      premium: document.getElementById('section-premium')
    },
    todayContainer: document.getElementById('today-matches-list'),
    tomorrowContainer: document.getElementById('tomorrow-matches-list'),
    liveContainer: document.getElementById('live-matches-list'),
    leaguePillsContainer: document.getElementById('league-pills'),
    marketPillsContainer: document.getElementById('market-pills'),
    searchInput: document.getElementById('match-search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    bottomNavItems: document.querySelectorAll('.bottom-nav-item'),
    installBtn: document.getElementById('install-pwa-btn'),
    installBanner: document.getElementById('install-banner'),
    installBannerBtn: document.getElementById('banner-install-action'),
    closeInstallBanner: document.getElementById('close-install-banner'),
    iosInstallModal: document.getElementById('ios-install-modal'),
    closeIosModal: document.getElementById('close-ios-modal'),
    matchModal: document.getElementById('match-detail-modal'),
    closeMatchModal: document.getElementById('close-match-modal'),
    matchModalContent: document.getElementById('match-modal-content'),
    contactForm: document.getElementById('vip-contact-form'),
    formSuccessModal: document.getElementById('form-success-modal'),
    closeSuccessModal: document.getElementById('close-success-modal'),
    ticketRefSpan: document.getElementById('ticket-ref-id'),
    mailtoActionBtn: document.getElementById('mailto-action-btn'),
    offlineNotice: document.getElementById('offline-notice'),
    standingsLeagueSelect: document.getElementById('standings-league-select'),
    standingsTableBody: document.getElementById('standings-table-body'),
    standingsSearch: document.getElementById('standings-search'),
    standingsRefreshBtn: document.getElementById('btn-refresh-standings'),
    standingsTeamCountBadge: document.getElementById('standings-team-count-badge'),
    standingsLastUpdated: document.getElementById('standings-last-updated'),
    todayCountBadge: document.getElementById('today-count-badge'),
    liveCountBadge: document.getElementById('live-count-badge')
  };

  // Initialize App
  init();

  function init() {
    registerServiceWorker();
    setupPwaInstallPrompt();
    setupHashRouting();
    renderLeaguePills();
    renderMarketPills();
    setupSearchListeners();
    setupNavigationListeners();
    setupContactForm();
    setupStandingsView();
    setupNetworkListeners();
    setupRealtimeSync();
    
    // Load and render initial data
    loadPredictions();
    startLiveScoreSimulation();
    
    // Set current date in header
    updateHeaderDate();
  }

  // 1. Service Worker Registration
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(reg => {
            console.log('[PWA] Service Worker registered successfully:', reg.scope);
          })
          .catch(err => {
            console.log('[PWA] Service Worker registration skipped/failed:', err);
          });
      });
    }
  }

  // 2. PWA Installation Handling
  function setupPwaInstallPrompt() {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      state.deferredPrompt = e;
      if (els.installBtn) els.installBtn.classList.remove('hidden');
      if (els.installBanner && !isStandalone) {
        setTimeout(() => els.installBanner.classList.remove('hidden'), 2500);
      }
    });

    if (els.installBtn) {
      els.installBtn.addEventListener('click', handleInstallClick);
    }
    if (els.installBannerBtn) {
      els.installBannerBtn.addEventListener('click', handleInstallClick);
    }
    if (els.closeInstallBanner) {
      els.closeInstallBanner.addEventListener('click', () => {
        els.installBanner.classList.add('hidden');
      });
    }

    if (els.closeIosModal) {
      els.closeIosModal.addEventListener('click', () => {
        els.iosInstallModal.classList.add('hidden');
      });
    }

    function handleInstallClick() {
      if (state.deferredPrompt) {
        state.deferredPrompt.prompt();
        state.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted PWA installation');
            if (els.installBtn) els.installBtn.classList.add('hidden');
            if (els.installBanner) els.installBanner.classList.add('hidden');
          }
          state.deferredPrompt = null;
        });
      } else if (isIos && !isStandalone) {
        if (els.iosInstallModal) els.iosInstallModal.classList.remove('hidden');
      } else {
        alert('To install sirleegameprediction on your device, use your browser menu and choose "Add to Home Screen" or "Install App".');
      }
    }
  }

  // 3. Hash Routing and Tab Switching
  function setupHashRouting() {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'today';
      if (['today', 'tomorrow', 'live', 'stats', 'premium'].includes(hash)) {
        switchTab(hash, false);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  function setupNavigationListeners() {
    els.tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = tab.getAttribute('data-tab-target');
        switchTab(target, true);
      });
    });

    els.bottomNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-tab-target');
        switchTab(target, true);
      });
    });
  }

  function switchTab(tabId, updateHash = true) {
    state.currentTab = tabId;
    if (updateHash) {
      window.location.hash = `#${tabId}`;
    }

    // Toggle Section visibility
    Object.keys(els.sections).forEach(key => {
      if (els.sections[key]) {
        if (key === tabId) {
          els.sections[key].classList.remove('hidden');
          els.sections[key].classList.add('fade-in-tab');
        } else {
          els.sections[key].classList.add('hidden');
        }
      }
    });

    // Update Top Tab Styles
    els.tabs.forEach(tab => {
      const target = tab.getAttribute('data-tab-target');
      if (target === tabId) {
        tab.classList.add('tab-active');
        tab.classList.remove('text-slate-400', 'border-transparent');
      } else {
        tab.classList.remove('tab-active');
        tab.classList.add('text-slate-400', 'border-transparent');
      }
    });

    // Update Bottom Nav Styles
    els.bottomNavItems.forEach(nav => {
      const target = nav.getAttribute('data-tab-target');
      if (target === tabId) {
        nav.classList.add('bottom-nav-active');
        nav.classList.remove('text-slate-400');
      } else {
        nav.classList.remove('bottom-nav-active');
        nav.classList.add('text-slate-400');
      }
    });

    // Scroll to top of match area
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh standings view when activating stats tab
    if (tabId === 'stats') {
      fetchAndRenderStandings(state.selectedStandingLeague);
    }
  }

  // 4. League & Market Filter Pills
  function renderLeaguePills() {
    if (!els.leaguePillsContainer) return;
    els.leaguePillsContainer.innerHTML = LEAGUES.map(league => `
      <button 
        type="button"
        data-league="${league.id}" 
        class="league-pill flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
          state.selectedLeague === league.id
            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-sm'
            : 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white'
        }"
      >
        <span>${league.flag}</span>
        <span>${league.name}</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full ${state.selectedLeague === league.id ? 'bg-emerald-400/20 text-emerald-300' : 'bg-slate-700/60 text-slate-400'}">${league.count}</span>
      </button>
    `).join('');

    els.leaguePillsContainer.querySelectorAll('.league-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedLeague = btn.getAttribute('data-league');
        renderLeaguePills();
        filterAndRenderMatches();
      });
    });
  }

  function renderMarketPills() {
    if (!els.marketPillsContainer) return;
    const markets = [
      { id: 'all', label: 'All Markets' },
      { id: '1x2', label: '1X2 (Win/Draw)' },
      { id: 'goals', label: 'Over/Under 2.5' },
      { id: 'btts', label: 'BTTS (Goal/Goal)' },
      { id: 'score', label: 'Correct Score' }
    ];

    els.marketPillsContainer.innerHTML = markets.map(m => `
      <button 
        type="button"
        data-market="${m.id}" 
        class="market-pill flex-shrink-0 text-xs px-3 py-1 rounded-md transition font-medium border ${
          state.selectedMarket === m.id
            ? 'bg-slate-700 text-emerald-400 border-emerald-500/30'
            : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
        }"
      >
        ${m.label}
      </button>
    `).join('');

    els.marketPillsContainer.querySelectorAll('.market-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedMarket = btn.getAttribute('data-market');
        renderMarketPills();
        filterAndRenderMatches();
      });
    });
  }

  // 5. Search Logic
  function setupSearchListeners() {
    if (!els.searchInput) return;
    els.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      if (els.clearSearchBtn) {
        if (state.searchQuery.length > 0) {
          els.clearSearchBtn.classList.remove('hidden');
        } else {
          els.clearSearchBtn.classList.add('hidden');
        }
      }
      filterAndRenderMatches();
    });

    if (els.clearSearchBtn) {
      els.clearSearchBtn.addEventListener('click', () => {
        els.searchInput.value = '';
        state.searchQuery = '';
        els.clearSearchBtn.classList.add('hidden');
        filterAndRenderMatches();
      });
    }
  }

  // 6. Match Rendering & Card Generator
  async function loadPredictions() {
    const todayData = await window.FootballDataService.getTodayPredictions();
    const tomorrowData = await window.FootballDataService.getTomorrowPredictions();
    const liveData = await window.FootballDataService.getLiveScores();

    if (els.todayCountBadge) els.todayCountBadge.textContent = todayData.length;
    if (els.liveCountBadge) els.liveCountBadge.textContent = liveData.length;

    window._TODAY_CACHE = todayData;
    window._TOMORROW_CACHE = tomorrowData;
    window._LIVE_CACHE = liveData;

    updateHeroBankerCard(todayData);
    updateLastSyncTimestamp();

    filterAndRenderMatches();
    renderLiveMatches(liveData);
  }

  function updateHeroBankerCard(matches) {
    if (!matches || matches.length === 0) return;
    const banker = matches.find(m => m.isBanker) || matches[0];
    if (!banker) return;

    const timeEl = document.getElementById('hero-banker-time');
    const homeLogo = document.getElementById('hero-home-logo');
    const homeName = document.getElementById('hero-home-name');
    const awayLogo = document.getElementById('hero-away-logo');
    const awayName = document.getElementById('hero-away-name');
    const tipEl = document.getElementById('hero-banker-tip');
    const probEl = document.getElementById('hero-banker-prob');
    const scoreEl = document.getElementById('hero-banker-score');

    if (timeEl) timeEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Today ${banker.time}`;
    if (homeLogo) homeLogo.src = banker.homeTeam.logo;
    if (homeName) homeName.textContent = banker.homeTeam.name;
    if (awayLogo) awayLogo.src = banker.awayTeam.logo;
    if (awayName) awayName.textContent = banker.awayTeam.name;
    if (tipEl) tipEl.textContent = `${banker.prediction.primary}`;
    if (probEl) probEl.textContent = `${banker.prediction.probability} Probability`;
    if (scoreEl) scoreEl.textContent = `Score: ${banker.prediction.correctScore}`;
  }

  function setupRealtimeSync() {
    const syncBtn = document.getElementById('manual-sync-btn');
    const spinner = document.getElementById('sync-spinner-icon');
    if (!syncBtn) return;

    syncBtn.addEventListener('click', async () => {
      if (spinner) spinner.classList.add('inline-block', 'animate-spin');
      syncBtn.disabled = true;
      try {
        if (window.FootballDataService && window.FootballDataService.fetchRealtimeMatches) {
          if (window.FootballDataService.cache) window.FootballDataService.cache.lastSync = 0;
          await loadPredictions();
        }
      } catch (err) {
        console.error('Manual sync error:', err);
      } finally {
        setTimeout(() => {
          if (spinner) spinner.classList.remove('animate-spin');
          syncBtn.disabled = false;
        }, 600);
      }
    });
  }

  function updateLastSyncTimestamp() {
    const syncSpan = document.getElementById('last-sync-time');
    if (syncSpan) {
      const now = new Date();
      syncSpan.textContent = `Synced: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  }

  function filterAndRenderMatches() {
    const todayList = (window._TODAY_CACHE || TODAY_MATCHES).filter(matchFilter);
    const tomorrowList = (window._TOMORROW_CACHE || TOMORROW_MATCHES).filter(matchFilter);

    renderMatchList(todayList, els.todayContainer, 'today');
    renderMatchList(tomorrowList, els.tomorrowContainer, 'tomorrow');
  }

  function matchFilter(m) {
    // League Filter
    if (state.selectedLeague !== 'all' && m.leagueId !== state.selectedLeague) {
      return false;
    }
    // Search Query Filter
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchText = `${m.homeTeam.name} ${m.awayTeam.name} ${m.leagueName} ${m.prediction.primary} ${m.prediction.correctScore}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    // Market Filter
    if (state.selectedMarket !== 'all') {
      if (state.selectedMarket === '1x2' && !['1', '2', 'X', '1X', 'X2', '12'].includes(m.prediction.primaryType)) return false;
      if (state.selectedMarket === 'goals' && !m.prediction.averageGoals.toLowerCase().includes('over')) return false;
      if (state.selectedMarket === 'btts' && m.prediction.btts !== 'Yes') return false;
    }
    return true;
  }

  function renderMatchList(matches, container, type) {
    if (!container) return;

    if (matches.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-800 flex items-center justify-center text-xl">🔍</div>
          <h4 class="text-white font-semibold text-base mb-1">No matches found</h4>
          <p class="text-xs text-slate-400 max-w-sm mx-auto">No fixtures match your current filter. Try selecting "All Leagues" or resetting your search query.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = matches.map(match => createMatchCardHTML(match, type)).join('');

    // Attach card event listeners
    container.querySelectorAll('[data-match-detail-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const matchId = btn.getAttribute('data-match-detail-id');
        openMatchDetailModal(matchId);
      });
    });

    container.querySelectorAll('[data-share-tip-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const matchId = btn.getAttribute('data-share-tip-id');
        sharePredictionTip(matchId);
      });
    });
  }

  function createMatchCardHTML(m, type) {
    const badgeColor = m.badgeType === 'gold' 
      ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
      : m.badgeType === 'cyan'
      ? 'bg-sky-500/15 text-sky-300 border-sky-500/30'
      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';

    const formBadgesHome = m.homeTeam.form.map(f => `
      <span class="w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center ${
        f === 'W' ? 'form-badge-w' : f === 'D' ? 'form-badge-d' : 'form-badge-l'
      }">${f}</span>
    `).join('');

    const formBadgesAway = m.awayTeam.form.map(f => `
      <span class="w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center ${
        f === 'W' ? 'form-badge-w' : f === 'D' ? 'form-badge-d' : 'form-badge-l'
      }">${f}</span>
    `).join('');

    return `
      <article class="glass-card rounded-2xl p-4 md:p-5 relative overflow-hidden transition-all duration-300 hover:border-emerald-500/40">
        <!-- Card Top Bar: League & Badge -->
        <div class="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/5 text-xs">
          <div class="flex items-center gap-1.5 font-medium text-slate-300 truncate">
            <span>${m.flag}</span>
            <span class="truncate">${m.leagueName}</span>
            <span class="text-slate-500">•</span>
            <span class="text-slate-400 text-[11px]">${m.round}</span>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            ${m.badgeText ? `
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badgeColor}">
                ${m.badgeText}
              </span>
            ` : ''}
            <span class="font-mono text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded text-[11px] border border-emerald-500/20">
              ${type === 'today' ? `Kickoff ${m.time}` : `Tomorrow ${m.time}`}
            </span>
          </div>
        </div>

        <!-- Teams Matchup Block -->
        <div class="grid grid-cols-12 items-center gap-2 py-2">
          <!-- Home Team -->
          <div class="col-span-5 flex flex-col items-center text-center">
            <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/80 p-2 mb-2 flex items-center justify-center border border-white/10 shadow-inner">
              <img src="${m.homeTeam.logo}" alt="${m.homeTeam.name}" class="w-full h-full object-contain filter drop-shadow" onerror="this.src='https://placehold.co/60x60/1e293b/00ff87?text=${m.homeTeam.shortName}'">
            </div>
            <h4 class="font-heading font-bold text-sm md:text-base text-white truncate max-w-[120px]">${m.homeTeam.name}</h4>
            <div class="flex items-center gap-1 mt-1">${formBadgesHome}</div>
            <span class="text-[10px] text-slate-400 mt-1">Rank #${m.homeTeam.rank} (xG: ${m.homeTeam.xG})</span>
          </div>

          <!-- VS / Status Center -->
          <div class="col-span-2 flex flex-col items-center justify-center text-center">
            <span class="text-xs font-mono font-bold text-slate-500 uppercase">VS</span>
            <div class="mt-1 flex items-center justify-center">
              <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-emerald-400 font-mono font-bold border border-slate-700/60">
                ${m.time}
              </span>
            </div>
          </div>

          <!-- Away Team -->
          <div class="col-span-5 flex flex-col items-center text-center">
            <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/80 p-2 mb-2 flex items-center justify-center border border-white/10 shadow-inner">
              <img src="${m.awayTeam.logo}" alt="${m.awayTeam.name}" class="w-full h-full object-contain filter drop-shadow" onerror="this.src='https://placehold.co/60x60/1e293b/00ff87?text=${m.awayTeam.shortName}'">
            </div>
            <h4 class="font-heading font-bold text-sm md:text-base text-white truncate max-w-[120px]">${m.awayTeam.name}</h4>
            <div class="flex items-center gap-1 mt-1">${formBadgesAway}</div>
            <span class="text-[10px] text-slate-400 mt-1">Rank #${m.awayTeam.rank} (xG: ${m.awayTeam.xG})</span>
          </div>
        </div>

        <!-- Analytical Predictions Breakdown Grid -->
        <div class="mt-4 pt-3 border-t border-white/5 space-y-2.5">
          <!-- Main Prediction Highlight Box -->
          <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/40 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Primary Prediction Tip</span>
              <div class="text-base font-extrabold text-white flex items-center gap-2 mt-0.5">
                <span>${m.prediction.primary}</span>
                <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">${m.prediction.probability} Win Prob</span>
              </div>
            </div>
            <div class="text-right">
              <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Confidence</span>
              <div class="text-xs font-bold text-amber-400 flex items-center justify-end gap-1 mt-0.5">
                <span>⭐</span>
                <span>${m.prediction.confidenceText}</span>
              </div>
            </div>
          </div>

          <!-- Secondary Markets: Correct Score, Average Goals, BTTS -->
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <span class="text-[10px] text-slate-400 block font-medium">Correct Score</span>
              <span class="font-mono font-bold text-emerald-400 text-sm mt-0.5 block">${m.prediction.correctScore}</span>
            </div>
            <div class="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <span class="text-[10px] text-slate-400 block font-medium">Goals Market</span>
              <span class="font-mono font-semibold text-white text-xs mt-0.5 block truncate">${m.prediction.averageGoals}</span>
            </div>
            <div class="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <span class="text-[10px] text-slate-400 block font-medium">Both To Score</span>
              <span class="font-mono font-bold text-sky-400 text-xs mt-0.5 block">${m.prediction.btts}</span>
            </div>
          </div>

          <!-- Analytical Reasoning Snippet -->
          <div class="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
            <span class="text-emerald-400 text-sm flex-shrink-0">💡</span>
            <p class="leading-relaxed text-[11px]"><strong class="text-white">Football Analysis:</strong> ${m.prediction.reasoning}</p>
          </div>
        </div>

        <!-- Card Action Footer -->
        <div class="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs">
          <button 
            type="button"
            data-match-detail-id="${m.id}" 
            class="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition"
          >
            <span>📊 Detailed H2H & Standings</span>
            <span>→</span>
          </button>
          <div class="flex items-center gap-2">
            <button 
              type="button"
              data-share-tip-id="${m.id}" 
              class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              title="Share Prediction Tip"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // 7. Live Matches Rendering & Ticker Simulation
  function renderLiveMatches(liveMatches) {
    if (!els.liveContainer) return;

    if (liveMatches.length === 0) {
      els.liveContainer.innerHTML = `
        <div class="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          <p class="text-sm">No matches currently in-play right now. Check back at the next kickoff window!</p>
        </div>
      `;
      return;
    }

    els.liveContainer.innerHTML = liveMatches.map(lm => `
      <article class="glass-card rounded-2xl p-4 md:p-5 relative border-emerald-500/30 overflow-hidden shadow-lg">
        <!-- Live Header with Pulsing Dot -->
        <div class="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
          <div class="flex items-center gap-2">
            <span class="flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span class="font-bold text-red-500 uppercase tracking-wider text-[11px]">LIVE IN-PLAY</span>
            <span class="font-mono font-bold text-white bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">${lm.minute}'</span>
          </div>
          <div class="flex items-center gap-1.5 text-slate-300 font-medium">
            <span>${lm.flag}</span>
            <span>${lm.leagueName}</span>
          </div>
        </div>

        <!-- Live Score Matchup -->
        <div class="grid grid-cols-12 items-center gap-3 py-4">
          <!-- Home -->
          <div class="col-span-5 flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full bg-slate-800 p-2 mb-2 flex items-center justify-center border border-white/10">
              <img src="${lm.homeTeam.logo}" alt="${lm.homeTeam.name}" class="w-full h-full object-contain">
            </div>
            <h4 class="font-heading font-bold text-sm md:text-base text-white">${lm.homeTeam.name}</h4>
            <span class="text-[10px] text-slate-400">${lm.homeTeam.stats.possession}% Poss • ${lm.homeTeam.stats.shots} Shots</span>
          </div>

          <!-- Score Display -->
          <div class="col-span-2 flex flex-col items-center justify-center">
            <div class="text-2xl md:text-3xl font-heading font-extrabold text-white tracking-wider flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-white/10 shadow-inner">
              <span id="score-home-${lm.id}">${lm.homeScore}</span>
              <span class="text-emerald-400">-</span>
              <span id="score-away-${lm.id}">${lm.awayScore}</span>
            </div>
            <span class="text-[10px] font-semibold text-emerald-400 mt-1 uppercase tracking-wider">In Progress</span>
          </div>

          <!-- Away -->
          <div class="col-span-5 flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full bg-slate-800 p-2 mb-2 flex items-center justify-center border border-white/10">
              <img src="${lm.awayTeam.logo}" alt="${lm.awayTeam.name}" class="w-full h-full object-contain">
            </div>
            <h4 class="font-heading font-bold text-sm md:text-base text-white">${lm.awayTeam.name}</h4>
            <span class="text-[10px] text-slate-400">${lm.awayTeam.stats.possession}% Poss • ${lm.awayTeam.stats.shots} Shots</span>
          </div>
        </div>

        <!-- Live Momentum Meter -->
        <div class="my-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
          <div class="flex items-center justify-between text-[11px] mb-1 font-semibold">
            <span class="text-slate-400">Match Momentum & Danger Attack Index</span>
            <span class="text-emerald-400 font-mono">${lm.momentumPercent}% ${lm.momentumTeam === 'home' ? lm.homeTeam.name : lm.awayTeam.name}</span>
          </div>
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
            <div class="bg-emerald-500 h-full transition-all duration-700" style="width: ${lm.momentumPercent}%"></div>
            <div class="bg-slate-700 h-full transition-all duration-700" style="width: ${100 - lm.momentumPercent}%"></div>
          </div>
        </div>

        <!-- Real-Time In-Play Betting Tip Callout -->
        <div class="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900/80 border border-emerald-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Tactical In-Play Recommendation
            </span>
            <span class="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">${lm.liveTip.confidence} Hit Prob</span>
          </div>
          <div class="text-sm font-extrabold text-white mb-1">${lm.liveTip.recommendedAction}</div>
          <p class="text-xs text-slate-300 leading-relaxed">${lm.liveTip.tipReason}</p>
          <div class="mt-2 pt-2 border-t border-white/5 text-[11px] text-sky-300 font-medium flex items-center justify-between">
            <span>Secondary Tip: ${lm.liveTip.secondaryLiveTip}</span>
            <span class="text-slate-400">Updates live</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  function startLiveScoreSimulation() {
    // Dynamically simulate live in-play ticker minutes and momentum swings
    if (state.liveTimerInterval) clearInterval(state.liveTimerInterval);
    state.liveTimerInterval = setInterval(() => {
      if (!window._LIVE_CACHE) return;
      window._LIVE_CACHE.forEach(lm => {
        if (lm.minute < 90) {
          lm.minute += 1;
        } else {
          lm.minute = 45; // loop for demo continuous simulation
        }
      });
      // Refresh live cards if currently viewing the live tab
      if (state.currentTab === 'live') {
        renderLiveMatches(window._LIVE_CACHE);
      }
    }, 15000);
  }

  // 8. Detailed Statistics & Standings View (Real-Time API Integration)
  function setupStandingsView() {
    if (!els.standingsLeagueSelect || !els.standingsTableBody) return;

    // Initial render using local 2026 data immediately, then background API sync
    fetchAndRenderStandings(state.selectedStandingLeague);

    // League selection change handler
    els.standingsLeagueSelect.addEventListener('change', (e) => {
      state.selectedStandingLeague = e.target.value;
      state.standingsSearchQuery = '';
      if (els.standingsSearch) els.standingsSearch.value = '';
      fetchAndRenderStandings(state.selectedStandingLeague);
    });

    // Live search filter across clubs in the active standings table
    if (els.standingsSearch) {
      els.standingsSearch.addEventListener('input', (e) => {
        state.standingsSearchQuery = e.target.value.trim().toLowerCase();
        filterAndRenderStandings();
      });
    }
  }

  async function fetchAndRenderStandings(leagueKey, forceRefresh = false) {
    // 1. Immediately render cached or baseline 2026 dataset so UI is instantly responsive
    const baselineList = (typeof LEAGUE_STANDINGS !== 'undefined' && LEAGUE_STANDINGS[leagueKey]) || [];
    if (!state.currentStandingsData || state.currentStandingsData.length === 0 || forceRefresh) {
      state.currentStandingsData = baselineList;
      filterAndRenderStandings();
      updateStandingsMeta(leagueKey, false);
    }

    if (forceRefresh && els.standingsTableBody) {
      els.standingsTableBody.style.opacity = '0.6';
    }

    // 2. Fetch latest live standings from Real-Time ESPN Open API
    try {
      if (window.FootballDataService && typeof window.FootballDataService.fetchLeagueStandings === 'function') {
        const liveList = await window.FootballDataService.fetchLeagueStandings(leagueKey, forceRefresh);
        if (Array.isArray(liveList) && liveList.length > 0) {
          state.currentStandingsData = liveList;
        }
      }
    } catch (err) {
      console.warn('[Standings UI] API pull fallback to 2026 database:', err);
    } finally {
      if (els.standingsTableBody) {
        els.standingsTableBody.style.opacity = '1';
      }
      filterAndRenderStandings();
      updateStandingsMeta(leagueKey, true);
    }
  }

  function updateStandingsMeta(leagueKey, isLiveSynced = true) {
    const list = state.currentStandingsData || [];
    if (els.standingsTeamCountBadge) {
      els.standingsTeamCountBadge.textContent = `${list.length} Clubs`;
    }
    if (els.standingsLastUpdated) {
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      els.standingsLastUpdated.textContent = isLiveSynced 
        ? `Synced ${nowStr} • Live 2026 API Feed` 
        : `Official 2026 Season Table Standings`;
    }
  }

  function filterAndRenderStandings() {
    if (!els.standingsTableBody) return;
    const query = state.standingsSearchQuery;
    let list = state.currentStandingsData || [];

    if (query) {
      list = list.filter(item => 
        (item.name && item.name.toLowerCase().includes(query)) ||
        (item.shortName && item.shortName.toLowerCase().includes(query))
      );
    }

    if (list.length === 0) {
      els.standingsTableBody.innerHTML = `
        <tr>
          <td colspan="11" class="py-10 text-center text-slate-400">
            <div class="text-3xl mb-2">🔍</div>
            <p class="font-semibold text-xs text-white">No teams found matching "${escapeHtml(query)}"</p>
            <p class="text-[11px] text-slate-500 mt-1">Try another search keyword or switch leagues</p>
          </td>
        </tr>
      `;
      return;
    }

    const totalTeams = (state.currentStandingsData || []).length;

    els.standingsTableBody.innerHTML = list.map(item => {
      // Determine qualification zone colors
      let rankBadgeClass = 'text-slate-400 bg-slate-800/40';
      let borderLeft = 'border-l-2 border-transparent';
      
      if (item.rank <= 4) {
        // Champions League / Top 4 spots
        rankBadgeClass = 'text-emerald-400 bg-emerald-500/10 font-bold border border-emerald-500/30';
        borderLeft = 'border-l-2 border-emerald-400';
      } else if (item.rank <= 6) {
        // Europa League / European Spots
        rankBadgeClass = 'text-sky-400 bg-sky-500/10 font-bold border border-sky-500/30';
        borderLeft = 'border-l-2 border-sky-400';
      } else if (totalTeams >= 18 && item.rank > (totalTeams - 3)) {
        // Relegation Zone (bottom 3 in 18/20 team leagues)
        rankBadgeClass = 'text-red-400 bg-red-500/10 font-bold border border-red-500/30';
        borderLeft = 'border-l-2 border-red-400';
      } else if (totalTeams === 12 && item.rank > (totalTeams - 2)) {
        // Relegation in 12-team leagues
        rankBadgeClass = 'text-red-400 bg-red-500/10 font-bold border border-red-500/30';
        borderLeft = 'border-l-2 border-red-400';
      }

      // Goal difference styling
      const gdStr = String(item.gd || '0');
      const isPositiveGd = gdStr.startsWith('+');
      const isNegativeGd = gdStr.startsWith('-');
      const gdClass = isPositiveGd ? 'text-emerald-400 font-semibold' : (isNegativeGd ? 'text-red-400' : 'text-slate-400');

      // Team Logo with placeholder fallback
      const fallbackAbbr = (item.shortName || item.name || 'FC').substring(0, 3).toUpperCase();
      const teamLogo = item.logo || `https://placehold.co/40x40/1e293b/00ff87?text=${encodeURIComponent(fallbackAbbr)}`;

      // Form indicators (Last 5 matches)
      const formHtml = (item.form || []).slice(0, 5).map(f => {
        let badgeColor = 'bg-slate-700 text-slate-300';
        if (f === 'W') badgeColor = 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
        if (f === 'D') badgeColor = 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
        if (f === 'L') badgeColor = 'bg-red-500/20 text-red-400 border border-red-500/30';
        return `<span class="inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold ${badgeColor}">${f}</span>`;
      }).join('');

      return `
        <tr class="border-b border-slate-800/80 hover:bg-slate-800/40 transition ${borderLeft}">
          <td class="py-2.5 px-3 text-center">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-md font-mono text-xs ${rankBadgeClass}">
              ${item.rank}
            </span>
          </td>
          <td class="py-2.5 px-3">
            <div class="flex items-center gap-2.5 min-w-[150px]">
              <img 
                src="${teamLogo}" 
                alt="${escapeHtml(item.name)}" 
                class="w-5 h-5 object-contain flex-shrink-0 rounded-full bg-slate-900/60 p-0.5" 
                loading="lazy"
                onerror="this.onerror=null; this.src='https://placehold.co/40x40/1e293b/00ff87?text=${encodeURIComponent(fallbackAbbr)}';"
              />
              <div class="truncate">
                <span class="font-semibold text-white block truncate text-xs hover:text-emerald-400 transition cursor-default" title="${escapeHtml(item.name)}">
                  ${escapeHtml(item.name)}
                </span>
                ${item.note ? `<span class="text-[9px] text-slate-400 block truncate -mt-0.5">${escapeHtml(item.note)}</span>` : ''}
              </div>
            </div>
          </td>
          <td class="py-2.5 px-2 text-center text-slate-300 font-medium">${item.played}</td>
          <td class="py-2.5 px-2 text-center font-mono text-emerald-400 font-medium">${item.won}</td>
          <td class="py-2.5 px-2 text-center font-mono text-slate-400">${item.drawn}</td>
          <td class="py-2.5 px-2 text-center font-mono text-red-400">${item.lost}</td>
          <td class="py-2.5 px-2 text-center font-mono text-slate-400 hidden md:table-cell">${item.gf !== undefined ? item.gf : '-'}</td>
          <td class="py-2.5 px-2 text-center font-mono text-slate-400 hidden md:table-cell">${item.ga !== undefined ? item.ga : '-'}</td>
          <td class="py-2.5 px-2 text-center font-mono ${gdClass}">${item.gd}</td>
          <td class="py-2.5 px-3 text-center">
            <span class="px-2 py-1 rounded bg-slate-800/80 font-mono font-bold text-white text-xs border border-white/5 inline-block min-w-[28px]">
              ${item.pts}
            </span>
          </td>
          <td class="py-2.5 px-3 text-center hidden sm:table-cell">
            <div class="flex items-center justify-center gap-1">
              ${formHtml || '<span class="text-slate-600">-</span>'}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 9. Match Detail Modal
  function openMatchDetailModal(matchId) {
    const allMatches = [...(window._TODAY_CACHE || TODAY_MATCHES), ...(window._TOMORROW_CACHE || TOMORROW_MATCHES)];
    const match = allMatches.find(m => m.id === matchId);
    if (!match || !els.matchModalContent || !els.matchModal) return;

    els.matchModalContent.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span class="text-xs text-emerald-400 font-mono font-semibold">${match.leagueName} • ${match.round}</span>
            <h3 class="text-lg md:text-xl font-heading font-extrabold text-white mt-0.5">${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
          </div>
          <button id="modal-inner-close" class="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white">✕</button>
        </div>

        <div class="py-4 grid grid-cols-2 gap-3 text-center">
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span class="text-xs text-slate-400 block">${match.homeTeam.name} (Home xG)</span>
            <span class="text-xl font-bold font-mono text-emerald-400 mt-1 block">${match.stats.homeAvgGoalsScored} avg goals</span>
            <span class="text-[11px] text-slate-500">${match.stats.homeAvgGoalsConceded} goals conceded avg</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span class="text-xs text-slate-400 block">${match.awayTeam.name} (Away xG)</span>
            <span class="text-xl font-bold font-mono text-emerald-400 mt-1 block">${match.stats.awayAvgGoalsScored} avg goals</span>
            <span class="text-[11px] text-slate-500">${match.stats.awayAvgGoalsConceded} goals conceded avg</span>
          </div>
        </div>

        <!-- Head to Head Record -->
        <div class="my-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Historical Head-to-Head (Last 10 Matches)</h4>
          <div class="flex items-center justify-between text-xs font-mono font-semibold text-white mb-2">
            <span>${match.stats.h2h.homeWins} Wins (${match.homeTeam.shortName})</span>
            <span class="text-slate-400">${match.stats.h2h.draws} Draws</span>
            <span>${match.stats.h2h.awayWins} Wins (${match.awayTeam.shortName})</span>
          </div>
          <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
            <div class="bg-emerald-500 h-full" style="width: 45%"></div>
            <div class="bg-slate-500 h-full" style="width: 25%"></div>
            <div class="bg-sky-500 h-full" style="width: 30%"></div>
          </div>
          <div class="text-[11px] text-slate-400 mt-2">Latest Encounter: <strong class="text-white">${match.stats.h2h.lastResult}</strong></div>
        </div>

        <!-- Deep Analytical Prediction Summary -->
        <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/40">
          <span class="text-[10px] uppercase font-bold text-emerald-400">SirLee Algorithmic Model Verdict</span>
          <div class="text-base font-extrabold text-white mt-1 mb-2">${match.prediction.primary} • Correct Score: ${match.prediction.correctScore}</div>
          <p class="text-xs text-slate-300 leading-relaxed">${match.prediction.reasoning}</p>
          <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <span class="text-slate-400">Match Official: ${match.stats.referee}</span>
            <span class="text-amber-400 font-bold">Confidence: ${match.prediction.confidenceText}</span>
          </div>
        </div>

        <div class="mt-5 flex flex-col sm:flex-row gap-2.5">
          <button id="modal-standings-btn" class="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition border border-slate-700 flex items-center justify-center gap-1.5">
            <span>📋 View ${match.leagueName} Table</span>
          </button>
          <button id="modal-vip-btn" class="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition">
            Request VIP High Stake Banker Slip
          </button>
        </div>
      </div>
    `;

    els.matchModal.classList.remove('hidden');

    document.getElementById('modal-inner-close')?.addEventListener('click', () => {
      els.matchModal.classList.add('hidden');
    });

    document.getElementById('modal-standings-btn')?.addEventListener('click', () => {
      els.matchModal.classList.add('hidden');
      if (els.standingsLeagueSelect) {
        els.standingsLeagueSelect.value = match.leagueId;
        state.selectedStandingLeague = match.leagueId;
      }
      switchTab('stats', true);
      fetchAndRenderStandings(match.leagueId);
    });

    document.getElementById('modal-vip-btn')?.addEventListener('click', () => {
      els.matchModal.classList.add('hidden');
      switchTab('premium', true);
    });
  }

  if (els.closeMatchModal) {
    els.closeMatchModal.addEventListener('click', () => {
      els.matchModal.classList.add('hidden');
    });
  }

  // 10. Social & WhatsApp Tip Sharing
  function sharePredictionTip(matchId) {
    const allMatches = [...(window._TODAY_CACHE || TODAY_MATCHES), ...(window._TOMORROW_CACHE || TOMORROW_MATCHES)];
    const m = allMatches.find(item => item.id === matchId);
    if (!m) return;

    const shareText = `🔥 SirLee Game Prediction Tip:\n⚽ ${m.homeTeam.name} vs ${m.awayTeam.name}\n🏆 ${m.leagueName}\n🎯 Primary: ${m.prediction.primary} (${m.prediction.probability})\n🔢 Score: ${m.prediction.correctScore}\n📊 Goals: ${m.prediction.averageGoals}\n\n👉 View all daily winning tips at: ${window.location.origin}`;

    if (navigator.share) {
      navigator.share({
        title: `${m.homeTeam.name} vs ${m.awayTeam.name} Prediction - sirleegameprediction`,
        text: shareText,
        url: window.location.href
      }).catch(err => console.log('Share canceled'));
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Prediction tip copied to clipboard! You can paste it into WhatsApp or Telegram.');
      }).catch(() => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
      });
    }
  }

  // 11. Contact / Premium Form Handling (djsirlee@gmail.com)
  function setupContactForm() {
    if (!els.contactForm) return;

    els.contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = els.contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span class="inline-flex items-center gap-2">
          <svg class="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          Dispatching to djsirlee@gmail.com...
        </span>
      `;
      submitBtn.disabled = true;

      const formData = {
        name: document.getElementById('contact-name')?.value || 'VIP Client',
        email: document.getElementById('contact-email')?.value || '',
        phone: document.getElementById('contact-phone')?.value || '',
        plan: document.getElementById('contact-plan')?.value || 'VIP Daily Bankers',
        league: document.getElementById('contact-league')?.value || 'All Major Leagues',
        message: document.getElementById('contact-message')?.value || ''
      };

      try {
        const result = await window.ContactFormService.submitInquiry(formData);
        
        // Show success modal
        const ticketId = 'SIRLEE-' + Math.floor(100000 + Math.random() * 900000);
        if (els.ticketRefSpan) els.ticketRefSpan.textContent = ticketId;

        // Build native mailto link as reliable direct email guarantee
        const mailtoSubject = encodeURIComponent(`[VIP Inquiry: ${ticketId}] ${formData.plan} - ${formData.name}`);
        const mailtoBody = encodeURIComponent(`Hello SirLee,\n\nI would like to request premium predictions and VIP Banker access.\n\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp/Phone: ${formData.phone}\nInterested Plan: ${formData.plan}\nPreferred Leagues: ${formData.league}\nMessage: ${formData.message}\n\nReference: ${ticketId}`);
        
        if (els.mailtoActionBtn) {
          els.mailtoActionBtn.href = `mailto:djsirlee@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        }

        if (els.formSuccessModal) {
          els.formSuccessModal.classList.remove('hidden');
        }

        // Reset form
        els.contactForm.reset();
      } catch (err) {
        console.error('Submission error:', err);
        alert('Notice: Unable to send automatically. Opening your email app to djsirlee@gmail.com directly.');
        window.location.href = `mailto:djsirlee@gmail.com?subject=VIP Football Prediction Inquiry&body=Hi SirLee, please send me details for VIP predictions.`;
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });

    if (els.closeSuccessModal) {
      els.closeSuccessModal.addEventListener('click', () => {
        els.formSuccessModal.classList.add('hidden');
      });
    }
  }

  // 12. Network Offline Status
  function setupNetworkListeners() {
    const updateOnlineStatus = () => {
      state.isOnline = navigator.onLine;
      if (els.offlineNotice) {
        if (!state.isOnline) {
          els.offlineNotice.classList.remove('hidden');
        } else {
          els.offlineNotice.classList.add('hidden');
        }
      }
    };
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  }

  function updateHeaderDate() {
    const dateSpan = document.getElementById('current-date-display');
    if (dateSpan) {
      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      dateSpan.textContent = `${new Date().toLocaleDateString('en-US', options)} • 2026 Real-Time Feed`;
    }
  }
});
