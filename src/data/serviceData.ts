import {
  BrandingIcon,
  BusinessConsultationIcon,
  BusinessGrowthIcon,
  ChartIcon,
  ExpertSupportIcon,
  HexagonIcon,
  ImageQualityIcon,
  LayersIcon,
  LightningBoltIcon,
  ProfessionalBusinessIcon,
  ReliableWxpertIcon,
  ShieldIcon,
  ShoppingCartIcon,
  UIUXDesignIcon,
  WebDevelopmentIcon,
} from "@/svg/ServiesIcons";
import { servicesDT } from "@/types/service-d-t";
import service1 from "../../public/assets/img/home-01/service/service-1.jpg";
import service2 from "../../public/assets/img/home-01/service/service-2.jpg";
import service3 from "../../public/assets/img/home-01/service/service-3.jpg";
import service4 from "../../public/assets/img/home-01/service/service-4.jpg";
//home-5 design agency light service image
import service5 from "../../public/assets/img/home-05/service/service-1.jpg";
import service6 from "../../public/assets/img/home-05/service/service-2.jpg";
import service7 from "../../public/assets/img/home-05/service/service-3.jpg";
import service8 from "../../public/assets/img/home-05/service/service-4.jpg";
//home-6 Creative agency light service image
import service9 from "../../public/assets/img/home-06/service/service-1.jpg";
import service10 from "../../public/assets/img/home-06/service/service-2.jpg";
import service11 from "../../public/assets/img/home-06/service/service-3.jpg";
import service12 from "../../public/assets/img/home-06/service/service-4.jpg";
import service13 from "../../public/assets/img/home-06/service/service-5.jpg";
import service14 from "../../public/assets/img/home-06/service/service-6.jpg";
//home-5 IT Solution service icon
import icon1 from "../../public/assets/img/home-11/feature/icon-1.png";
import icon2 from "../../public/assets/img/home-11/feature/icon-2.png";
import icon3 from "../../public/assets/img/home-11/feature/icon-3.png";
import icon4 from "../../public/assets/img/home-11/feature/icon-4.png";
import icon5 from "../../public/assets/img/home-11/feature/icon-5.png";
//home startup agency service image
import stService1 from "../../public/assets/img/home-12/service/st-service-1.jpg";
import stService2 from "../../public/assets/img/home-12/service/st-service-2.jpg";
import stService3 from "../../public/assets/img/home-12/service/st-service-3.jpg";
import stService4 from "../../public/assets/img/home-12/service/st-service-4.jpg";
//inner service-1 images
import service17 from "../../public/assets/img/inner-service/service-1.jpg";
import service18 from "../../public/assets/img/inner-service/service-2.jpg";
import service15 from "../../public/assets/img/inner-service/service-3.jpg";
import service16 from "../../public/assets/img/inner-service/service-4.jpg";
import service19 from "../../public/assets/img/inner-service/service-5.jpg";
import service20 from "../../public/assets/img/inner-service/service-6.jpg";
import service21 from "../../public/assets/img/inner-service/service-7.jpg";
import service22 from "../../public/assets/img/inner-service/service-8.jpg";

