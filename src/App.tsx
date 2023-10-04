import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { triangle, square, ellipse } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Page1 from "./pages/Page1"; // Importa el componente Page1 desde el archivo Page1.tsx
import Page2 from "./pages/Page2"; // Importa el componente Page2 desde el archivo Page2.tsx
import Page3 from "./pages/Page3"; // Importa el componente Page3 desde el archivo Page3.tsx

setupIonicReact();

const App: React.FC = () => {
  const tabName = "Hola",
    tab2Name = "Mundo",
    tab3Name = "3-DAM-PGL";
  return (
    <IonApp>
      <IonReactRouter>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>

        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <IonPage>
                <Page1 />
              </IonPage>
            </Route>

            <Route exact path="/tab2">
              <IonPage>
                <Page2 />
              </IonPage>
            </Route>

            <Route path="/tab3">
              <IonPage>
                <Page3 />
              </IonPage>
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>{tabName}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>{tab2Name}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={square} />
              <IonLabel>{tab3Name}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
