import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Moetez',
    lastName:  'Amara',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Industrial Systems Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Africa/Tunis',        // Updated to reflect your location
    languages: ['English', 'French', 'Arabic']  // Optional: Updated languages
}



const social = [
    // Updated Links to reflect personal accounts
    
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/amaramoetez/',
    },
    
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:moetez.amara.am@gmail.com',
    },
    {
        name: 'WhatsApp',
        icon: 'whatsapp',
        link: 'wa.link/i6azpg', // replace "your_phone_number" with your actual phone number in international format (e.g., 1234567890)
    }
    
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Industrial Systems Engineer and Innovator</>,
    subline: <>I'm {person.firstName}, an engineer specializing in production systems at <InlineCode>Kumulus Water</InlineCode>, where I craft efficient processes and digital solutions. After hours, I work on my personal projects and research sustainable engineering.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.httpscom/moetez'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Moetez is a Tunis-based industrial systems engineer passionate about transforming production systems and supply chain processes. His work spans ERP implementation, digital transformation, and improving industrial operations.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Kumulus Water',
                timeframe: '2024 - Present',
                role: 'ERP and Supply Chain Specialist',
                achievements: [
                    <>Customized Odoo's accounting module to integrate predictive analytics for financial forecasting, resulting in a 25% improvement in cash flow predictability.</>,
                    <>Developed data visualization dashboards that improved inventory monitoring and reduced procurement cycle time by 15%.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/kumulus-01.jpg',
                        alt: 'Kumulus Water ERP Implementation',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'King Energy',
                timeframe: '2023 - 2024',
                role: 'Team Leader',
                achievements: [
                    <>Directed a team to deploy over 100 kWc of solar power, providing renewable energy to over 30 residential and commercial sites, improving installation timelines by 15%.</>,
                    <>Implemented an Odoo CRM system to improve client relations and project tracking, increasing customer satisfaction by 25%.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'National Engineering School of Carthage',
                description: <>Bachelor's Degree in Industrial and Logistics Systems Engineering, focused on production optimization and renewable energy systems.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Odoo ERP',
                description: <>Proficient in customizing and deploying Odoo ERP for inventory management, financial forecasting, and supply chain optimization.</>,
                images: [
                    {
                        src: '/images/projects/odoo-customization.jpg',
                        alt: 'Odoo Customization Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Next.js',
                description: <>Experience building scalable web applications using Next.js, integrated with various back-end systems.</>,
                images: [
                    {
                        src: '/images/projects/nextjs-project.jpg',
                        alt: 'Next.js Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about engineering and technology...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Engineering and tech projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}



export { person, social,  home, about, blog, work };
