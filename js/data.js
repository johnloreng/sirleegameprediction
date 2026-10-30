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
    { rank: 1, name: "Manchester City", shortName: "Man City", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/382.png", played: 8, won: 7, drawn: 0, lost: 1, gf: 20, ga: 9, gd: "+11", pts: 21, form: ["W","L","W","W","W"], note: "Champions League" },
    { rank: 2, name: "Arsenal", shortName: "Arsenal", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/359.png", played: 8, won: 7, drawn: 0, lost: 1, gf: 13, ga: 5, gd: "+8", pts: 21, form: ["L","W","W","W","W"], note: "Champions League" },
    { rank: 3, name: "Brighton & Hove Albion", shortName: "Brighton", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/331.png", played: 8, won: 5, drawn: 1, lost: 2, gf: 23, ga: 7, gd: "+16", pts: 16, form: ["W","D","L","W","L"], note: "Champions League" },
    { rank: 4, name: "Liverpool", shortName: "Liverpool", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/364.png", played: 8, won: 4, drawn: 3, lost: 1, gf: 11, ga: 8, gd: "+3", pts: 15, form: ["L","D","W","W","D"], note: "Champions League" },
    { rank: 5, name: "Chelsea", shortName: "Chelsea", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/363.png", played: 8, won: 4, drawn: 1, lost: 3, gf: 17, ga: 15, gd: "+2", pts: 13, form: ["W","L","W","D","W"], note: "Europa League" },
    { rank: 6, name: "Brentford", shortName: "Brentford", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/337.png", played: 8, won: 2, drawn: 5, lost: 1, gf: 14, ga: 9, gd: "+5", pts: 11, form: ["D","W","W","L","W"], note: "" },
    { rank: 7, name: "Leeds United", shortName: "Leeds", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/357.png", played: 8, won: 2, drawn: 5, lost: 1, gf: 9, ga: 6, gd: "+3", pts: 11, form: ["D","W","W","L","W"], note: "" },
    { rank: 8, name: "Newcastle United", shortName: "Newcastle", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/361.png", played: 8, won: 3, drawn: 2, lost: 3, gf: 12, ga: 14, gd: "-2", pts: 11, form: ["D","W","L","W","W"], note: "" },
    { rank: 9, name: "Aston Villa", shortName: "Aston Villa", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/362.png", played: 8, won: 3, drawn: 2, lost: 3, gf: 9, ga: 12, gd: "-3", pts: 11, form: ["W","L","D","D","L"], note: "" },
    { rank: 10, name: "Hull City", shortName: "Hull", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/306.png", played: 8, won: 2, drawn: 4, lost: 2, gf: 9, ga: 8, gd: "+1", pts: 10, form: ["W","W","D","L","L"], note: "" },
    { rank: 11, name: "Everton", shortName: "Everton", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/368.png", played: 8, won: 2, drawn: 4, lost: 2, gf: 8, ga: 9, gd: "-1", pts: 10, form: ["W","W","L","D","L"], note: "" },
    { rank: 12, name: "Ipswich Town", shortName: "Ipswich", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/373.png", played: 8, won: 3, drawn: 1, lost: 4, gf: 12, ga: 16, gd: "-4", pts: 10, form: ["W","L","L","W","W"], note: "" },
    { rank: 13, name: "AFC Bournemouth", shortName: "Bournemouth", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/349.png", played: 8, won: 2, drawn: 3, lost: 3, gf: 12, ga: 13, gd: "-1", pts: 9, form: ["W","W","D","D","L"], note: "" },
    { rank: 14, name: "Tottenham Hotspur", shortName: "Spurs", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/367.png", played: 8, won: 2, drawn: 3, lost: 3, gf: 8, ga: 10, gd: "-2", pts: 9, form: ["W","W","L","L","D"], note: "" },
    { rank: 15, name: "Fulham", shortName: "Fulham", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/370.png", played: 8, won: 2, drawn: 2, lost: 4, gf: 8, ga: 10, gd: "-2", pts: 8, form: ["D","W","W","L","L"], note: "" },
    { rank: 16, name: "Manchester United", shortName: "Man Utd", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/360.png", played: 8, won: 1, drawn: 4, lost: 3, gf: 10, ga: 13, gd: "-3", pts: 7, form: ["W","L","D","L","D"], note: "" },
    { rank: 17, name: "Crystal Palace", shortName: "C Palace", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/384.png", played: 8, won: 2, drawn: 1, lost: 5, gf: 9, ga: 19, gd: "-10", pts: 7, form: ["L","D","W","W","L"], note: "" },
    { rank: 18, name: "Nottingham Forest", shortName: "Nottm Forest", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/393.png", played: 8, won: 1, drawn: 3, lost: 4, gf: 6, ga: 10, gd: "-4", pts: 6, form: ["W","D","L","L","L"], note: "Relegation" },
    { rank: 19, name: "Coventry City", shortName: "Coventry", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/388.png", played: 8, won: 2, drawn: 0, lost: 6, gf: 6, ga: 15, gd: "-9", pts: 6, form: ["L","L","L","L","W"], note: "Relegation" },
    { rank: 20, name: "Sunderland", shortName: "Sunderland", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/366.png", played: 8, won: 1, drawn: 2, lost: 5, gf: 6, ga: 14, gd: "-8", pts: 5, form: ["W","L","D","L","L"], note: "Relegation" }
  ],
  championship: [
    { rank: 1, name: "Middlesbrough", shortName: "Boro", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/369.png", played: 12, won: 7, drawn: 4, lost: 1, gf: 27, ga: 17, gd: "+10", pts: 25, form: ["D","D","L","W","W"], note: "Promotion" },
    { rank: 2, name: "Swansea City", shortName: "Swansea", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/318.png", played: 12, won: 7, drawn: 2, lost: 3, gf: 16, ga: 13, gd: "+3", pts: 23, form: ["W","W","D","W","W"], note: "Promotion" },
    { rank: 3, name: "West Ham United", shortName: "West Ham", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/371.png", played: 12, won: 6, drawn: 4, lost: 2, gf: 32, ga: 15, gd: "+17", pts: 22, form: ["W","D","L","D","W"], note: "Promotion playoffs" },
    { rank: 4, name: "Wolverhampton Wanderers", shortName: "Wolves", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/380.png", played: 12, won: 6, drawn: 3, lost: 3, gf: 20, ga: 16, gd: "+4", pts: 21, form: ["W","W","W","W","W"], note: "Promotion playoffs" },
    { rank: 5, name: "West Bromwich Albion", shortName: "West Brom", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/383.png", played: 12, won: 6, drawn: 3, lost: 3, gf: 16, ga: 13, gd: "+3", pts: 21, form: ["W","W","D","D","W"], note: "Promotion playoffs" },
    { rank: 6, name: "Southampton", shortName: "Southampton", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/376.png", played: 12, won: 7, drawn: 3, lost: 2, gf: 24, ga: 12, gd: "+12", pts: 20, form: ["W","L","W","W","W"], note: "Promotion playoffs" },
    { rank: 7, name: "Birmingham City", shortName: "Birmingham", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/392.png", played: 12, won: 5, drawn: 5, lost: 2, gf: 20, ga: 12, gd: "+8", pts: 20, form: ["D","W","L","W","W"], note: "Promotion Playoffs" },
    { rank: 8, name: "Queens Park Rangers", shortName: "QPR", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/334.png", played: 12, won: 5, drawn: 5, lost: 2, gf: 20, ga: 12, gd: "+8", pts: 20, form: ["W","L","D","L","W"], note: "Promotion Playoffs" },
    { rank: 9, name: "Stoke City", shortName: "Stoke", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/336.png", played: 12, won: 6, drawn: 2, lost: 4, gf: 18, ga: 16, gd: "+2", pts: 20, form: ["W","D","W","D","L"], note: "" },
    { rank: 10, name: "Blackburn Rovers", shortName: "Blackburn", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/365.png", played: 12, won: 5, drawn: 3, lost: 4, gf: 19, ga: 16, gd: "+3", pts: 18, form: ["D","W","D","W","W"], note: "" },
    { rank: 11, name: "Portsmouth", shortName: "Portsmouth", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/385.png", played: 12, won: 5, drawn: 3, lost: 4, gf: 16, ga: 15, gd: "+1", pts: 18, form: ["D","W","L","W","W"], note: "" },
    { rank: 12, name: "Sheffield United", shortName: "Sheffield Utd", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/398.png", played: 12, won: 4, drawn: 4, lost: 4, gf: 16, ga: 15, gd: "+1", pts: 16, form: ["W","D","D","D","W"], note: "" },
    { rank: 13, name: "Millwall", shortName: "Millwall", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/391.png", played: 12, won: 4, drawn: 3, lost: 5, gf: 19, ga: 20, gd: "-1", pts: 15, form: ["D","W","D","W","W"], note: "" },
    { rank: 14, name: "Bristol City", shortName: "Bristol City", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/333.png", played: 12, won: 4, drawn: 3, lost: 5, gf: 12, ga: 15, gd: "-3", pts: 15, form: ["W","W","L","W","L"], note: "" },
    { rank: 15, name: "Lincoln City", shortName: "Lincoln City", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/314.png", played: 12, won: 4, drawn: 3, lost: 5, gf: 13, ga: 20, gd: "-7", pts: 15, form: ["D","L","W","W","L"], note: "" },
    { rank: 16, name: "Cardiff City", shortName: "Cardiff", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/347.png", played: 12, won: 3, drawn: 5, lost: 4, gf: 19, ga: 17, gd: "+2", pts: 14, form: ["W","L","D","L","L"], note: "" },
    { rank: 17, name: "Wrexham", shortName: "Wrexham", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/352.png", played: 12, won: 3, drawn: 5, lost: 4, gf: 15, ga: 18, gd: "-3", pts: 14, form: ["D","L","D","D","L"], note: "" },
    { rank: 18, name: "Bolton Wanderers", shortName: "Bolton", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/358.png", played: 12, won: 4, drawn: 2, lost: 6, gf: 16, ga: 23, gd: "-7", pts: 14, form: ["W","W","D","W","W"], note: "" },
    { rank: 19, name: "Charlton Athletic", shortName: "Charlton", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/372.png", played: 12, won: 3, drawn: 5, lost: 4, gf: 11, ga: 18, gd: "-7", pts: 14, form: ["W","W","W","L","D"], note: "" },
    { rank: 20, name: "Norwich City", shortName: "Norwich City", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/381.png", played: 12, won: 4, drawn: 0, lost: 8, gf: 20, ga: 22, gd: "-2", pts: 12, form: ["W","L","L","W","W"], note: "" },
    { rank: 21, name: "Watford", shortName: "Watford", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/395.png", played: 12, won: 3, drawn: 2, lost: 7, gf: 10, ga: 20, gd: "-10", pts: 11, form: ["W","W","L","W","L"], note: "" },
    { rank: 22, name: "Burnley", shortName: "Burnley", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/379.png", played: 12, won: 1, drawn: 5, lost: 6, gf: 17, ga: 25, gd: "-8", pts: 8, form: ["L","L","D","W","L"], note: "Relegation" },
    { rank: 23, name: "Derby County", shortName: "Derby", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/374.png", played: 12, won: 1, drawn: 4, lost: 7, gf: 10, ga: 21, gd: "-11", pts: 7, form: ["D","W","L","L","L"], note: "Relegation" },
    { rank: 24, name: "Preston North End", shortName: "Preston", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/394.png", played: 12, won: 1, drawn: 2, lost: 9, gf: 10, ga: 25, gd: "-15", pts: 5, form: ["W","L","L","D","D"], note: "Relegation" }
  ],
  ucl: [
    { rank: 1, name: "Paris Saint-Germain", shortName: "PSG", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/160.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 14, ga: 5, gd: "+9", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 2, name: "Aston Villa", shortName: "Aston Villa", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/362.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 12, ga: 3, gd: "+9", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 3, name: "Liverpool", shortName: "Liverpool", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/364.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 12, ga: 7, gd: "+5", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 4, name: "Real Madrid", shortName: "Real Madrid", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/86.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 10, ga: 5, gd: "+5", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 5, name: "Real Betis", shortName: "Betis", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/244.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 7, ga: 4, gd: "+3", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 6, name: "VfB Stuttgart", shortName: "Stuttgart", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/134.png", played: 3, won: 2, drawn: 1, lost: 0, gf: 7, ga: 2, gd: "+5", pts: 7, form: ["D","W","W"], note: "Qualifies for round of 16" },
    { rank: 7, name: "Arsenal", shortName: "Arsenal", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/359.png", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 2, gd: "+4", pts: 7, form: ["D","W","W"], note: "Qualifies for round of 16" },
    { rank: 8, name: "Barcelona", shortName: "Barcelona", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/83.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 11, ga: 6, gd: "+5", pts: 6, form: ["W","L","W"], note: "Qualifies for round of 16" },
    { rank: 9, name: "Como", shortName: "Como", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2572.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 10, ga: 5, gd: "+5", pts: 6, form: ["L","W","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 10, name: "Manchester City", shortName: "Man City", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/382.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 9, ga: 5, gd: "+4", pts: 6, form: ["L","W","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 11, name: "Club Brugge", shortName: "Club Brugge", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/570.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 9, ga: 6, gd: "+3", pts: 6, form: ["L","W","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 12, name: "Sporting CP", shortName: "Sporting", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2250.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 7, ga: 4, gd: "+3", pts: 6, form: ["W","W","L"], note: "Knockout phase playoffs - seeded" },
    { rank: 13, name: "Borussia Dortmund", shortName: "Dortmund", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/124.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, gd: "+1", pts: 6, form: ["W","L","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 14, name: "Bayern Munich", shortName: "Bayern", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/132.png", played: 3, won: 1, drawn: 2, lost: 0, gf: 10, ga: 5, gd: "+5", pts: 5, form: ["W","D","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 15, name: "AS Roma", shortName: "AS Roma", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/104.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 8, ga: 5, gd: "+3", pts: 4, form: ["W","D","L"], note: "Knockout phase playoffs - seeded" },
    { rank: 16, name: "Atlético Madrid", shortName: "Atlético", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1068.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 3, gd: "+1", pts: 4, form: ["W","D","L"], note: "Knockout phase playoffs - seeded" },
    { rank: 17, name: "Shakhtar Donetsk", shortName: "Shakhtar", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/493.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 3, gd: "+1", pts: 4, form: ["W","D","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 18, name: "PSV Eindhoven", shortName: "PSV", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/148.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 2, gd: "0", pts: 4, form: ["W","D","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 19, name: "Villarreal", shortName: "Villarreal", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/102.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 8, ga: 8, gd: "0", pts: 3, form: ["W","L","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 20, name: "Internazionale", shortName: "Inter Milan", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/110.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 5, ga: 6, gd: "-1", pts: 3, form: ["W","L","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 21, name: "Manchester United", shortName: "Man Utd", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/360.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 5, ga: 6, gd: "-1", pts: 3, form: ["L","L","W"], note: "Knockout phase playoffs - unseeded" },
    { rank: 22, name: "Napoli", shortName: "Napoli", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/114.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 5, ga: 7, gd: "-2", pts: 3, form: ["W","L","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 23, name: "Galatasaray", shortName: "Galatasaray", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/432.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 6, ga: 9, gd: "-3", pts: 3, form: ["W","L","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 24, name: "LASK Linz", shortName: "LASK Linz", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/4411.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 6, ga: 9, gd: "-3", pts: 3, form: ["L","W","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 25, name: "Sabah FK", shortName: "Sabah", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21922.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 6, gd: "-3", pts: 3, form: ["W","L","L"], note: "Eliminated" },
    { rank: 26, name: "Feyenoord Rotterdam", shortName: "Feyenoord", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/142.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 8, gd: "-4", pts: 3, form: ["W","L","L"], note: "Eliminated" },
    { rank: 27, name: "Lens", shortName: "Lens", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/175.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 7, gd: "-4", pts: 3, form: ["L","W","L"], note: "Eliminated" },
    { rank: 28, name: "Bodo/Glimt", shortName: "Bodo/Glimt", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2980.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 9, gd: "-5", pts: 3, form: ["L","L","W"], note: "Eliminated" },
    { rank: 29, name: "AEK Athens", shortName: "AEK Athens", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/887.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 8, gd: "-5", pts: 3, form: ["W","L","L"], note: "Eliminated" },
    { rank: 30, name: "RB Leipzig", shortName: "RB Leipzig", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/11420.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 8, gd: "-5", pts: 3, form: ["W","L","L"], note: "Eliminated" },
    { rank: 31, name: "Fenerbahce", shortName: "Fenerbahce", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/436.png", played: 3, won: 0, drawn: 2, lost: 1, gf: 3, ga: 9, gd: "-6", pts: 2, form: ["L","W","D"], note: "Eliminated" },
    { rank: 32, name: "Slavia Prague", shortName: "Slavia Prague", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/494.png", played: 3, won: 0, drawn: 1, lost: 2, gf: 4, ga: 7, gd: "-3", pts: 1, form: ["L","L","D"], note: "Eliminated" },
    { rank: 33, name: "Viking FK", shortName: "Viking FK", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/510.png", played: 3, won: 0, drawn: 1, lost: 2, gf: 5, ga: 9, gd: "-4", pts: 1, form: ["D","L","L"], note: "Eliminated" },
    { rank: 34, name: "FC Porto", shortName: "FC Porto", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/437.png", played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 6, gd: "-4", pts: 0, form: ["L","L","L"], note: "Eliminated" },
    { rank: 35, name: "Lille", shortName: "Lille", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/166.png", played: 3, won: 0, drawn: 0, lost: 3, gf: 4, ga: 10, gd: "-6", pts: 0, form: ["L","L","L"], note: "Eliminated" },
    { rank: 36, name: "Slovan Bratislava", shortName: "S Bratislava", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/521.png", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 13, gd: "-12", pts: 0, form: ["L","L","L"], note: "Eliminated" }
  ],
  uel: [
    { rank: 1, name: "Benfica", shortName: "Benfica", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1929.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 10, ga: 2, gd: "+8", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 2, name: "Bayer Leverkusen", shortName: "Leverkusen", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/131.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 8, ga: 0, gd: "+8", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 3, name: "AFC Bournemouth", shortName: "Bournemouth", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/349.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 8, ga: 1, gd: "+7", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 4, name: "Ferencvaros", shortName: "Ferencvaros", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/622.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 9, ga: 3, gd: "+6", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 5, name: "Olympiacos", shortName: "Olympiacos", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/435.png", played: 3, won: 3, drawn: 0, lost: 0, gf: 4, ga: 1, gd: "+3", pts: 9, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 6, name: "Union St.-Gilloise", shortName: "Union SG", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5807.png", played: 3, won: 2, drawn: 1, lost: 0, gf: 8, ga: 1, gd: "+7", pts: 7, form: ["W","W","W"], note: "Qualifies for round of 16" },
    { rank: 7, name: "Juventus", shortName: "Juventus", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/111.png", played: 3, won: 2, drawn: 1, lost: 0, gf: 9, ga: 3, gd: "+6", pts: 7, form: ["D","W","W"], note: "Qualifies for round of 16" },
    { rank: 8, name: "Besiktas", shortName: "Besiktas", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1895.png", played: 3, won: 2, drawn: 1, lost: 0, gf: 9, ga: 5, gd: "+4", pts: 7, form: ["W","W","D"], note: "Qualifies for round of 16" },
    { rank: 9, name: "Sunderland", shortName: "Sunderland", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/366.png", played: 3, won: 2, drawn: 1, lost: 0, gf: 4, ga: 2, gd: "+2", pts: 7, form: ["W","W","D"], note: "Knockout phase playoffs - seeded" },
    { rank: 10, name: "AZ Alkmaar", shortName: "AZ Alkmaar", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/140.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 6, ga: 2, gd: "+4", pts: 6, form: ["W","L","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 11, name: "Omonia Nicosia", shortName: "Omonia", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/617.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, gd: "+1", pts: 6, form: ["W","W","L"], note: "Knockout phase playoffs - seeded" },
    { rank: 12, name: "Lyon", shortName: "Lyon", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/167.png", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 6, gd: "-1", pts: 6, form: ["W","W","L"], note: "Knockout phase playoffs - seeded" },
    { rank: 13, name: "Stade Rennais", shortName: "Rennes", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/169.png", played: 3, won: 1, drawn: 2, lost: 0, gf: 4, ga: 3, gd: "+1", pts: 5, form: ["W","W","D"], note: "Knockout phase playoffs - seeded" },
    { rank: 14, name: "Real Sociedad", shortName: "Real Sociedad", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/89.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 8, ga: 3, gd: "+5", pts: 4, form: ["W","L","D"], note: "Knockout phase playoffs - seeded" },
    { rank: 15, name: "Crystal Palace", shortName: "C Palace", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/384.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 8, ga: 5, gd: "+3", pts: 4, form: ["W","L","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 16, name: "Sparta Prague", shortName: "Sparta", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/433.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 5, ga: 3, gd: "+2", pts: 4, form: ["W","L","W"], note: "Knockout phase playoffs - seeded" },
    { rank: 17, name: "Levski Sofia", shortName: "Levski Sofia", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/490.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 3, ga: 3, gd: "0", pts: 4, form: ["L","W","W"], note: "Knockout phase playoffs - unseeded" },
    { rank: 18, name: "Dinamo Zagreb", shortName: "Dinamo Zagreb", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/597.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 3, ga: 4, gd: "-1", pts: 4, form: ["L","W","D"], note: "Knockout phase playoffs - unseeded" },
    { rank: 19, name: "SK Sturm Graz", shortName: "Sturm Graz", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3746.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 1, ga: 3, gd: "-2", pts: 4, form: ["D","W","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 20, name: "NEC Nijmegen", shortName: "NEC", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/147.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 5, ga: 8, gd: "-3", pts: 4, form: ["W","L","D"], note: "Knockout phase playoffs - unseeded" },
    { rank: 21, name: "RB Salzburg", shortName: "RB Salzburg", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2790.png", played: 3, won: 1, drawn: 1, lost: 1, gf: 3, ga: 6, gd: "-3", pts: 4, form: ["D","W","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 22, name: "Anderlecht", shortName: "Anderlecht", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/441.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 3, gd: "+1", pts: 3, form: ["W","L","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 23, name: "TSG Hoffenheim", shortName: "Hoffenheim", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7911.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 5, ga: 5, gd: "0", pts: 3, form: ["W","L","L"], note: "Knockout phase playoffs - unseeded" },
    { rank: 24, name: "AC Milan", shortName: "Milan", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/103.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 5, gd: "-1", pts: 3, form: ["L","L","W"], note: "Knockout phase playoffs - unseeded" },
    { rank: 25, name: "Celta Vigo", shortName: "Celta Vigo", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/85.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 4, gd: "-1", pts: 3, form: ["W","L","L"], note: "Eliminated" },
    { rank: 26, name: "OFI Crete", shortName: "OFI Crete", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1010.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 4, gd: "-1", pts: 3, form: ["W","L","L"], note: "Eliminated" },
    { rank: 27, name: "Jagiellonia Bialystok", shortName: "Jagiellonia ", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/11505.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 6, gd: "-2", pts: 3, form: ["L","W","L"], note: "Eliminated" },
    { rank: 28, name: "Torreense", shortName: "Torreense", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21615.png", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 7, gd: "-3", pts: 3, form: ["W","L","L"], note: "Eliminated" },
    { rank: 29, name: "NK Celje", shortName: "NK Celje", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3362.png", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 7, gd: "-5", pts: 1, form: ["L","L","D"], note: "Eliminated" },
    { rank: 30, name: "Hapoel Be'er", shortName: "Hapoel Be'er", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/13083.png", played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 6, gd: "-5", pts: 1, form: ["L","L","W"], note: "Eliminated" },
    { rank: 31, name: "Lillestrom", shortName: "Lillestrom", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/987.png", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 9, gd: "-7", pts: 1, form: ["L","L","W"], note: "Eliminated" },
    { rank: 32, name: "Lech Poznan", shortName: "Lech Poznan", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2990.png", played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 9, gd: "-8", pts: 1, form: ["D","L","L"], note: "Eliminated" },
    { rank: 33, name: "Viktoria Plzen", shortName: "Viktoria Plzen", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/11706.png", played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 7, gd: "-5", pts: 0, form: ["L","L","L"], note: "Eliminated" },
    { rank: 34, name: "Marseille", shortName: "Marseille", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/176.png", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 6, gd: "-5", pts: 0, form: ["L","L","L"], note: "Eliminated" },
    { rank: 35, name: "Celtic", shortName: "Celtic", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/256.png", played: 3, won: 0, drawn: 0, lost: 3, gf: 3, ga: 9, gd: "-6", pts: 0, form: ["L","L","L"], note: "Eliminated" },
    { rank: 36, name: "Ararat-Armenia", shortName: "Ararat-Armenia", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/20024.png", played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 11, gd: "-9", pts: 0, form: ["L","L","L"], note: "Eliminated" }
  ],
  laliga: [
    { rank: 1, name: "Barcelona", shortName: "Barcelona", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/83.png", played: 10, won: 9, drawn: 0, lost: 1, gf: 40, ga: 11, gd: "+29", pts: 27, form: ["W","W","W","L","W"], note: "Champions League" },
    { rank: 2, name: "Atlético Madrid", shortName: "Atlético", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1068.png", played: 10, won: 8, drawn: 1, lost: 1, gf: 20, ga: 8, gd: "+12", pts: 25, form: ["L","W","W","W","D"], note: "Champions League" },
    { rank: 3, name: "Real Madrid", shortName: "Real Madrid", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/86.png", played: 10, won: 8, drawn: 0, lost: 2, gf: 25, ga: 10, gd: "+15", pts: 24, form: ["L","W","W","W","L"], note: "Champions League" },
    { rank: 4, name: "Real Betis", shortName: "Betis", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/244.png", played: 10, won: 6, drawn: 2, lost: 2, gf: 16, ga: 14, gd: "+2", pts: 20, form: ["D","L","W","W","W"], note: "Champions League" },
    { rank: 5, name: "Real Sociedad", shortName: "Real Sociedad", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/89.png", played: 10, won: 6, drawn: 1, lost: 3, gf: 19, ga: 18, gd: "+1", pts: 19, form: ["L","D","W","W","L"], note: "Champions League" },
    { rank: 6, name: "Sevilla", shortName: "Sevilla", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/243.png", played: 10, won: 5, drawn: 2, lost: 3, gf: 16, ga: 16, gd: "0", pts: 17, form: ["W","W","W","W","D"], note: "Europa League" },
    { rank: 7, name: "Alavés", shortName: "Alavés", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/96.png", played: 10, won: 3, drawn: 3, lost: 4, gf: 14, ga: 11, gd: "+3", pts: 12, form: ["W","D","D","W","W"], note: "Conference League qualifying" },
    { rank: 8, name: "Athletic Club", shortName: "Athletic", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/93.png", played: 9, won: 3, drawn: 3, lost: 3, gf: 12, ga: 9, gd: "+3", pts: 12, form: ["W","D","D","W","W"], note: "" },
    { rank: 9, name: "Celta Vigo", shortName: "Celta Vigo", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/85.png", played: 10, won: 2, drawn: 6, lost: 2, gf: 10, ga: 7, gd: "+3", pts: 12, form: ["W","L","D","W","L"], note: "" },
    { rank: 10, name: "Villarreal", shortName: "Villarreal", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/102.png", played: 10, won: 3, drawn: 3, lost: 4, gf: 15, ga: 14, gd: "+1", pts: 12, form: ["W","L","W","W","D"], note: "Europa League" },
    { rank: 11, name: "Deportivo", shortName: "Deportivo", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/90.png", played: 10, won: 2, drawn: 5, lost: 3, gf: 13, ga: 13, gd: "0", pts: 11, form: ["W","W","D","L","D"], note: "" },
    { rank: 12, name: "Osasuna", shortName: "Osasuna", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/97.png", played: 10, won: 3, drawn: 2, lost: 5, gf: 10, ga: 20, gd: "-10", pts: 11, form: ["L","D","D","W","W"], note: "" },
    { rank: 13, name: "Racing Santander", shortName: "Racing", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/87.png", played: 10, won: 3, drawn: 2, lost: 5, gf: 15, ga: 26, gd: "-11", pts: 11, form: ["W","W","L","D","L"], note: "" },
    { rank: 14, name: "Levante", shortName: "Levante", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1538.png", played: 10, won: 2, drawn: 4, lost: 4, gf: 16, ga: 19, gd: "-3", pts: 10, form: ["W","D","W","L","L"], note: "" },
    { rank: 15, name: "Elche", shortName: "Elche", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3751.png", played: 10, won: 2, drawn: 4, lost: 4, gf: 14, ga: 17, gd: "-3", pts: 10, form: ["W","W","D","L","D"], note: "" },
    { rank: 16, name: "Rayo Vallecano", shortName: "Rayo", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/101.png", played: 9, won: 2, drawn: 3, lost: 4, gf: 12, ga: 20, gd: "-8", pts: 9, form: ["L","W","W","L","L"], note: "" },
    { rank: 17, name: "Getafe", shortName: "Getafe", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2922.png", played: 10, won: 2, drawn: 3, lost: 5, gf: 5, ga: 15, gd: "-10", pts: 9, form: ["W","D","W","D","D"], note: "" },
    { rank: 18, name: "Espanyol", shortName: "Espanyol", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/88.png", played: 10, won: 2, drawn: 2, lost: 6, gf: 12, ga: 14, gd: "-2", pts: 8, form: ["W","L","W","D","L"], note: "Relegation" },
    { rank: 19, name: "Valencia", shortName: "Valencia", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/94.png", played: 10, won: 1, drawn: 3, lost: 6, gf: 7, ga: 17, gd: "-10", pts: 6, form: ["W","D","D","D","L"], note: "Relegation" },
    { rank: 20, name: "Málaga", shortName: "Málaga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/99.png", played: 10, won: 0, drawn: 5, lost: 5, gf: 7, ga: 19, gd: "-12", pts: 5, form: ["D","D","D","L","D"], note: "Relegation" }
  ],
  seriea: [
    { rank: 1, name: "Internazionale", shortName: "Inter Milan", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/110.png", played: 9, won: 8, drawn: 1, lost: 0, gf: 25, ga: 10, gd: "+15", pts: 25, form: ["W","W","D","W","W"], note: "Champions League" },
    { rank: 2, name: "Lazio", shortName: "Lazio", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/112.png", played: 9, won: 8, drawn: 1, lost: 0, gf: 22, ga: 7, gd: "+15", pts: 25, form: ["W","W","W","W","W"], note: "Champions League" },
    { rank: 3, name: "AS Roma", shortName: "AS Roma", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/104.png", played: 9, won: 6, drawn: 3, lost: 0, gf: 23, ga: 8, gd: "+15", pts: 21, form: ["W","W","W","W","W"], note: "Champions League" },
    { rank: 4, name: "Como", shortName: "Como", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2572.png", played: 9, won: 6, drawn: 2, lost: 1, gf: 17, ga: 8, gd: "+9", pts: 20, form: ["D","L","W","W","W"], note: "Champions League" },
    { rank: 5, name: "AC Milan", shortName: "Milan", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/103.png", played: 9, won: 5, drawn: 3, lost: 1, gf: 18, ga: 11, gd: "+7", pts: 18, form: ["W","W","D","W","W"], note: "Europa League" },
    { rank: 6, name: "Frosinone", shortName: "Frosinone", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/4057.png", played: 9, won: 5, drawn: 2, lost: 2, gf: 22, ga: 14, gd: "+8", pts: 17, form: ["W","W","W","L","W"], note: "Europa League" },
    { rank: 7, name: "Napoli", shortName: "Napoli", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/114.png", played: 9, won: 4, drawn: 2, lost: 3, gf: 17, ga: 11, gd: "+6", pts: 14, form: ["W","L","D","L","W"], note: "Conference League qualifying" },
    { rank: 8, name: "Juventus", shortName: "Juventus", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/111.png", played: 9, won: 4, drawn: 2, lost: 3, gf: 11, ga: 10, gd: "+1", pts: 14, form: ["D","D","W","W","W"], note: "" },
    { rank: 9, name: "Torino", shortName: "Torino", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/239.png", played: 9, won: 4, drawn: 1, lost: 4, gf: 14, ga: 14, gd: "0", pts: 13, form: ["D","W","L","L","W"], note: "" },
    { rank: 10, name: "Cagliari", shortName: "Cagliari", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2925.png", played: 9, won: 4, drawn: 1, lost: 4, gf: 8, ga: 13, gd: "-5", pts: 13, form: ["D","W","W","W","W"], note: "" },
    { rank: 11, name: "Bologna", shortName: "Bologna", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/107.png", played: 9, won: 3, drawn: 2, lost: 4, gf: 12, ga: 12, gd: "0", pts: 11, form: ["W","W","L","W","D"], note: "" },
    { rank: 12, name: "Atalanta", shortName: "Atalanta", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/105.png", played: 9, won: 3, drawn: 2, lost: 4, gf: 16, ga: 17, gd: "-1", pts: 11, form: ["W","D","W","W","L"], note: "" },
    { rank: 13, name: "Genoa", shortName: "Genoa", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3263.png", played: 9, won: 3, drawn: 1, lost: 5, gf: 8, ga: 13, gd: "-5", pts: 10, form: ["L","W","D","L","W"], note: "" },
    { rank: 14, name: "Lecce", shortName: "Lecce", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/113.png", played: 9, won: 3, drawn: 0, lost: 6, gf: 10, ga: 19, gd: "-9", pts: 9, form: ["L","W","W","L","L"], note: "" },
    { rank: 15, name: "Sassuolo", shortName: "Sassuolo", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3997.png", played: 9, won: 2, drawn: 2, lost: 5, gf: 14, ga: 22, gd: "-8", pts: 8, form: ["W","L","D","W","D"], note: "" },
    { rank: 16, name: "Monza", shortName: "Monza", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/4007.png", played: 9, won: 2, drawn: 1, lost: 6, gf: 16, ga: 22, gd: "-6", pts: 7, form: ["W","W","L","L","L"], note: "" },
    { rank: 17, name: "Udinese", shortName: "Udinese", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/118.png", played: 9, won: 1, drawn: 2, lost: 6, gf: 9, ga: 18, gd: "-9", pts: 5, form: ["W","D","D","L","L"], note: "" },
    { rank: 18, name: "Fiorentina", shortName: "Fiorentina", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/109.png", played: 9, won: 1, drawn: 2, lost: 6, gf: 11, ga: 21, gd: "-10", pts: 5, form: ["W","D","D","L","L"], note: "Relegated" },
    { rank: 19, name: "Parma", shortName: "Parma", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/115.png", played: 9, won: 1, drawn: 2, lost: 6, gf: 5, ga: 15, gd: "-10", pts: 5, form: ["W","L","D","L","L"], note: "Relegated" },
    { rank: 20, name: "Venezia", shortName: "Venezia", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/17530.png", played: 9, won: 1, drawn: 0, lost: 8, gf: 6, ga: 19, gd: "-13", pts: 3, form: ["W","L","L","L","L"], note: "Relegated" }
  ],
  bundesliga: [
    { rank: 1, name: "Bayern Munich", shortName: "Bayern", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/132.png", played: 7, won: 5, drawn: 2, lost: 0, gf: 25, ga: 6, gd: "+19", pts: 17, form: ["W","D","W","W","W"], note: "Champions League" },
    { rank: 2, name: "Borussia Dortmund", shortName: "Dortmund", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/124.png", played: 7, won: 5, drawn: 2, lost: 0, gf: 12, ga: 4, gd: "+8", pts: 17, form: ["D","W","D","W","W"], note: "Champions League" },
    { rank: 3, name: "SC Freiburg", shortName: "Freiburg", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/126.png", played: 7, won: 4, drawn: 1, lost: 2, gf: 16, ga: 9, gd: "+7", pts: 13, form: ["W","W","W","W","D"], note: "Champions League" },
    { rank: 4, name: "Bayer Leverkusen", shortName: "Leverkusen", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/131.png", played: 7, won: 4, drawn: 1, lost: 2, gf: 16, ga: 12, gd: "+4", pts: 13, form: ["D","L","L","W","W"], note: "Champions League" },
    { rank: 5, name: "RB Leipzig", shortName: "RB Leipzig", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/11420.png", played: 7, won: 4, drawn: 0, lost: 3, gf: 20, ga: 11, gd: "+9", pts: 12, form: ["W","W","W","W","L"], note: "Europa League" },
    { rank: 6, name: "Werder Bremen", shortName: "Bremen", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/137.png", played: 7, won: 3, drawn: 3, lost: 1, gf: 15, ga: 14, gd: "+1", pts: 12, form: ["L","W","D","W","W"], note: "Europa League" },
    { rank: 7, name: "Mainz", shortName: "Mainz", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2950.png", played: 7, won: 3, drawn: 1, lost: 3, gf: 16, ga: 13, gd: "+3", pts: 10, form: ["W","W","D","L","L"], note: "Conference League qualifying" },
    { rank: 8, name: "SV Elversberg", shortName: "Elversberg", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/10388.png", played: 7, won: 3, drawn: 1, lost: 3, gf: 12, ga: 15, gd: "-3", pts: 10, form: ["W","D","L","W","W"], note: "" },
    { rank: 9, name: "FC Augsburg", shortName: "Augsburg", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3841.png", played: 7, won: 2, drawn: 3, lost: 2, gf: 17, ga: 13, gd: "+4", pts: 9, form: ["W","L","D","W","D"], note: "" },
    { rank: 10, name: "TSG Hoffenheim", shortName: "Hoffenheim", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7911.png", played: 7, won: 3, drawn: 0, lost: 4, gf: 14, ga: 14, gd: "0", pts: 9, form: ["L","L","L","W","L"], note: "" },
    { rank: 11, name: "Hamburg SV", shortName: "Hamburg", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/127.png", played: 7, won: 3, drawn: 0, lost: 4, gf: 6, ga: 16, gd: "-10", pts: 9, form: ["L","W","L","L","W"], note: "" },
    { rank: 12, name: "FC Cologne", shortName: "Cologne", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/122.png", played: 7, won: 2, drawn: 2, lost: 3, gf: 8, ga: 11, gd: "-3", pts: 8, form: ["W","D","W","L","L"], note: "" },
    { rank: 13, name: "SC Paderborn 07", shortName: "Paderborn", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3307.png", played: 7, won: 2, drawn: 2, lost: 3, gf: 6, ga: 9, gd: "-3", pts: 8, form: ["W","L","W","L","D"], note: "" },
    { rank: 14, name: "Eintracht Frankfurt", shortName: "Frankfurt", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/125.png", played: 7, won: 2, drawn: 2, lost: 3, gf: 10, ga: 17, gd: "-7", pts: 8, form: ["W","L","D","W","L"], note: "" },
    { rank: 15, name: "VfB Stuttgart", shortName: "Stuttgart", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/134.png", played: 7, won: 2, drawn: 0, lost: 5, gf: 10, ga: 13, gd: "-3", pts: 6, form: ["L","L","W","L","W"], note: "" },
    { rank: 16, name: "Schalke 04", shortName: "Schalke", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/133.png", played: 7, won: 1, drawn: 3, lost: 3, gf: 4, ga: 7, gd: "-3", pts: 6, form: ["L","D","W","L","D"], note: "Relegation playoff" },
    { rank: 17, name: "1. FC Union Berlin", shortName: "Union Berlin", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/598.png", played: 7, won: 1, drawn: 3, lost: 3, gf: 6, ga: 18, gd: "-12", pts: 6, form: ["L","L","L","D","W"], note: "Relegation" },
    { rank: 18, name: "Borussia Mönchengladbach", shortName: "Gladbach", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/268.png", played: 7, won: 1, drawn: 0, lost: 6, gf: 11, ga: 22, gd: "-11", pts: 3, form: ["W","L","L","L","L"], note: "Relegation" }
  ],
  ligue1: [
    { rank: 1, name: "Paris Saint-Germain", shortName: "PSG", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/160.png", played: 8, won: 5, drawn: 2, lost: 1, gf: 16, ga: 9, gd: "+7", pts: 17, form: ["L","W","W","D","W"], note: "Champions League" },
    { rank: 2, name: "Stade Rennais", shortName: "Rennes", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/169.png", played: 8, won: 5, drawn: 1, lost: 2, gf: 18, ga: 14, gd: "+4", pts: 16, form: ["W","D","L","L","W"], note: "Champions League" },
    { rank: 3, name: "Lille", shortName: "Lille", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/166.png", played: 8, won: 4, drawn: 3, lost: 1, gf: 11, ga: 6, gd: "+5", pts: 15, form: ["D","W","W","D","D"], note: "Champions League" },
    { rank: 4, name: "AS Monaco", shortName: "Monaco", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/174.png", played: 8, won: 4, drawn: 3, lost: 1, gf: 11, ga: 7, gd: "+4", pts: 15, form: ["L","W","W","W","W"], note: "Champions League qualifying" },
    { rank: 5, name: "Lyon", shortName: "Lyon", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/167.png", played: 8, won: 4, drawn: 2, lost: 2, gf: 13, ga: 7, gd: "+6", pts: 14, form: ["W","W","W","W","L"], note: "Europa League" },
    { rank: 6, name: "Paris FC", shortName: "Paris FC", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/6851.png", played: 8, won: 4, drawn: 2, lost: 2, gf: 13, ga: 9, gd: "+4", pts: 14, form: ["W","D","L","L","W"], note: "Europa League" },
    { rank: 7, name: "Lens", shortName: "Lens", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/175.png", played: 8, won: 4, drawn: 1, lost: 3, gf: 16, ga: 12, gd: "+4", pts: 13, form: ["W","D","W","W","L"], note: "Conference League qualifying" },
    { rank: 8, name: "Marseille", shortName: "Marseille", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/176.png", played: 8, won: 4, drawn: 0, lost: 4, gf: 18, ga: 13, gd: "+5", pts: 12, form: ["W","L","L","L","W"], note: "" },
    { rank: 9, name: "Lorient", shortName: "Lorient", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/273.png", played: 8, won: 3, drawn: 3, lost: 2, gf: 7, ga: 6, gd: "+1", pts: 12, form: ["W","W","D","W","L"], note: "" },
    { rank: 10, name: "Nice", shortName: "Nice", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2502.png", played: 8, won: 3, drawn: 2, lost: 3, gf: 8, ga: 10, gd: "-2", pts: 11, form: ["D","W","W","L","L"], note: "" },
    { rank: 11, name: "Toulouse", shortName: "Toulouse", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/179.png", played: 8, won: 2, drawn: 4, lost: 2, gf: 12, ga: 11, gd: "+1", pts: 10, form: ["D","W","W","L","L"], note: "" },
    { rank: 12, name: "AJ Auxerre", shortName: "Auxerre", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/172.png", played: 8, won: 3, drawn: 1, lost: 4, gf: 12, ga: 18, gd: "-6", pts: 10, form: ["D","W","L","L","W"], note: "" },
    { rank: 13, name: "Brest", shortName: "Brest", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/6997.png", played: 8, won: 2, drawn: 3, lost: 3, gf: 14, ga: 12, gd: "+2", pts: 9, form: ["W","D","W","L","L"], note: "" },
    { rank: 14, name: "Angers", shortName: "Angers", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7868.png", played: 8, won: 2, drawn: 2, lost: 4, gf: 9, ga: 15, gd: "-6", pts: 8, form: ["W","W","D","D","L"], note: "" },
    { rank: 15, name: "Le Mans", shortName: "Le Mans", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2697.png", played: 8, won: 1, drawn: 4, lost: 3, gf: 11, ga: 16, gd: "-5", pts: 7, form: ["W","D","L","D","D"], note: "" },
    { rank: 16, name: "Strasbourg", shortName: "Strasbourg", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/180.png", played: 8, won: 2, drawn: 1, lost: 5, gf: 12, ga: 18, gd: "-6", pts: 7, form: ["W","W","L","L","L"], note: "Relegation playoff" },
    { rank: 17, name: "Troyes", shortName: "Troyes", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/170.png", played: 8, won: 1, drawn: 2, lost: 5, gf: 5, ga: 16, gd: "-11", pts: 5, form: ["W","L","D","L","L"], note: "Relegation" },
    { rank: 18, name: "Le Havre AC", shortName: "Le Havre AC", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3236.png", played: 8, won: 0, drawn: 2, lost: 6, gf: 8, ga: 15, gd: "-7", pts: 2, form: ["L","D","L","L","L"], note: "Relegation" }
  ],
  eredivisie: [
    { rank: 1, name: "Feyenoord Rotterdam", shortName: "Feyenoord", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/142.png", played: 10, won: 7, drawn: 3, lost: 0, gf: 32, ga: 11, gd: "+21", pts: 24, form: ["W","W","D","W","D"], note: "Champions League" },
    { rank: 2, name: "Ajax Amsterdam", shortName: "Ajax", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/139.png", played: 10, won: 6, drawn: 3, lost: 1, gf: 29, ga: 13, gd: "+16", pts: 21, form: ["W","D","W","W","L"], note: "Champions League" },
    { rank: 3, name: "PSV Eindhoven", shortName: "PSV", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/148.png", played: 10, won: 6, drawn: 2, lost: 2, gf: 28, ga: 13, gd: "+15", pts: 20, form: ["D","W","W","W","W"], note: "Champions League qualifying" },
    { rank: 4, name: "FC Twente", shortName: "FC Twente", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/152.png", played: 10, won: 6, drawn: 2, lost: 2, gf: 19, ga: 10, gd: "+9", pts: 20, form: ["W","W","W","W","W"], note: "Europa League qualifying" },
    { rank: 5, name: "AZ Alkmaar", shortName: "AZ Alkmaar", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/140.png", played: 10, won: 6, drawn: 2, lost: 2, gf: 20, ga: 12, gd: "+8", pts: 20, form: ["W","L","W","W","L"], note: "Conference League qualifying" },
    { rank: 6, name: "Fortuna Sittard", shortName: "Fortuna", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/143.png", played: 10, won: 5, drawn: 3, lost: 2, gf: 17, ga: 17, gd: "0", pts: 18, form: ["W","L","W","W","W"], note: "" },
    { rank: 7, name: "Heerenveen", shortName: "Heerenveen", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/146.png", played: 10, won: 4, drawn: 3, lost: 3, gf: 18, ga: 13, gd: "+5", pts: 15, form: ["D","W","D","D","W"], note: "Europa League" },
    { rank: 8, name: "FC Groningen", shortName: "FC Groningen", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/145.png", played: 10, won: 4, drawn: 3, lost: 3, gf: 24, ga: 21, gd: "+3", pts: 15, form: ["W","W","W","W","D"], note: "" },
    { rank: 9, name: "Go Ahead Eagles", shortName: "Go Ahead Eagles", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3706.png", played: 10, won: 3, drawn: 5, lost: 2, gf: 23, ga: 23, gd: "0", pts: 14, form: ["L","W","L","W","W"], note: "" },
    { rank: 10, name: "SC Cambuur", shortName: "Cambuur", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3736.png", played: 10, won: 3, drawn: 3, lost: 4, gf: 19, ga: 22, gd: "-3", pts: 12, form: ["W","W","W","L","L"], note: "" },
    { rank: 11, name: "FC Utrecht", shortName: "FC Utrecht", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/153.png", played: 10, won: 3, drawn: 3, lost: 4, gf: 17, ga: 27, gd: "-10", pts: 12, form: ["L","W","D","W","W"], note: "" },
    { rank: 12, name: "NEC Nijmegen", shortName: "NEC", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/147.png", played: 10, won: 2, drawn: 5, lost: 3, gf: 17, ga: 18, gd: "-1", pts: 11, form: ["W","W","D","D","L"], note: "" },
    { rank: 13, name: "Excelsior", shortName: "Excelsior", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2566.png", played: 10, won: 3, drawn: 2, lost: 5, gf: 16, ga: 19, gd: "-3", pts: 11, form: ["L","L","L","W","W"], note: "" },
    { rank: 14, name: "Sparta Rotterdam", shortName: "Sparta", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/151.png", played: 10, won: 2, drawn: 3, lost: 5, gf: 17, ga: 24, gd: "-7", pts: 9, form: ["L","W","W","D","D"], note: "" },
    { rank: 15, name: "PEC Zwolle", shortName: "PEC Zwolle", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2565.png", played: 10, won: 2, drawn: 2, lost: 6, gf: 11, ga: 23, gd: "-12", pts: 8, form: ["W","L","W","L","D"], note: "" },
    { rank: 16, name: "Telstar", shortName: "Telstar", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3735.png", played: 10, won: 1, drawn: 3, lost: 6, gf: 12, ga: 21, gd: "-9", pts: 6, form: ["L","W","L","L","D"], note: "Relegation playoffs" },
    { rank: 17, name: "ADO Den Haag", shortName: "ADO Den Haag", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2726.png", played: 10, won: 1, drawn: 3, lost: 6, gf: 13, ga: 23, gd: "-10", pts: 6, form: ["W","L","D","D","D"], note: "Relegation" },
    { rank: 18, name: "Willem II", shortName: "Willem II", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/156.png", played: 10, won: 0, drawn: 2, lost: 8, gf: 10, ga: 32, gd: "-22", pts: 2, form: ["D","D","L","L","L"], note: "Relegation" }
  ],
  ligaportugal: [
    { rank: 1, name: "FC Porto", shortName: "FC Porto", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/437.png", played: 9, won: 9, drawn: 0, lost: 0, gf: 21, ga: 4, gd: "+17", pts: 27, form: ["W","W","W","W","W"], note: "Champions League" },
    { rank: 2, name: "Benfica", shortName: "Benfica", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1929.png", played: 9, won: 7, drawn: 1, lost: 1, gf: 26, ga: 8, gd: "+18", pts: 22, form: ["L","W","W","D","W"], note: "Champions League qualifying" },
    { rank: 3, name: "Sporting CP", shortName: "Sporting", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2250.png", played: 9, won: 5, drawn: 3, lost: 1, gf: 21, ga: 11, gd: "+10", pts: 18, form: ["W","D","W","L","W"], note: "Europa League qualifying" },
    { rank: 4, name: "Santa Clara", shortName: "Santa Clara", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/12215.png", played: 9, won: 5, drawn: 3, lost: 1, gf: 13, ga: 6, gd: "+7", pts: 18, form: ["W","W","W","W","W"], note: "Conference League qualifying" },
    { rank: 5, name: "Arouca", shortName: "Arouca", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/15784.png", played: 9, won: 5, drawn: 2, lost: 2, gf: 12, ga: 7, gd: "+5", pts: 17, form: ["D","L","L","W","W"], note: "" },
    { rank: 6, name: "Académico de Viseu", shortName: "Académico", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21607.png", played: 9, won: 5, drawn: 2, lost: 2, gf: 13, ga: 11, gd: "+2", pts: 17, form: ["W","W","W","W","W"], note: "" },
    { rank: 7, name: "Gil Vicente", shortName: "Gil Vicente", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3699.png", played: 9, won: 4, drawn: 2, lost: 3, gf: 8, ga: 7, gd: "+1", pts: 14, form: ["D","W","W","D","W"], note: "" },
    { rank: 8, name: "Braga", shortName: "Braga", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2994.png", played: 9, won: 3, drawn: 2, lost: 4, gf: 9, ga: 11, gd: "-2", pts: 11, form: ["W","W","W","D","L"], note: "" },
    { rank: 9, name: "Moreirense", shortName: "Moreirense", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3696.png", played: 9, won: 3, drawn: 2, lost: 4, gf: 11, ga: 16, gd: "-5", pts: 11, form: ["W","D","D","W","W"], note: "" },
    { rank: 10, name: "Alverca", shortName: "Alverca", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21613.png", played: 9, won: 3, drawn: 2, lost: 4, gf: 13, ga: 13, gd: "0", pts: 11, form: ["W","W","W","D","L"], note: "" },
    { rank: 11, name: "FC Famalicao", shortName: "FC Famalicao", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/12698.png", played: 9, won: 2, drawn: 4, lost: 3, gf: 14, ga: 11, gd: "+3", pts: 10, form: ["L","W","W","D","D"], note: "" },
    { rank: 12, name: "Estrela", shortName: "Estrela", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21610.png", played: 9, won: 2, drawn: 4, lost: 3, gf: 14, ga: 17, gd: "-3", pts: 10, form: ["W","W","L","L","D"], note: "" },
    { rank: 13, name: "Vitória de Guimaraes", shortName: "Vitória ", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/5309.png", played: 9, won: 2, drawn: 2, lost: 5, gf: 10, ga: 10, gd: "0", pts: 8, form: ["L","L","W","W","D"], note: "" },
    { rank: 14, name: "Maritimo", shortName: "Maritimo", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/552.png", played: 9, won: 2, drawn: 2, lost: 5, gf: 9, ga: 19, gd: "-10", pts: 8, form: ["W","D","L","W","L"], note: "" },
    { rank: 15, name: "Rio Ave", shortName: "Rio Ave", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3822.png", played: 9, won: 2, drawn: 1, lost: 6, gf: 8, ga: 21, gd: "-13", pts: 7, form: ["W","L","W","D","L"], note: "" },
    { rank: 16, name: "C.D. Nacional", shortName: "Nacional", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3472.png", played: 9, won: 2, drawn: 1, lost: 6, gf: 10, ga: 18, gd: "-8", pts: 7, form: ["W","L","W","D","L"], note: "Relegation playoff" },
    { rank: 17, name: "Casa Pia", shortName: "Casa Pia", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21581.png", played: 9, won: 2, drawn: 1, lost: 6, gf: 5, ga: 17, gd: "-12", pts: 7, form: ["W","W","D","L","L"], note: "Relegation" },
    { rank: 18, name: "Estoril", shortName: "Estoril", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/12216.png", played: 9, won: 0, drawn: 2, lost: 7, gf: 5, ga: 15, gd: "-10", pts: 2, form: ["L","L","D","L","D"], note: "Relegation" }
  ],
  saudi: [
    { rank: 1, name: "Al Qadsiah", shortName: "Al Qadsiah", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/22022.png", played: 12, won: 9, drawn: 1, lost: 2, gf: 32, ga: 12, gd: "+20", pts: 28, form: ["D","W","L","W","W"], note: "" },
    { rank: 2, name: "Al Nassr", shortName: "Al Nassr", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/817.png", played: 11, won: 9, drawn: 1, lost: 1, gf: 28, ga: 11, gd: "+17", pts: 28, form: ["D","L","W","W","W"], note: "" },
    { rank: 3, name: "Al Hilal", shortName: "Al Hilal", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/929.png", played: 10, won: 9, drawn: 0, lost: 1, gf: 30, ga: 9, gd: "+21", pts: 27, form: ["L","W","W","W","W"], note: "" },
    { rank: 4, name: "Al Ittihad", shortName: "Al Ittihad", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2276.png", played: 11, won: 7, drawn: 3, lost: 1, gf: 21, ga: 11, gd: "+10", pts: 24, form: ["D","L","W","W","W"], note: "" },
    { rank: 5, name: "Neom SC", shortName: "Neom SC", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/130899.png", played: 12, won: 7, drawn: 1, lost: 4, gf: 18, ga: 10, gd: "+8", pts: 22, form: ["W","W","W","L","W"], note: "" },
    { rank: 6, name: "Al Ahli", shortName: "Al Ahli", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8346.png", played: 10, won: 7, drawn: 0, lost: 3, gf: 27, ga: 13, gd: "+14", pts: 21, form: ["W","W","L","W","W"], note: "" },
    { rank: 7, name: "Al Ettifaq", shortName: "Al Ettifaq", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/8363.png", played: 11, won: 5, drawn: 3, lost: 3, gf: 17, ga: 16, gd: "+1", pts: 18, form: ["W","W","W","W","W"], note: "" },
    { rank: 8, name: "Al Diriyah", shortName: "Al Diriyah", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/131746.png", played: 12, won: 4, drawn: 3, lost: 5, gf: 10, ga: 13, gd: "-3", pts: 15, form: ["L","W","W","W","L"], note: "" },
    { rank: 9, name: "Al Khaleej", shortName: "Al Khaleej", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21829.png", played: 12, won: 3, drawn: 6, lost: 3, gf: 14, ga: 19, gd: "-5", pts: 15, form: ["W","W","W","D","L"], note: "" },
    { rank: 10, name: "Al Kholood", shortName: "Al Kholood", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/22028.png", played: 11, won: 3, drawn: 3, lost: 5, gf: 17, ga: 26, gd: "-9", pts: 12, form: ["W","W","W","L","D"], note: "" },
    { rank: 11, name: "Al Riyadh", shortName: "Al Riyadh", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21965.png", played: 11, won: 3, drawn: 3, lost: 5, gf: 11, ga: 25, gd: "-14", pts: 12, form: ["W","W","W","D","L"], note: "" },
    { rank: 12, name: "Al Shabab", shortName: "Al Shabab", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/793.png", played: 10, won: 2, drawn: 5, lost: 3, gf: 14, ga: 14, gd: "0", pts: 11, form: ["W","W","D","L","D"], note: "" },
    { rank: 13, name: "Al Hazem", shortName: "Al Hazem", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21964.png", played: 12, won: 2, drawn: 4, lost: 6, gf: 14, ga: 20, gd: "-6", pts: 10, form: ["W","D","W","D","D"], note: "" },
    { rank: 14, name: "Al Faisaly", shortName: "Al Faisaly", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21446.png", played: 11, won: 2, drawn: 4, lost: 5, gf: 12, ga: 20, gd: "-8", pts: 10, form: ["W","D","D","L","D"], note: "" },
    { rank: 15, name: "Al Fayha", shortName: "Al Fayha", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21827.png", played: 11, won: 1, drawn: 5, lost: 5, gf: 12, ga: 19, gd: "-7", pts: 8, form: ["W","D","D","L","L"], note: "" },
    { rank: 16, name: "Al Fateh", shortName: "Al Fateh", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/13033.png", played: 11, won: 1, drawn: 3, lost: 7, gf: 10, ga: 23, gd: "-13", pts: 6, form: ["W","L","D","L","L"], note: "" },
    { rank: 17, name: "Al Taawoun", shortName: "Al Taawoun", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/18459.png", played: 11, won: 0, drawn: 4, lost: 7, gf: 5, ga: 19, gd: "-14", pts: 4, form: ["L","D","D","D","D"], note: "" },
    { rank: 18, name: "Abha", shortName: "Abha", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/21833.png", played: 11, won: 0, drawn: 3, lost: 8, gf: 7, ga: 19, gd: "-12", pts: 3, form: ["L","D","D","L","D"], note: "" }
  ],
  turkish: [
    { rank: 1, name: "Galatasaray", shortName: "Galatasaray", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/432.png", played: 9, won: 7, drawn: 1, lost: 1, gf: 19, ga: 12, gd: "+7", pts: 22, form: ["L","W","W","W","D"], note: "Champions League" },
    { rank: 2, name: "Amed SFK", shortName: "Amed SFK", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/132335.png", played: 9, won: 6, drawn: 2, lost: 1, gf: 20, ga: 10, gd: "+10", pts: 20, form: ["D","W","W","D","W"], note: "Champions League qualifying" },
    { rank: 3, name: "Trabzonspor", shortName: "Trabzonspor", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/997.png", played: 9, won: 6, drawn: 1, lost: 2, gf: 22, ga: 8, gd: "+14", pts: 19, form: ["L","D","L","W","W"], note: "Europa League qualifying" },
    { rank: 4, name: "Besiktas", shortName: "Besiktas", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1895.png", played: 9, won: 6, drawn: 0, lost: 3, gf: 18, ga: 10, gd: "+8", pts: 18, form: ["W","L","W","L","L"], note: "Conference League qualifying" },
    { rank: 5, name: "Fenerbahce", shortName: "Fenerbahce", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/436.png", played: 9, won: 5, drawn: 1, lost: 3, gf: 23, ga: 8, gd: "+15", pts: 16, form: ["L","W","W","W","W"], note: "" },
    { rank: 6, name: "Kasimpasa", shortName: "Kasimpasa", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/6870.png", played: 9, won: 4, drawn: 4, lost: 1, gf: 13, ga: 9, gd: "+4", pts: 16, form: ["W","W","W","W","L"], note: "" },
    { rank: 7, name: "Kocaelispor", shortName: "Kocaelispor", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/995.png", played: 9, won: 5, drawn: 0, lost: 4, gf: 11, ga: 9, gd: "+2", pts: 15, form: ["W","W","W","L","W"], note: "" },
    { rank: 8, name: "Erzurum BB", shortName: "Erzurum", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/19267.png", played: 9, won: 4, drawn: 2, lost: 3, gf: 8, ga: 12, gd: "-4", pts: 14, form: ["L","W","W","W","W"], note: "" },
    { rank: 9, name: "Çorum FK", shortName: "Çorum FK", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/132334.png", played: 9, won: 4, drawn: 1, lost: 4, gf: 18, ga: 15, gd: "+3", pts: 13, form: ["W","W","W","W","L"], note: "" },
    { rank: 10, name: "Goztepe", shortName: "Goztepe", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/789.png", played: 9, won: 3, drawn: 3, lost: 3, gf: 19, ga: 16, gd: "+3", pts: 12, form: ["D","W","W","L","W"], note: "" },
    { rank: 11, name: "Alanyaspor", shortName: "Alanyaspor", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/9078.png", played: 9, won: 3, drawn: 3, lost: 3, gf: 9, ga: 11, gd: "-2", pts: 12, form: ["W","W","L","D","L"], note: "" },
    { rank: 12, name: "Istanbul Basaksehir", shortName: "Istanbul BB", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7914.png", played: 9, won: 3, drawn: 2, lost: 4, gf: 12, ga: 14, gd: "-2", pts: 11, form: ["W","D","W","W","D"], note: "" },
    { rank: 13, name: "Caykur Rizespor", shortName: "Caykur Rizespor", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7656.png", played: 9, won: 3, drawn: 1, lost: 5, gf: 11, ga: 15, gd: "-4", pts: 10, form: ["W","L","W","L","W"], note: "" },
    { rank: 14, name: "Konyaspor", shortName: "Konyaspor", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/7648.png", played: 9, won: 2, drawn: 2, lost: 5, gf: 6, ga: 9, gd: "-3", pts: 8, form: ["W","W","D","D","L"], note: "" },
    { rank: 15, name: "Gaziantep FK", shortName: "Gaziantep", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/20070.png", played: 9, won: 2, drawn: 2, lost: 5, gf: 9, ga: 15, gd: "-6", pts: 8, form: ["W","W","L","L","D"], note: "" },
    { rank: 16, name: "Genclerbirligi", shortName: "Genclerbirli", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/996.png", played: 9, won: 2, drawn: 2, lost: 5, gf: 7, ga: 18, gd: "-11", pts: 8, form: ["W","W","D","L","D"], note: "Relegated" },
    { rank: 17, name: "Samsunspor", shortName: "Samsunspor", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/11429.png", played: 9, won: 1, drawn: 1, lost: 7, gf: 8, ga: 21, gd: "-13", pts: 4, form: ["L","W","D","L","L"], note: "Relegated" },
    { rank: 18, name: "Eyupspor", shortName: "Eyupspor", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/20729.png", played: 9, won: 1, drawn: 0, lost: 8, gf: 2, ga: 23, gd: "-21", pts: 3, form: ["W","L","L","L","L"], note: "Relegated" }
  ],
  scottish: [
    { rank: 1, name: "Celtic", shortName: "Celtic", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/256.png", played: 11, won: 9, drawn: 1, lost: 1, gf: 27, ga: 8, gd: "+19", pts: 28, form: ["L","W","W","W","W"], note: "Champions League qualifying" },
    { rank: 2, name: "Rangers", shortName: "Rangers", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/257.png", played: 11, won: 7, drawn: 3, lost: 1, gf: 19, ga: 9, gd: "+10", pts: 24, form: ["W","W","D","W","L"], note: "Champions League qualifying" },
    { rank: 3, name: "Heart of Midlothian", shortName: "Hearts", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/262.png", played: 11, won: 6, drawn: 2, lost: 3, gf: 24, ga: 17, gd: "+7", pts: 20, form: ["W","W","D","L","D"], note: "Conference League qualifying" },
    { rank: 4, name: "Dundee", shortName: "Dundee", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/261.png", played: 11, won: 5, drawn: 2, lost: 4, gf: 17, ga: 13, gd: "+4", pts: 17, form: ["D","W","W","D","W"], note: "Conference League qualifying" },
    { rank: 5, name: "Dundee United", shortName: "Dundee Utd", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/264.png", played: 11, won: 4, drawn: 4, lost: 3, gf: 16, ga: 16, gd: "0", pts: 16, form: ["W","W","W","L","D"], note: "" },
    { rank: 6, name: "Falkirk", shortName: "Falkirk", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/254.png", played: 11, won: 4, drawn: 3, lost: 4, gf: 13, ga: 12, gd: "+1", pts: 15, form: ["D","D","D","W","L"], note: "" },
    { rank: 7, name: "St Mirren", shortName: "St Mirren", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/250.png", played: 11, won: 4, drawn: 2, lost: 5, gf: 12, ga: 19, gd: "-7", pts: 14, form: ["W","W","W","W","D"], note: "" },
    { rank: 8, name: "St Johnstone", shortName: "St Johnstone", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/267.png", played: 11, won: 3, drawn: 4, lost: 4, gf: 13, ga: 17, gd: "-4", pts: 13, form: ["W","W","D","W","L"], note: "" },
    { rank: 9, name: "Aberdeen", shortName: "Aberdeen", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/263.png", played: 11, won: 3, drawn: 2, lost: 6, gf: 12, ga: 14, gd: "-2", pts: 11, form: ["D","W","W","L","D"], note: "" },
    { rank: 10, name: "Motherwell", shortName: "Motherwell", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/266.png", played: 11, won: 2, drawn: 3, lost: 6, gf: 13, ga: 20, gd: "-7", pts: 9, form: ["L","D","D","W","W"], note: "" },
    { rank: 11, name: "Hibernian", shortName: "Hibernian", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/258.png", played: 11, won: 2, drawn: 2, lost: 7, gf: 11, ga: 17, gd: "-6", pts: 8, form: ["L","L","D","W","W"], note: "Relegation playoff" },
    { rank: 12, name: "Kilmarnock", shortName: "Kilmarnock", logo: "https://a.espncdn.com/i/teamlogos/soccer/500/260.png", played: 11, won: 2, drawn: 2, lost: 7, gf: 11, ga: 26, gd: "-15", pts: 8, form: ["W","W","L","L","D"], note: "Relegation" }
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