const servicesData: servicesDT[] = [
  //Home main services data start
  {
    id: 1,
    title: "Site web",
    image: service1,
    description:
      "Notre service de création de site web vous accompagne de la conception à la mise en ligne, en développant des sites vitrines, institutionnels ou e-commerce entièrement adaptés à vos besoins. Nous mettons l'accent sur l'ergonomie, le design moderne, la performance et la sécurité afin d'assurer à votre entreprise une présence digitale efficace, facile à piloter et évolutive dans le temps.",
    categories: ["Vitrine", "E-commerce", "Institutionnel"],
    link: "/service-details-light",
  },
  {
    id: 2,
    title: "Application mobile/desktop",
    image: service2,
    description:
      "Nos services de développement d'application mobile se concentrent sur la création d'applications intuitives qui résonnent avec votre audience et se démarquent sur le marché.",
    categories: ["Intuitives", "Ergonomique", "Performante", "Sécurisée"],
    link: "/service-details-light",
  },
  {
    id: 3,
    title: "Logiciel sur mesure",
    image: service3,
    description:
      "Nous développons des logiciels sur mesure, pensés pour répondre précisément à vos besoins métiers. Que ce soit pour automatiser vos processus, centraliser vos données ou innover dans votre activité, notre accompagnement prend en compte chaque étape du projet : analyse, conception, développement, déploiement et maintenance. Notre priorité : un logiciel simple à utiliser, performant et évolutif, qui s'intègre parfaitement dans votre environnement existant et accélère la création de valeur pour votre organisation.",
    categories: ["Personnalisé", "Optimisation métier"],
    link: "/service-details-light",
  },
  {
    id: 4,
    title: "Identité de Marque",
    image: service4,
    description:
      "C'est le cœur de l'identité de votre entreprise. Il guide toutes les décisions commerciales, garantissant une présence cohérente et impactante sur le marché.",
    categories: [
      "Recherche & Insights",
      "Moyens uniques",
      "Proposition de valeur",
      "Nommage",
      "Identité verbale",
    ],
    link: "/service-details-light",
  },
  //Home main services data end
  //Home two services data start
  {
    id: 5,
    title: "Marketing SEO",
    description:
      "Nous nous immergeons dans vos problématiques et mettons nos connaissances et notre expertise à votre service",
    link: "/service-details-light",
  },
  {
    id: 6,
    title: "Marketing Social",
    description:
      "Nous nous immergeons dans vos problématiques et mettons nos connaissances et notre expertise à votre service",
    link: "/service-details-light",
  },
  {
    id: 7,
    title: "Marketing de Contenu",
    description:
      "Nous nous immergeons dans vos problématiques et mettons nos connaissances et notre expertise à votre service",
    link: "/service-details-light",
  },
  {
    id: 8,
    title: "Marketing Email",
    description:
      "Nous nous immergeons dans vos problématiques et mettons nos connaissances et notre expertise à votre service",
    link: "/service-details-light",
  },
  //Home two services data end
  {
    id: 9,
    title: "Identité de Marque",
    categories: [
      "Design de logo",
      "Guide de marque",
      "Identité visuelle",
      "Emails personnalisés",
      "Présentations",
    ],
    link: "/service-details-2-light",
  },
  {
    id: 10,
    title: "Identité",
    categories: [
      "Design de logo",
      "Guide de marque",
      "Identité visuelle",
      "Emails personnalisés",
      "Présentations",
    ],
    link: "/service-details-2-light",
  },
  {
    id: 11,
    title: "Impact",
    categories: [
      "Design de logo",
      "Guide de marque",
      "Identité visuelle",
      "Emails personnalisés",
      "Présentations",
    ],
    link: "/service-details-2-light",
  },
  // home five design agency light data start
  {
    id: 12,
    slug: "collapseOne",
    number: "01",
    title: "application mobile",
    image: service5,
    description:
      "Notre objectif est l'influence sauvage de votre marque. Des logos exclusifs, des maquettes et des identités d'entreprise font ressortir votre valeur unique.",
    categories: [
      "Design de logo",
      "Guide de marque",
      "Identité visuelle",
      "Présentations",
    ],
    isExpanded: true,
    link: "/service-details-2-light",
  },
  {
    id: 13,
    slug: "collapseTwo",
    number: "02",
    title: "identité de marque",
    image: service6,
    description:
      "Notre objectif est l'influence sauvage de votre marque. Des logos exclusifs, des maquettes et des identités d'entreprise font ressortir votre valeur unique.",
    categories: [
      "Design de logo",
      "Guide de marque",
      "Identité visuelle",
      "Présentations",
    ],
    isExpanded: false,
    link: "/service-details-2-light",
  },
  {
    id: 14,
    slug: "collapseThree",
    number: "03",
    title: "design ux",
    image: service7,
    description:
      "Notre objectif est l'influence sauvage de votre marque. Des logos exclusifs, des maquettes et des identités d'entreprise font ressortir votre valeur unique.",
    categories: [
      "Design de logo",
      "Guide de marque",
      "Identité visuelle",
      "Présentations",
    ],
    isExpanded: false,
    link: "/service-details-2-light",
  },
  {
    id: 15,
    slug: "collapseFour",
    number: "04",
    title: "développement",
    image: service8,
    description:
      "Notre objectif est l'influence sauvage de votre marque. Des logos exclusifs, des maquettes et des identités d'entreprise font ressortir votre valeur unique.",
    categories: [
      "Design de logo",
      "Guide de marque",
      "Identité visuelle",
      "Présentations",
    ],
    isExpanded: false,
    link: "/service-details-2-light",
  },
  // home five design agency light data end

  // home Six Creative agency light data start
  {
    id: 16,
    number: "01",
    title: "application mobile",
    image: service9,
    link: "/service-details-2-light",
  },
  {
    id: 17,
    number: "02",
    title: "design UI / UX",
    image: service10,
    link: "/service-details-2-light",
  },
  {
    id: 18,
    number: "03",
    title: "Services de Modélisation 3D",
    image: service11,
    link: "/service-details-2-light",
  },
  {
    id: 19,
    number: "04",
    title: "Direction Créative",
    image: service12,
    link: "/service-details-2-light",
  },
  {
    id: 20,
    number: "05",
    title: "Développement WEB",
    image: service13,
    link: "/service-details-2-light",
  },
  {
    id: 21,
    number: "06",
    title: "Identité de Marque",
    image: service14,
    link: "/service-details-2-light",
  },
  // home Six Creative agency light data end
  // home eight Unique Ai Image light data start
  {
    id: 22,
    svgIcon: ExpertSupportIcon,
    title: "Support Expert",
    description: "Notre équipe a l'expertise pour vous aider à réussir.",
    delay: ".3",
    link: "/service-details-2-light",
  },
  {
    id: 23,
    svgIcon: ReliableWxpertIcon,
    title: "Experts Fiables",
    description: "Notre équipe a l'expertise pour vous aider à réussir.",
    delay: ".5",
    link: "/service-details-2-light",
  },
  {
    id: 24,
    svgIcon: ImageQualityIcon,
    title: "Qualité d'Image",
    description: "Notre équipe a l'expertise pour vous aider à réussir.",
    delay: ".7",
    link: "/service-details-2-light",
  },
  // home eight Unique Ai Image light data start
  {
    id: 25,
    delay: ".3",
    svgIcon: BusinessConsultationIcon,
    title: "Conseil d'Entreprise",
    description:
      "Notre équipe d'experts vous accompagne dans vos décisions stratégiques pour faire croître votre entreprise.",
    link: "/service-details-2-light",
  },
  {
    id: 26,
    delay: ".5",
    svgIcon: ProfessionalBusinessIcon,
    title: "Entreprise Professionnelle",
    description:
      "Nous offrons des services professionnels de haute qualité pour répondre à tous vos besoins d'entreprise.",
    link: "/service-details-2-light",
  },
  {
    id: 27,
    delay: ".7",
    svgIcon: BusinessGrowthIcon,
    title: "Croissance d'Entreprise",
    description:
      "Accélérez la croissance de votre entreprise avec nos stratégies éprouvées et notre expertise.",
    link: "/service-details-2-light",
  },
  // home nine Corporate Agency light data start

  //home twelve IT Solution feature data start
  {
    id: 28,
    title: "Conseil IT",
    image: icon1,
    description:
      "Faites confiance à nos meilleurs experts pour éliminer les points de friction du workflow, implémenter de nouvelles technologies et applications.",
    categories: ["Stratégie", "Conseil", "Gestion"],
    colorClass: "color-1",
    delay: ".3",
    link: "/service-details-light",
  },
  {
    id: 29,
    title: "Sécurité des Données",
    image: icon2,
    description:
      "Faites confiance à nos meilleurs experts pour éliminer les points de friction du workflow, implémenter de nouvelles technologies et applications.",
    categories: ["Gestion", "Sauvegarde & Récupération", "Transfert"],
    colorClass: "color-2",
    delay: ".5",
    link: "/service-details-light",
  },
  {
    id: 30,
    title: "Conseil IT",
    image: icon3,
    description:
      "Faites confiance à nos meilleurs experts pour éliminer les points de friction du workflow, implémenter de nouvelles technologies et applications.",
    categories: ["Stratégie", "Conseil", "Gestion"],
    colorClass: "color-3",
    delay: ".7",
    link: "/service-details-light",
  },
  {
    id: 31,
    title: "Services Cloud",
    image: icon4,
    description:
      "Faites confiance à nos meilleurs experts pour éliminer les points de friction du workflow, implémenter de nouvelles technologies et applications.",
    categories: ["Stockage Cloud", "Hébergement & VPS"],
    colorClass: "color-4",
    delay: ".3",
    link: "/service-details-light",
  },
  {
    id: 32,
    title: "Design UI/UX",
    image: icon5,
    description:
      "Faites confiance à nos meilleurs experts pour éliminer les points de friction du workflow, implémenter de nouvelles technologies et applications.",
    categories: ["Site web", "Page d'atterrissage", "Application mobile"],
    colorClass: "color-5",
    delay: ".5",
    link: "/service-details-light",
  },
  //home twelve service feature data end

  //Home Crypto Currency Service data start
  {
    id: 33,
    svgIcon: ShoppingCartIcon,
    title: "Acheter & Vendre Cryptomonnaie",
    description:
      "Achetez et vendez des cryptomonnaies rapidement et en toute sécurité sur notre plateforme de confiance.",
    link: "/service-details-2-light",
  },
  {
    id: 34,
    svgIcon: LightningBoltIcon,
    title: "Trading Crypto Avancé",
    description:
      "Passez votre trading au niveau supérieur avec notre plateforme puissante et haute vitesse",
    link: "/service-details-2-light",
  },
  {
    id: 35,
    svgIcon: ShieldIcon,
    title: "Portefeuille Crypto Sécurisé",
    description: "Vos actifs sont protégés par un chiffrement multicouche.",
    link: "/service-details-2-light",
  },
  {
    id: 36,
    svgIcon: LayersIcon,
    title: "Staking & Revenus Passifs",
    description:
      "Gagnez des récompenses sur vos avoirs crypto en faisant du staking avec notre plateforme sécurisée",
    link: "/service-details-2-light",
  },
  {
    id: 37,
    svgIcon: ChartIcon,
    title: "Solutions Of-Ramp",
    description:
      "Tous les retraits sont protégés par un chiffrement de pointe de l'industrie",
    link: "/service-details-2-light",
  },
  {
    id: 38,
    svgIcon: HexagonIcon,
    title: "Intégration Blockchain",
    description:
      "Déposez vos cryptos dans des pools de liquidité et gagnez des intérêts sur vos actifs.",
    link: "/service-details-2-light",
  },

  //Home Crypto Currency Service data end

  //Home Startup Agency Service data start
  {
    id: 39,
    title: "DÉVELOPPEMENT",
    image: stService1,
    categories: [
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
    ],
    link: "/service-details-light",
  },
  {
    id: 40,
    title: "MARKETING",
    image: stService2,
    categories: [
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
    ],
    link: "/service-details-light",
  },
  {
    id: 41,
    title: "GRAPHISME",
    image: stService3,
    categories: [
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
    ],
    link: "/service-details-light",
  },
  {
    id: 42,
    title: "TECHNOLOGIE",
    image: stService4,
    categories: [
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
      "Design UX",
      "Tests utilisateurs",
      "Prototype produit",
      "UI Mobile",
      "Design application web",
    ],
    link: "/service-details-light",
  },
  //Home Startup Agency Service data end

  //service data for service-1 inner page
  {
    id: 43,
    title: "Identité de Marque",
    spacingCls: "mb-200",
    text: [
      "Une identité de marque forte distingue votre startup, signalant qualité et professionnalisme.",
      "Elle construit la confiance avec votre audience, vous permettant de vous démarquer sur un marché saturé.",
    ],
    categories: [
      "Nommage de marque",
      "Direction créative",
      "Stratégie de marque",
      "Charte graphique",
      "Design de logo",
    ],
    images: [service15, service16],
    link: "/service-details-2-light",
  },
  {
    id: 44,
    title: "Design Digital",
    spacingCls: "mb-200",
    text: [
      "Un processus d'hypothèse et de validation visant à prendre en compte toutes les variables nécessaires, qui sont toujours personnalisées et doivent être découvertes",
      "Chaque entreprise a un potentiel numérique, et nous sommes là pour vous aider à exploiter ce potentiel.",
    ],
    categories: [
      "Wireframe",
      "Design UI",
      "Prototypage",
      "Système de design",
      "Audit UI & UX",
      "Système de design",
      "Expériences interactives",
    ],
    images: [service17, service18],
    link: "/service-details-2-light",
  },
  {
    id: 45,
    title: "Actifs Marketing",
    spacingCls: "mb-200",
    text: [
      "La stratégie marketing est fièrement responsable de la moitié du succès d'une campagne, l'autre moitié dépend uniquement de sa mise en œuvre.",
      "Nous nous concentrons sur la création de visuels qui communiquent votre valeur et engagent votre audience.",
    ],
    categories: [
      "Logos animés",
      "Illustrations de produits",
      "Vidéos de lancement",
      "Illustrations",
      "Effets visuels",
      "Illustration 3D",
    ],
    images: [service19, service20],
    link: "/service-details-2-light",
  },
  {
    id: 46,
    title: "Développement",
    spacingCls: "",
    text: [
      "Efficacité et évolutivité. Les deux facteurs avec lesquels toute décision est filtrée - langage de programmation, framework, bibliothèque, chaque ligne de code et côté serveur",
    ],
    categories: ["Intégration", "Front-end", "Back-end", "Webflow"],
    images: [service21, service22],
    link: "/service-details-2-light",
  },
  //service four inner page service data
  {
    id: 47,
    title: "Design d'Identité de Marque",
    description:
      "C'est le cœur de l'identité de votre entreprise. Il guide toutes les décisions commerciales.",
    svgIcon: BrandingIcon,
    link: "/service-details-light",
  },
  {
    id: 48,
    title: "Design UI/UX",
    description:
      "C'est le cœur de l'identité de votre entreprise. Il guide toutes les décisions commerciales.",
    svgIcon: UIUXDesignIcon,
    link: "/service-details-light",
  },
  {
    id: 49,
    title: "Développement Web",
    description:
      "C'est le cœur de l'identité de votre entreprise. Il guide toutes les décisions commerciales.",
    svgIcon: WebDevelopmentIcon,
    link: "/service-details-light",
  },
  {
    id: 50,
    title: "Design d'Identité de Marque",
    description:
      "C'est le cœur de l'identité de votre entreprise. Il guide toutes les décisions commerciales.",
    svgIcon: BrandingIcon,
    link: "/service-details-light",
  },
  {
    id: 51,
    title: "Design UI/UX",
    description:
      "C'est le cœur de l'identité de votre entreprise. Il guide toutes les décisions commerciales.",
    svgIcon: UIUXDesignIcon,
    link: "/service-details-light",
  },
  //Service details two data
  {
    id: 52,
    svgIcon: BrandingIcon,
    title: "Stratégie et positionnement de marque",
    link: "/service-details-2-light",
    delay: ".3",
    categories: [
      "+ Découverte de marque",
      "+ Voix de marque & Messaging",
      "+ Stratégie de positionnement de marque",
    ],
  },
  {
    id: 53,
    svgIcon: UIUXDesignIcon,
    title: "Logo & Identité Visuelle",
    titleBr: ["Logo & Identité", "Visuelle"],
    link: "/service-details-2-light",
    delay: ".5",
    categories: [
      "+ Design de logo personnalisé",
      "+ Palette de couleurs & Typographie",
      "+ Iconographie & Actifs graphiques",
    ],
  },
  {
    id: 54,
    svgIcon: WebDevelopmentIcon,
    title: "Refonte & Rafraîchissement de marque",
    titleBr: ["Refonte & Rafraîchissement", "de marque"],
    link: "/service-details-2-light",
    delay: ".7",
    categories: [
      "+ Audit & Analyse de marque",
      "+ Visuel & Messaging",
      "+ Repositionnement sur le marché",
    ],
  },
];

export default servicesData;
