import {
  FaCss3,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiAzuredevops,
  SiC,
  SiCplusplus,
  SiDjango,
  SiElectron,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiSequelize,
  SiSocketdotio,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const Menus = [
  "About",
  "Education",
  "Experience",
  "Skills",
  "Projects",
  "Testimonials",
  "Contact",
];

export const aboutMe = `Hi, I'm <b>Abhinav Jha</b>, a passionate Software Developer and Product Builder with a strong foundation in Computer Science & Electrical Engineering and a consistent academic track record (<b>9.18 CGPA</b> from <b>DTU EE</b>). <br><br>

    I'm currently building <b>Travel Studio</b>, a post-booking hospitality SaaS platform at <b>GydeXP</b>, where I lead <b>backend development</b> and <b>product management</b>.<br><br>

    Over the past few years, I've worked across the full stack — specializing in modern backend systems using <b>NestJS</b>, <b>Firebase</b>, <b>PostgreSQL</b>, and <b>Redis</b>, along with real-time features powered by <b>WebSockets</b> and scalable APIs. I follow <b>clean architecture</b>, <b>SOLID principles</b>, and emphasize <b>performance, security,</b> and <b>maintainability</b> in every project.<br><br>

    Outside of coding, I enjoy <b>problem-solving</b>, <b>gym training</b>, and <b>mentoring junior developers</b>. Whether it's building AI-integrated products, designing robust systems, or crafting seamless user experiences, I love turning ideas into real-world impact.<br><br>

    If you're looking for someone who can blend <b>technical depth</b> with <b>product thinking</b>, let's connect!`;

export const education = [
  {
    time: "2022-2026",
    name: "Delhi Technological University",
    degree: `Bachelor's Degree (B.Tech)`,
    passingMarks: "9.18 CGPA (Till 6th Sem)",
  },
  {
    time: "2020-2022",
    name: "Ramakrishna Sr. Sec. School",
    degree: "High School",
    passingMarks: "95.5%",
  },
  {
    time: "2008-2020",
    name: "Ramakrishna Sr. Sec. School",
    degree: "Matriculation",
    passingMarks: "90%",
  },
];

export const experience = [
  {
    time: "June 2025 - Present",
    companyName: "GydeXP",
    role: "Product Manager",
    desc1: ` Leading a full development and design team as Backend Lead and the development of Travel Studio, a SaaS platform for the travel industry. Driving product planning, roadmap execution, and feature prioritization, Acting as the bridge between business goals and technical execution.`,
    desc2: `Built and launched the entire GydeXP.com platform — frontend, backend, and database — from scratch during the company’s growth phase. Developed core features of the Gyde platform connecting users with local guides. Created REST APIs for user/guide profiles, geolocation search, real-time chat (WebSockets), and reviews. Contributed to system architecture, database modeling, and API documentation.`,
  },
  {
    time: "Feb 2024 - July 2024",
    companyName: "Ezinore Pvt. Ltd.",
    role: "Software Development Engineer (SDE)",
    desc1: `As a full stack developer at Ezinore Pvt Limited, I specialize in creating innovative solutions for AI-based energy management. My role involves developing both a comprehensive dashboard application and a polished product website for the company. Leveraging my expertise in frontend and backend technologies, I craft user-friendly interfaces that provide actionable insights for energy optimization.`,
    desc2: `From designing intuitive user experiences to implementing robust backend functionalities, I ensure seamless integration and efficient performance across all platforms. With a keen eye for detail and a passion for cutting-edge technologies, I strive to empower Ezinore and its clients with powerful tools to revolutionize energy management in the digital age.`,
  },
  {
    time: "Feb 2024 - Apr 2024",
    companyName: "DTU - IRD",
    role: "Web Developer",
    desc1: `As an intern at the Dean IRD Office of Delhi Technological University (DTU), I am tasked with developing a full-stack MERN (MongoDB, Express.js, React.js, Node.js) ERP portal. This portal serves to manage government-funded projects for professors at DTU, providing comprehensive tools for project tracking, resource management, financial oversight, and reporting.`,
    desc2: `My responsibilities include frontend and backend development, database management, user interface design, and ensuring seamless functionality across all aspects of the ERP portal.`,
  },
  {
    time: "June 2023 - Aug 2023",
    companyName: "Bubbl Social",
    role: "Wev Developer Intern",
    desc1: `I was selected for the role of Web Developer by Bubbl Social Team, where I developed the main website of bubbl social which have increased my communication as well as my coding skills`,
    desc2: `I have delivered end to end solution for the comming soon website by maintaining the industrial file architecture and writing clean code for the UI which make the UX more efficient. `,
  },
  {
    time: "March 2023 - May 2023",
    companyName: "Physics Wallah Skills",
    role: "Full Stack Web Developer (MERN)",
    desc1: `This is my First Internship which taught me about the end to end solutions for the projects, How to design the high/low level design solutions, wireframe and many other solutions.`,
    desc2: `I have delivered end to end solution for a web Development project by which I am able to learn alot of Web concepts. I have used the latest technology for my website i.e MERN (MongoDB - Express Js - React Js - Node Js).`,
  },
];

export const skills = [
  {
    title: "Web Development",
    xp: "2021-02-17",
    skill: [
      {
        name: "Next js",
        icon: <SiNextdotjs class="icon" />,
      },
      {
        name: "Nest js",
        icon: <SiNestjs class="icon" />,
      },
      {
        name: "React",
        icon: <FaReact class="icon" />,
      },
      {
        name: "Node Js",
        icon: <FaNodeJs class="icon" />,
      },
      {
        name: "Express Js",
        icon: <SiExpress class="icon" />,
      },
      {
        name: "MongoDb",
        icon: <SiMongodb class="icon" />,
      },
      {
        name: "React Redux",
        icon: <SiRedux class="icon" />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 class="icon" />,
      },
      {
        name: "CSS",
        icon: <FaCss3 class="icon" />,
      },
      {
        name: "Javascript",
        icon: <FaJs class="icon" />,
      },
      {
        name: "Django",
        icon: <SiDjango class="icon" />,
      },
      {
        name: "Flask",
        icon: <SiFlask class="icon" />,
      },
    ],
  },
  {
    title: "App Development",
    xp: "2023-07-20",
    skill: [
      {
        name: "React Native",
        icon: <TbBrandReactNative class="icon" />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter class="icon" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase class="icon" />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma class="icon" />,
      },
      {
        name: "Fast API",
        icon: <SiFastapi class="icon" />,
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio class="icon" />,
      },
      {
        name: "Sequelize",
        icon: <SiSequelize class="icon" />,
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma class="icon" />,
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    xp: "2023-10-06",
    skill: [
      {
        name: "Python",
        icon: <FaPython class="icon" />,
      },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn class="icon" />,
      },
      {
        name: "Numpy",
        icon: <SiNumpy class="icon" />,
      },
      {
        name: "Pandas",
        icon: <SiPandas class="icon" />,
      },
      {
        name: "Fast API",
        icon: <SiFastapi class="icon" />,
      },
      {
        name: "Tensor Flow",
        icon: <SiTensorflow class="icon" />,
      },
      {
        name: "Open CV",
        icon: <SiOpencv class="icon" />,
      },
      {
        name: "Streamlit",
        icon: <SiStreamlit class="icon" />,
      },
    ],
  },
  {
    title: "Other Skills",
    xp: "2021-05-06",
    skill: [
      {
        name: "GCP",
        icon: <SiGooglecloud class="icon" />,
      },
      {
        name: "Azure",
        icon: <SiAzuredevops class="icon" />,
      },
      {
        name: "AWS",
        icon: <SiAmazonaws class="icon" />,
      },
      {
        name: "Electron JS",
        icon: <SiElectron class="icon" />,
      },
      {
        name: "Java",
        icon: <FaJava class="icon" />,
      },
      {
        name: "C",
        icon: <SiC class="icon" />,
      },
      {
        name: "C++",
        icon: <SiCplusplus class="icon" />,
      },
      {
        name: "Git",
        icon: <FaGit class="icon" />,
      },
      {
        name: "Github",
        icon: <FaGithub class="icon" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql class="icon" />,
      },
      {
        name: "Postgre Sql",
        icon: <SiPostgresql class="icon" />,
      },
      {
        name: "Redis",
        icon: <SiRedis class="icon" />,
      },
      {
        name: "Figma",
        icon: <FaFigma class="icon" />,
      },
    ],
  },
];

export const projects = [
  {
    header: "Web Development",
    projects: [
      {
        title: "GydeXP - Tour and Travel Platfrom",
        img: require("../../Assets/gydexp.jpeg"),
        desc: "As an SDE Intern at Gyde Xp, I develop backend APIs and frontend interfaces for connecting users with guides, focusing on search, real-time chat, geolocation, and content management while collaborating with design and product teams.",
        techStack:
          "Vite Node PostgreSQL RTKQuery CSS Tailwind Azure Redis SOLID Socket.io",
        link: "https://gydexp.com",
      },
      {
        title: "Streamvid - Streaming Platform",
        img: require("../../Assets/streamvid.png"),
        desc: "StreamVid, a cutting-edge movie streaming site, blends React.js, Flask, MongoDB, Redux Toolkit, and CSS. Enjoy a seamless experience with React.js on the front-end, Flask on the back-end, MongoDB for reliable storage, and Redux Toolkit for optimal state management, all wrapped in a sleek CSS design.",
        techStack: "React Flask MongoDb Redux CSS",
        github: "https://github.com/aj0911/StreamVid",
        link: "https://streamvid-beta.vercel.app/",
      },
      {
        title: "Buy Market - Ecommerce",
        img: require("../../Assets/buymarket.png"),
        desc: "The MERN Stack Ecommerce Project ( Buy Market) with user authentication, clean UI, Cart System which uses react redux for state management, jwt Tokens , Nodemailer for sending Email, Recharts js for charts and many more technologies.",
        techStack: "React Node MongoDb Express Redux CSS",
        github: "https://github.com/aj0911/BuyMarket",
        link: "https://drive.google.com/file/d/11SATaydU8AcoH9dTUCYe-bKAxtaAl_y9/view",
      },
      {
        title: "180 Degrees Consulting Hindu",
        img: require("../../Assets/180dchindu.png"),
        desc: "Developed a dynamic React JS frontend and integrated Realtime Firebase Database for seamless data management. Utilized Firebase Storage for efficient image/file storage and Email.js for enhanced communication. Result: a robust, responsive website showcasing society activities effectively.",
        techStack: "React CSS Firebase Redux",
        github: "private",
        link: "https://180dchindu.vercel.app/",
      },
      {
        title: "CV Generator App",
        img: require("../../Assets/cvgenerator.png"),
        desc: `As a React.js developer, I designed and implemented a CV generator app, streamlining the resume creation process. Engineered user-friendly interfaces and dynamic content sections to enhance customization, enabling users to effortlessly build professional CVs.`,
        techStack: "React CSS",
        github: "https://github.com/aj0911/ResumeBuilder",
        link: "https://cvgenerator-theta.vercel.app/",
      },
      {
        title: "Bubbl Social (Comming Soon)",
        img: require("../../Assets/bubblsocial.png"),
        desc: `During my internship, I crafted Bubbl Social's company website, focusing on their flagship product, the Bubbl Social mobile app. Leveraging React.js, I seamlessly integrated features, ensuring a dynamic and engaging user experience.`,
        techStack: "React CSS",
        github: "private",
        link: "https://bubblsocial.vercel.app/",
      },
      {
        title: "Weather Forcast App",
        img: require("../../Assets/weather.png"),
        desc: `I designed a weather forecast app using React and WeatherAPI, providing users with real-time weather updates. With an intuitive interface, the app seamlessly fetches and displays accurate weather information, enhancing user accessibility.`,
        techStack: "React CSS WeatherAPI",
        github: "https://github.com/aj0911/Weather-Forcast",
        link: "https://weatherprojectbyabhinavjha.vercel.app/",
      },
      {
        title: "Mechlife",
        img: require("../../Assets/mechlife.png"),
        desc: `MechLife, a premier car repair agency, boasts a dynamic website developed with React.js. Offering seamless navigation and engaging interfaces, it enhances user experience while showcasing MechLife's commitment to excellence in automotive services.`,
        techStack: "React CSS",
        github: "https://github.com/aj0911/MechLife",
        link: "https://mechlife.vercel.app/",
      },
      {
        title: "GovBuzz",
        img: require("../../Assets/govbuzz.png"),
        desc: `GovBuzz, our SIH hackathon endeavor, empowers civic engagement. With React, we developed a responsive platform for citizens to stay informed, voice concerns, and foster a collaborative community, enhancing democratic participation.`,
        techStack: "React CSS",
        github: "https://github.com/aj0911/sih-23-webApp",
        link: "https://govbuzz.vercel.app/",
      },
      {
        title: "Modern Portfolio",
        img: require("../../Assets/portfolio.png"),
        desc: `Elevate your online presence with my Modern Portfolio project, skillfully crafted using React. Experience a sleek and responsive design showcasing my expertise, projects, and achievements in a visually captivating manner.`,
        techStack: "React CSS",
        github: "https://github.com/aj0911/React-Portfolio-Project",
        link: "https://react-portfolio-project-eight.vercel.app/",
      },
      {
        title: "Mehndi Artist Portfolio",
        img: require("../../Assets/mehndiartist.png"),
        desc: `Designed a captivating Henna Artist Portfolio using HTML, CSS, and JS. Intuitive navigation, responsive layout, and dynamic elements showcase the artist's talent. A visually appealing web presentation that captures the essence of henna artistry.`,
        techStack: "HTML CSS Javascript",
        github: "https://github.com/aj0911/Rahul-Jha-Artist",
        link: "https://rahuljha-mehndiartist.netlify.app/",
      },
      {
        title: "Musicology",
        img: require("../../Assets/musicology.png"),
        desc: `For the Musicology project, I employed React.js to create a vibrant and interactive music platform. The application seamlessly blends user-friendly design with innovative features, offering a dynamic and immersive musical experience.`,
        techStack: "HTML CSS Javascript",
        github: "https://github.com/aj0911/Musicology",
        link: "https://musicologybyarsolutions.netlify.app/",
      },
    ],
  },
  {
    header: "App Development",
    projects: [
      {
        title: "Streamvid - Mobile App",
        img: require("../../Assets/streamvidApp.png"),
        desc: `StreamVid mobile app, built with React Native, Flask, Redux, and MongoDB, features authentication, TMDb API integration, watch later, subscription, and search for any movie, TV show, or film star.`,
        techStack: "ReactNative Flask MongoDB Redux",
        github: "https://github.com/aj0911/StreamVid",
        link: "https://drive.google.com/file/d/1CXlOCRujPANGpIZNvjO9pmSMndsQ5JY3/view",
      },
      {
        title: "TripIt - Tour Planner",
        img: require("../../Assets/tripit.png"),
        desc: `I've successfully built a project using React Native for the frontend, Firebase for the backend, and Redux Toolkit for efficient state management. This app excels in tasks such as hotel booking, user authentication, personalized favorite hotel selections, and more.`,
        techStack: "ReactNative Firebase Redux",
        github: "https://github.com/aj0911/TripIt",
        link: "https://drive.google.com/file/d/1rx42RK7_uiZHGXWqDfVCixIBM4myNm4-/view",
      },
      {
        title: "Buy Market App",
        img: require("../../Assets/buymarketapp.png"),
        desc: `This is my first step into app development, where I'm creating the look and feel of a mobile app using React Native. I've used a cool thing called React hooks to handle how the app behaves and tapped into different helpful tools like expo-locations, expo-splash-screen, and more to make things work smoothly.`,
        techStack: "ReactNative Stylesheet",
        github: "https://github.com/aj0911/BuyMarketApp",
        link: "https://expo.dev/accounts/ajsol0911/projects/buyMarketApp/builds/eee17083-ad55-400f-971f-64a94aa62431",
      },
      {
        title: "Scanny - QR Scanner",
        img: require("../../Assets/scanny.png"),
        desc: `I spearheaded a QR code scanner project using React Native Expo, seamlessly blending efficiency and simplicity. The application swiftly scans QR codes, offering a seamless experience with a user-friendly interface for swift interactions.`,
        techStack: "ReactNative Stylesheet",
        github: "https://github.com/aj0911/CodeClauseInternship_BarCodeScanner",
        link: "https://expo.dev/accounts/ajsol0911/projects/barCodeScanner/builds/553893a3-0c94-4070-8b4d-e9eb9618f178",
      },
    ],
  },
  {
    header: "Artificial Intelligence",
    projects: [
      {
        title: "Movie Recommendation",
        img: require("../../Assets/movieRecommendation.png"),
        desc: `Developed a movie recommendation website utilizing a Python-based machine learning model trained on 5000 movies. Employed a count vectorizer for tag conversion, calculating cosine distances to suggest the top 5 most similar films. Streamlit powers the user-friendly interface.`,
        techStack: "Python Numpy Pandas Streamlit",
        github: "https://github.com/aj0911/Movie-Recommendation",
        link: "https://movie-recommendation-by-abhinav.streamlit.app/",
        paper:
          "https://drive.google.com/file/d/15MHGXlrlrFLrGON06GAkax2RzDqautjy/view",
      },
      {
        title: "Spam Classifier",
        img: require("../../Assets/emailspam.png"),
        desc: `I engineered a spam classifier using Python's 'sklearn' and the Multinomial Naive Bayes algorithm, boasting a 97% accuracy and flawless 100% precision. Integrated into a Streamlit-developed website, it discerns spam messages with precision.`,
        techStack: "Python Numpy Pandas Streamlit",
        github: "https://github.com/aj0911/SMS-Email-Spam-Detector-",
        link: "https://emailspamdetector.streamlit.app/",
        paper:
          "https://drive.google.com/file/d/12ZvxwJWak94-t21XT2p6mZmc93cwLxyY/view",
      },
      {
        title: "Diet and Home Workout Recommendation System",
        img: require("../../Assets/dietAndHomeWorkout.png"),
        desc: `The Diet and Home Workout Recommendation System customizes fitness plans based on age, height, and weight, utilizing advanced algorithms for personalized exercise and diet. Developed with Streamlit, the user-friendly interface ensures seamless navigation, promoting sustained well-being through machine learning-driven adaptability.`,
        techStack: "Python Numpy Pandas Streamlit",
        github:
          "https://github.com/aj0911/Diet-and-Home-Workout-Recommendation-System",
        link: "https://diet-and-home-workout-recommendation-system.streamlit.app/",
        // paper:'https://drive.google.com/file/d/12ZvxwJWak94-t21XT2p6mZmc93cwLxyY/view'
      },
    ],
  },
];

export const TestimonialsData = [
  {
    name: "Mr. Alakh Pandey",
    designation: "Founder",
    companyName: "Physics Wallah",
    img: require("../../Assets/pwskills.jpg"),
    desc: `This is to certify that Mr/Ms/Mrs Abhinav Jha has successfully completed   internship program from 17th March 2023 to 19th May 2023 in E-commerce Applicationm at PHYSICS WALLAH PVT. LTD. During their internship programme with us, they demonstrated exceptional skills with a self-motivated attitude to learn new things and implement them end to end with all of our mentioned industrial standards. Their performance was excellent and was able to complete the project successfully on time.`,
  },
  {
    name: "Mr. Tarun Jindal",
    designation: "Branch Manager",
    companyName: "180 Degrees Consulting Hindu",
    img: require("../../Assets/180dc.jpg"),
    desc: `Throughout the course of the project, Abhinav exhibited a deep understanding of web development principles and a keen eye for detail. His ability to create an intuitive user experience, coupled with a visually appealing design, greatly contributed to the success of our organisation's online presence.I strongly recommend that he would certainly prove to be an asset to any organisation. I wish him all the best for his future endeavours.`,
  },
  {
    name: "Team CodeClause",
    img: require("../../Assets/codeclause.jpg"),
    desc: `Throughout the internship, He has demonstrated excellent communication skills, a curious mind, and admirable social awareness. He also performed extremely
        well during the internship and showed excellent skills as seen in the project
        submission and participation in the regular activities. He is always willing to put a unique approach to the projects that are assigned, while also adhering to the guidelines and rules. With this, we will take this opportunity to wish Abhinav Jha ,all luck for future endeavors and hope for a bright future ahead.`,
  },
];
