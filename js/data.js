// data.js - Comprehensive Football Predictions, Statistics & Real-time Mock Database
// sirleegameprediction

const LEAGUES = [
  { id: 'all', name: 'All Leagues', icon: '⚽', flag: '🌍', count: 30 },
  { id: 'epl', name: 'Premier League', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag: '🇬🇧', count: 5 },
  { id: 'championship', name: 'Championship', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', count: 3 },
  { id: 'ucl', name: 'Champions League', icon: '🏆', flag: '🇪🇺', count: 4 },
  { id: 'uel', name: 'Europa League', icon: '🇪🇺', flag: '🇪🇺', count: 2 },
  { id: 'laliga', name: 'La Liga', icon: '🇪🇸', flag: '🇪🇸', count: 3 },
  { id: 'seriea', name: 'Serie A', icon: '🇮🇹', flag: '🇮🇹', count: 2 },
  { id: 'bundesliga', name: 'Bundesliga', icon: '🇩🇪', flag: '🇩🇪', count: 2 },
  { id: 'ligue1', name: 'Ligue 1', icon: '🇫🇷', flag: '🇫🇷', count: 2 },
  { id: 'eredivisie', name: 'Eredivisie', icon: '🇳🇱', flag: '🇳🇱', count: 2 },
  { id: 'ligaportugal', name: 'Liga Portugal', icon: '🇵🇹', flag: '🇵🇹', count: 1 },
  { id: 'saudi', name: 'Saudi Pro League', icon: '🇸🇦', flag: '🇸🇦', count: 2 },
  { id: 'turkish', name: 'Süper Lig', icon: '🇹🇷', flag: '🇹🇷', count: 1 },
  { id: 'scottish', name: 'Scottish Prem.', icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', count: 1 }
];

const TODAY_MATCHES = [
  {
    id: 'm1',
    leagueId: 'seriea',
    leagueName: 'Italian Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    round: 'Round 10 • Super Banker',
    status: 'SCHEDULED',
    time: '19:45',
    isBanker: true,
    badgeText: '👑 BANKER OF THE DAY',
    badgeType: 'gold',
    homeTeam: {
      name: 'Fiorentina',
      shortName: 'FIO',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/109.png',
      rank: 4,
      form: ['W', 'W', 'W', 'D', 'W'],
      xG: 2.38
    },
    awayTeam: {
      name: 'Atalanta',
      shortName: 'ATA',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/105.png',
      rank: 5,
      form: ['W', 'D', 'W', 'W', 'L'],
      xG: 2.12
    },
    prediction: {
      primary: 'Home Win or Draw (1X) & Over 1.5',
      probability: '85%',
      primaryType: '1X',
      correctScore: '2 - 1',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.80',
      btts: 'Yes (84%)',
      fullGameScore: 'Fiorentina 2 - 1 Atalanta',
      confidenceRating: 5,
      confidenceText: 'Ultra High (92%)',
      reasoning: 'Fiorentina enter this clash with exceptional attacking fluidity at Artemio Franchi, scoring 11 goals across their previous 4 home games. Atalanta maintain offensive threat with Gasperini verticality but have conceded in 5 consecutive away trips.'
    },
    stats: {
      h2h: { homeWins: 6, draws: 3, awayWins: 4, lastResult: 'Fiorentina 3-2 Atalanta' },
      homeAvgGoalsScored: 2.3,
      homeAvgGoalsConceded: 0.9,
      awayAvgGoalsScored: 2.0,
      awayAvgGoalsConceded: 1.4,
      referee: 'Michael Fabbri (Avg 3.8 cards/game)'
    }
  },
  {
    id: 'm2',
    leagueId: 'seriea',
    leagueName: 'Italian Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    round: 'Round 10',
    status: 'SCHEDULED',
    time: '17:30',
    isBanker: true,
    badgeText: '🔥 HIGH CONFIDENCE',
    badgeType: 'neon',
    homeTeam: {
      name: 'Frosinone',
      shortName: 'FRO',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/4057.png',
      rank: 12,
      form: ['W', 'D', 'L', 'W', 'W'],
      xG: 1.85
    },
    awayTeam: {
      name: 'Lecce',
      shortName: 'LEC',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/113.png',
      rank: 16,
      form: ['L', 'L', 'D', 'L', 'L'],
      xG: 0.92
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '81%',
      primaryType: '1',
      correctScore: '2 - 0',
      averageGoals: 'Under 2.5 Goals',
      averageGoalsOdds: '1.75',
      btts: 'No (76%)',
      fullGameScore: 'Frosinone 2 - 0 Lecce',
      confidenceRating: 5,
      confidenceText: 'Very High (88%)',
      reasoning: 'Lecce have struggled on the road with an alarming lack of scoring efficiency, failing to register a single goal in 4 consecutive away outings. Frosinone have capitalized heavily on home set-pieces.'
    },
    stats: {
      h2h: { homeWins: 5, draws: 2, awayWins: 2, lastResult: 'Frosinone 1-1 Lecce' },
      homeAvgGoalsScored: 1.7,
      homeAvgGoalsConceded: 1.1,
      awayAvgGoalsScored: 0.6,
      awayAvgGoalsConceded: 1.8,
      referee: 'Daniele Chiffi'
    }
  },
  {
    id: 'm3',
    leagueId: 'saudi',
    leagueName: 'Saudi Pro League',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    round: 'Round 9',
    status: 'SCHEDULED',
    time: '18:30',
    isBanker: false,
    badgeText: '⚡ VALUE BET',
    badgeType: 'cyan',
    homeTeam: {
      name: 'Al-Nassr',
      shortName: 'NAS',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8106.png',
      rank: 3,
      form: ['W', 'W', 'W', 'W', 'D'],
      xG: 2.80
    },
    awayTeam: {
      name: 'Al-Hilal',
      shortName: 'HIL',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8108.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'W'],
      xG: 2.95
    },
    prediction: {
      primary: 'Over 2.5 Goals & BTTS',
      probability: '84%',
      primaryType: 'OV25',
      correctScore: '2 - 2',
      averageGoals: 'Over 3.5 Goals (Value)',
      averageGoalsOdds: '2.10',
      btts: 'Yes (90%)',
      fullGameScore: 'Al-Nassr 2 - 2 Al-Hilal',
      confidenceRating: 4,
      confidenceText: 'High Probability (85%)',
      reasoning: 'The Riyadh Derby consistently delivers intense attacking football. Both sides boast world-class forwards averaging a combined 5.4 goals per fixture this season.'
    },
    stats: {
      h2h: { homeWins: 5, draws: 4, awayWins: 7, lastResult: 'Al-Hilal 1-1 Al-Nassr' },
      homeAvgGoalsScored: 2.7,
      homeAvgGoalsConceded: 1.1,
      awayAvgGoalsScored: 3.1,
      awayAvgGoalsConceded: 0.8,
      referee: 'Felix Zwayer'
    }
  },
  {
    id: 'm4',
    leagueId: 'laliga',
    leagueName: 'La Liga EA Sports',
    country: 'Spain',
    flag: '🇪🇸',
    round: 'Matchday 11',
    status: 'SCHEDULED',
    time: '21:00',
    isBanker: false,
    badgeText: '🎯 SUPER SINGLE',
    badgeType: 'neon',
    homeTeam: {
      name: 'Barcelona',
      shortName: 'BAR',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8634.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'W'],
      xG: 3.10
    },
    awayTeam: {
      name: 'Espanyol',
      shortName: 'ESP',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8558.png',
      rank: 17,
      form: ['L', 'L', 'W', 'L', 'L'],
      xG: 0.95
    },
    prediction: {
      primary: 'Home Win & Over 2.5',
      probability: '89%',
      primaryType: '1+OV25',
      correctScore: '4 - 0',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.45',
      btts: 'No',
      fullGameScore: 'Barcelona 4 - 0 Espanyol',
      confidenceRating: 5,
      confidenceText: 'Banker (94%)',
      reasoning: 'Barcelona high-press under Hansi Flick is generating an astronomical 3.1 xG per 90 minutes. Espanyol have lost 5 of their last 6 road matches with minimal counter-attacking threat.'
    },
    stats: {
      h2h: { homeWins: 18, draws: 5, awayWins: 1, lastResult: 'Espanyol 2-4 Barcelona' },
      homeAvgGoalsScored: 3.4,
      homeAvgGoalsConceded: 0.9,
      awayAvgGoalsScored: 0.8,
      awayAvgGoalsConceded: 2.2,
      referee: 'Jesus Gil Manzano'
    }
  },
  {
    id: 'm5',
    leagueId: 'epl',
    leagueName: 'English Premier League',
    country: 'England',
    flag: '🇬🇧',
    round: 'Gameweek 10',
    status: 'SCHEDULED',
    time: '17:30',
    isBanker: false,
    badgeText: '⚡ GOAL MAGNET',
    badgeType: 'cyan',
    homeTeam: {
      name: 'Liverpool',
      shortName: 'LIV',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8650.png',
      rank: 2,
      form: ['W', 'W', 'W', 'W', 'D'],
      xG: 2.45
    },
    awayTeam: {
      name: 'Aston Villa',
      shortName: 'AVL',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10252.png',
      rank: 5,
      form: ['W', 'D', 'W', 'L', 'W'],
      xG: 1.85
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '75%',
      primaryType: '1',
      correctScore: '3 - 1',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.65',
      btts: 'Yes',
      fullGameScore: 'Liverpool 3 - 1 Aston Villa',
      confidenceRating: 4,
      confidenceText: 'High (82%)',
      reasoning: 'Anfield remains a fortress. Aston Villa maintain a dangerous high line that Liverpool direct transitions under Arne Slot exploit with devastating precision.'
    },
    stats: {
      h2h: { homeWins: 9, draws: 2, awayWins: 2, lastResult: 'Aston Villa 3-3 Liverpool' },
      homeAvgGoalsScored: 2.5,
      homeAvgGoalsConceded: 0.8,
      awayAvgGoalsScored: 1.9,
      awayAvgGoalsConceded: 1.4,
      referee: 'Anthony Taylor'
    }
  },
  {
    id: 'm6',
    leagueId: 'seriea',
    leagueName: 'Serie A Enilive',
    country: 'Italy',
    flag: '🇮🇹',
    round: 'Matchday 11',
    status: 'SCHEDULED',
    time: '20:45',
    isBanker: false,
    badgeText: '🛡️ TACTICAL MASTER',
    badgeType: 'gold',
    homeTeam: {
      name: 'Inter Milan',
      shortName: 'INT',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8636.png',
      rank: 2,
      form: ['W', 'W', 'W', 'D', 'W'],
      xG: 2.20
    },
    awayTeam: {
      name: 'Venezia',
      shortName: 'VEN',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8401.png',
      rank: 18,
      form: ['L', 'D', 'L', 'W', 'L'],
      xG: 0.85
    },
    prediction: {
      primary: 'Inter Win & Over 1.5 Goals',
      probability: '91%',
      primaryType: '1+OV15',
      correctScore: '3 - 0',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.52',
      btts: 'No',
      fullGameScore: 'Inter 3 - 0 Venezia',
      confidenceRating: 5,
      confidenceText: 'Ultra High (93%)',
      reasoning: 'The Nerazzurri possess the strongest depth and xG differential in Serie A. Venezia has collected only 2 points on their travels this season.'
    },
    stats: {
      h2h: { homeWins: 4, draws: 0, awayWins: 0, lastResult: 'Inter 2-1 Venezia' },
      homeAvgGoalsScored: 2.6,
      homeAvgGoalsConceded: 0.9,
      awayAvgGoalsScored: 0.7,
      awayAvgGoalsConceded: 2.1,
      referee: 'Maurizio Mariani'
    }
  },
  {
    id: 'm7',
    leagueId: 'bundesliga',
    leagueName: 'Bundesliga',
    country: 'Germany',
    flag: '🇩🇪',
    round: 'Matchday 9',
    status: 'SCHEDULED',
    time: '18:30',
    isBanker: false,
    badgeText: '⚽ GOALS UNLIMITED',
    badgeType: 'neon',
    homeTeam: {
      name: 'Bayern Munich',
      shortName: 'BAY',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9823.png',
      rank: 1,
      form: ['W', 'W', 'D', 'W', 'W'],
      xG: 3.40
    },
    awayTeam: {
      name: 'Union Berlin',
      shortName: 'UNI',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8529.png',
      rank: 4,
      form: ['W', 'D', 'W', 'L', 'W'],
      xG: 1.15
    },
    prediction: {
      primary: 'Home Win & Over 2.5 Goals',
      probability: '87%',
      primaryType: '1+OV25',
      correctScore: '3 - 1',
      averageGoals: 'Over 3.5 Goals',
      averageGoalsOdds: '1.98',
      btts: 'Yes',
      fullGameScore: 'Bayern Munich 3 - 1 Union Berlin',
      confidenceRating: 5,
      confidenceText: 'Very High (89%)',
      reasoning: 'Bayern under Vincent Kompany have averaged an astonishing 3.7 goals at the Allianz Arena. Union Berlin defend solidly but fail to contain high-frequency box entries.'
    },
    stats: {
      h2h: { homeWins: 7, draws: 3, awayWins: 0, lastResult: 'Union Berlin 1-5 Bayern' },
      homeAvgGoalsScored: 3.7,
      homeAvgGoalsConceded: 0.8,
      awayAvgGoalsScored: 1.2,
      awayAvgGoalsConceded: 1.1,
      referee: 'Daniel Siebert'
    }
  },
  {
    id: 'm8',
    leagueId: 'championship',
    leagueName: 'Sky Bet Championship',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    round: 'Round 14',
    status: 'SCHEDULED',
    time: '15:00',
    isBanker: false,
    badgeText: '🎯 SHARP VALUE',
    badgeType: 'cyan',
    homeTeam: {
      name: 'Leeds United',
      shortName: 'LEE',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10261.png',
      rank: 2,
      form: ['W', 'W', 'W', 'D', 'W'],
      xG: 2.20
    },
    awayTeam: {
      name: 'Burnley',
      shortName: 'BUR',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8191.png',
      rank: 5,
      form: ['W', 'D', 'W', 'L', 'D'],
      xG: 1.55
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '74%',
      primaryType: '1',
      correctScore: '2 - 0',
      averageGoals: 'Over 1.5 Goals',
      averageGoalsOdds: '1.45',
      btts: 'No',
      fullGameScore: 'Leeds United 2 - 0 Burnley',
      confidenceRating: 4,
      confidenceText: 'High (80%)',
      reasoning: 'Leeds are in imperious home form, winning 6 of their last 7 at Elland Road. Burnley have a solid defensive record but struggle against high-pressing Championship sides.'
    },
    stats: {
      h2h: { homeWins: 5, draws: 2, awayWins: 3, lastResult: 'Burnley 1-1 Leeds' },
      homeAvgGoalsScored: 2.1,
      homeAvgGoalsConceded: 0.8,
      awayAvgGoalsScored: 1.2,
      awayAvgGoalsConceded: 1.1,
      referee: 'Tim Robinson'
    }
  },
  {
    id: 'm9',
    leagueId: 'ligue1',
    leagueName: "Ligue 1 McDonald's",
    country: 'France',
    flag: '🇫🇷',
    round: 'Matchday 11',
    status: 'SCHEDULED',
    time: '21:05',
    isBanker: true,
    badgeText: '👑 SUPER BANKER',
    badgeType: 'gold',
    homeTeam: {
      name: 'PSG',
      shortName: 'PSG',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9847.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'W'],
      xG: 3.10
    },
    awayTeam: {
      name: 'Marseille',
      shortName: 'MAR',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9830.png',
      rank: 2,
      form: ['W', 'W', 'D', 'W', 'L'],
      xG: 1.95
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '81%',
      primaryType: '1',
      correctScore: '3 - 1',
      averageGoals: 'Over 2.5 Goals & BTTS',
      averageGoalsOdds: '1.70',
      btts: 'Yes',
      fullGameScore: 'PSG 3 - 1 Marseille',
      confidenceRating: 5,
      confidenceText: 'Very High (87%)',
      reasoning: "Le Classique is a must-watch. PSG have won the last 5 home meetings. Marseille score in Paris but PSG's attack is simply unstoppable at the Parc des Princes."
    },
    stats: {
      h2h: { homeWins: 8, draws: 2, awayWins: 3, lastResult: 'PSG 2-0 Marseille' },
      homeAvgGoalsScored: 3.2,
      homeAvgGoalsConceded: 1.0,
      awayAvgGoalsScored: 1.8,
      awayAvgGoalsConceded: 1.3,
      referee: 'Benoît Bastien'
    }
  },
  {
    id: 'm10',
    leagueId: 'eredivisie',
    leagueName: 'Eredivisie',
    country: 'Netherlands',
    flag: '🇳🇱',
    round: 'Matchday 10',
    status: 'SCHEDULED',
    time: '19:00',
    isBanker: false,
    badgeText: '⚡ GOAL FEST',
    badgeType: 'neon',
    homeTeam: {
      name: 'Ajax',
      shortName: 'AJX',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9694.png',
      rank: 2,
      form: ['W', 'W', 'W', 'D', 'W'],
      xG: 2.85
    },
    awayTeam: {
      name: 'Feyenoord',
      shortName: 'FEY',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9908.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'D'],
      xG: 2.70
    },
    prediction: {
      primary: 'Over 3.5 Goals & BTTS',
      probability: '86%',
      primaryType: 'OV35',
      correctScore: '2 - 2',
      averageGoals: 'Over 3.5 Goals',
      averageGoalsOdds: '1.85',
      btts: 'Yes (91%)',
      fullGameScore: 'Ajax 2 - 2 Feyenoord',
      confidenceRating: 5,
      confidenceText: 'High Value (88%)',
      reasoning: 'De Klassieker is statistically the highest-scoring club rivalry in Dutch football. Their last 6 encounters have averaged 4.3 goals per game.'
    },
    stats: {
      h2h: { homeWins: 7, draws: 4, awayWins: 7, lastResult: 'Feyenoord 3-2 Ajax' },
      homeAvgGoalsScored: 2.8,
      homeAvgGoalsConceded: 1.4,
      awayAvgGoalsScored: 2.6,
      awayAvgGoalsConceded: 1.5,
      referee: 'Serdar Gözübüyük'
    }
  },
  {
    id: 'm11',
    leagueId: 'scottish',
    leagueName: 'Scottish Premiership',
    country: 'Scotland',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    round: 'Round 11',
    status: 'SCHEDULED',
    time: '12:30',
    isBanker: true,
    badgeText: '🎯 OLD FIRM BANKER',
    badgeType: 'gold',
    homeTeam: {
      name: 'Celtic',
      shortName: 'CEL',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8030.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'W'],
      xG: 2.90
    },
    awayTeam: {
      name: 'Rangers',
      shortName: 'RAN',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9782.png',
      rank: 2,
      form: ['W', 'D', 'W', 'W', 'L'],
      xG: 1.85
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '76%',
      primaryType: '1',
      correctScore: '2 - 0',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.80',
      btts: 'No',
      fullGameScore: 'Celtic 2 - 0 Rangers',
      confidenceRating: 4,
      confidenceText: 'High (82%)',
      reasoning: 'Celtic at Parkhead are dominant in the Old Firm fixture. They outperform Rangers across every key metric including xG, progressive passes and pressing efficiency.'
    },
    stats: {
      h2h: { homeWins: 6, draws: 3, awayWins: 4, lastResult: 'Rangers 2-1 Celtic' },
      homeAvgGoalsScored: 2.6,
      homeAvgGoalsConceded: 0.7,
      awayAvgGoalsScored: 1.8,
      awayAvgGoalsConceded: 1.2,
      referee: 'Don Robertson'
    }
  },
  {
    id: 'm12',
    leagueId: 'uel',
    leagueName: 'UEFA Europa League',
    country: 'Europe',
    flag: '🇪🇺',
    round: 'League Phase - Matchday 4',
    status: 'SCHEDULED',
    time: '18:45',
    isBanker: false,
    badgeText: '🔥 EUROPA VALUE',
    badgeType: 'neon',
    homeTeam: {
      name: 'Roma',
      shortName: 'ROM',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png',
      rank: 3,
      form: ['W', 'D', 'W', 'W', 'D'],
      xG: 1.90
    },
    awayTeam: {
      name: 'Ajax',
      shortName: 'AJX',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9694.png',
      rank: 4,
      form: ['W', 'W', 'D', 'L', 'W'],
      xG: 1.75
    },
    prediction: {
      primary: 'Home Win or Draw (1X)',
      probability: '72%',
      primaryType: '1X',
      correctScore: '1 - 1',
      averageGoals: 'Under 2.5 Goals',
      averageGoalsOdds: '1.75',
      btts: 'Yes',
      fullGameScore: 'Roma 1 - 1 Ajax',
      confidenceRating: 4,
      confidenceText: 'Solid Pick (78%)',
      reasoning: 'Roma at the Olimpico in European competition are unbeaten in last 8. Ajax away in European fixtures have been inconsistent, conceding first in 4 of 5 away games.'
    },
    stats: {
      h2h: { homeWins: 2, draws: 1, awayWins: 1, lastResult: 'Ajax 2-1 Roma' },
      homeAvgGoalsScored: 1.8,
      homeAvgGoalsConceded: 0.9,
      awayAvgGoalsScored: 1.6,
      awayAvgGoalsConceded: 1.2,
      referee: 'Ivan Kruzliak'
    }
  },
  {
    id: 'm13',
    leagueId: 'turkish',
    leagueName: 'Turkish Süper Lig',
    country: 'Turkey',
    flag: '🇹🇷',
    round: 'Week 10',
    status: 'SCHEDULED',
    time: '19:00',
    isBanker: false,
    badgeText: '⚡ HIGH ODDS VALUE',
    badgeType: 'cyan',
    homeTeam: {
      name: 'Galatasaray',
      shortName: 'GAL',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9880.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'D'],
      xG: 2.65
    },
    awayTeam: {
      name: 'Fenerbahçe',
      shortName: 'FEN',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9909.png',
      rank: 2,
      form: ['W', 'W', 'D', 'W', 'W'],
      xG: 2.40
    },
    prediction: {
      primary: 'BTTS & Over 2.5 Goals',
      probability: '85%',
      primaryType: 'BTTS+OV25',
      correctScore: '2 - 1',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.65',
      btts: 'Yes (88%)',
      fullGameScore: 'Galatasaray 2 - 1 Fenerbahçe',
      confidenceRating: 4,
      confidenceText: 'High Value (84%)',
      reasoning: 'The Istanbul Derby is the most passionate fixture in Turkish football. Galatasaray at home are exceptional, scoring in every home game this season with dominant pressing.'
    },
    stats: {
      h2h: { homeWins: 5, draws: 3, awayWins: 4, lastResult: 'Fenerbahçe 1-2 Galatasaray' },
      homeAvgGoalsScored: 2.5,
      homeAvgGoalsConceded: 1.1,
      awayAvgGoalsScored: 2.3,
      awayAvgGoalsConceded: 1.2,
      referee: 'Ali Palabıyık'
    }
  },
  {
    id: 'm14',
    leagueId: 'ligaportugal',
    leagueName: 'Liga Portugal Betclic',
    country: 'Portugal',
    flag: '🇵🇹',
    round: 'Matchday 10',
    status: 'SCHEDULED',
    time: '21:15',
    isBanker: false,
    badgeText: '🎯 O CLÁSSICO',
    badgeType: 'neon',
    homeTeam: {
      name: 'Benfica',
      shortName: 'BEN',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9882.png',
      rank: 2,
      form: ['W', 'W', 'D', 'W', 'W'],
      xG: 2.35
    },
    awayTeam: {
      name: 'Sporting CP',
      shortName: 'SCP',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9886.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'D'],
      xG: 2.50
    },
    prediction: {
      primary: 'Over 2.5 Goals & BTTS',
      probability: '80%',
      primaryType: 'OV25+BTTS',
      correctScore: '2 - 1',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.72',
      btts: 'Yes (83%)',
      fullGameScore: 'Benfica 2 - 1 Sporting CP',
      confidenceRating: 4,
      confidenceText: 'High (81%)',
      reasoning: 'O Clássico produces dramatic results. Benfica at the Estádio da Luz have scored in every home game this season. Sporting press high and concede counter-attack goals.'
    },
    stats: {
      h2h: { homeWins: 4, draws: 5, awayWins: 3, lastResult: 'Sporting CP 2-1 Benfica' },
      homeAvgGoalsScored: 2.2,
      homeAvgGoalsConceded: 1.0,
      awayAvgGoalsScored: 2.4,
      awayAvgGoalsConceded: 0.9,
      referee: 'Artur Soares Dias'
    }
  }
];


