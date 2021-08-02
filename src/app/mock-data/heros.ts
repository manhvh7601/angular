import { Hero } from '../models/Hero';
export const HEROES: Array<Hero> = [
  { id: 11, 
    name: 'Dr Nice', 
    img: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2019/8/21/750466/Sinh-Nhat-Mot-Ong-Em-01.jpg',
    skills: [
      {
        id: 1,
        name: "Java"
      },
      {
        id: 2,
        name: "C-sharp"
      }
    ],
    
  },
  { id: 12, 
    name: 'Narco', 
    img: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2019/8/21/750466/Sinh-Nhat-Mot-Ong-Em-01.jpg',
    skills: [
      {
        id: 3,
        name: "PHP"
      },
      {
        id: 4,
        name: "ECMA"
      }
    ],

  },
  { id: 13, 
    name: 'Bombasto', 
    img: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2019/8/21/750466/Sinh-Nhat-Mot-Ong-Em-01.jpg',
    skills: [

    ],

  },
];