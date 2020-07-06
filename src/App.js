import React from "react";
import { Admin, Resource } from "react-admin";

import PlayerList from "./pages/Player/player-list";
import PlayerEdit from "./pages/Player/player-edit";
import PlayerShow from "./pages/Player/player-show";
import PlayerIcon from '@material-ui/icons/Group';

import PlatformList from "./pages/Platform/platform-list";
import PlatformEdit from "./pages/Platform/platform-edit";
import PlatformCreate from "./pages/Platform/platform-create";
import PlatformIcon from '@material-ui/icons/SportsEsports';

import DuelsList from "./pages/Duels/duels-list";
import DuelsShow from "./pages/Duels/duels-show";
import DuelsIcon from '@material-ui/icons/Sports';

import TermsList from "./pages/Terms/terms-list";
import TermsEdit from "./pages/Terms/terms-edit";
import TermsIcon from '@material-ui/icons/Description';

import privacyPolicyList from "./pages/PrivacyPolicy/privacyPolicy-list";
import privacyPolicyEdit from "./pages/PrivacyPolicy/privacyPolicy-edit";
import privacyPolicyIcon from '@material-ui/icons/Gavel';

import './style.scss';
import myTheme from "./theme/Theme";
import LoginPage from './components/LoginPage/LoginPage';


import dataProvider from "./services/data-provider";
import authProvider from './services/auth-provider';

function App() {
  return (
    <>
      <Admin theme={myTheme} loginPage={LoginPage} dataProvider={dataProvider()} authProvider={authProvider}>
      <Resource
          name="player"
          list={PlayerList}
          edit={PlayerEdit}
          show={PlayerShow}
          icon={PlayerIcon}
        />
      <Resource
          name="console"
          list={PlatformList}
          edit={PlatformEdit}
          create={PlatformCreate}
          icon={PlatformIcon}
        />
        <Resource
          name="duel"
          list={DuelsList}
          show={DuelsShow}
          icon={DuelsIcon}
        />
         <Resource
          name="term"
          list={TermsList}
          edit={TermsEdit}
          icon={TermsIcon}
        />
        <Resource
          name="privacy"
          list={privacyPolicyList}
          edit={privacyPolicyEdit}
          icon={privacyPolicyIcon}
        />       
      </Admin>
    </>
  );
}

export default App;


