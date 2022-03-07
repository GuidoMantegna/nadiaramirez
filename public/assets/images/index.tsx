import { type } from "os";
import Alocasia from "./Ilustraciones/Alocasia.jpg";
import CamisaAmarilla from "./Ilustraciones/CamisaAmarilla.jpg";
import Circus from "./Ilustraciones/Circus.jpg";
import Cocodrilo from "./Ilustraciones/Cocodrilo.jpg";
import ColaPez from "./Ilustraciones/ColaPez.jpg";
import Croac from "./Ilustraciones/Croac.jpg";
import Cuarentena from "./Ilustraciones/Cuarentena.jpg";
import Headphones from "./Ilustraciones/Headphones.jpg";
import Jungla from "./Ilustraciones/Jungla.jpg";
import Mano from "./Ilustraciones/Mano.jpg";
import Osito from "./Ilustraciones/Osito.jpg";
import Otro from "./Ilustraciones/Otro.jpg";
import PajaroAmarillo from "./Ilustraciones/PajaroAmarillo.jpg";
import PanueloCeleste from "./Ilustraciones/PanueloCeleste.jpg";
import Perrito from "./Ilustraciones/Perrito.jpg";
import Zebrita from "./Ilustraciones/Zebrita.jpg";

type ImagesType = {
  src: any;
  id: number;
  alt: string;
};

const illustrations: ImagesType[] = [
  { src: Alocasia, id: 1, alt: "Alocasia" },
  { src: CamisaAmarilla, id: 2, alt: "CamisaAmarilla" },
  { src: Circus, id: 3, alt: "Circus" },
  { src: Cocodrilo, id: 4, alt: "Cocodrilo" },
  { src: ColaPez, id: 5, alt: "ColaPez" },
  { src: Croac, id: 6, alt: "Croac" },
  { src: Cuarentena, id: 7, alt: "Cuarentena" },
  { src: Headphones, id: 8, alt: "Headphones" },
  { src: Jungla, id: 9, alt: "Jungla" },
  { src: Mano, id: 10, alt: "Mano" },
  { src: Osito, id: 11, alt: "Osito" },
  { src: Otro, id: 12, alt: "Otro" },
  { src: PajaroAmarillo, id: 13, alt: "PajaroAmarillo" },
  { src: PanueloCeleste, id: 14, alt: "PanueloCeleste" },
  { src: Perrito, id: 15, alt: "Perrito" },
  { src: Zebrita, id: 16, alt: "Zebrita" },
];

export default illustrations;
