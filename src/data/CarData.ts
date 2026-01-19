export type Car = {
  id: number
  name: string
  image: string
  category: string
}

import  Previa from '../image/Cars/Toyata Previa MPV Car.jpg'
import Camry2005 from '../image/Cars/Toyota Camry 2005.jpg'
import Camry2006 from '../image/Cars/Toyota Camry 2006.jpg'
import Corrola2005 from '../image/Cars/Toyota Corrola 2005.jpg'
import Corrola2008 from '../image/Cars/Toyota Corrola 2008.jpg'
import Highlander2004 from '../image/Cars/Toyota Highlander  2004 SUV.jpg'
import Highlander2003 from '../image/Cars/Toyota Highlander 2003 SUV.jpg'
import Highlander2006 from '../image/Cars/Toyota Highlander 2006.jpg'
import Highlander20062 from '../image/Cars/Toyota Highlander 2006 (2).jpg'
import Highlander2007 from '../image/Cars/Toyota Highlander 2007.jpg'
import Sienna2005 from '../image/Cars/Toyota Sienna 2005.jpg'
import Sienna2006 from '../image/Cars/Toyota Sienna 2006 SUV.jpg'
import Sienna from '../image/Cars/Toyota Sienna.jpg'
import Hilux from '../image/Cars/Toyota Hilux.jpg'
export const cars: Car[] = [
  { id: 1, name: "Toyota Camry 2005", image: Camry2005, category: "Car" },
  { id: 2, name: "Toyota Corolla 2008", image: Corrola2008, category: "Car" },
  { id: 3, name: "Toyota Corrola 2005", image: Corrola2005, category: "Car" },
  { id: 4, name: "Toyota Camry 2006", image: Camry2006, category: "Car" },
  { id: 5, name: "Toyota Previa MPV", image: Previa, category: "Jeep" },
  { id: 6, name: "Toyota Sienna 2005", image: Sienna2005, category: "SUV" },
  { id: 7, name: "Toyota Sienna 2006", image: Sienna2006, category: "SUV" },
  { id: 8, name: "Toyota Highlander 2004", image: Highlander2004, category: "SUV" },
  { id: 9, name: "Toyota Highlander 2003", image: Highlander2003, category: "SUV" },
  { id: 10, name: "Toyota Highlander 2006", image: Highlander2006, category: "Jeep" },
  { id: 11, name: "Toyota Highlander 2006", image: Highlander20062, category: "Jeep" },
  { id: 12, name: "Toyota Highlander 2007", image: Highlander2007, category: "Jeep" },
   { id: 13, name: "Toyota Sienna 2008", image: Sienna, category: "Jeep" },
   { id: 14, name: "2012 Toyota Hilux", image: Hilux2012, category: "Jeep" },
]
