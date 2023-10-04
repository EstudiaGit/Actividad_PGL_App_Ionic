// Este es el código del archivo Page3.tsx

import { IonPage, IonFooter } from "@ionic/react";
import React from "react";
import Cajon from "../components/Cajon"; // Importa el componente Cajon
import Header from "../components/Header"; // Importa el componente Header desde el archivo Header.tsx

// Define el tipo de los props del componente Page3
type Page1Props = {
  // El título de la página, por defecto es "Page 3"
  title?: string;
  // La imagen de fondo de la página, por defecto es una imagen predeterminada
  image?: string;
};

// Define el componente Page1
const Page3: React.FC<Page1Props> = ({
  title = "Tercera",
  image = "https://i.postimg.cc/8CfJjwry/background-8.jpg",
}) => {
  return (
    <IonPage>
      <Header />
      {/* Establecer la imagen de fondo */}
      <div
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Ajusta la altura según tus necesidades
          position: "relative", // Permite posicionar elementos encima de la imagen
        }}
      >
        {/* Banner con el título de la página */}
        <div
          style={{
            position: "absolute",
            top: "10%", // Centra verticalmente
            left: "50%", // Centra horizontalmente
            transform: "translate(-50%, -50%)", // Centra el contenido en el centro
            backgroundColor: "rgba(var(--ion-color-primary-rgb), 0.8)", // Fondo del banner con opacidad
            padding: "10px 15px 10px 15px", // Espaciado interior del banner
            borderRadius: "5px", // Bordes redondeados
          }}
        >
          <h1>{title}</h1>
        </div>
      </div>

      <IonFooter>
        <Cajon />{" "}
      </IonFooter>
    </IonPage>
  );
};

// Exporta el componente Page1
export default Page3;
