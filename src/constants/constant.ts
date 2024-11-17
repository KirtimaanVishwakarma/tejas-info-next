


interface FooterOptionsInterface {
    header: string;
    links: Array<{ name: string, href: string }>;
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