const TOMORROW_MATCHES = [
  {
    id: 't1',
    leagueId: 'ligue1',
    leagueName: 'French Ligue 1',
    country: 'France',
    flag: '🇫🇷',
    round: 'Matchday 10 • Super Banker',
    status: 'UPCOMING',
    time: '18:00',
    isBanker: true,
    badgeText: '👑 TOMORROW BANKER',
    badgeType: 'gold',
    homeTeam: {
      name: 'Le Havre AC',
      shortName: 'HAC',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/274.png',
      rank: 16,
      form: ['L', 'L', 'L', 'W', 'L'],
      xG: 0.88
    },
    awayTeam: {
      name: 'Paris Saint-Germain',
      shortName: 'PSG',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/160.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'W'],
      xG: 2.85
    },
    prediction: {
      primary: 'Away Win (2) & Over 1.5 Goals',
      probability: '91%',
      primaryType: '2',
      correctScore: '0 - 3',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.52',
      btts: 'No (78%)',
      fullGameScore: 'Le Havre 0 - 3 PSG',
      confidenceRating: 5,
      confidenceText: 'Banker (94%)',
      reasoning: 'PSG remain on an unstoppable Ligue 1 title march with 29 points and +24 goal difference. Le Havre have lost 6 of their last 7 games and possess the league lowest shot volume inside the penalty box.'
    },
    stats: {
      h2h: { homeWins: 0, draws: 1, awayWins: 5, lastResult: 'Le Havre 1-4 PSG' },
      homeAvgGoalsScored: 0.7,
      homeAvgGoalsConceded: 2.4,
      awayAvgGoalsScored: 2.8,
      awayAvgGoalsConceded: 0.6,
      referee: 'Clément Turpin'
    }
  },
  {
    id: 't2',
    leagueId: 'laliga',
    leagueName: 'La Liga EA Sports',
    country: 'Spain',
    flag: '🇪🇸',
    round: 'Matchday 11',
    status: 'UPCOMING',
    time: '20:00',
    isBanker: true,
    badgeText: '🔥 VALUE PICK',
    badgeType: 'neon',
    homeTeam: {
      name: 'Villarreal',
      shortName: 'VIL',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/102.png',
      rank: 4,
      form: ['W', 'W', 'D', 'W', 'L'],
      xG: 2.42
    },
    awayTeam: {
      name: 'Espanyol',
      shortName: 'ESP',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/88.png',
      rank: 15,
      form: ['L', 'L', 'W', 'L', 'L'],
      xG: 1.05
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '84%',
      primaryType: '1',
      correctScore: '2 - 1',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.68',
      btts: 'Yes (72%)',
      fullGameScore: 'Villarreal 2 - 1 Espanyol',
      confidenceRating: 5,
      confidenceText: 'Very High (87%)',
      reasoning: 'The Yellow Submarine at Estadio de la Cerámica have won 4 of their last 5 outings, averaging 2.3 goals. Espanyol have defensive vulnerabilities on counter-attacks down the flanks.'
    },
    stats: {
      h2h: { homeWins: 14, draws: 6, awayWins: 4, lastResult: 'Espanyol 1-2 Villarreal' },
      homeAvgGoalsScored: 2.2,
      homeAvgGoalsConceded: 1.2,
      awayAvgGoalsScored: 0.9,
      awayAvgGoalsConceded: 1.9,
      referee: 'Alejandro Hernández'
    }
  },
  {
    id: 't3',
    leagueId: 'ligue1',
    leagueName: 'French Ligue 1',
    country: 'France',
    flag: '🇫🇷',
    round: 'Derby du Nord • Matchday 10',
    status: 'UPCOMING',
    time: '20:05',
    isBanker: false,
    badgeText: '⚡ DERBY SPECIAL',
    badgeType: 'cyan',
    homeTeam: {
      name: 'Lille',
      shortName: 'LIL',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/165.png',
      rank: 5,
      form: ['W', 'W', 'D', 'W', 'D'],
      xG: 1.95
    },
    awayTeam: {
      name: 'Lens',
      shortName: 'RCL',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/177.png',
      rank: 6,
      form: ['W', 'D', 'D', 'W', 'L'],
      xG: 1.78
    },
    prediction: {
      primary: 'Both Teams To Score (BTTS: Yes)',
      probability: '83%',
      primaryType: 'BTTS',
      correctScore: '2 - 2',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.85',
      btts: 'Yes (83%)',
      fullGameScore: 'Lille 2 - 2 Lens',
      confidenceRating: 4,
      confidenceText: 'High Value (85%)',
      reasoning: 'The fierce Derby du Nord consistently produces high drama and cards. Both sides possess aggressive wingbacks and have scored in 9 of their last 10 respective Ligue 1 games.'
    },
    stats: {
      h2h: { homeWins: 7, draws: 4, awayWins: 5, lastResult: 'Lille 2-1 Lens' },
      homeAvgGoalsScored: 1.8,
      homeAvgGoalsConceded: 1.1,
      awayAvgGoalsScored: 1.6,
      awayAvgGoalsConceded: 1.2,
      referee: 'Benoît Bastien'
    }
  },
  {
    id: 't4',
    leagueId: 'bundesliga',
    leagueName: 'German Bundesliga / DFB',
    country: 'Germany',
    flag: '🇩🇪',
    round: 'Second Round',
    status: 'UPCOMING',
    time: '19:30',
    isBanker: false,
    badgeText: '🎯 SHARP PICK',
    badgeType: 'cyan',
    homeTeam: {
      name: 'SV Elversberg',
      shortName: 'ELV',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/6641.png',
      rank: 8,
      form: ['W', 'W', 'D', 'L', 'W'],
      xG: 1.45
    },
    awayTeam: {
      name: 'Mainz 05',
      shortName: 'M05',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/134.png',
      rank: 11,
      form: ['D', 'L', 'W', 'D', 'W'],
      xG: 1.92
    },
    prediction: {
      primary: 'Away Win or Draw (X2) & Over 1.5',
      probability: '82%',
      primaryType: 'X2',
      correctScore: '1 - 2',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.74',
      btts: 'Yes (79%)',
      fullGameScore: 'SV Elversberg 1 - 2 Mainz',
      confidenceRating: 4,
      confidenceText: 'High Probability (82%)',
      reasoning: 'Bundesliga top-flight quality favored for Mainz. While Elversberg are dangerous at home in the 2. Bundesliga, Mainz pressing structure creates high recovery turnovers in dangerous zones.'
    },
    stats: {
      h2h: { homeWins: 0, draws: 0, awayWins: 2, lastResult: 'Elversberg 0-1 Mainz' },
      homeAvgGoalsScored: 1.5,
      homeAvgGoalsConceded: 1.4,
      awayAvgGoalsScored: 1.8,
      awayAvgGoalsConceded: 1.5,
      referee: 'Daniel Siebert'
    }
  },
  {
    id: 't5',
    leagueId: 'championship',
    leagueName: 'English Championship',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    round: 'Gameweek 14',
    status: 'UPCOMING',
    time: '20:00',
    isBanker: true,
    badgeText: '👑 VALUE PICK',
    badgeType: 'gold',
    homeTeam: {
      name: 'Sheffield United',
      shortName: 'SHU',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/398.png',
      rank: 3,
      form: ['W', 'W', 'W', 'L', 'D'],
      xG: 2.10
    },
    awayTeam: {
      name: 'Wrexham',
      shortName: 'WRE',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/409.png',
      rank: 9,
      form: ['W', 'D', 'L', 'W', 'W'],
      xG: 1.40
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '80%',
      primaryType: '1',
      correctScore: '2 - 1',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.82',
      btts: 'Yes',
      fullGameScore: 'Sheffield United 2 - 1 Wrexham',
      confidenceRating: 4,
      confidenceText: 'High Confidence (83%)',
      reasoning: 'Bramall Lane fortress advantage. The Blades have won 6 of their 7 home league fixtures this campaign. Wrexham have shown bravery but suffer defensive transitions against Championship frontrunners.'
    },
    stats: {
      h2h: { homeWins: 3, draws: 1, awayWins: 1, lastResult: 'Sheffield Utd 3-1 Wrexham' },
      homeAvgGoalsScored: 2.1,
      homeAvgGoalsConceded: 0.8,
      awayAvgGoalsScored: 1.4,
      awayAvgGoalsConceded: 1.5,
      referee: 'Andy Davies'
    }
  },
  {
    id: 't6',
    leagueId: 'ligaportugal',
    leagueName: 'Portuguese Primeira Liga',
    country: 'Portugal',
    flag: '🇵🇹',
    round: 'Matchday 10',
    status: 'UPCOMING',
    time: '20:15',
    isBanker: true,
    badgeText: '🔥 SUPER SINGLE',
    badgeType: 'gold',
    homeTeam: {
      name: 'Casa Pia',
      shortName: 'CAS',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/17855.png',
      rank: 11,
      form: ['L', 'D', 'W', 'L', 'L'],
      xG: 0.95
    },
    awayTeam: {
      name: 'Sporting CP',
      shortName: 'SCP',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/300.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'W'],
      xG: 3.12
    },
    prediction: {
      primary: 'Away Win (2) & Over 1.5',
      probability: '89%',
      primaryType: '2',
      correctScore: '0 - 3',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.48',
      btts: 'No (75%)',
      fullGameScore: 'Casa Pia 0 - 3 Sporting CP',
      confidenceRating: 5,
      confidenceText: 'Banker (92%)',
      reasoning: 'Sporting CP are in sensational goalscoring rhythm, registering 28 goals in 9 league games. Casa Pia lack the defensive personnel to neutralize Sporting relentless wing overloads.'
    },
    stats: {
      h2h: { homeWins: 0, draws: 0, awayWins: 6, lastResult: 'Sporting CP 4-0 Casa Pia' },
      homeAvgGoalsScored: 0.9,
      homeAvgGoalsConceded: 2.1,
      awayAvgGoalsScored: 3.1,
      awayAvgGoalsConceded: 0.4,
      referee: 'Fabio Verissimo'
    }
  },
  {
    id: 't7',
    leagueId: 'turkish',
    leagueName: 'Turkish Süper Lig',
    country: 'Turkey',
    flag: '🇹🇷',
    round: 'Matchday 11',
    status: 'UPCOMING',
    time: '17:00',
    isBanker: true,
    badgeText: '🌟 EARLY GOAL PICK',
    badgeType: 'neon',
    homeTeam: {
      name: 'Konyaspor',
      shortName: 'KON',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/2214.png',
      rank: 12,
      form: ['L', 'W', 'L', 'D', 'L'],
      xG: 1.15
    },
    awayTeam: {
      name: 'Galatasaray',
      shortName: 'GAL',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/436.png',
      rank: 1,
      form: ['W', 'W', 'W', 'W', 'D'],
      xG: 2.90
    },
    prediction: {
      primary: 'Away Win (2) & Over 2.5 Goals',
      probability: '86%',
      primaryType: '2+OV25',
      correctScore: '1 - 3',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.60',
      btts: 'Yes (74%)',
      fullGameScore: 'Konyaspor 1 - 3 Galatasaray',
      confidenceRating: 5,
      confidenceText: 'High Confidence (88%)',
      reasoning: 'Galatasaray attacking quartet of Osimhen and Icardi is overwhelming Turkish defenses, averaging 2.9 goals per match. Konyaspor have conceded 2+ in 4 straight games.'
    },
    stats: {
      h2h: { homeWins: 3, draws: 2, awayWins: 9, lastResult: 'Konyaspor 1-3 Galatasaray' },
      homeAvgGoalsScored: 1.2,
      homeAvgGoalsConceded: 2.0,
      awayAvgGoalsScored: 2.8,
      awayAvgGoalsConceded: 0.9,
      referee: 'Atilla Karaoglan'
    }
  },
  {
    id: 't8',
    leagueId: 'epl',
    leagueName: 'English Premier League',
    country: 'England',
    flag: '🇬🇧',
    round: 'Gameweek 10 • Saturday Marquee',
    status: 'UPCOMING',
    time: '12:30',
    isBanker: true,
    badgeText: '👑 GAMEWEEK 10 BANKER',
    badgeType: 'gold',
    homeTeam: {
      name: 'Chelsea',
      shortName: 'CHE',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/363.png',
      rank: 4,
      form: ['W', 'W', 'D', 'L', 'W'],
      xG: 2.15
    },
    awayTeam: {
      name: 'Manchester United',
      shortName: 'MUN',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/360.png',
      rank: 8,
      form: ['W', 'L', 'D', 'W', 'L'],
      xG: 1.62
    },
    prediction: {
      primary: 'Both Teams To Score (BTTS: Yes)',
      probability: '88%',
      primaryType: 'BTTS',
      correctScore: '2 - 2',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.65',
      btts: 'Yes (88%)',
      fullGameScore: 'Chelsea 2 - 2 Man United',
      confidenceRating: 5,
      confidenceText: 'High Confidence (89%)',
      reasoning: 'Chelsea vs Manchester United clashes have generated 19 goals across their last 4 showdowns. Both teams have defensive transition vulnerabilities while sporting rapid wing forwards.'
    },
    stats: {
      h2h: { homeWins: 4, draws: 4, awayWins: 4, lastResult: 'Chelsea 4-3 Man United' },
      homeAvgGoalsScored: 2.2,
      homeAvgGoalsConceded: 1.3,
      awayAvgGoalsScored: 1.5,
      awayAvgGoalsConceded: 1.6,
      referee: 'Michael Oliver'
    }
  }
];

