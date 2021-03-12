const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

//*******************************************************

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');
  ulParent.style.listStyle = 'none';
  ulParent.style.margin = '0 0 20px 20px';
  ulParent.style.padding = '0';

  for ( let game of games ) {
    const {awayTeam,homeTeam} = game;


    const li = document.createElement('li');
    li.innerHTML = getScoreLine(game);
    li.classList.add(isWinner(game, targetTeam) ? `win` : `loss`);
    li.style.padding = '5px 0 5px 10px';
    li.style.width = '600px';
    li.style.marginBottom = '2px';
    ulParent.appendChild(li);
  }
  return ulParent;
}

const isWinner = ({awayTeam, homeTeam}, targetTeam) => {
  const target = homeTeam.team === targetTeam ? awayTeam : homeTeam;
  return target.isWinner;
}

const getScoreLine = ({awayTeam, homeTeam}) => {
  const {team: aTeam, points: aPoints} = awayTeam;
  const {team: hTeam, points: hPoints} = homeTeam;
  const score = awayTeam.isWinner ? `<b>${aPoints}</b>-${hPoints}` : `${aPoints}-<b>${hPoints}</b>`;
  return `${aTeam} @ ${hTeam} ${score}`;
}

const chart1 = makeChart(warriorsGames, 'Golden State');
document.querySelector('#gs').appendChild(chart1);


const chart2 = makeChart(warriorsGames, 'Houston');
document.querySelector('#hr').appendChild(chart2);



