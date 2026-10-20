

import avatarPlayImg from '../../assets/avatarplay.png';
import waysortedImg from '../../assets/waysorted.png';
import animusImg from '../../assets/animus.png';

const projects = {
    allProject: [
        {
            image: animusImg,
            title: 'Project Animus | Live',
            description: "Assassin's Creed: Project Animus is an interactive web tribute and 3D memory corridor simulator recreating Abstergo's modern Animus OS v4.8 interface in the browser. Features an HTML5 Canvas 3D memory corridor with particle vortex & perspective grid, real-time Eagle Vision mode (V key) with thermal Isu gold filters, Master Assassins historical timeline (Altaïr, Ezio, Edward, Bayek), Precursor Codex & Artifact Vault with 3D tilt physics, interactive Leap of Faith with cinematic dive audio, and a zero-latency hybrid Web Audio API engine.",
            sourcecode: 'https://github.com/rajnigupta0560-art/Assassin-creed',
            livelink: 'https://assassincreed-abstergo.vercel.app/',
            teckstack: ["HTML5 Canvas 3D", "Vanilla JavaScript (ES6+)", "Web Audio API", "Custom CSS HUD", "Vite", "Vercel"],
            status: 'live',
            featured: true
        },
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
            description: 'Avatar Play is a premium, modern game distribution platform engineered with Next.js 14 App Router, Tailwind CSS, and Firebase. Features an Epic-style auto-rotating hero carousel with progress fills, universal video trailer playback (direct uploads, YouTube & Shorts), smart genre/platform filtering, and dual PC/Android downloads. Packed with gamification including an XP/leveling system, 3D unlockable achievement badges, real-time activity feeds, and a holographic Sci-Fi profile. Houses an autonomous AI gaming blog powered by Gemini API, Vercel Cron, Unsplash API, and GEO JSON-LD schemas, alongside a secure Firebase admin dashboard with Cloudinary AI generative fill and client-side TensorFlow.js/NSFWJS moderation.',
            sourcecode: 'https://github.com/Akhilesh10gupta/Avatar-store',
            livelink: 'https://avatarplay.in',
            teckstack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase Firestore/Auth", "Cloudinary AI", "Gemini API", "Vercel Cron", "TensorFlow.js", "Framer Motion"],
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