
const navbar_items = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Our Projects',
        dropdownItems: [
                { title: 'All Projects', link: '/projects' },
                { title: 'MediSafe', link: '/medisafe' },
                { title: 'MonPoke', link: '/monpoke' },
                ],
    },
    {
        title: 'Resumes',
        dropdownItems: [
                { title: 'Baoze\'s Resume', link: '/resume-baoze' },
                { title: 'Kyle\'s Resume', link: '/resume-kyle' },
                ],
    },
    // Maybe we'll have our own personal websites linked on here at some point 
    // {
    //     title: 'Personal Websites',
    //     dropdownItems: [
    //     { title: 'Baoze\'s Website', link: 'www.baoze.com' },
    //     { title: 'Kyle\'s Website', link: 'www.kyle.com' },
    //     ],
    // },
    {
        title: 'About Us',
        link: '/about-us',
    },
    {
        title: 'Contact',
        link: '/contact',
    },
]

export default navbar_items