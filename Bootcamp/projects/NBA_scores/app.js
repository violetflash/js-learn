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

const ulParent = document.createElement('ul');
ulParent.style.listStyle = 'none';
ulParent.style.margin = '0';
ulParent.style.padding = '0';
document.body.append(ulParent);

for ( let game of warriorsGames ) {
  const {awayTeam,homeTeam} = game;
  const {team: aTeam, points: aPoints} = awayTeam;
  const {team: hTeam, points: hPoints} = homeTeam;
  const score = awayTeam.isWinner ? `<b>${aPoints}</b>-${hPoints}` : `${aPoints}-<b>${hPoints}</b>`;
  const warriors = aTeam === 'Golden State' ? awayTeam : homeTeam;

  const li = document.createElement('li');
  li.innerHTML = `${aTeam} @ ${hTeam} ${score}`;
  li.classList.add(warriors.isWinner ? `win` : `loss`);
  li.style.padding = '5px 0';
  li.style.width = '600px';
  li.style.marginBottom = '2px';
  ulParent.appendChild(li);
}
