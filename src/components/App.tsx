import React, { useState } from 'react';

// Constants 
import { CurrentViewOptions } from '../common/constants/constants';

// Interfaces
import ITeam from '../common/interaces/ITeam';

// Custom components
import HeaderBar from './HeaderBar/HeaderBar';
import JumbotronHeader from './JumbotronHeader/JumbotronHeader';
import MainNavbar from './MainNavbar/MainNavbar';
import SportsTable from './DataTables/SportTable/SportTable';
import TeamTable from './DataTables/TeamTable/TeamTable';
import IPlayer from '../common/interaces/IPlayer';

const mockFootballTeamsData: Array<ITeam> = [
  {
    teamName: 'Sports Team 1',
    managerName: 'Manager 1',
    numPlayers: 55
  },
  {
    teamName: 'Sports Team 2',
    managerName: 'Manager 2',
    numPlayers: 55
  },
  {
    teamName: 'Sports Team 3',
    managerName: 'Manager 3',
    numPlayers: 54
  }
]

const mockTeamsPlayersData: Array<IPlayer> = [
  {
    firstName: 'Player',
    lastName: 'One'
  },
  {
    firstName: 'Player',
    lastName: 'Two',
    position: 'Position 1',
    playerNumber: 1,
    salary: 100000
  },
  {
    firstName: 'Player',
    lastName: 'Three',
    playerNumber: 2
  }
]

function App() {
  const [currentView, setCurrentView] = useState<CurrentViewOptions>(CurrentViewOptions.SPORT);

  return (
    <div className="App">
      <JumbotronHeader />
      <MainNavbar setCurrentView={setCurrentView}/>
      <HeaderBar curViewOption={CurrentViewOptions.SPORT} sportName={'Football'} />
      {currentView === CurrentViewOptions.SPORT &&
        <SportsTable teams={mockFootballTeamsData} />
      }
      {currentView === CurrentViewOptions.TEAM &&
        <TeamTable players={mockTeamsPlayersData} />
      }
    </div>
  );
}

export default App;