const LIVE_MATCHES = [
  {
    id: 'l1',
    leagueId: 'seriea',
    leagueName: 'Italian Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    status: 'LIVE',
    minute: 58,
    homeScore: 2,
    awayScore: 1,
    momentumTeam: 'home',
    momentumPercent: 74,
    homeTeam: {
      name: 'Fiorentina',
      shortName: 'FIO',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/109.png',
      stats: { possession: 57, shots: 14, shotsOnTarget: 6, dangerousAttacks: 49 }
    },
    awayTeam: {
      name: 'Atalanta',
      shortName: 'ATA',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/105.png',
      stats: { possession: 43, shots: 9, shotsOnTarget: 4, dangerousAttacks: 31 }
    },
    liveTip: {
      market: 'Over 3.5 Goals (In-Play Value Tip)',
      confidence: '88%',
      tipReason: 'End-to-end transitional tempo at Artemio Franchi. Both managers committed to aggressive high pressing with defensive spaces opening up.',
      recommendedAction: 'BACK OVER 3.5 GOALS NOW @ 1.82',
      secondaryLiveTip: 'Next Goal: Fiorentina (74% probability)'
    }
  },
  {
    id: 'l2',
    leagueId: 'seriea',
    leagueName: 'Italian Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    status: 'LIVE',
    minute: 78,
    homeScore: 1,
    awayScore: 1,
    momentumTeam: 'home',
    momentumPercent: 68,
    homeTeam: {
      name: 'Frosinone',
      shortName: 'FRO',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/4057.png',
      stats: { possession: 52, shots: 11, shotsOnTarget: 4, dangerousAttacks: 38 }
    },
    awayTeam: {
      name: 'Lecce',
      shortName: 'LEC',
      logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/113.png',
      stats: { possession: 48, shots: 8, shotsOnTarget: 3, dangerousAttacks: 26 }
    },
    liveTip: {
      market: 'Double Chance Frosinone or Draw (1X)',
      confidence: '92%',
      tipReason: 'Frosinone pressing aggressively in the final third with 5 corners earned in the second half. Lecce content to absorb pressure.',
      recommendedAction: 'BACK FROSINONE OR DRAW (1X) @ 1.45',
      secondaryLiveTip: 'Late Corner Count Over 9.5'
    }
  },
  {
    id: 'l3',
    leagueId: 'saudi',
    leagueName: 'Saudi Pro League',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    status: 'LIVE',
    minute: 38,
    homeScore: 1,
    awayScore: 0,
    momentumTeam: 'home',
    momentumPercent: 79,
    homeTeam: {
      name: 'Al-Nassr',
      shortName: 'NAS',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8106.png',
      stats: { possession: 62, shots: 9, shotsOnTarget: 5, dangerousAttacks: 36 }
    },
    awayTeam: {
      name: 'Al-Hilal',
      shortName: 'HIL',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8108.png',
      stats: { possession: 38, shots: 4, shotsOnTarget: 2, dangerousAttacks: 19 }
    },
    liveTip: {
      market: 'Both Teams To Score (BTTS Live)',
      confidence: '86%',
      tipReason: 'Riyadh Derby intensity is peaking. Al-Hilal have registered 2 close-range efforts and average 1.8 second-half goals.',
      recommendedAction: 'BACK BTTS (YES) IN-PLAY @ 1.68',
      secondaryLiveTip: 'Next Goal: Al-Hilal Equalizer'
    }
  }
];

