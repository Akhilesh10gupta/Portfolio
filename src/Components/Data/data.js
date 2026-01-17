

import avatarPlayImg from '../../assets/avatarplay.png';
import waysortedImg from '../../assets/waysorted.png';

const projects = {
    allProject: [
        {
            image: waysortedImg,
            title: 'Waysorted | Live',
            description: 'Waysorted is a unified, high-performance tool suite designed to accelerate workflows and replace multiple disconnected tools. It features Palettable for color palettes, Frames to PDF, and Wayspace for personalized environments.',
            sourcecode: 'https://github.com/Waysorted-s-Organisation/waysorted-web',
            livelink: 'https://www.waysorted.com/',
            teckstack: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Framer Motion", "GSAP", "Node.js", "MongoDB"],
            status: 'live',
            featured: true
        },
        {
            image: avatarPlayImg,
            title: 'AvatarPlay | Live',
            description: 'Developed Avatar Play, a modern game distribution platform enabling users to explore, search, and download PC and Android games with an Epic-style interactive hero carousel. Implemented universal video support for gameplay trailers, including direct uploads, YouTube videos, and Shorts. Built a secure, mobile-optimized admin dashboard using Firebase Authentication. Optimized media delivery using Cloudinary.',
            sourcecode: 'https://github.com/Akhilesh10gupta/Avatar-store',
            livelink: 'https://avatarplay.in',
            teckstack: ["Next.js 14", "Tailwind CSS", "Firebase Firestore", "Firebase Auth", "Cloudinary", "Framer Motion"],
            status: 'live',
            featured: true
        },
        {
            image: 'https://res.cloudinary.com/dizmm8x5t/image/upload/v1752001285/Screenshot_2025-07-09_003106_iykxjq.png',
            title: 'ExtraBite | Live',
            description: 'ExtraBite is a food donation platform that connects donors and receivers to reduce food wastage. Users can register as Donors or Receivers, browse real-time food listings, request donations, manage pickups via OTP verification, and rate donation experiences. The platform supports image uploads, user authentication, role-based access, and a responsive UI.',
            sourcecode: 'https://github.com/Akhilesh10gupta/Extrabite',
            livelink: 'https://extrabite.vercel.app/',
            teckstack: [
                "React", "Tailwind CSS", "Java", "Spring Boot 3.5", "PostgreSQL", "JPA/Hibernate",
                "Spring Security (JWT)", "Maven", "Swagger", "Docker"
            ],
            status: 'live',
            featured: true
        },
        {
            image: 'https://res.cloudinary.com/dizmm8x5t/image/upload/v1752002023/Screenshot_2025-07-09_003936_ljuxs7.png',
            title: 'Musiz | LIVE Site available',
            description: 'Musiz is a sleek and modern frontend music discovery platform developed as a freelance project. Built with React and Tailwind CSS, it features artist grids, soundwave animations, 3D instrument placeholders, and smooth content transitions to deliver an engaging and responsive user experience.',
            sourcecode: 'https://github.com/Akhilesh10gupta/musiz',
            livelink: 'https://www.sirmusizstudios.com/',
            teckstack: ["JavaScript", "React", "Tailwind CSS", "Framer Motion", "Three.js"],
            status: 'LIVE',
            featured: true
        },
        {
            image: 'https://res.cloudinary.com/dizmm8x5t/image/upload/v1752005701/Screenshot_2025-07-09_014437_n52frk.png',
            title: 'TipsyTown | LIVE site available',
            description: 'TipsyTown is a stylish, responsive restaurant website crafted using HTML, CSS, JavaScript, and Bootstrap. It offers a clean layout, elegant design, and smooth user experience — ideal for showcasing menus, chefs, testimonials, and contact info.',
            sourcecode: 'https://github.com/Akhilesh10gupta/Tipsytown',
            livelink: 'https://akhilesh10gupta.github.io/Tipsytown/',
            teckstack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            status: 'live',
            featured: true
        },
        // {

        //     image: 'https://res.cloudinary.com/dvdfhripy/image/upload/v1731412801/Screenshot_2024-11-12_124136_h5cubs.png',
        //     title: 'Photo Storage | LIVE site available',
        //     description: 'Developed PhotoStorage, a social photo storage app allowing users to securely upload, store, and browse images. Implemented real-time uploads, organized galleries, and social features with an intuitive, responsive interface for seamless browsing on desktop and mobile.',
        //     sourcecode: 'https://github.com/a-nuj1/photo_storage',
        //     livelink: 'https://photo-storage-azure.vercel.app/',
        //     teckstack: ["React", "FireBase", "Tailwind CSS"],
        //     status: 'live', 
        //     featured: true 
        // },
        // {
        //     image: 'https://res.cloudinary.com/dvdfhripy/image/upload/v1731412795/Screenshot_2024-11-12_101453_okigjh.png',
        //     title: 'Student-Compass | Live Site N/A',
        //     description: 'Developed a fullstack student-centric learning platform using MERN stack to help students track their learning progress and manage all course materials in onecentralized location',
        //     sourcecode: 'https://github.com/a-nuj1/student_compass',
        //     livelink: 'https://github.com/a-nuj1/page-not-found',
        //     teckstack: ["JavaScript", "React","Redux","Chakra UI","Node.js","Express.js","MongoDB"],
        //     // status: 'live', 
        //     // featured: true 
        // },
        // {
        //     image: 'https://res.cloudinary.com/dvdfhripy/image/upload/v1731412796/Screenshot_2024-11-12_172310_xrbqeh.png',
        //     title: 'Write-Space | LIVE Site available',
        //     description: 'Developed Write-Space, a dynamic blog application featuring secure user authentication, rich text editing, and comprehensive post management. Enabled users to easily create, edit, and manage formatted posts with titles, images, and intuitive navigation',
        //     sourcecode: 'https://github.com/a-nuj1/daily_article',
        //     livelink: 'https://daily-article.vercel.app/',
        //     teckstack: ["React", "Tailwind CSS", "Node.js", "Express.js", "Appwrite"]
        // },
        // {
        //     image: 'https://res.cloudinary.com/dvdfhripy/image/upload/v1731412803/Screenshot_2024-11-12_131140_whwlu2.png',
        //     title: 'Movie World | LIVE site available',
        //     description: 'A simple React Page that fetch movies details from API and show it on card, users can search movies too.',
        //     sourcecode: 'https://github.com/a-nuj1/netflix_clone',
        //     livelink: 'https://netflix-clone-nu-henna.vercel.app/',
        //     teckstack: ["ReactJs", "REST API", "Axios"]
        // },
        // {
        //     image: 'https://static.vecteezy.com/system/resources/thumbnails/007/343/533/small/yellow-quiz-time-banner-with-comic-style-background-suitable-for-use-for-promotional-designs-vector.jpg',
        //     title: 'Quiz-Time| LIVE',
        //     description: 'Develop a dynamic quiz application that supports various question types, offering an interactive experience with real-time scoring and feedback. The goal was to create a versatile and user-friendly platform for assessments and learning.',
        //     sourcecode: 'https://github.com/a-nuj1/quizFrontend',
        //     livelink: 'https://quiz-frontend-mauve.vercel.app/',
        //     teckstack: ["ReactJs", "REST API", "Node.js", "Express.js", "MongoDB"]
        // },
    ],
}

export default projects;