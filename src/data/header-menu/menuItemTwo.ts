// Define menu data
interface MenuItem {
    title: string;
    href: string;
    subItems?: MenuItem[];
    static?:boolean
};

const menuItemsTwo: MenuItem[] = [
    {
        title: "Accueil",
        href: "#",
        static:true,
        subItems: [
            { title: "Agence Moderne", href: "/" },
            { title: "Marketing Digital", href: "/digital-marketing" },
            { title: "Agence de Design", href: "/design-agency" },
            { title: "Images IA Uniques", href: "/unique-ai-image" },
            { title: "Agence Corporate", href: "/corporate-agency" },
            { title: "Application Mobile", href: "/mobile-application" },
            { title: "Solutions IT", href: "/it-solution" },
            { title: "Cryptomonnaie", href: "/cryptocurrency" },
        ],
    },
    {
        title: "Pages",
        href: "#",
        static:true,
        subItems: [
            { title: "À propos de moi", href: "/about-me-light" },
            { title: "À propos", href: "/about-us-light" },
            { title: "Services", href: "/service-1-light" },
            { title: "Détails du service", href: "/service-details-2-light" },
            { title: "Carrière", href: "/career-light" },
            { title: "Détails de carrière", href: "/career-details-light" },
            { title: "Équipe", href: "/team-light" },
            { title: "Détails de l'équipe", href: "/team-details-light" },
            { title: "Tarifs", href: "/pricing-light" },
            { title: "FAQ", href: "/faq-light" },
        ],
    },
    {
        title: "Projets",
        href: "#",
        static:true,
        subItems: [
            { title: "Vitrine WebGL", href: "/portfolio-webgl-showcase" },
            { title: "Slider Coverflow", href: "/portfolio-coverflow-slider-light" },
            { title: "Slider Miniature Créatif", href: "/portfolio-creative-thumb-slider" },
            { title: "Slider Incliné Créatif", href: "/portfolio-creative-skew-slider" },
            { title: "Slider Texte Créatif", href: "/portfolio-creative-text-slider" },
            { title: "Slider Parallaxe", href: "/portfolio-parallax-slider" },
            { title: "Vitrine Perspective", href: "/portfolio-perspective-slider-light" },
        ],
    },
    {
        title: "Blog",
        href: "#",
        static:false,
        subItems: [
            { title: "Grille de blog", href: "/blog-grid-light" },
            { title: "Blog Classique", href: "/blog-standard-light" },
            { title: "Liste de blog", href: "/blog-list-light" },
            { title: "Masonry", href: "/blog-masonry-light" },
            { title: "Article de blog", href: "/blog-details-light" },
        ],
    },
    {
        title: "Boutique",
        href: "#",
        static:false,
        subItems: [
            { title: "Boutique Moderne", href: "/shop-modern-light" },
            { title: "Détails de la boutique", href: "/shop-details" },
            { title: "Mon compte", href: "/my-account" },
            { title: "Panier", href: "/cart" },
            { title: "Commande", href: "/checkout" },
            { title: "Liste de souhaits", href: "/wishlist" },
            { title: "Connexion", href: "/login" },
        ],
    },
    {
        title: "Contact",
        href: "#",
        static:false,
        subItems: [
            { title: "Me contacter", href: "/contact-me-light" },
            { title: "Nous contacter", href: "/contact-us-light" },
            { title: "Entrer en contact", href: "/contact" },
        ],
    },
];

export default menuItemsTwo;