const LEAGUE_STANDINGS = {
  epl: [
    { rank: 1, name: 'Manchester City', played: 9, won: 7, drawn: 2, lost: 0, gd: '+14', pts: 23, form: ['W', 'W', 'W', 'D', 'W'] },
    { rank: 2, name: 'Arsenal', played: 9, won: 6, drawn: 2, lost: 1, gd: '+11', pts: 20, form: ['W', 'W', 'D', 'W', 'L'] },
    { rank: 3, name: 'Liverpool', played: 9, won: 6, drawn: 2, lost: 1, gd: '+10', pts: 20, form: ['W', 'W', 'W', 'D', 'W'] },
    { rank: 4, name: 'Aston Villa', played: 9, won: 5, drawn: 3, lost: 1, gd: '+6', pts: 18, form: ['W', 'D', 'W', 'D', 'W'] },
    { rank: 5, name: 'Chelsea', played: 9, won: 5, drawn: 2, lost: 2, gd: '+8', pts: 17, form: ['W', 'L', 'W', 'W', 'D'] }
  ],
  championship: [
    { rank: 1, name: 'Sunderland', played: 14, won: 9, drawn: 3, lost: 2, gd: '+15', pts: 30, form: ['W', 'W', 'W', 'D', 'W'] },
    { rank: 2, name: 'Leeds United', played: 14, won: 9, drawn: 2, lost: 3, gd: '+12', pts: 29, form: ['W', 'W', 'W', 'D', 'L'] },
    { rank: 3, name: 'Sheffield Utd', played: 14, won: 8, drawn: 3, lost: 3, gd: '+10', pts: 27, form: ['W', 'L', 'W', 'W', 'D'] },
    { rank: 4, name: 'Blackburn', played: 14, won: 7, drawn: 4, lost: 3, gd: '+7', pts: 25, form: ['D', 'W', 'D', 'W', 'W'] },
    { rank: 5, name: 'Burnley', played: 14, won: 6, drawn: 5, lost: 3, gd: '+5', pts: 23, form: ['W', 'D', 'L', 'D', 'D'] }
  ],
  ucl: [
    { rank: 1, name: 'Aston Villa', played: 3, won: 3, drawn: 0, lost: 0, gd: '+6', pts: 9, form: ['W', 'W', 'W'] },
    { rank: 2, name: 'Liverpool', played: 3, won: 3, drawn: 0, lost: 0, gd: '+5', pts: 9, form: ['W', 'W', 'W'] },
    { rank: 3, name: 'Manchester City', played: 3, won: 2, drawn: 1, lost: 0, gd: '+9', pts: 7, form: ['D', 'W', 'W'] },
    { rank: 4, name: 'Barcelona', played: 3, won: 2, drawn: 0, lost: 1, gd: '+7', pts: 6, form: ['L', 'W', 'W'] },
    { rank: 5, name: 'Real Madrid', played: 3, won: 2, drawn: 0, lost: 1, gd: '+4', pts: 6, form: ['W', 'L', 'W'] }
  ],
  uel: [
    { rank: 1, name: 'Lazio', played: 3, won: 3, drawn: 0, lost: 0, gd: '+5', pts: 9, form: ['W', 'W', 'W'] },
    { rank: 2, name: 'Galatasaray', played: 3, won: 2, drawn: 1, lost: 0, gd: '+4', pts: 7, form: ['W', 'D', 'W'] },
    { rank: 3, name: 'Rangers', played: 3, won: 2, drawn: 0, lost: 1, gd: '+3', pts: 6, form: ['W', 'L', 'W'] },
    { rank: 4, name: 'Spurs', played: 3, won: 1, drawn: 2, lost: 0, gd: '+2', pts: 5, form: ['D', 'W', 'D'] },
    { rank: 5, name: 'Roma', played: 3, won: 1, drawn: 1, lost: 1, gd: '0', pts: 4, form: ['D', 'L', 'W'] }
  ],
  laliga: [
    { rank: 1, name: 'Barcelona', played: 11, won: 10, drawn: 0, lost: 1, gd: '+27', pts: 30, form: ['W', 'W', 'W', 'W', 'W'] },
    { rank: 2, name: 'Real Madrid', played: 11, won: 7, drawn: 3, lost: 1, gd: '+10', pts: 24, form: ['W', 'W', 'W', 'D', 'L'] },
    { rank: 3, name: 'Atletico Madrid', played: 11, won: 5, drawn: 5, lost: 1, gd: '+9', pts: 20, form: ['D', 'W', 'D', 'L', 'W'] },
    { rank: 4, name: 'Villarreal', played: 11, won: 6, drawn: 3, lost: 2, gd: '+1', pts: 21, form: ['L', 'W', 'D', 'W', 'L'] }
  ],
  seriea: [
    { rank: 1, name: 'Napoli', played: 11, won: 8, drawn: 2, lost: 1, gd: '+18', pts: 26, form: ['W', 'W', 'D', 'W', 'W'] },
    { rank: 2, name: 'Inter Milan', played: 11, won: 7, drawn: 3, lost: 1, gd: '+14', pts: 24, form: ['W', 'W', 'W', 'D', 'W'] },
    { rank: 3, name: 'Juventus', played: 11, won: 5, drawn: 5, lost: 1, gd: '+8', pts: 20, form: ['D', 'W', 'D', 'W', 'L'] },
    { rank: 4, name: 'AC Milan', played: 11, won: 5, drawn: 4, lost: 2, gd: '+5', pts: 19, form: ['W', 'D', 'W', 'L', 'D'] },
    { rank: 5, name: 'Atalanta', played: 11, won: 5, drawn: 3, lost: 3, gd: '+4', pts: 18, form: ['W', 'L', 'W', 'W', 'D'] }
  ],
  bundesliga: [
    { rank: 1, name: 'Bayern Munich', played: 9, won: 7, drawn: 1, lost: 1, gd: '+20', pts: 22, form: ['W', 'W', 'D', 'W', 'W'] },
    { rank: 2, name: 'RB Leipzig', played: 9, won: 6, drawn: 2, lost: 1, gd: '+11', pts: 20, form: ['W', 'W', 'W', 'D', 'W'] },
    { rank: 3, name: 'Bayer Leverkusen', played: 9, won: 5, drawn: 3, lost: 1, gd: '+9', pts: 18, form: ['D', 'W', 'D', 'W', 'W'] },
    { rank: 4, name: 'Dortmund', played: 9, won: 4, drawn: 3, lost: 2, gd: '+4', pts: 15, form: ['L', 'W', 'L', 'D', 'W'] },
    { rank: 5, name: 'Eintracht Frankfurt', played: 9, won: 4, drawn: 2, lost: 3, gd: '+2', pts: 14, form: ['W', 'L', 'W', 'D', 'L'] }
  ],
  ligue1: [
    { rank: 1, name: 'PSG', played: 11, won: 9, drawn: 2, lost: 0, gd: '+24', pts: 29, form: ['W', 'W', 'W', 'W', 'W'] },
    { rank: 2, name: 'Marseille', played: 11, won: 7, drawn: 1, lost: 3, gd: '+10', pts: 22, form: ['W', 'L', 'W', 'W', 'D'] },
    { rank: 3, name: 'Monaco', played: 11, won: 6, drawn: 2, lost: 3, gd: '+7', pts: 20, form: ['W', 'D', 'L', 'W', 'W'] },
    { rank: 4, name: 'Nice', played: 11, won: 6, drawn: 1, lost: 4, gd: '+5', pts: 19, form: ['L', 'W', 'W', 'D', 'L'] },
    { rank: 5, name: 'Lille', played: 11, won: 5, drawn: 3, lost: 3, gd: '+2', pts: 18, form: ['D', 'W', 'D', 'L', 'W'] }
  ],
  eredivisie: [
    { rank: 1, name: 'Feyenoord', played: 10, won: 8, drawn: 2, lost: 0, gd: '+22', pts: 26, form: ['W', 'W', 'W', 'W', 'D'] },
    { rank: 2, name: 'Ajax', played: 10, won: 7, drawn: 1, lost: 2, gd: '+15', pts: 22, form: ['W', 'W', 'W', 'D', 'L'] },
    { rank: 3, name: 'PSV', played: 10, won: 6, drawn: 2, lost: 2, gd: '+12', pts: 20, form: ['W', 'D', 'W', 'L', 'W'] },
    { rank: 4, name: 'AZ Alkmaar', played: 10, won: 5, drawn: 3, lost: 2, gd: '+6', pts: 18, form: ['W', 'W', 'D', 'L', 'D'] }
  ],
  ligaportugal: [
    { rank: 1, name: 'Sporting CP', played: 10, won: 9, drawn: 1, lost: 0, gd: '+21', pts: 28, form: ['W', 'W', 'W', 'W', 'D'] },
    { rank: 2, name: 'Benfica', played: 10, won: 7, drawn: 2, lost: 1, gd: '+14', pts: 23, form: ['W', 'W', 'D', 'W', 'W'] },
    { rank: 3, name: 'Braga', played: 10, won: 5, drawn: 2, lost: 3, gd: '+5', pts: 17, form: ['L', 'W', 'D', 'W', 'L'] },
    { rank: 4, name: 'Porto', played: 10, won: 4, drawn: 3, lost: 3, gd: '+2', pts: 15, form: ['W', 'D', 'L', 'D', 'W'] }
  ],
  saudi: [
    { rank: 1, name: 'Al-Hilal', played: 9, won: 8, drawn: 1, lost: 0, gd: '+19', pts: 25, form: ['W', 'W', 'W', 'W', 'W'] },
    { rank: 2, name: 'Al-Ittihad', played: 9, won: 6, drawn: 2, lost: 1, gd: '+10', pts: 20, form: ['W', 'D', 'W', 'L', 'W'] },
    { rank: 3, name: 'Al-Nassr', played: 9, won: 6, drawn: 1, lost: 2, gd: '+9', pts: 19, form: ['W', 'W', 'W', 'W', 'D'] },
    { rank: 4, name: 'Al-Ahli', played: 9, won: 5, drawn: 1, lost: 3, gd: '+4', pts: 16, form: ['L', 'W', 'W', 'D', 'W'] }
  ],
  turkish: [
    { rank: 1, name: 'Galatasaray', played: 10, won: 8, drawn: 2, lost: 0, gd: '+16', pts: 26, form: ['W', 'W', 'W', 'W', 'D'] },
    { rank: 2, name: 'Fenerbahçe', played: 10, won: 8, drawn: 1, lost: 1, gd: '+14', pts: 25, form: ['W', 'W', 'D', 'W', 'W'] },
    { rank: 3, name: 'Trabzonspor', played: 10, won: 5, drawn: 3, lost: 2, gd: '+6', pts: 18, form: ['W', 'D', 'L', 'W', 'D'] },
    { rank: 4, name: 'Besiktas', played: 10, won: 4, drawn: 3, lost: 3, gd: '+3', pts: 15, form: ['L', 'D', 'W', 'W', 'L'] }
  ],
  scottish: [
    { rank: 1, name: 'Celtic', played: 11, won: 9, drawn: 2, lost: 0, gd: '+24', pts: 29, form: ['W', 'W', 'W', 'W', 'W'] },
    { rank: 2, name: 'Rangers', played: 11, won: 7, drawn: 2, lost: 2, gd: '+11', pts: 23, form: ['W', 'D', 'W', 'W', 'L'] },
    { rank: 3, name: 'Hearts', played: 11, won: 5, drawn: 2, lost: 4, gd: '+2', pts: 17, form: ['L', 'W', 'D', 'L', 'W'] },
    { rank: 4, name: 'Aberdeen', played: 11, won: 4, drawn: 4, lost: 3, gd: '+1', pts: 16, form: ['D', 'W', 'D', 'L', 'D'] }
  ]
};


const WIN_RATE_STATS = {
  overallAccuracy: '88.4%',
  bankersHitRate: '94.2%',
  todayHits: '30 / 45',
  streak: '7-Day Winning Run',
  yesterdayResult: '15 of 17 Predictions Won (88.2%)'
};

// Universal export for browser and Node.js environments
if (typeof window !== 'undefined') {
  window.LEAGUES = LEAGUES;
  window.TODAY_MATCHES = TODAY_MATCHES;
  window.TOMORROW_MATCHES = TOMORROW_MATCHES;
  window.LIVE_MATCHES = LIVE_MATCHES;
  window.LEAGUE_STANDINGS = LEAGUE_STANDINGS;
  window.WIN_RATE_STATS = WIN_RATE_STATS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LEAGUES,
    TODAY_MATCHES,
    TOMORROW_MATCHES,
    LIVE_MATCHES,
    LEAGUE_STANDINGS,
    WIN_RATE_STATS
  };
}


