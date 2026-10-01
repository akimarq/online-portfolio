import Video1 from '../assets/video1.mp4';
import Video2 from '../assets/video2.mp4';
import Video3 from '../assets/video3.mp4';
import Thumb1 from '../assets/thumb1.png';
import Thumb2 from '../assets/thumb2.png';
import Thumb3 from '../assets/thumb3.png';


export const projectSlides = [
    {
        id: "games",
        title: "Game Development",
        projects: [
            {
                id: "pytho",
                title: "PYTHOMANCER",
                env: "GDevelop, JavaScript",
                role: "Lead Developer & Designer",
                description: "Top-down RPG where you cast spells made of code",
                poster: Thumb1,
                media: Video1,
            },
            {
                id: "last",
                title: "//.LAST STAND",
                env: "GDevelop",
                role: "Lead Developer & Designer",
                description: "Cyberpunk-themed 2D Platformer Shooter",
                poster: Thumb3,
                media: Video3,
            },
            {
                id: "anti",
                title: "ANTI-KAIJU INSTITUTE",
                env: "Unity, C#",
                role: "Lead Developer & Designer",
                description: "3D Fighing Hack and Slash game based on Kaiju No.8",
                poster: Thumb2,
                media: Video2,
            }
        ]
    },
    {
        id: "web",
        title: "Web Development",
        projects: [
            {
                id: "phoenix",
                title: "Phoenix Music",
                env: "NextJS, TypeScript, TailwindCSS, GSAP",
                role: "",
                description: "My personal take on my friend, PhoenixQDC's webpage for displaying his music for the guild Quindecim.",
                media: "phoenix-music-nine.vercel.app/",
            }
        ]
    }
]