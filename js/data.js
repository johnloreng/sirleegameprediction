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
    leagueId: 'epl',
    leagueName: 'English Premier League',
    country: 'England',
    flag: '🇬🇧',
    round: 'Gameweek 10',
    status: 'SCHEDULED',
    time: '20:00',
    isBanker: true,
    badgeText: '👑 BANKER OF THE DAY',
    badgeType: 'gold',
    homeTeam: {
      name: 'Arsenal',
      shortName: 'ARS',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9825.png',
      rank: 2,
      form: ['W', 'W', 'W', 'D', 'W'],
      xG: 2.34
    },
    awayTeam: {
      name: 'Manchester City',
      shortName: 'MCI',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8456.png',
      rank: 1,
      form: ['W', 'D', 'W', 'W', 'L'],
      xG: 2.18
    },
    prediction: {
      primary: 'Home Win or Draw (1X)',
      probability: '82%',
      primaryType: '1X',
      correctScore: '2 - 1',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.82',
      btts: 'Yes',
      fullGameScore: 'Arsenal 2 - 1 Man City',
      confidenceRating: 5,
      confidenceText: 'Ultra High (92%)',
      reasoning: 'Arsenal remain unbeaten at Emirates Stadium across their last 14 fixtures, averaging 2.45 goals. Manchester City have shown defensive vulnerability in transitions, conceding in 4 consecutive away outings.'
    },
    stats: {
      h2h: { homeWins: 4, draws: 3, awayWins: 5, lastResult: 'Man City 2-2 Arsenal' },
      homeAvgGoalsScored: 2.4,
      homeAvgGoalsConceded: 0.7,
      awayAvgGoalsScored: 2.1,
      awayAvgGoalsConceded: 1.2,
      referee: 'Michael Oliver (Avg 3.6 cards/game)'
    }
  },
  {
    id: 'm2',
    leagueId: 'ucl',
    leagueName: 'UEFA Champions League',
    country: 'Europe',
    flag: '🇪🇺',
    round: 'League Phase - Matchday 4',
    status: 'SCHEDULED',
    time: '21:00',
    isBanker: true,
    badgeText: '🔥 HIGH CONFIDENCE',
    badgeType: 'neon',
    homeTeam: {
      name: 'Real Madrid',
      shortName: 'RMA',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8633.png',
      rank: 3,
      form: ['W', 'W', 'L', 'W', 'W'],
      xG: 2.65
    },
    awayTeam: {
      name: 'AC Milan',
      shortName: 'ACM',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8564.png',
      rank: 6,
      form: ['L', 'W', 'D', 'W', 'L'],
      xG: 1.35
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '79%',
      primaryType: '1',
      correctScore: '3 - 1',
      averageGoals: 'Over 2.5 & BTTS',
      averageGoalsOdds: '1.95',
      btts: 'Yes',
      fullGameScore: 'Real Madrid 3 - 1 AC Milan',
      confidenceRating: 5,
      confidenceText: 'Very High (88%)',
      reasoning: 'Real Madrid at the Santiago Bernabéu in Champions League nights produce dominant attacking metrics. Milan have struggled with pace against inverted wingers in European competition.'
    },
    stats: {
      h2h: { homeWins: 6, draws: 2, awayWins: 3, lastResult: 'Real Madrid 3-2 AC Milan' },
      homeAvgGoalsScored: 2.8,
      homeAvgGoalsConceded: 0.9,
      awayAvgGoalsScored: 1.4,
      awayAvgGoalsConceded: 1.5,
      referee: 'Slavko Vinčić'
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
    leagueId: 'epl',
    leagueName: 'English Premier League',
    country: 'England',
    flag: '🇬🇧',
    round: 'Gameweek 10',
    status: 'UPCOMING',
    time: '16:00',
    isBanker: true,
    badgeText: '🌟 EARLY VALUE PICK',
    badgeType: 'gold',
    homeTeam: {
      name: 'Chelsea',
      shortName: 'CHE',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8455.png',
      rank: 4,
      form: ['W', 'W', 'D', 'L', 'W'],
      xG: 2.15
    },
    awayTeam: {
      name: 'Manchester United',
      shortName: 'MUN',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10267.png',
      rank: 8,
      form: ['W', 'L', 'D', 'W', 'L'],
      xG: 1.62
    },
    prediction: {
      primary: 'Both Teams To Score (BTTS: Yes)',
      probability: '86%',
      primaryType: 'BTTS',
      correctScore: '2 - 2',
      averageGoals: 'Over 2.5 Goals',
      averageGoalsOdds: '1.72',
      btts: 'Yes (86%)',
      fullGameScore: 'Chelsea 2 - 2 Man United',
      confidenceRating: 5,
      confidenceText: 'High Confidence (87%)',
      reasoning: 'Chelsea vs Manchester United fixtures have yielded 19 goals in their past 4 encounters. Both outfits possess elite attacking talent paired with porous transition defense.'
    },
    stats: {
      h2h: { homeWins: 3, draws: 5, awayWins: 4, lastResult: 'Chelsea 4-3 Man United' },
      homeAvgGoalsScored: 2.2,
      homeAvgGoalsConceded: 1.3,
      awayAvgGoalsScored: 1.5,
      awayAvgGoalsConceded: 1.6,
      referee: 'Robert Jones'
    }
  },
  {
    id: 't2',
    leagueId: 'ucl',
    leagueName: 'UEFA Champions League',
    country: 'Europe',
    flag: '🇪🇺',
    round: 'League Phase - Matchday 4',
    status: 'UPCOMING',
    time: '21:00',
    isBanker: true,
    badgeText: '👑 TOMORROW BANKER',
    badgeType: 'neon',
    homeTeam: {
      name: 'Paris Saint-Germain',
      shortName: 'PSG',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9847.png',
      rank: 1,
      form: ['W', 'W', 'W', 'D', 'W'],
      xG: 2.40
    },
    awayTeam: {
      name: 'Atletico Madrid',
      shortName: 'ATM',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png',
      rank: 4,
      form: ['W', 'L', 'W', 'W', 'L'],
      xG: 1.45
    },
    prediction: {
      primary: 'Home Win (1)',
      probability: '77%',
      primaryType: '1',
      correctScore: '2 - 0',
      averageGoals: 'Under 3.5 Goals',
      averageGoalsOdds: '1.58',
      btts: 'No',
      fullGameScore: 'PSG 2 - 0 Atletico Madrid',
      confidenceRating: 4,
      confidenceText: 'Very High (84%)',
      reasoning: 'PSG need 3 points at the Parc des Princes. Atletico away from the Metropolitano have struggled in continental tests, conceding first in 3 of their last 4 away games.'
    },
    stats: {
      h2h: { homeWins: 1, draws: 1, awayWins: 1, lastResult: 'First UCL meeting' },
      homeAvgGoalsScored: 2.3,
      homeAvgGoalsConceded: 0.8,
      awayAvgGoalsScored: 1.4,
      awayAvgGoalsConceded: 1.1,
      referee: 'Szymon Marciniak'
    }
  },
  {
    id: 't3',
    leagueId: 'bundesliga',
    leagueName: 'Bundesliga',
    country: 'Germany',
    flag: '🇩🇪',
    round: 'Matchday 9',
    status: 'UPCOMING',
    time: '15:30',
    isBanker: false,
    badgeText: '🎯 SHARP PICK',
    badgeType: 'cyan',
    homeTeam: {
      name: 'Borussia Dortmund',
      shortName: 'BVB',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9789.png',
      rank: 5,
      form: ['L', 'W', 'L', 'W', 'L'],
      xG: 2.30
    },
    awayTeam: {
      name: 'RB Leipzig',
      shortName: 'RBL',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/178475.png',
      rank: 2,
      form: ['W', 'W', 'W', 'D', 'W'],
      xG: 2.10
    },
    prediction: {
      primary: 'Over 2.5 Goals & BTTS',
      probability: '88%',
      primaryType: 'OV25',
      correctScore: '2 - 3',
      averageGoals: 'Over 3.5 Goals (High Value)',
      averageGoalsOdds: '2.05',
      btts: 'Yes (92%)',
      fullGameScore: 'Dortmund 2 - 3 RB Leipzig',
      confidenceRating: 4,
      confidenceText: 'High Value (86%)',
      reasoning: 'Signal Iduna Park hosts two of Europe most explosive offenses. Both sides prioritize vertical transition over ball retention, ensuring high shot volume.'
    },
    stats: {
      h2h: { homeWins: 6, draws: 1, awayWins: 7, lastResult: 'RB Leipzig 4-1 Dortmund' },
      homeAvgGoalsScored: 2.5,
      homeAvgGoalsConceded: 1.7,
      awayAvgGoalsScored: 2.2,
      awayAvgGoalsConceded: 0.9,
      referee: 'Tobias Stieler'
    }
  }
];

