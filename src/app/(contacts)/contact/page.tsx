import ContactMain from '@/pages/contacts/contact/ContactMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "StartLine - Contact",
    description: "Contactez-nous pour toute question ou demande de service. Nous sommes à votre écoute pour vous aider.",
};

const page = () => {
    return (
        <ContactMain />
    );
};

export default page;