// api.js - Football Data Real-Time Integration & Contact Form Services
// sirleegameprediction - 2026 Football Intelligence Engine

const API_CONFIG = {
  // Sports API Configuration: Real-time ESPN Open API (no key required), API-Football, or Mock
  footballApiProvider: 'realtime', // 'realtime' | 'api-football' | 'mock'
  apiKeyFootball: '',              // RapidAPI or API-Sports key (optional override)
  
  // Real-time ESPN Open Soccer Endpoints
  espnBaseUrl: 'https://site.api.espn.com/apis/site/v2/sports/soccer',
  espnStandingsBaseUrl: 'https://site.api.espn.com/apis/v2/sports/soccer',
  leagues: {
    'ita.1': { id: 'seriea', name: 'Italian Serie A', flag: '🇮🇹', country: 'Italy' },
    'esp.1': { id: 'laliga', name: 'La Liga EA Sports', flag: '🇪🇸', country: 'Spain' },
    'fra.1': { id: 'ligue1', name: 'French Ligue 1', flag: '🇫🇷', country: 'France' },
    'ger.1': { id: 'bundesliga', name: 'German Bundesliga', flag: '🇩🇪', country: 'Germany' },
    'eng.1': { id: 'epl', name: 'English Premier League', flag: '🇬🇧', country: 'England' },
    'eng.2': { id: 'championship', name: 'English Championship', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England' },
    'por.1': { id: 'ligaportugal', name: 'Portuguese Primeira Liga', flag: '🇵🇹', country: 'Portugal' },
    'tur.1': { id: 'turkish', name: 'Turkish Süper Lig', flag: '🇹🇷', country: 'Turkey' },
    'ned.1': { id: 'eredivisie', name: 'Dutch Eredivisie', flag: '🇳🇱', country: 'Netherlands' },
    'uefa.champions': { id: 'ucl', name: 'UEFA Champions League', flag: '🇪🇺', country: 'Europe' },
    'uefa.europa': { id: 'uel', name: 'UEFA Europa League', flag: '🇪🇺', country: 'Europe' },
    'ksa.1': { id: 'saudi', name: 'Saudi Pro League', flag: '🇸🇦', country: 'Saudi Arabia' },
    'sco.1': { id: 'scottish', name: 'Scottish Premiership', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', country: 'Scotland' }
  },

  // Direct mapping from UI league key to official ESPN standing league code
  standingsCodeMap: {
    epl: 'eng.1',
    championship: 'eng.2',
    ucl: 'uefa.champions',
    uel: 'uefa.europa',
    laliga: 'esp.1',
    seriea: 'ita.1',
    bundesliga: 'ger.1',
    ligue1: 'fra.1',
    eredivisie: 'ned.1',
    ligaportugal: 'por.1',
    saudi: 'ksa.1',
    turkish: 'tur.1',
    scottish: 'sco.1'
  },

  // Email Notification Configuration for djsirlee@gmail.com
  formspreeEndpoint: 'https://formspree.io/f/xvgoaqpk',
  targetEmail: 'djsirlee@gmail.com',
  whatsappDirectNumber: '+447911123456'
};

// Football Data Service (Real-time Date-based Intelligence Engine)
class FootballDataService {
  constructor() {
    this.provider = (typeof localStorage !== 'undefined' ? localStorage.getItem('sirlee_api_provider') : null) || API_CONFIG.footballApiProvider;
    this.apiKey = (typeof localStorage !== 'undefined' ? localStorage.getItem('sirlee_api_key') : null) || API_CONFIG.apiKeyFootball;
    
    // In-memory cache by date key (YYYY-MM-DD)
    this.dateCache = {};
    this.cache = {
      today: null,
      tomorrow: null,
      live: null,
      standings: {},
      lastSync: 0
    };
  }

  // Helper to format Date object or ISO string to YYYY-MM-DD
  normalizeDateStr(dateInput) {
    if (!dateInput) {
      const now = new Date();
      return this.formatDateToISO(now);
    }
    if (dateInput instanceof Date) {
      return this.formatDateToISO(dateInput);
    }
    if (typeof dateInput === 'string') {
      // If in YYYYMMDD format
      if (/^\d{8}$/.test(dateInput)) {
        return `${dateInput.substring(0, 4)}-${dateInput.substring(4, 6)}-${dateInput.substring(6, 8)}`;
      }
      // If already in YYYY-MM-DD format
      if (/^\d{4}-\d{2}-\d{2}/.test(dateInput)) {
        return dateInput.substring(0, 10);
      }
      const parsed = new Date(dateInput);
      if (!isNaN(parsed.getTime())) {
        return this.formatDateToISO(parsed);
      }
    }
    return this.formatDateToISO(new Date());
  }

  formatDateToISO(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  formatToEspnDate(dateStr) {
    return dateStr.replace(/-/g, '');
  }

  getTodayDateStr() {
    return this.formatDateToISO(new Date());
  }

  getTomorrowDateStr() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return this.formatDateToISO(d);
  }

  // Core API Method: Fetch and predict matches for ANY specific day
  async fetchPredictionsForDate(dateInput, forceRefresh = false) {
    const dateStr = this.normalizeDateStr(dateInput);
    const espnDate = this.formatToEspnDate(dateStr);
    const now = Date.now();
    const cacheKey = `sirlee_pred_${dateStr}`;

    // 1. Check in-memory cache first (TTL 5 minutes)
    if (!forceRefresh && this.dateCache[dateStr] && (now - this.dateCache[dateStr].timestamp < 300000)) {
      return this.dateCache[dateStr].data;
    }

    // 2. Check localStorage cache if available
    if (!forceRefresh && typeof localStorage !== 'undefined') {
      try {
        const stored = localStorage.getItem(cacheKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && (now - parsed.timestamp < 300000) && Array.isArray(parsed.data) && parsed.data.length > 0) {
            this.dateCache[dateStr] = parsed;
            return parsed.data;
          }
        }
      } catch (e) {
        console.warn('LocalStorage read error for date cache:', e);
      }
    }

    // 3. Fetch live fixtures across all leagues from ESPN Open Soccer API
    try {
      const leagueEntries = Object.entries(API_CONFIG.leagues);
      const fetchPromises = leagueEntries.map(async ([leagueCode, meta]) => {
        try {
          const url = `${API_CONFIG.espnBaseUrl}/${leagueCode}/scoreboard?dates=${espnDate}`;
          const res = await fetch(url, {
            headers: { 'Accept': 'application/json' }
          });
          if (!res.ok) return [];
          const data = await res.json();
          const events = data.events || [];
          return events.map(event => this.parseEspnEvent(event, meta, dateStr));
        } catch (err) {
          console.warn(`[ESPN API] Error fetching ${leagueCode} for ${dateStr}:`, err);
          return [];
        }
      });

      const settled = await Promise.allSettled(fetchPromises);
      let allMatches = settled
        .filter(r => r.status === 'fulfilled')
        .flatMap(r => r.value);

      // If no matches returned from API for today/tomorrow, check static fallback dataset
      const todayStr = this.getTodayDateStr();
      const tomorrowStr = this.getTomorrowDateStr();

      if (allMatches.length === 0) {
        if (dateStr === todayStr && typeof TODAY_MATCHES !== 'undefined' && TODAY_MATCHES.length > 0) {
          allMatches = TODAY_MATCHES;
        } else if (dateStr === tomorrowStr && typeof TOMORROW_MATCHES !== 'undefined' && TOMORROW_MATCHES.length > 0) {
          allMatches = TOMORROW_MATCHES;
        }
      }

      // Determine the Banker of the Day (Match with highest prediction confidence & probability)
      if (allMatches.length > 0) {
        // Clear any existing banker flags to pick the best single banker for this day
        let bestBankerIdx = -1;
        let highestScore = -1;

        allMatches.forEach((m, idx) => {
          m.isBanker = false;
          let score = m.prediction.confidenceRating * 20 + parseInt(m.prediction.probability || '80');
          if (m.homeTeam.rank && m.awayTeam.rank && Math.abs(m.homeTeam.rank - m.awayTeam.rank) >= 5) {
            score += 10;
          }
          if (score > highestScore) {
            highestScore = score;
            bestBankerIdx = idx;
          }
        });

        if (bestBankerIdx >= 0) {
          allMatches[bestBankerIdx].isBanker = true;
          allMatches[bestBankerIdx].badgeText = '👑 BANKER OF THE DAY';
          allMatches[bestBankerIdx].badgeType = 'gold';
        }

        // Sort matches: Live first, Banker next, then upcoming chronologically
        allMatches.sort((a, b) => {
          if (a.isLive && !b.isLive) return -1;
          if (!a.isLive && b.isLive) return 1;
          if (a.isBanker && !b.isBanker) return -1;
          if (!a.isBanker && b.isBanker) return 1;
          return (a.time || '').localeCompare(b.time || '');
        });
      }

      // Save to memory cache and localStorage
      const cachePayload = {
        data: allMatches,
        timestamp: now,
        date: dateStr
      };
      this.dateCache[dateStr] = cachePayload;

      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(cacheKey, JSON.stringify(cachePayload));
        } catch (e) {}
      }

      // Synchronize legacy cache slots
      if (dateStr === todayStr) {
        this.cache.today = allMatches;
        this.cache.lastSync = now;
      } else if (dateStr === tomorrowStr) {
        this.cache.tomorrow = allMatches;
      }

      return allMatches;
    } catch (err) {
      console.error(`[FootballDataService] Fetch failed for date ${dateStr}:`, err);
      // Fallback
      if (dateStr === this.getTodayDateStr() && typeof TODAY_MATCHES !== 'undefined') return TODAY_MATCHES;
      if (dateStr === this.getTomorrowDateStr() && typeof TOMORROW_MATCHES !== 'undefined') return TOMORROW_MATCHES;
      return [];
    }
  }

  // Parse an ESPN soccer event into sirleegameprediction schema
  parseEspnEvent(ev, meta, dateStr) {
    const comp = ev.competitions?.[0] || {};
    const homeComp = comp.competitors?.find(c => c.homeAway === 'home') || comp.competitors?.[0] || {};
    const awayComp = comp.competitors?.find(c => c.homeAway === 'away') || comp.competitors?.[1] || {};

    const homeTeamName = homeComp.team?.displayName || 'Home Team';
    const awayTeamName = awayComp.team?.displayName || 'Away Team';
    const homeShort = homeComp.team?.abbreviation || homeTeamName.substring(0, 3).toUpperCase();
    const awayShort = awayComp.team?.abbreviation || awayTeamName.substring(0, 3).toUpperCase();

    const homeLogo = homeComp.team?.logo || `https://placehold.co/60x60/1e293b/00ff87?text=${homeShort}`;
    const awayLogo = awayComp.team?.logo || `https://placehold.co/60x60/1e293b/00ff87?text=${awayShort}`;

    const matchDate = new Date(ev.date || Date.now());
    const kickoffTime = matchDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    const statusState = ev.status?.type?.state; // 'pre', 'in', 'post'
    const isLive = statusState === 'in';
    const isCompleted = statusState === 'post' || ev.status?.type?.completed === true;
    const minute = parseInt(ev.status?.displayClock) || (isLive ? 55 : 0);

    const homeScore = parseInt(homeComp.score) >= 0 ? parseInt(homeComp.score) : 0;
    const awayScore = parseInt(awayComp.score) >= 0 ? parseInt(awayComp.score) : 0;

    // Parse team recent form and records
    const homeFormStr = homeComp.form || '';
    const awayFormStr = awayComp.form || '';
    const homeForm = homeFormStr ? homeFormStr.split('') : ['W', 'W', 'D', 'W', 'L'];
    const awayForm = awayFormStr ? awayFormStr.split('') : ['L', 'W', 'D', 'L', 'W'];

    const homeRecord = homeComp.records?.[0]?.summary || '';
    const awayRecord = awayComp.records?.[0]?.summary || '';

    // Parse odds details
    const oddsObj = comp.odds?.[0] || {};
    const oddsDetail = oddsObj.details || '';
    const overUnder = oddsObj.overUnder || 2.5;

    // Generate analytical AI prediction tip
    const prediction = this.generateAnalyticalPrediction(
      { name: homeTeamName, shortName: homeShort, form: homeForm, record: homeRecord },
      { name: awayTeamName, shortName: awayShort, form: awayForm, record: awayRecord },
      oddsDetail,
      overUnder,
      oddsObj,
      meta
    );

    // Evaluate result status if completed
    let resultStatus = null;
    let badgeText = isLive ? '🔴 LIVE IN-PLAY' : (isCompleted ? `FT (${homeScore}-${awayScore})` : '⚡ 2026 FIXTURE');
    let badgeType = isLive ? 'neon' : (isCompleted ? 'cyan' : 'emerald');

    if (isCompleted) {
      const homeWon = homeScore > awayScore;
      const awayWon = awayScore > homeScore;
      const drew = homeScore === awayScore;
      let won = false;

      if (prediction.primaryType === '1' && homeWon) won = true;
      else if (prediction.primaryType === '2' && awayWon) won = true;
      else if (prediction.primaryType === 'X' && drew) won = true;
      else if (prediction.primaryType === '1X' && (homeWon || drew)) won = true;
      else if (prediction.primaryType === 'X2' && (awayWon || drew)) won = true;
      else if (prediction.primaryType === '12' && (homeWon || awayWon)) won = true;
      else if (prediction.averageGoals.includes('Over 2.5') && (homeScore + awayScore) > 2.5) won = true;

      if (won) {
        resultStatus = 'WON';
        badgeText = `✅ WON (${homeScore}-${awayScore})`;
        badgeType = 'gold';
      }
    }

    return {
      id: `espn_${ev.id}`,
      leagueId: meta.id,
      leagueName: meta.name,
      country: meta.country,
      flag: meta.flag,
      round: comp.round ? `Matchday ${comp.round}` : (ev.status?.type?.detail || '2026 Regular Season'),
      status: isLive ? 'LIVE' : (isCompleted ? 'FT' : 'SCHEDULED'),
      rawDate: ev.date,
      matchDateStr: dateStr,
      time: kickoffTime,
      isLive: isLive,
      isCompleted: isCompleted,
      resultStatus: resultStatus,
      minute: minute,
      homeScore: homeScore,
      awayScore: awayScore,
      isBanker: false, // will be evaluated across the day's matches
      badgeText: badgeText,
      badgeType: badgeType,
      homeTeam: {
        name: homeTeamName,
        shortName: homeShort,
        logo: homeLogo,
        rank: homeComp.curatedRank?.current || Math.floor(1 + Math.random() * 8),
        form: homeForm.slice(-5),
        record: homeRecord,
        xG: (1.55 + Math.random() * 1.1).toFixed(2),
        stats: {
          possession: 55,
          shots: 13,
          shotsOnTarget: 6,
          dangerousAttacks: 48
        }
      },
      awayTeam: {
        name: awayTeamName,
        shortName: awayShort,
        logo: awayLogo,
        rank: awayComp.curatedRank?.current || Math.floor(4 + Math.random() * 12),
        form: awayForm.slice(-5),
        record: awayRecord,
        xG: (1.1 + Math.random() * 0.9).toFixed(2),
        stats: {
          possession: 45,
          shots: 9,
          shotsOnTarget: 3,
          dangerousAttacks: 30
        }
      },
      prediction: prediction,
      stats: {
        h2h: { homeWins: 4, draws: 2, awayWins: 3, lastResult: '2-1' },
        homeAvgGoalsScored: 2.1,
        homeAvgGoalsConceded: 0.9,
        awayAvgGoalsScored: 1.2,
        awayAvgGoalsConceded: 1.6,
        referee: comp.officials?.[0]?.displayName || 'Official FIFA Referee',
        venue: comp.venue?.fullName || 'Stadium Ground'
      },
      liveTip: isLive ? {
        market: 'In-Play Live Tip: Over 2.5 Goals',
        confidence: '88%',
        tipReason: `Live pressure favors ${homeTeamName} with strong momentum into the final third.`,
        recommendedAction: `BACK NEXT GOAL @ 1.85`,
        secondaryLiveTip: `Full-time Score Expectancy: ${prediction.correctScore}`
      } : null
    };
  }

  // Generates mathematical AI prediction tip
  generateAnalyticalPrediction(homeTeam, awayTeam, oddsDetail, overUnder, oddsObj, meta) {
    const homeName = homeTeam.name;
    const awayName = awayTeam.name;
    const homeForm = homeTeam.form || ['W', 'D', 'W', 'W', 'L'];
    const awayForm = awayTeam.form || ['L', 'W', 'D', 'L', 'W'];

    // Compute recent form score (W=3, D=1, L=0)
    const calcFormScore = (fArr) => (fArr || []).reduce((acc, r) => acc + (r === 'W' ? 3 : (r === 'D' ? 1 : 0)), 0);
    const homeScore = calcFormScore(homeForm);
    const awayScore = calcFormScore(awayForm);

    const details = (oddsDetail || '').toUpperCase();
    const homeShort = (homeTeam.shortName || '').toUpperCase();
    const awayShort = (awayTeam.shortName || '').toUpperCase();

    // Check moneyline odds if available
    const moneyline = oddsObj?.moneyline || {};
    const homeMl = parseInt(moneyline.home?.close?.odds) || 0;
    const awayMl = parseInt(moneyline.away?.close?.odds) || 0;

    let primary = 'Home Win (1)';
    let primaryType = '1';
    let probability = '84%';
    let correctScore = '2 - 1';
    let averageGoals = `Over ${overUnder || 2.5} Goals`;
    let averageGoalsOdds = '1.75';
    let btts = 'Yes (82%)';
    let confidenceRating = 4;
    let confidenceText = 'High (84%)';

    const isAwayFavored = (details.includes('-') && (details.includes(awayShort) || awayName.toUpperCase().includes(details.split(' ')[0]))) || (awayMl < 0 && homeMl > 0);
    const isHomeFavored = (details.includes('-') && (details.includes(homeShort) || homeName.toUpperCase().includes(details.split(' ')[0]))) || (homeMl < 0 && awayMl > 0);

    if (isAwayFavored || (awayScore >= homeScore + 5)) {
      primary = `Away Win (2)`;
      primaryType = '2';
      probability = '87%';
      correctScore = '0 - 2';
      averageGoals = 'Under 3.5 Goals';
      btts = 'No (72%)';
      confidenceRating = 5;
      confidenceText = 'Banker (87%)';
    } else if (isHomeFavored || (homeScore >= awayScore + 4)) {
      primary = `Home Win (1)`;
      primaryType = '1';
      probability = '89%';
      correctScore = '3 - 1';
      averageGoals = 'Over 2.5 Goals';
      btts = 'Yes (84%)';
      confidenceRating = 5;
      confidenceText = 'Banker (89%)';
    } else if (homeScore >= awayScore) {
      primary = `Home Win or Draw (1X)`;
      primaryType = '1X';
      probability = '85%';
      correctScore = '2 - 1';
      averageGoals = 'Over 2.5 Goals';
      btts = 'Yes (82%)';
      confidenceRating = 4;
      confidenceText = 'High Value (85%)';
    } else {
      primary = `Draw or Away (X2)`;
      primaryType = 'X2';
      probability = '83%';
      correctScore = '1 - 1';
      averageGoals = 'Under 2.5 Goals';
      btts = 'Yes (79%)';
      confidenceRating = 4;
      confidenceText = 'Value Pick (83%)';
    }

    const reasoning = `Tactical modeling favors ${primaryType === '1' || primaryType === '1X' ? homeName : awayName}. Form efficiency: ${homeName} (${homeScore}/15 pts) vs ${awayName} (${awayScore}/15 pts). ${details ? `Sportsbook odds line: ${oddsDetail}.` : ''} High probability of a ${correctScore} scoreline outcome.`;

    return {
      primary,
      probability,
      primaryType,
      correctScore,
      averageGoals,
      averageGoalsOdds,
      btts,
      fullGameScore: `${homeName} ${correctScore} ${awayName}`,
      confidenceRating,
      confidenceText,
      reasoning
    };
  }

  // Pre-fetch adjacent days in background so navigating between days is instantaneous
  prefetchAdjacentDays(baseDateStr) {
    const base = new Date(baseDateStr || Date.now());
    [-1, 1, 2, 3, 4, 5, 6].forEach(offset => {
      const target = new Date(base);
      target.setDate(base.getDate() + offset);
      const str = this.formatDateToISO(target);
      // Small timeout stagger to avoid slamming network
      setTimeout(() => {
        this.fetchPredictionsForDate(str, false).catch(() => {});
      }, Math.abs(offset) * 400);
    });
  }

  // Backward-compatible API calls
  async getTodayPredictions(forceRefresh = false) {
    const todayStr = this.getTodayDateStr();
    return this.fetchPredictionsForDate(todayStr, forceRefresh);
  }

  async getTomorrowPredictions(forceRefresh = false) {
    const tomorrowStr = this.getTomorrowDateStr();
    return this.fetchPredictionsForDate(tomorrowStr, forceRefresh);
  }

  async getLiveScores() {
    const todayMatches = await this.getTodayPredictions();
    const live = (todayMatches || []).filter(m => m.isLive);
    if (live.length > 0) return live;
    return typeof LIVE_MATCHES !== 'undefined' ? LIVE_MATCHES : [];
  }

  // Fetch real-time official standings for a specific league via API
  async fetchLeagueStandings(leagueKey, forceRefresh = false) {
    const code = API_CONFIG.standingsCodeMap[leagueKey] || 'eng.1';
    const now = Date.now();

    // Check in-memory cache if not force refreshing (cache 5 minutes)
    if (!forceRefresh && this.cache.standings[leagueKey] && (now - this.cache.standings[leagueKey].timestamp < 300000)) {
      return this.cache.standings[leagueKey].data;
    }

    try {
      const res = await fetch(`${API_CONFIG.espnStandingsBaseUrl}/${code}/standings`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const entries = data.children?.[0]?.standings?.entries || [];

      if (!entries.length) {
        throw new Error('No standings entries found');
      }

      const parsed = entries.map((entry, idx) => {
        const statsMap = {};
        (entry.stats || []).forEach(s => {
          statsMap[s.name] = s;
        });

        const rank = statsMap.rank?.value ?? (idx + 1);
        const played = statsMap.gamesPlayed?.value ?? 0;
        const won = statsMap.wins?.value ?? 0;
        const drawn = statsMap.ties?.value ?? 0;
        const lost = statsMap.losses?.value ?? 0;
        const gf = statsMap.pointsFor?.value ?? 0;
        const ga = statsMap.pointsAgainst?.value ?? 0;
        const gdVal = statsMap.pointDifferential?.value ?? (gf - ga);
        const gd = statsMap.pointDifferential?.displayValue ?? ((gdVal >= 0 ? '+' : '') + gdVal);
        const pts = statsMap.points?.value ?? (won * 3 + drawn);

        const fallbackForm = (typeof LEAGUE_STANDINGS !== 'undefined' && LEAGUE_STANDINGS[leagueKey]?.[idx]?.form) || ['W', 'D', 'W', 'L', 'W'];

        return {
          rank: Number(rank),
          name: entry.team?.displayName || entry.team?.name || 'Unknown Team',
          shortName: entry.team?.shortDisplayName || entry.team?.abbreviation || '',
          logo: entry.team?.logos?.[0]?.href || '',
          played: Number(played),
          won: Number(won),
          drawn: Number(drawn),
          lost: Number(lost),
          gf: Number(gf),
          ga: Number(ga),
          gd: String(gd),
          pts: Number(pts),
          form: fallbackForm,
          note: entry.note?.description || ''
        };
      });

      this.cache.standings[leagueKey] = {
        data: parsed,
        timestamp: now
      };

      if (typeof LEAGUE_STANDINGS !== 'undefined') {
        LEAGUE_STANDINGS[leagueKey] = parsed;
      }

      try {
        localStorage.setItem(`sirlee_standings_${leagueKey}`, JSON.stringify({
          data: parsed,
          timestamp: now
        }));
      } catch (e) {}

      return parsed;
    } catch (err) {
      console.warn(`[Standings API] Falling back to 2026 database for ${leagueKey}:`, err);
      try {
        const local = localStorage.getItem(`sirlee_standings_${leagueKey}`);
        if (local) {
          const parsedLocal = JSON.parse(local);
          if (parsedLocal && parsedLocal.data) return parsedLocal.data;
        }
      } catch (e) {}
      return (typeof LEAGUE_STANDINGS !== 'undefined' && LEAGUE_STANDINGS[leagueKey]) || [];
    }
  }

  // Pre-fetch all league standings across all 13 leagues
  async fetchAllLeagueStandings() {
    const keys = Object.keys(API_CONFIG.standingsCodeMap);
    const results = await Promise.allSettled(keys.map(k => this.fetchLeagueStandings(k)));
    return results;
  }
}

