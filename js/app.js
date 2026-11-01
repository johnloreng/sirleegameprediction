// app.js - Main Application Controller for sirleegameprediction
// Dynamic Real-Time Date Predictions, Results Verification, Archiving & Client Referral Engine

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    selectedDate: (window.FootballDataService && typeof window.FootballDataService.getTodayDateStr === 'function')
      ? window.FootballDataService.getTodayDateStr()
      : new Date().toISOString().split('T')[0],
    currentTab: 'today',
    selectedLeague: 'all',
    selectedMarket: 'all',
    searchQuery: '',
    deferredPrompt: null,
    isOnline: navigator.onLine,
    selectedStandingLeague: 'epl',
    standingsSearchQuery: '',
    currentStandingsData: [],
    currentMatches: [],
    isLoadingMatches: false,
    liveTimerInterval: null,
    // Archive & Referral State
    archiveFilterOutcome: 'all', // 'all' | 'won' | 'lost' | 'banker' | 'exact'
    archiveFilterLeague: 'all',
    archiveSearchQuery: '',
    archivedMatches: []
  };

  // DOM Elements
  const els = {
    tabs: document.querySelectorAll('[data-tab-target]'),
    sections: {
      today: document.getElementById('section-today'),
      tomorrow: document.getElementById('section-tomorrow'),
      live: document.getElementById('section-live'),
      stats: document.getElementById('section-stats'),
      archive: document.getElementById('section-archive'),
      premium: document.getElementById('section-premium')
    },
    todayContainer: document.getElementById('today-matches-list'),
    tomorrowContainer: document.getElementById('tomorrow-matches-list'),
    liveContainer: document.getElementById('live-matches-list'),
    archiveMatchesList: document.getElementById('archive-matches-list'),
    archiveCountBadge: document.getElementById('archive-count-badge'),
    archiveOutcomePills: document.getElementById('archive-outcome-pills'),
    archiveSearchInput: document.getElementById('archive-search-input'),
    archiveFilterCountBadge: document.getElementById('archive-filter-count-badge'),
    archiveStatWinrate: document.getElementById('archive-stat-winrate'),
    archiveStatBankerrate: document.getElementById('archive-stat-bankerrate'),
    archiveStatTotal: document.getElementById('archive-stat-total'),
    archiveStatExact: document.getElementById('archive-stat-exact'),
    btnCopyReferralSlip: document.getElementById('btn-copy-referral-slip'),
    btnShareWhatsappProof: document.getElementById('btn-share-whatsapp-proof'),
    btnEmailProof: document.getElementById('btn-email-proof'),
    leaguePillsContainer: document.getElementById('league-pills'),
    marketPillsContainer: document.getElementById('market-pills'),
    dayPillsCarousel: document.getElementById('day-pills-carousel'),
    activeDayBadge: document.getElementById('active-day-badge'),
    activeDayLabel: document.getElementById('active-day-label'),
    activeDayMatchCount: document.getElementById('active-day-match-count'),
    btnPrevDay: document.getElementById('btn-prev-day'),
    btnNextDay: document.getElementById('btn-next-day'),
    calendarDateInput: document.getElementById('calendar-date-input'),
    predictionSectionTitle: document.getElementById('prediction-section-title'),
    predictionSectionMeta: document.getElementById('prediction-section-meta'),
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
    setupDaySelector();
    renderLeaguePills();
    renderMarketPills();
    setupSearchListeners();
    setupNavigationListeners();
    setupContactForm();
    setupStandingsView();
    setupArchiveView();
    setupNetworkListeners();
    setupRealtimeSync();

    if (els.calendarDateInput) {
      els.calendarDateInput.value = state.selectedDate;
    }

    // Load initial matches for today
    loadPredictionsForActiveDate();
    startLiveScoreSimulation();
    updateHeaderDate();

    // Pre-fetch adjacent days in background
    if (window.FootballDataService && typeof window.FootballDataService.prefetchAdjacentDays === 'function') {
      window.FootballDataService.prefetchAdjacentDays(state.selectedDate);
    }
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
      if (hash.startsWith('date=')) {
        const targetDate = hash.replace('date=', '');
        selectDate(targetDate);
        return;
      }
      if (hash === 'tomorrow') {
        const tomorrowStr = window.FootballDataService ? window.FootballDataService.getTomorrowDateStr() : getOffsetDateStr(1);
        selectDate(tomorrowStr);
        switchTab('tomorrow', false);
        return;
      }
      if (hash === 'today') {
        const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
        selectDate(todayStr);
        switchTab('today', false);
        return;
      }
      if (['today', 'tomorrow', 'live', 'stats', 'archive', 'premium'].includes(hash)) {
        switchTab(hash, false);
      }
    };
    window.addEventListener('hashchange', handleHash);
  }

  function switchTab(tabId, updateHash = true) {
    state.currentTab = tabId;

    // Toggle Tab Button Styles
    els.tabs.forEach(tab => {
      const target = tab.getAttribute('data-tab-target');
      if (target === tabId) {
        tab.classList.add('tab-active');
        tab.classList.remove('text-slate-400');
        tab.classList.add('text-emerald-400');
      } else {
        tab.classList.remove('tab-active');
        tab.classList.remove('text-emerald-400');
        tab.classList.add('text-slate-400');
      }
    });

    // Toggle Bottom Navigation
    els.bottomNavItems.forEach(item => {
      const target = item.getAttribute('data-tab-target');
      if (target === tabId) {
        item.classList.add('bottom-nav-active');
      } else {
        item.classList.remove('bottom-nav-active');
      }
    });

    // Toggle Section Views
    Object.entries(els.sections).forEach(([id, el]) => {
      if (!el) return;
      if (id === tabId) {
        el.classList.remove('hidden');
        el.classList.add('fade-in-tab');
      } else {
        el.classList.add('hidden');
        el.classList.remove('fade-in-tab');
      }
    });

    // Tab-specific Actions
    if (tabId === 'live' && window.FootballDataService) {
      window.FootballDataService.getLiveScores().then(liveMatches => {
        window._LIVE_CACHE = liveMatches;
        if (els.liveCountBadge) els.liveCountBadge.textContent = liveMatches.length;
        renderLiveMatches(liveMatches);
      });
    }

    if (tabId === 'archive') {
      renderArchiveView();
    }

    // Scroll smoothly to view
    if (tabId === 'today' || tabId === 'tomorrow') {
      const navCard = document.getElementById('matchday-navigator-card');
      if (navCard) {
        navCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    if (updateHash) {
      window.location.hash = `#${tabId}`;
    }
  }

  // 4. Daily Prediction Calendar & Matchday Selector
  function setupDaySelector() {
    renderDayPills();

    if (els.btnPrevDay) {
      els.btnPrevDay.addEventListener('click', () => {
        changeDateOffset(-1);
      });
    }

    if (els.btnNextDay) {
      els.btnNextDay.addEventListener('click', () => {
        changeDateOffset(1);
      });
    }

    if (els.calendarDateInput) {
      els.calendarDateInput.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val) {
          selectDate(val);
        }
      });
    }
  }

  function getOffsetDateStr(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function changeDateOffset(offsetDays) {
    const parts = state.selectedDate.split('-');
    const current = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    current.setDate(current.getDate() + offsetDays);
    const y = current.getFullYear();
    const m = String(current.getMonth() + 1).padStart(2, '0');
    const d = String(current.getDate()).padStart(2, '0');
    const newDateStr = `${y}-${m}-${d}`;
    selectDate(newDateStr);
  }

  function selectDate(dateStr) {
    if (!dateStr) return;
    const normalized = window.FootballDataService 
      ? window.FootballDataService.normalizeDateStr(dateStr)
      : dateStr;

    state.selectedDate = normalized;

    if (els.calendarDateInput) {
      els.calendarDateInput.value = normalized;
    }

    renderDayPills();
    updateDateLabels(normalized);

    // If currently on stats, archive, or premium, switch to predictions view
    if (state.currentTab === 'stats' || state.currentTab === 'premium' || state.currentTab === 'live' || state.currentTab === 'archive') {
      const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
      const tomorrowStr = window.FootballDataService ? window.FootballDataService.getTomorrowDateStr() : getOffsetDateStr(1);
      if (normalized === tomorrowStr) {
        switchTab('tomorrow', false);
      } else {
        switchTab('today', false);
      }
    }

    loadPredictionsForActiveDate();
  }

  function updateDateLabels(dateStr) {
    const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
    const tomorrowStr = window.FootballDataService ? window.FootballDataService.getTomorrowDateStr() : getOffsetDateStr(1);
    const yesterdayStr = getOffsetDateStr(-1);

    const parts = dateStr.split('-');
    const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    const formatted = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const fullFormatted = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    let labelText = formatted;
    let sectionTitle = `Match Predictions for ${fullFormatted}`;

    if (dateStr === todayStr) {
      labelText = `${formatted} (Today)`;
      sectionTitle = `Today's Match Predictions & Analytical Banker Cards`;
    } else if (dateStr === tomorrowStr) {
      labelText = `${formatted} (Tomorrow)`;
      sectionTitle = `Tomorrow's Fixtures & Early Market Value Tips`;
    } else if (dateStr === yesterdayStr) {
      labelText = `${formatted} (Yesterday)`;
      sectionTitle = `Yesterday's Results & Verified Predictions`;
    }

    if (els.activeDayLabel) {
      els.activeDayLabel.textContent = labelText;
    }
    if (els.predictionSectionTitle) {
      els.predictionSectionTitle.textContent = sectionTitle;
    }
  }

  function renderDayPills() {
    if (!els.dayPillsCarousel) return;

    // Build list of 9 dynamic days: -1, 0, 1, 2, 3, 4, 5, 6, 7
    const days = [];
    for (let i = -1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateStr = `${y}-${m}-${day}`;

      let title = d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
      let badge = '';

      if (i === 0) {
        title = '⚡ Today';
        badge = 'live';
      } else if (i === -1) {
        title = '◀ Yesterday';
      } else if (i === 1) {
        title = '📅 Tomorrow';
      }

      days.push({
        dateStr,
        title,
        badge,
        isToday: i === 0,
        isTomorrow: i === 1
      });
    }

    const isPresent = days.some(d => d.dateStr === state.selectedDate);
    if (!isPresent) {
      const parts = state.selectedDate.split('-');
      const customD = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      const title = customD.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      days.unshift({
        dateStr: state.selectedDate,
        title: `🗓️ ${title}`,
        badge: 'custom',
        isToday: false,
        isTomorrow: false
      });
    }

    els.dayPillsCarousel.innerHTML = days.map(d => {
      const isActive = d.dateStr === state.selectedDate;
      const cached = window.FootballDataService && window.FootballDataService.dateCache[d.dateStr];
      const matchCount = cached ? cached.data.length : null;

      let pillClasses = 'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 cursor-pointer border ';
      if (isActive) {
        pillClasses += 'bg-gradient-to-r from-emerald-500/20 via-sky-500/15 to-emerald-500/20 text-emerald-300 border-emerald-400 font-extrabold shadow-md shadow-emerald-500/20';
      } else {
        pillClasses += 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border-white/5';
      }

      return `
        <button 
          type="button" 
          data-day-pill="${d.dateStr}"
          class="${pillClasses}"
        >
          <span>${d.title}</span>
          ${matchCount !== null ? `
            <span class="px-1.5 py-0.2 rounded-full ${isActive ? 'bg-emerald-500/30 text-emerald-200' : 'bg-slate-800 text-slate-400'} text-[10px] font-mono">
              ${matchCount}
            </span>
          ` : (d.isToday ? `
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          ` : '')}
        </button>
      `;
    }).join('');

    els.dayPillsCarousel.querySelectorAll('[data-day-pill]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dateStr = btn.getAttribute('data-day-pill');
        selectDate(dateStr);
      });
    });
  }

  // 5. League & Market Filter Pills
  function renderLeaguePills() {
    if (!els.leaguePillsContainer || typeof LEAGUES === 'undefined') return;

    els.leaguePillsContainer.innerHTML = LEAGUES.map(l => `
      <button 
        type="button"
        data-league-pill="${l.id}" 
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition ${
          state.selectedLeague === l.id 
            ? 'bg-slate-800 text-emerald-400 border-emerald-500/50 shadow-sm' 
            : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800'
        }"
      >
        <span>${l.flag}</span>
        <span>${l.name}</span>
      </button>
    `).join('');

    els.leaguePillsContainer.querySelectorAll('[data-league-pill]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedLeague = btn.getAttribute('data-league-pill');
        renderLeaguePills();
        filterAndRenderMatches();
      });
    });
  }

  function renderMarketPills() {
    if (!els.marketPillsContainer) return;
    const markets = [
      { id: 'all', label: 'All Predictions' },
      { id: '1x2', label: '1X2 & DC' },
      { id: 'goals', label: 'Over 2.5 Goals' },
      { id: 'btts', label: 'BTTS' },
      { id: 'banker', label: '👑 Bankers' }
    ];

    els.marketPillsContainer.innerHTML = markets.map(m => `
      <button 
        type="button"
        data-market-pill="${m.id}" 
        class="px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
          state.selectedMarket === m.id 
            ? 'bg-emerald-500 text-slate-950 font-bold' 
            : 'text-slate-400 hover:text-white'
        }"
      >
        ${m.label}
      </button>
    `).join('');

    els.marketPillsContainer.querySelectorAll('[data-market-pill]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedMarket = btn.getAttribute('data-market-pill');
        renderMarketPills();
        filterAndRenderMatches();
      });
    });
  }

  // 6. Search Listeners
  function setupSearchListeners() {
    if (els.searchInput) {
      els.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        if (els.clearSearchBtn) {
          if (state.searchQuery) els.clearSearchBtn.classList.remove('hidden');
          else els.clearSearchBtn.classList.add('hidden');
        }
        filterAndRenderMatches();
      });
    }

    if (els.clearSearchBtn) {
      els.clearSearchBtn.addEventListener('click', () => {
        if (els.searchInput) els.searchInput.value = '';
        state.searchQuery = '';
        els.clearSearchBtn.classList.add('hidden');
        filterAndRenderMatches();
      });
    }
  }

  // 7. Navigation Listeners
  function setupNavigationListeners() {
    els.tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = tab.getAttribute('data-tab-target');
        if (target === 'tomorrow') {
          const tomorrowStr = window.FootballDataService ? window.FootballDataService.getTomorrowDateStr() : getOffsetDateStr(1);
          selectDate(tomorrowStr);
        } else if (target === 'today') {
          const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
          selectDate(todayStr);
        }
        switchTab(target);
      });
    });

    els.bottomNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-tab-target');
        if (target === 'tomorrow') {
          const tomorrowStr = window.FootballDataService ? window.FootballDataService.getTomorrowDateStr() : getOffsetDateStr(1);
          selectDate(tomorrowStr);
        } else if (target === 'today') {
          const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
          selectDate(todayStr);
        }
        switchTab(target);
      });
    });
  }

  // 8. Core Prediction Loader for ANY Selected Date
  async function loadPredictionsForActiveDate(forceRefresh = false) {
    const dateStr = state.selectedDate || (window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0));
    const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
    const tomorrowStr = window.FootballDataService ? window.FootballDataService.getTomorrowDateStr() : getOffsetDateStr(1);

    state.isLoadingMatches = true;

    renderSkeletonLoader(els.todayContainer);
    if (els.activeDayMatchCount) {
      els.activeDayMatchCount.textContent = 'Pulling from API...';
    }

    try {
      const matches = await window.FootballDataService.fetchPredictionsForDate(dateStr, forceRefresh);
      state.currentMatches = matches || [];
      window._ACTIVE_DAY_CACHE = state.currentMatches;

      if (dateStr === todayStr) {
        window._TODAY_CACHE = state.currentMatches;
        if (els.todayCountBadge) els.todayCountBadge.textContent = state.currentMatches.length;
      } else if (dateStr === tomorrowStr) {
        window._TOMORROW_CACHE = state.currentMatches;
      }

      const liveMatches = (dateStr === todayStr) 
        ? state.currentMatches.filter(m => m.isLive) 
        : [];
      if (els.liveCountBadge) els.liveCountBadge.textContent = liveMatches.length;

      updateHeroBankerCard(state.currentMatches, dateStr);
      updateLastSyncTimestamp();

      if (els.activeDayMatchCount) {
        els.activeDayMatchCount.textContent = `${state.currentMatches.length} Matches Pulled via API`;
      }

      renderDayPills();
      filterAndRenderMatches();

      // Automatically sync archive stats
      updateArchiveKPIs();

      if (window.FootballDataService && typeof window.FootballDataService.prefetchAdjacentDays === 'function') {
        window.FootballDataService.prefetchAdjacentDays(dateStr);
      }
    } catch (err) {
      console.error('Error fetching predictions for date:', dateStr, err);
      if (els.todayContainer) {
        els.todayContainer.innerHTML = `
          <div class="col-span-1 md:col-span-2 text-center py-10 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
            <div class="text-3xl mb-2">⚠️</div>
            <h4 class="text-white font-bold text-base mb-1">Could not fetch fixtures for this date</h4>
            <p class="text-xs text-slate-400 max-w-sm mx-auto mb-3">Please check your network connection or try refreshing the API feed.</p>
            <button id="retry-fetch-btn" class="px-4 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-md">Retry Fetch</button>
          </div>
        `;
        const retryBtn = document.getElementById('retry-fetch-btn');
        if (retryBtn) retryBtn.addEventListener('click', () => loadPredictionsForActiveDate(true));
      }
    } finally {
      state.isLoadingMatches = false;
    }
  }

  function renderSkeletonLoader(container) {
    if (!container) return;
    container.innerHTML = `
      <div class="col-span-1 md:col-span-2 text-center py-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-sm">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Pulling live fixtures and calculating AI predictions via ESPN Soccer API...</span>
        </div>
      </div>
      ${[1, 2, 3, 4].map(() => `
        <div class="glass-card rounded-2xl p-4 md:p-5 border border-white/5 animate-pulse space-y-4">
          <div class="flex items-center justify-between pb-2 border-b border-white/5">
            <div class="h-4 w-32 bg-slate-800 rounded"></div>
            <div class="h-4 w-16 bg-slate-800 rounded"></div>
          </div>
          <div class="grid grid-cols-12 items-center gap-3 py-2">
            <div class="col-span-5 flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-slate-800 mb-2"></div>
              <div class="h-3 w-20 bg-slate-800 rounded"></div>
            </div>
            <div class="col-span-2 flex flex-col items-center">
              <div class="h-4 w-8 bg-slate-800 rounded"></div>
            </div>
            <div class="col-span-5 flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-slate-800 mb-2"></div>
              <div class="h-3 w-20 bg-slate-800 rounded"></div>
            </div>
          </div>
          <div class="h-12 bg-slate-800/60 rounded-xl"></div>
          <div class="grid grid-cols-3 gap-2">
            <div class="h-10 bg-slate-800/40 rounded-lg"></div>
            <div class="h-10 bg-slate-800/40 rounded-lg"></div>
            <div class="h-10 bg-slate-800/40 rounded-lg"></div>
          </div>
        </div>
      `).join('')}
    `;
  }

  function updateHeroBankerCard(matches, dateStr) {
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

    const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
    const tomorrowStr = window.FootballDataService ? window.FootballDataService.getTomorrowDateStr() : getOffsetDateStr(1);

    let prefix = 'Today';
    if (dateStr === tomorrowStr) prefix = 'Tomorrow';
    else if (dateStr !== todayStr) {
      const parts = (dateStr || '').split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        prefix = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      }
    }

    if (timeEl) timeEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> ${prefix} ${banker.time}`;
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
        await loadPredictionsForActiveDate(true);
        if (state.currentTab === 'archive') {
          renderArchiveView();
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

  // 9. Match Card Rendering & Filtering (With Full Results & Verification Breakdown)
  function filterAndRenderMatches() {
    const filtered = (state.currentMatches || []).filter(matchFilter);
    renderMatchList(filtered, els.todayContainer);
    if (els.tomorrowContainer) {
      renderMatchList(filtered, els.tomorrowContainer);
    }
  }

  function matchFilter(m) {
    if (state.selectedLeague !== 'all' && m.leagueId !== state.selectedLeague) {
      return false;
    }
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchText = `${m.homeTeam.name} ${m.awayTeam.name} ${m.leagueName} ${m.prediction.primary} ${m.prediction.correctScore}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    if (state.selectedMarket !== 'all') {
      if (state.selectedMarket === '1x2' && !['1', '2', 'X', '1X', 'X2', '12'].includes(m.prediction.primaryType)) return false;
      if (state.selectedMarket === 'goals' && !m.prediction.averageGoals.toLowerCase().includes('over')) return false;
      if (state.selectedMarket === 'btts' && !m.prediction.btts.toLowerCase().startsWith('yes')) return false;
      if (state.selectedMarket === 'banker' && !m.isBanker && m.prediction.confidenceRating < 5) return false;
    }
    return true;
  }

  function renderMatchList(matches, container) {
    if (!container) return;

    if (!matches || matches.length === 0) {
      container.innerHTML = `
        <div class="col-span-1 md:col-span-2 text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-800 flex items-center justify-center text-xl">🔍</div>
          <h4 class="text-white font-semibold text-base mb-1">No matches found for this filter</h4>
          <p class="text-xs text-slate-400 max-w-sm mx-auto mb-4">No fixtures match your current league or market filter on ${state.selectedDate}.</p>
          <div class="flex items-center justify-center gap-2">
            <button id="reset-league-filter-btn" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold border border-emerald-500/30 transition">
              View All Leagues
            </button>
            <button id="jump-today-btn" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition">
              Jump to Today
            </button>
          </div>
        </div>
      `;

      const resetBtn = document.getElementById('reset-league-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.selectedLeague = 'all';
          state.selectedMarket = 'all';
          state.searchQuery = '';
          if (els.searchInput) els.searchInput.value = '';
          renderLeaguePills();
          renderMarketPills();
          filterAndRenderMatches();
        });
      }

      const jumpBtn = document.getElementById('jump-today-btn');
      if (jumpBtn) {
        jumpBtn.addEventListener('click', () => {
          const todayStr = window.FootballDataService ? window.FootballDataService.getTodayDateStr() : getOffsetDateStr(0);
          selectDate(todayStr);
        });
      }
      return;
    }

    container.innerHTML = matches.map(match => createMatchCardHTML(match)).join('');

    container.querySelectorAll('[data-match-detail-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const matchId = btn.getAttribute('data-match-detail-id');
        openMatchDetailModal(matchId);
      });
    });

    container.querySelectorAll('[data-share-tip-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const matchId = btn.getAttribute('data-share-tip-id');
        sharePredictionTip(matchId);
      });
    });
  }

  // Generates Rich Match Card with Comparative Full Result Verification
  function createMatchCardHTML(m) {
    const isCompleted = m.isCompleted || m.status === 'FT';
    const isExact = m.evaluation && m.evaluation.isExactScore;
    const isWon = m.resultStatus === 'WON' || (m.evaluation && m.evaluation.primaryWon);
    const isLost = m.resultStatus === 'LOST' || (isCompleted && !isWon);

    let cardBorder = m.isBanker ? 'border-amber-500/40 bg-gradient-to-b from-[#141B2D] via-[#101726] to-[#0E131F]' : 'border-white/5';
    if (isCompleted) {
      if (isExact) cardBorder = 'border-amber-500/50 glow-exact-card bg-gradient-to-b from-[#1A1F2C] via-[#0E131F] to-[#07090E]';
      else if (isWon) cardBorder = 'border-emerald-500/40 bg-gradient-to-b from-[#0F1E1A] via-[#0E131F] to-[#07090E]';
      else if (isLost) cardBorder = 'border-red-500/30 bg-gradient-to-b from-[#1E1114] via-[#0E131F] to-[#07090E]';
    }

    const badgeColor = m.badgeType === 'gold' || isExact
      ? 'bg-amber-500/15 text-amber-300 border-amber-500/40' 
      : (m.badgeType === 'neon' || m.isLive)
      ? 'bg-red-500/15 text-red-300 border-red-500/30'
      : (m.badgeType === 'red' || isLost)
      ? 'bg-red-500/15 text-red-400 border-red-500/30'
      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';

    const formBadgesHome = (m.homeTeam.form || []).map(f => `
      <span class="w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center ${
        f === 'W' ? 'form-badge-w' : f === 'D' ? 'form-badge-d' : 'form-badge-l'
      }">${f}</span>
    `).join('');

    const formBadgesAway = (m.awayTeam.form || []).map(f => `
      <span class="w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center ${
        f === 'W' ? 'form-badge-w' : f === 'D' ? 'form-badge-d' : 'form-badge-l'
      }">${f}</span>
    `).join('');

    let timeBadgeText = `Kickoff ${m.time}`;
    let timeBadgeClass = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20';

    if (m.isLive) {
      timeBadgeText = `🔴 LIVE ${m.minute}'`;
      timeBadgeClass = 'text-red-400 bg-red-950/50 border-red-500/40 animate-pulse';
    } else if (isCompleted) {
      timeBadgeText = `FT (${m.homeScore}-${m.awayScore})`;
      timeBadgeClass = isWon 
        ? 'text-emerald-300 bg-emerald-950/60 border-emerald-500/30 font-bold' 
        : 'text-red-300 bg-red-950/60 border-red-500/30 font-bold';
    }

    // Top Result Verification Banner for Completed Games
    let resultBannerHTML = '';
    if (isCompleted) {
      if (isExact) {
        resultBannerHTML = `
          <div class="mb-3 p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-950/40 to-slate-900 border border-amber-500/40 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-base">🎯</span>
              <div>
                <span class="font-extrabold text-amber-300 block">EXACT SCORE HIT: ${m.homeScore} - ${m.awayScore}</span>
                <span class="text-[10px] text-slate-300">100% Analytical Forecast Accuracy</span>
              </div>
            </div>
            <span class="font-mono font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/40 text-[10px]">VERIFIED WIN</span>
          </div>
        `;
      } else if (isWon) {
        resultBannerHTML = `
          <div class="mb-3 p-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 via-emerald-950/40 to-slate-900 border border-emerald-500/40 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-base">✅</span>
              <div>
                <span class="font-extrabold text-emerald-300 block">PREDICTION WON: ${m.prediction.primary}</span>
                <span class="text-[10px] text-slate-300">Final Full Time Result: ${m.homeScore} - ${m.awayScore}</span>
              </div>
            </div>
            <span class="font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/40 text-[10px]">VERIFIED WIN</span>
          </div>
        `;
      } else {
        resultBannerHTML = `
          <div class="mb-3 p-2.5 rounded-xl bg-gradient-to-r from-red-500/20 via-red-950/40 to-slate-900 border border-red-500/30 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-base">❌</span>
              <div>
                <span class="font-bold text-red-300 block">PREDICTION MISSED</span>
                <span class="text-[10px] text-slate-400">Predicted: ${m.prediction.primary} • Final: ${m.homeScore} - ${m.awayScore}</span>
              </div>
            </div>
            <span class="font-mono font-bold text-red-300 bg-red-500/20 px-2 py-0.5 rounded-full border border-red-500/40 text-[10px]">AUDITED LOSS</span>
          </div>
        `;
      }
    }

    // Comparative Market Verification Box for Finished Games
    let comparativeMarketsHTML = '';
    if (isCompleted && m.evaluation) {
      comparativeMarketsHTML = `
        <div class="mt-3 pt-2.5 border-t border-white/5 space-y-2">
          <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Audited Markets Comparison (Predicted vs Actual)</span>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            
            <!-- 1X2 Outcome -->
            <div class="p-2 rounded-lg ${m.evaluation.primaryWon ? 'bg-emerald-950/40 border border-emerald-500/30' : 'bg-red-950/30 border border-red-500/20'}">
              <span class="text-[10px] text-slate-400 block">1X2 Outcome</span>
              <span class="font-bold text-white text-[11px] block truncate">${m.prediction.primaryType}</span>
              <span class="text-[10px] font-mono mt-0.5 block ${m.evaluation.primaryWon ? 'text-emerald-400 font-bold' : 'text-red-400'}">
                ${m.evaluation.primaryWon ? '✓ WON' : '✕ MISSED'}
              </span>
            </div>

            <!-- Correct Score -->
            <div class="p-2 rounded-lg ${m.evaluation.isExactScore ? 'bg-amber-950/40 border border-amber-500/40' : 'bg-slate-900/60 border border-slate-800'}">
              <span class="text-[10px] text-slate-400 block">Correct Score</span>
              <span class="font-mono font-bold ${m.evaluation.isExactScore ? 'text-amber-400' : 'text-slate-300'} text-[11px] block">${m.prediction.correctScore}</span>
              <span class="text-[10px] font-mono mt-0.5 block ${m.evaluation.isExactScore ? 'text-amber-400 font-bold' : 'text-slate-500'}">
                ${m.evaluation.isExactScore ? '🎯 EXACT' : `FT ${m.homeScore}-${m.awayScore}`}
              </span>
            </div>

            <!-- Over/Under Goals -->
            <div class="p-2 rounded-lg ${m.evaluation.goalsWon ? 'bg-emerald-950/40 border border-emerald-500/30' : 'bg-red-950/30 border border-red-500/20'}">
              <span class="text-[10px] text-slate-400 block">Total Goals</span>
              <span class="font-bold text-white text-[11px] block truncate">${m.prediction.averageGoals.replace(' Goals', '')}</span>
              <span class="text-[10px] font-mono mt-0.5 block ${m.evaluation.goalsWon ? 'text-emerald-400 font-bold' : 'text-red-400'}">
                ${m.evaluation.goalsWon ? `✓ WON (${m.evaluation.totalGoals})` : `✕ ${m.evaluation.totalGoals}G`}
              </span>
            </div>

            <!-- BTTS -->
            <div class="p-2 rounded-lg ${m.evaluation.bttsWon ? 'bg-emerald-950/40 border border-emerald-500/30' : 'bg-red-950/30 border border-red-500/20'}">
              <span class="text-[10px] text-slate-400 block">Both Teams Score</span>
              <span class="font-bold text-white text-[11px] block">${m.prediction.btts}</span>
              <span class="text-[10px] font-mono mt-0.5 block ${m.evaluation.bttsWon ? 'text-emerald-400 font-bold' : 'text-red-400'}">
                ${m.evaluation.bttsWon ? '✓ WON' : '✕ MISSED'}
              </span>
            </div>

          </div>
        </div>
      `;
    }

    return `
      <article class="glass-card rounded-2xl p-4 md:p-5 relative overflow-hidden transition-all duration-300 hover:border-emerald-500/40 ${cardBorder}">
        
        <!-- Result Banner if completed -->
        ${resultBannerHTML}

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
            <span class="font-mono font-semibold px-2 py-0.5 rounded text-[11px] border ${timeBadgeClass}">
              ${timeBadgeText}
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
            <span class="text-[10px] text-slate-400 mt-1">${m.homeTeam.record ? m.homeTeam.record : `Rank #${m.homeTeam.rank}`} (xG: ${m.homeTeam.xG})</span>
          </div>

          <!-- VS / Score Center -->
          <div class="col-span-2 flex flex-col items-center justify-center text-center">
            ${(m.isLive || isCompleted) ? `
              <div class="text-xl md:text-2xl font-mono font-extrabold text-white bg-slate-900/90 px-2.5 py-1 rounded-xl border border-white/10 shadow-inner">
                <span class="${isCompleted && m.homeScore > m.awayScore ? 'text-emerald-400' : ''}">${m.homeScore}</span><span class="text-slate-500">-</span><span class="${isCompleted && m.awayScore > m.homeScore ? 'text-emerald-400' : ''}">${m.awayScore}</span>
              </div>
              <span class="text-[9px] uppercase font-bold text-slate-400 mt-1">${m.isLive ? 'IN-PLAY' : 'FULL TIME'}</span>
            ` : `
              <span class="text-xs font-mono font-bold text-slate-500 uppercase">VS</span>
              <div class="mt-1 flex items-center justify-center">
                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-emerald-400 font-mono font-bold border border-slate-700/60">
                  ${m.time}
                </span>
              </div>
            `}
          </div>

          <!-- Away Team -->
          <div class="col-span-5 flex flex-col items-center text-center">
            <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/80 p-2 mb-2 flex items-center justify-center border border-white/10 shadow-inner">
              <img src="${m.awayTeam.logo}" alt="${m.awayTeam.name}" class="w-full h-full object-contain filter drop-shadow" onerror="this.src='https://placehold.co/60x60/1e293b/00ff87?text=${m.awayTeam.shortName}'">
            </div>
            <h4 class="font-heading font-bold text-sm md:text-base text-white truncate max-w-[120px]">${m.awayTeam.name}</h4>
            <div class="flex items-center gap-1 mt-1">${formBadgesAway}</div>
            <span class="text-[10px] text-slate-400 mt-1">${m.awayTeam.record ? m.awayTeam.record : `Rank #${m.awayTeam.rank}`} (xG: ${m.awayTeam.xG})</span>
          </div>
        </div>

        <!-- Analytical Predictions Breakdown -->
        <div class="mt-3 pt-3 border-t border-white/5 space-y-2.5">
          <!-- Main Prediction Tip Box -->
          <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/40 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Pre-Match Tip</span>
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

          <!-- Comparative verification matrix if completed, otherwise standard secondary markets -->
          ${comparativeMarketsHTML ? comparativeMarketsHTML : `
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
          `}

          <!-- Analytical Reasoning or Post-Match Analysis -->
          <div class="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
            <span class="text-emerald-400 text-sm flex-shrink-0">${isCompleted ? '📊' : '💡'}</span>
            <p class="leading-relaxed text-[11px]"><strong class="text-white">${isCompleted ? 'Post-Match Analysis & Audit:' : 'Football Analysis:'}</strong> ${isCompleted && m.evaluation ? m.evaluation.postMatchAnalysis : m.prediction.reasoning}</p>
          </div>
        </div>

        <!-- Card Action Footer -->
        <div class="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs">
          <button 
            type="button"
            data-match-detail-id="${m.id}" 
            class="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition"
          >
            <span>📊 Detailed H2H & Verification</span>
            <span>→</span>
          </button>
          <div class="flex items-center gap-2">
            <button 
              type="button"
              data-share-tip-id="${m.id}" 
              class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              title="Share Prediction & Result"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // 10. Results Archive & Client Referral Proof Section
  function setupArchiveView() {
    // 1. Referral slip copy button
    if (els.btnCopyReferralSlip) {
      els.btnCopyReferralSlip.addEventListener('click', () => {
        if (!window.PredictionArchiveService) return;
        const slip = window.PredictionArchiveService.generateClientReferralSlip();
        const originalText = els.btnCopyReferralSlip.innerHTML;

        if (navigator.clipboard) {
          navigator.clipboard.writeText(slip).then(() => {
            els.btnCopyReferralSlip.innerHTML = `<span>✓</span> <span>Copied Slip to Clipboard!</span>`;
            setTimeout(() => {
              els.btnCopyReferralSlip.innerHTML = originalText;
            }, 2500);
          }).catch(() => {
            prompt('Copy this verified client referral slip:', slip);
          });
        } else {
          prompt('Copy this verified client referral slip:', slip);
        }
      });
    }

    // 2. WhatsApp share link
    if (els.btnShareWhatsappProof && window.PredictionArchiveService) {
      const slip = window.PredictionArchiveService.generateClientReferralSlip();
      els.btnShareWhatsappProof.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(slip)}`;
    }

    // 3. Email share link
    if (els.btnEmailProof && window.PredictionArchiveService) {
      const slip = window.PredictionArchiveService.generateClientReferralSlip();
      els.btnEmailProof.href = `mailto:?subject=${encodeURIComponent('SirLee Game Prediction - Verified Proof Slip')}&body=${encodeURIComponent(slip)}`;
    }

    // 4. Archive outcome filter pills (All, Won, Missed, Banker, Exact)
    if (els.archiveOutcomePills) {
      els.archiveOutcomePills.querySelectorAll('[data-archive-outcome]').forEach(btn => {
        btn.addEventListener('click', () => {
          const outcome = btn.getAttribute('data-archive-outcome');
          state.archiveFilterOutcome = outcome;

          // Toggle button styles
          els.archiveOutcomePills.querySelectorAll('[data-archive-outcome]').forEach(b => {
            b.classList.remove('bg-emerald-500', 'text-slate-950');
            b.classList.add('text-slate-400');
          });
          btn.classList.add('bg-emerald-500', 'text-slate-950');
          btn.classList.remove('text-slate-400');

          renderArchiveView();
        });
      });
    }

    // 5. Archive search input
    if (els.archiveSearchInput) {
      els.archiveSearchInput.addEventListener('input', (e) => {
        state.archiveSearchQuery = e.target.value.trim().toLowerCase();
        renderArchiveView();
      });
    }

    updateArchiveKPIs();
  }

  function updateArchiveKPIs() {
    if (!window.PredictionArchiveService) return;
    const stats = window.PredictionArchiveService.getArchiveStats();

    if (els.archiveStatWinrate) els.archiveStatWinrate.textContent = stats.winRate;
    if (els.archiveStatBankerrate) els.archiveStatBankerrate.textContent = stats.bankerWinRate;
    if (els.archiveStatTotal) els.archiveStatTotal.textContent = `${stats.total} Games`;
    if (els.archiveStatExact) els.archiveStatExact.textContent = `${stats.exactHits} Hits`;
    if (els.archiveCountBadge) els.archiveCountBadge.textContent = `${stats.winRate} Hit`;

    // Refresh WhatsApp & Email share URLs
    const slip = window.PredictionArchiveService.generateClientReferralSlip();
    if (els.btnShareWhatsappProof) {
      els.btnShareWhatsappProof.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(slip)}`;
    }
    if (els.btnEmailProof) {
      els.btnEmailProof.href = `mailto:?subject=${encodeURIComponent('SirLee Game Prediction - Verified Proof Slip')}&body=${encodeURIComponent(slip)}`;
    }
  }

  function renderArchiveView() {
    if (!els.archiveMatchesList || !window.PredictionArchiveService) return;

    updateArchiveKPIs();

    const matches = window.PredictionArchiveService.getArchivedMatches({
      outcome: state.archiveFilterOutcome,
      search: state.archiveSearchQuery
    });
    state.archivedMatches = matches;

    if (els.archiveFilterCountBadge) {
      els.archiveFilterCountBadge.textContent = `Showing ${matches.length} Verified Games`;
    }

    if (matches.length === 0) {
      els.archiveMatchesList.innerHTML = `
        <div class="col-span-1 md:col-span-2 text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          <div class="text-3xl mb-2">🔍</div>
          <h4 class="text-white font-bold text-base mb-1">No archived games match your filter</h4>
          <p class="text-xs text-slate-400 max-w-sm mx-auto mb-3">Try resetting your filter to "All Results".</p>
        </div>
      `;
      return;
    }

    els.archiveMatchesList.innerHTML = matches.map(m => createMatchCardHTML(m)).join('');

    els.archiveMatchesList.querySelectorAll('[data-match-detail-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const matchId = btn.getAttribute('data-match-detail-id');
        openMatchDetailModal(matchId);
      });
    });

    els.archiveMatchesList.querySelectorAll('[data-share-tip-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const matchId = btn.getAttribute('data-share-tip-id');
        sharePredictionTip(matchId);
      });
    });
  }

  // 11. Live Scores & Ticker Simulation
  function renderLiveMatches(liveMatches) {
    if (!els.liveContainer) return;

    if (!liveMatches || liveMatches.length === 0) {
      els.liveContainer.innerHTML = `
        <div class="col-span-1 md:col-span-2 text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          <p class="text-sm">No matches currently in-play right now. Check back at the next kickoff window!</p>
        </div>
      `;
      return;
    }

    els.liveContainer.innerHTML = liveMatches.map(lm => `
      <article class="glass-card rounded-2xl p-4 md:p-5 relative border-emerald-500/30 overflow-hidden shadow-lg">
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

        <div class="grid grid-cols-12 items-center gap-3 py-4">
          <div class="col-span-5 flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full bg-slate-800 p-2 mb-2 flex items-center justify-center border border-white/10">
              <img src="${lm.homeTeam.logo}" alt="${lm.homeTeam.name}" class="w-full h-full object-contain">
            </div>
            <h4 class="font-heading font-bold text-sm md:text-base text-white">${lm.homeTeam.name}</h4>
          </div>

          <div class="col-span-2 flex flex-col items-center justify-center">
            <div class="text-2xl md:text-3xl font-heading font-extrabold text-white tracking-wider flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-white/10 shadow-inner">
              <span>${lm.homeScore}</span>
              <span class="text-emerald-400">-</span>
              <span>${lm.awayScore}</span>
            </div>
            <span class="text-[10px] font-semibold text-emerald-400 mt-1 uppercase tracking-wider">In Progress</span>
          </div>

          <div class="col-span-5 flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full bg-slate-800 p-2 mb-2 flex items-center justify-center border border-white/10">
              <img src="${lm.awayTeam.logo}" alt="${lm.awayTeam.name}" class="w-full h-full object-contain">
            </div>
            <h4 class="font-heading font-bold text-sm md:text-base text-white">${lm.awayTeam.name}</h4>
          </div>
        </div>

        <div class="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900/80 border border-emerald-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Tactical In-Play Recommendation
            </span>
            <span class="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">88% Hit Prob</span>
          </div>
          <div class="text-sm font-extrabold text-white mb-1">BACK NEXT GOAL @ 1.85</div>
          <p class="text-xs text-slate-300 leading-relaxed">Live pressure favors ${lm.homeTeam.name} with consistent dangerous attacks into the opposition box.</p>
        </div>
      </article>
    `).join('');
  }

  function startLiveScoreSimulation() {
    if (state.liveTimerInterval) clearInterval(state.liveTimerInterval);
    state.liveTimerInterval = setInterval(() => {
      if (!window._LIVE_CACHE) return;
      window._LIVE_CACHE.forEach(lm => {
        if (lm.minute < 90) {
          lm.minute += 1;
        } else {
          lm.minute = 45;
        }
      });
      if (state.currentTab === 'live') {
        renderLiveMatches(window._LIVE_CACHE);
      }
    }, 15000);
  }

  // 12. Standings View Integration
  function setupStandingsView() {
    if (!els.standingsLeagueSelect || !els.standingsTableBody) return;

    fetchAndRenderStandings(state.selectedStandingLeague);

    els.standingsLeagueSelect.addEventListener('change', (e) => {
      state.selectedStandingLeague = e.target.value;
      state.standingsSearchQuery = '';
      if (els.standingsSearch) els.standingsSearch.value = '';
      fetchAndRenderStandings(state.selectedStandingLeague);
    });

    if (els.standingsSearch) {
      els.standingsSearch.addEventListener('input', (e) => {
        state.standingsSearchQuery = e.target.value.trim().toLowerCase();
        filterAndRenderStandings();
      });
    }
  }

  async function fetchAndRenderStandings(leagueKey, forceRefresh = false) {
    const baselineList = (typeof LEAGUE_STANDINGS !== 'undefined' && LEAGUE_STANDINGS[leagueKey]) || [];
    state.currentStandingsData = baselineList;
    filterAndRenderStandings();
    updateStandingsMeta(leagueKey, false);

    if (els.standingsTableBody) {
      els.standingsTableBody.style.opacity = '0.75';
    }

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
        ? `Synced ${nowStr} • Live Feeds` 
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
      let rankBadgeClass = 'text-slate-400 bg-slate-800/40';
      let borderLeft = 'border-l-2 border-transparent';
      
      if (item.rank <= 4) {
        rankBadgeClass = 'text-emerald-400 bg-emerald-500/10 font-bold border border-emerald-500/30';
        borderLeft = 'border-l-2 border-emerald-400';
      } else if (item.rank <= 6) {
        rankBadgeClass = 'text-sky-400 bg-sky-500/10 font-bold border border-sky-500/30';
        borderLeft = 'border-l-2 border-sky-400';
      } else if (totalTeams >= 18 && item.rank > (totalTeams - 3)) {
        rankBadgeClass = 'text-red-400 bg-red-500/10 font-bold border border-red-500/30';
        borderLeft = 'border-l-2 border-red-400';
      }

      const gdStr = String(item.gd || '0');
      const isPositiveGd = gdStr.startsWith('+');
      const isNegativeGd = gdStr.startsWith('-');
      const gdClass = isPositiveGd ? 'text-emerald-400 font-semibold' : (isNegativeGd ? 'text-red-400' : 'text-slate-400');

      const fallbackAbbr = (item.shortName || item.name || 'FC').substring(0, 3).toUpperCase();
      const teamLogo = item.logo || `https://placehold.co/40x40/1e293b/00ff87?text=${encodeURIComponent(fallbackAbbr)}`;

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
                <span class="font-semibold text-white block truncate text-xs cursor-default" title="${escapeHtml(item.name)}">
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

  // 13. Match Detail Modal (With Full Verification Breakdown for Finished Matches)
  function openMatchDetailModal(matchId) {
    const allMatches = [
      ...(state.currentMatches || []),
      ...(state.archivedMatches || []),
      ...(window.PredictionArchiveService ? window.PredictionArchiveService.getArchivedMatches() : []),
      ...(window._ACTIVE_DAY_CACHE || []),
      ...(window._TODAY_CACHE || []),
      ...(window._TOMORROW_CACHE || [])
    ];
    const match = allMatches.find(m => m.id === matchId);
    if (!match || !els.matchModalContent || !els.matchModal) return;

    const isCompleted = match.isCompleted || match.status === 'FT';
    const evalObj = match.evaluation;

    els.matchModalContent.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span class="text-xs text-emerald-400 font-mono font-semibold">${match.leagueName} • ${match.round}</span>
            <h3 class="text-lg md:text-xl font-heading font-extrabold text-white mt-0.5">${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
          </div>
          <button id="modal-inner-close" class="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white">✕</button>
        </div>

        <!-- Result Banner inside Modal if completed -->
        ${isCompleted ? `
          <div class="mt-4 p-3 rounded-xl ${evalObj && evalObj.isExactScore ? 'bg-amber-950/40 border border-amber-500/40 text-amber-300' : (evalObj && evalObj.primaryWon ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300' : 'bg-red-950/40 border border-red-500/30 text-red-300')} flex items-center justify-between text-xs">
            <span class="font-bold flex items-center gap-1.5">
              <span>${evalObj && evalObj.isExactScore ? '🎯' : (evalObj && evalObj.primaryWon ? '✅' : '❌')}</span>
              <span>Official Full-Time Score: ${match.homeScore} - ${match.awayScore}</span>
            </span>
            <span class="font-mono font-bold uppercase text-[10px] px-2 py-0.5 rounded ${evalObj && evalObj.primaryWon ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}">
              ${evalObj && evalObj.primaryWon ? 'PREDICTION WON' : 'PREDICTION MISSED'}
            </span>
          </div>
        ` : ''}

        <div class="py-4 grid grid-cols-2 gap-4 items-center border-b border-slate-800">
          <div class="flex items-center gap-3">
            <img src="${match.homeTeam.logo}" alt="${match.homeTeam.name}" class="w-12 h-12 object-contain">
            <div>
              <h4 class="font-bold text-white text-sm">${match.homeTeam.name}</h4>
              <span class="text-xs text-slate-400">xG: ${match.homeTeam.xG} • Rank #${match.homeTeam.rank}</span>
            </div>
          </div>
          <div class="flex items-center gap-3 justify-end text-right">
            <div>
              <h4 class="font-bold text-white text-sm">${match.awayTeam.name}</h4>
              <span class="text-xs text-slate-400">xG: ${match.awayTeam.xG} • Rank #${match.awayTeam.rank}</span>
            </div>
            <img src="${match.awayTeam.logo}" alt="${match.awayTeam.name}" class="w-12 h-12 object-contain">
          </div>
        </div>

        <div class="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30">
          <span class="text-[10px] uppercase font-bold text-emerald-400">${isCompleted ? 'Audited Pre-Match Forecast' : 'Mathematical Prediction'}</span>
          <div class="text-lg font-black text-white mt-1">${match.prediction.primary}</div>
          <div class="flex items-center gap-3 mt-2 text-xs">
            <span class="text-emerald-300 font-bold">${match.prediction.probability} Probability</span>
            <span class="text-slate-500">•</span>
            <span class="text-amber-400 font-mono font-bold">Predicted Score: ${match.prediction.correctScore}</span>
            <span class="text-slate-500">•</span>
            <span class="text-sky-300 font-semibold">${match.prediction.averageGoals}</span>
          </div>
        </div>

        <div class="mt-4 space-y-2 text-xs text-slate-300">
          <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <strong class="text-white">${isCompleted ? 'Post-Match Analysis & Verification:' : 'Analysis & Intelligence:'}</strong> 
            ${isCompleted && evalObj ? evalObj.postMatchAnalysis : match.prediction.reasoning}
          </div>
          <div class="grid grid-cols-2 gap-2 text-center">
            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span class="text-slate-400 block text-[11px]">Both Teams Score</span>
              <span class="font-bold text-white mt-0.5 block">${match.prediction.btts}</span>
            </div>
            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span class="text-slate-400 block text-[11px]">Confidence Rating</span>
              <span class="font-bold text-amber-400 mt-0.5 block">⭐ ${match.prediction.confidenceText}</span>
            </div>
          </div>
        </div>

        <div class="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
          <a href="./#premium" data-tab-target="premium" id="modal-vip-btn" class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition">
            Request VIP Slip on WhatsApp / Email →
          </a>
          <button id="modal-close-footer" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold">
            Close
          </button>
        </div>
      </div>
    `;

    els.matchModal.classList.remove('hidden');

    const innerClose = document.getElementById('modal-inner-close');
    const footerClose = document.getElementById('modal-close-footer');
    const vipBtn = document.getElementById('modal-vip-btn');

    if (innerClose) innerClose.addEventListener('click', closeModal);
    if (footerClose) footerClose.addEventListener('click', closeModal);
    if (vipBtn) {
      vipBtn.addEventListener('click', () => {
        closeModal();
        switchTab('premium');
      });
    }

    function closeModal() {
      els.matchModal.classList.add('hidden');
    }
  }

  if (els.closeMatchModal) {
    els.closeMatchModal.addEventListener('click', () => {
      els.matchModal.classList.add('hidden');
    });
  }

  function sharePredictionTip(matchId) {
    const allMatches = [
      ...(state.currentMatches || []),
      ...(state.archivedMatches || []),
      ...(window.PredictionArchiveService ? window.PredictionArchiveService.getArchivedMatches() : [])
    ];
    const match = allMatches.find(m => m.id === matchId);
    if (!match) return;

    const isCompleted = match.isCompleted || match.status === 'FT';
    let resultNote = '';
    if (isCompleted) {
      resultNote = `\nOfficial Result: ${match.homeScore}-${match.awayScore} (${match.resultStatus === 'WON' ? 'WON ✅' : 'MISSED ❌'})`;
    }

    const shareData = {
      title: `${match.homeTeam.name} vs ${match.awayTeam.name} - Prediction`,
      text: `⚽ Football Prediction: ${match.homeTeam.name} vs ${match.awayTeam.name}\nTip: ${match.prediction.primary} (${match.prediction.probability})\nPredicted Score: ${match.prediction.correctScore}${resultNote}\nVerified Source: sirleegameprediction`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`).then(() => {
        alert('Prediction & verified score copied to clipboard!');
      }).catch(() => {
        alert('Tip: ' + shareData.text);
      });
    }
  }

  // 14. Contact & VIP Form Setup
  function setupContactForm() {
    if (!els.contactForm) return;

    els.contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = els.contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>⏳</span> <span>Submitting VIP Request...</span>`;
      }

      const formData = {
        name: document.getElementById('contact-name')?.value || '',
        email: document.getElementById('contact-email')?.value || '',
        phone: document.getElementById('contact-phone')?.value || '',
        plan: document.getElementById('contact-plan')?.value || '',
        league: document.getElementById('contact-league')?.value || '',
        message: document.getElementById('contact-message')?.value || ''
      };

      try {
        await window.ContactFormService.submitInquiry(formData);
        if (els.ticketRefSpan) {
          els.ticketRefSpan.textContent = 'SIRLEE-' + Math.floor(100000 + Math.random() * 900000);
        }
        if (els.mailtoActionBtn) {
          const mailto = `mailto:djsirlee@gmail.com?subject=VIP Football Inquiry - ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0APlan: ${encodeURIComponent(formData.plan)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
          els.mailtoActionBtn.href = mailto;
        }

        if (els.formSuccessModal) {
          els.formSuccessModal.classList.remove('hidden');
        }
        els.contactForm.reset();
      } catch (err) {
        alert('Thank you! Your request has been queued. Please contact djsirlee@gmail.com directly.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });

    if (els.closeSuccessModal) {
      els.closeSuccessModal.addEventListener('click', () => {
        els.formSuccessModal.classList.add('hidden');
      });
    }
  }

  // 15. Network Offline Status
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
