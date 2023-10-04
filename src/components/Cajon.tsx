import React, { useState } from 'react';
import { IonInput, IonButton } from '@ionic/react';


const Cajon: React.FC = () => {
  // Crea un estado que almacene el número que se muestra en el cajón
  const [numero, setNumero] = useState(0);

  // Crea una función que aumente el número en uno
  const sumar = () => {
    setNumero(numero + 1);
  };

  // Crea una función que disminuya el número en uno, si no es negativo
  const restar = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  // Devuelve el código JSX que renderice el cajón y los botones
  return (
    <div style={{ padding: '15px 15px 15px 30px', width: '100%', display: 'flex' }}>
      {/* Crea un cajón con el valor del estado */}
      <IonInput id="cajon" type="number" value={numero} ></IonInput>

      {/* Crea un botón para sumar uno al valor del cajón */}
      <IonButton color="primary" onClick={sumar} style={{ padding: '0px 5px', width: '50%', display: 'flex' }}>
        +
      </IonButton>

      {/* Crea un botón para restar uno al valor del cajón, si no es negativo */}
      <IonButton color="primary" onClick={restar} style={{ padding: '0px 5px', width: '50%', display: 'flex' }}>
        -
      </IonButton>
    </div>
  );
};

export default Cajon;
