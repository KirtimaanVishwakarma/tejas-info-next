


interface FooterOptionsInterface {
    header: string;
    links: Array<{ name: string, href: string }>;
}

interface FaqContentsInterface {
    header: string;
    details: string;
}

export interface FormObjects {
    label: string;
    id: string;
    type: string;
    span?: string
    className?: string;
    placeholder: string;
    form?: {
        required: string;
    };
}

export const navbarOptions: Array<{ name: string, href: string }> = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
]

export const footerOptions: Array<FooterOptionsInterface> = [
    {
        header: 'site map',
        links: [
            { name: 'home', href: '/' },
            { name: 'about', href: '/about' },
            { name: 'services', href: '/services' },
            { name: 'portfolio', href: '/portfolio' },
            { name: 'blog', href: '/blog' },
            { name: 'contact us', href: '/contact' }
        ]
    },
    {
        header: 'Follow us',
        links: [
            { name: 'facebook', href: 'https://facebook.com' },
            { name: 'twitter', href: 'https://twitter.com' },
            { name: 'instagram', href: 'https://instagram.com' },
            { name: 'linkedin', href: 'https://linkedin.com' }
        ]
    },
    {
        header: 'Ous services',
        links: [
            { name: 'software development', href: '/software-development' },
            { name: 'web development', href: '/web-development' },
            { name: 'mobile development', href: '/mobile-development' },
            { name: 'digital marketing', href: '/digital-marketing' }
        ]
    }
]

export const registerForm: Array<FormObjects> = [
    {
        label: 'Name',
        id: 'name',
        type: 'text',
        span: 'col-span-1',
        placeholder: 'Name',
        form: {
            required: 'Name is required'
        }
    },
    {
        label: 'Phone',
        id: 'Phone',
        type: 'number',
        span: 'col-span-1',
        placeholder: 'Phone number',
        form: {
            required: 'Phone number is required'
        }
    },
    {
        label: 'Email',
        id: 'Email',
        type: 'email',
        span: 'col-span-2',
        placeholder: 'email',
        form: {
            required: 'Email is required'
        }
    },
    {
        label: 'Message',
        id: 'message',
        type: 'textarea',
        span: 'col-span-2',
        placeholder: 'Describe your project and goals',
        form: {
            required: 'Message is required'
        }
    },
]

export const faqContents: Array<FaqContentsInterface> = [
    {
        header: 'Do you offer both on-site and remote IT support?',
        details: `RisuTech Global specializes in software development and digital marketing, also we provides facility of on-site or remote IT support. However, we prioritize understanding our clients' needs and can discuss tailored solutions that may include support options. Please reach out for more information!`
    },
    {
        header: 'What is RisuTech Global ?',
        details: `RisuTech Global is a leading software development company that delivers innovative technology solutions, specializing in web development, application development, game development, and custom software. We also provide comprehensive digital marketing services, including SEO strategies to enhance online visibility. Our expert team focuses on creating user-friendly, high-performance applications and websites while prioritizing customer satisfaction and collaboration with clients.`
    },
    {
        header: 'Is There Any Updates In The Future ?',
        details: `We are committed to continuous innovation and enhancing our services. We regularly assess emerging technologies, including AI, machine learning, and blockchain, to better serve our clients. Stay tuned for announcements about new offerings and improvements!`
    },
    {
        header: 'How Much For The Service?',
        details: `The cost of our services at RisuTech Global varies based on project requirements, complexity, and technology involved. We offer tailored solutions to meet the unique needs of each client. For a detailed quote, please contact us at info@risutechglobal.com or call us at +91 8081954350. We look forward to discussing your project!`
    }
]


import { IoLogoAndroid } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaBullhorn } from "react-icons/fa6";
import { IoColorPalette } from "react-icons/io5";
import { BsCloudArrowDownFill } from "react-icons/bs";

export const servicesData: Array<{ title: string, description: string, image: any, cta?: string }> = [
    {
        title: 'Web Developement',
        description: 'We create innovative web solutions that are tailored to your specific business needs and goals. Our experienced developers are expert at cre...',
        image: IoCodeSlashOutline
    },
    {
        title: 'Mobile App Development',
        description: 'Our team can help you build engaging and user-friendly Android, iOS, and web applications. As a professional IT software development company...',
        image: IoLogoAndroid
    },
    {
        title: 'Mobile App Development',
        description: 'Our team can help you build engaging and user-friendly Android, iOS, and web applications. As a professional IT software development company...',
        image: CiSearch
    },
    {
        title: 'Mobile App Development',
        description: 'Our team can help you build engaging and user-friendly Android, iOS, and web applications. As a professional IT software development company...',
        image: FaBullhorn
    },
    {
        title: 'Mobile App Development',
        description: 'Our team can help you build engaging and user-friendly Android, iOS, and web applications. As a professional IT software development company...',
        image: IoColorPalette
    },
    {
        title: 'Mobile App Development',
        description: 'Our team can help you build engaging and user-friendly Android, iOS, and web applications. As a professional IT software development company...',
        image: BsCloudArrowDownFill
    },
]