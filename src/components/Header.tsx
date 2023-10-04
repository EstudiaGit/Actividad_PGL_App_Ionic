// Este es el código del archivo Header.tsx

import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import React from "react";

// Define el tipo de los props del componente Header
type HeaderProps = {
  // El título del Header, por defecto es "Hello World App"
  title?: string;
  // El color del Header, por defecto es "primary"
  color?: string;
};

// Define el componente Header
const Header: React.FC<HeaderProps> = ({
  title = "Hello World App",
  color = "primary",
}) => {
  return (
    <IonHeader>
      <IonToolbar color={color}>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

// Exporta el componente Header
export default Header;
