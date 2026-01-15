import { projectsDT } from "@/types/project-d-t";
//home main project
import project1 from "../../public/assets/img/home-01/project/project-1.png";
import project2 from "../../public/assets/img/home-01/project/project-2.jpg";
import project3 from "../../public/assets/img/home-01/project/project-3.png";
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
    link: "https://play.google.com/store/apps/details?id=com.moneyes.app",
  },
  {
    id: 2,
    title: "Administration & plateformes métier",
    image: project2,
    categories: ["Website", "Administration"],
    link: "#",
  },
  {
    id: 3,
    title: "Pilotage & monitoring",
    image: project3,
    categories: ["Website", "Pilotage", "Monitoring"],
    link: "#",
  },
];

export default projectsData;