const LIVE_MATCHES = [
  {
    id: 'l1',
    leagueId: 'ucl',
    leagueName: 'UEFA Champions League',
    country: 'Europe',
    flag: '🇪🇺',
    status: 'LIVE',
    minute: 68,
    homeScore: 1,
    awayScore: 1,
    momentumTeam: 'home',
    momentumPercent: 72,
    homeTeam: {
      name: 'Liverpool',
      shortName: 'LIV',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8650.png',
      stats: { possession: 64, shots: 17, shotsOnTarget: 7, dangerousAttacks: 58 }
    },
    awayTeam: {
      name: 'Bayer Leverkusen',
      shortName: 'B04',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8178.png',
      stats: { possession: 36, shots: 6, shotsOnTarget: 2, dangerousAttacks: 22 }
    },
    liveTip: {
      market: 'Over 2.5 Goals (In-Play Tip)',
      confidence: '89%',
      tipReason: 'Anfield pressure is peaking. Liverpool has generated 8 box touches in the last 6 minutes with 0.82 xG surge.',
      recommendedAction: 'BACK OVER 2.5 GOALS NOW @ 1.85',
      secondaryLiveTip: 'Next Goal: Liverpool (78% probability)'
    }
  },
  {
    id: 'l2',
    leagueId: 'laliga',
    leagueName: 'La Liga EA Sports',
    country: 'Spain',
    flag: '🇪🇸',
    status: 'LIVE',
    minute: 54,
    homeScore: 2,
    awayScore: 0,
    momentumTeam: 'home',
    momentumPercent: 81,
    homeTeam: {
      name: 'Atletico Madrid',
      shortName: 'ATM',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png',
      stats: { possession: 58, shots: 12, shotsOnTarget: 5, dangerousAttacks: 44 }
    },
    awayTeam: {
      name: 'Las Palmas',
      shortName: 'LPA',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8306.png',
      stats: { possession: 42, shots: 3, shotsOnTarget: 0, dangerousAttacks: 14 }
    },
    liveTip: {
      market: 'Atletico Madrid Clean Sheet (In-Play)',
      confidence: '93%',
      tipReason: 'Las Palmas have registered 0 shots on target through 54 minutes. Simeone has shifted into low-block game control.',
      recommendedAction: 'BACK ATLETICO WIN TO NIL @ 1.55',
      secondaryLiveTip: 'Full Time Correct Score: 2-0 or 3-0'
    }
  },
  {
    id: 'l3',
    leagueId: 'seriea',
    leagueName: 'Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    status: 'LIVE',
    minute: 81,
    homeScore: 0,
    awayScore: 1,
    momentumTeam: 'home',
    momentumPercent: 88,
    homeTeam: {
      name: 'Juventus',
      shortName: 'JUV',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9885.png',
      stats: { possession: 71, shots: 21, shotsOnTarget: 8, dangerousAttacks: 74 }
    },
    awayTeam: {
      name: 'Parma',
      shortName: 'PAR',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10167.png',
      stats: { possession: 29, shots: 4, shotsOnTarget: 2, dangerousAttacks: 16 }
    },
    liveTip: {
      market: 'Juventus to Score Next Goal',
      confidence: '85%',
      tipReason: 'Parma goalkeeper under sustained siege. Juventus pushing 6 players inside the 18-yard box with 9 corners won.',
      recommendedAction: 'JUVENTUS NEXT GOAL @ 2.10',
      secondaryLiveTip: 'Late Equalizer Expected (81st - 90th min)'
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


