import { FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { SiC, SiCplusplus, SiDjango, SiExpress, SiFirebase, SiFlutter, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiRedux, SiScikitlearn, SiStreamlit } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const Menus = [
    'About',
    'Education',
    'Experience',
    'Skills',
    'Projects',
    'Testimonials',
    'Contact'
]

export const aboutMe = `I am a versatile and results-driven professional with a strong background in Machine Learning Engineering and Web & App Development. Currently, I hold the position of Full Stack Developer at GDSC-DTU, where I leverage cutting-edge technologies to develop innovative solutions. In addition, I have contributed as an App Development Intern at Code Clause, gaining valuable experience in creating efficient and user-friendly applications.With expertise in React Native and the MERN Stack, I excel in delivering seamless cross-platform experiences. My proficiency also extends to ASP.NET MVC development, ensuring robust and scalable web applications. I am a proud graduate of BTech DTU'26, where I honed my technical skills and gained a solid foundation in engineering principles.`;

export const education = [
    {
        time:'2022-2026',
        name:'Delhi Technological University',
        degree:`Bachelor's Degree (B.Tech)`,
        passingMarks:'9.00 CGPA'
    },
    {
        time:'2020-2022',
        name:'Ramakrishna Sr. Sec. School',
        degree:'High School',
        passingMarks:'91.6%'
    },
    {
        time:'2008-2020',
        name:'Ramakrishna Sr. Sec. School',
        degree:'Matriculation',
        passingMarks:'90%'
    },
]

export const experience = [
    {
        time:'Sept 2023 - Nov 2023',
        companyName:'Code Clause',
        role:'Full Stack Developer',
        desc1:`I have been chosen for the position of full stack Developer at CodeClause company. I have been assigned with some projects here, which contains Resume Builder, Weather App and Authentication App using firebase.`,
        desc2:`I have submited all the three app withing the deadline and gain alot of experience while making these projects. Currently, I am working on the mobile app projects like Barcode scanner, Pdf file viewer and Travel planner app.`
    },
    {
        time:'June 2023 - Aug 2023',
        companyName:'Bubbl Social',
        role:'Wev Developer Intern',
        desc1:`I was selected for the role of Web Developer by Bubbl Social Team, where I developed the main website of bubbl social which have increased my communication as well as my coding skills`,
        desc2:`I have delivered end to end solution for the comming soon website by maintaining the industrial file architecture and writing clean code for the UI which make the UX more efficient. `
    },
    {
        time:'March 2023 - May 2023',
        companyName:'Physics Wallah Skills',
        role:'Full Stack Web Developer (MERN)',
        desc1:`This is my First Internship which taught me about the end to end solutions for the projects, How to design the high/low level design solutions, wireframe and many other solutions.`,
        desc2:`I have delivered end to end solution for a web Development project by which I am able to learn alot of Web concepts. I have used the latest technology for my website i.e MERN (MongoDB - Express Js - React Js - Node Js).`
    },
]

export const skills = [
    {
        title:'Web Development',
        xp:'2021-02-17',
        skill:[
            {
                name:'React',
                icon:<FaReact class = "icon" />
            },
            {
                name:'Node Js',
                icon:<FaNodeJs class = "icon" />
            },
            {
                name:'Express Js',
                icon:<SiExpress class = "icon" />
            },
            {
                name:'MongoDb',
                icon:<SiMongodb class = "icon" />
            },
            {
                name:'React Redux',
                icon:<SiRedux class = "icon" />
            },
            {
                name:'HTML',
                icon:<FaHtml5 class = "icon" />
            },
            {
                name:'CSS',
                icon:<FaCss3 class = "icon" />
            },
            {
                name:'Javascript',
                icon:<FaJs class = "icon" />
            },
            {
                name:'Django',
                icon:<SiDjango class = "icon" />
            },
        ]
    },
    {
        title:'App Development',
        xp:'2023-07-20',
        skill:[
            {
                name:'React Native',
                icon:<TbBrandReactNative class = "icon" />
            },
            {
                name:'Flutter',
                icon:<SiFlutter class = "icon" />
            },
            {
                name:'Firebase',
                icon:<SiFirebase class = "icon" />
            },
        ]
    },
    {
        title:'Machine Learning',
        xp:'2023-10-06',
        skill:[
            {
                name:'Python',
                icon:<FaPython class = "icon" />
            },
            {
                name:'Scikit-learn',
                icon:<SiScikitlearn class = "icon" />
            },
            {
                name:'Numpy',
                icon:<SiNumpy class = "icon" />
            },
            {
                name:'Pandas',
                icon:<SiPandas class = "icon" />
            },
            {
                name:'Streamlit',
                icon:<SiStreamlit class = "icon" />
            },
        ]
    },
    {
        title:'Other Skills',
        xp:'2021-05-06',
        skill:[
            {
                name:'Java',
                icon:<FaJava class = "icon" />
            },
            {
                name:'C',
                icon:<SiC class = "icon" />
            },
            {
                name:'C++',
                icon:<SiCplusplus class = "icon" />
            },
            {
                name:'Git',
                icon:<FaGit class = "icon" />
            },
            {
                name:'Github',
                icon:<FaGithub class = "icon" />
            },
            {
                name:'MySQL',
                icon:<SiMysql class = "icon" />
            },
            {
                name:'Postgre Sql',
                icon:<SiPostgresql class = "icon" />
            },
            {
                name:'Figma',
                icon:<FaFigma class = "icon" />
            },
        ]
    }
]