import { projectsDT } from "@/types/project-d-t";
//home main project
import project1 from "../../public/assets/img/home-01/project/project-1.jpg";
import project2 from "../../public/assets/img/home-01/project/project-2.jpg";
import project4 from "../../public/assets/img/home-01/project/project-4.jpg";
//home 3 project image

//home 4 project image

//home 5 project image
//home 6 project image

//home 7 project image

//home 8 project image

//home 9 project image
//home IT Solution project image

// Home Personal Portfolio Project image

//portfolio metro images

export const projectsData: projectsDT[] = [
  {
    id: 1,
    title: "Moneyes",
    image: project1,
    categories: ["Application mobile", "Finance"],
    link: "/portfolio-details-gallery-light",
  },
  {
    id: 2,
    title: "Administration & plateformes métier",
    image: project4,
    categories: ["Website", "Administration", "Plateformes métier"],
    link: "/portfolio-details-gallery-light",
  },
  {
    id: 3,
    title: "Pilotage & monitoring",
    image: project2,
    categories: ["Website", "Pilotage", "Monitoring"],
    link: "/portfolio-details-gallery-light",
  },
];

export default projectsData;