// Contact & Premium Form Submission Service
class ContactFormService {
  static async submitInquiry(formData) {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'N/A',
      preferredPlan: formData.plan || 'VIP Daily Bankers',
      preferredLeague: formData.league || 'All Major Leagues',
      message: formData.message || 'Requesting VIP Membership details.',
      submittedAt: new Date().toISOString(),
      recipient: API_CONFIG.targetEmail
    };

    try {
      const history = JSON.parse(localStorage.getItem('sirlee_inquiries') || '[]');
      history.unshift({ ...payload, id: 'VIP-' + Math.floor(100000 + Math.random() * 900000) });
      localStorage.setItem('sirlee_inquiries', JSON.stringify(history.slice(0, 10)));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }

    let deliveredViaApi = false;
    try {
      const response = await fetch(API_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        deliveredViaApi = true;
      }
    } catch (err) {
      console.log('Formspree dispatch notice (using native email fallback):', err);
    }

    return {
      success: true,
      deliveredViaApi: deliveredViaApi,
      targetEmail: API_CONFIG.targetEmail,
      data: payload
    };
  }
}

if (typeof window !== 'undefined') {
  window.FootballDataService = new FootballDataService();
  window.ContactFormService = ContactFormService;
  window.API_CONFIG = API_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FootballDataService,
    ContactFormService,
    API_CONFIG
  };
}
