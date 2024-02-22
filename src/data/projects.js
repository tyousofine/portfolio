import onTrack from '../images/onTrack.png';
import plugStreaming from '../images/PlugStreaming.png';
import todoApp from '../images/todoApp.png';
import portfolio from '../images/portfolio.png';
import orangeLogo from '../images/TYlogoTransparent.png';

export const projects = [
    {
        image: plugStreaming,
        title: 'Library and Dashboard for Plug Streaming',
        stack: ['JS', 'D3', 'HTML', 'CSS'],
        description: 'A library and Dashboard for a streaming service Called Plug Streaming developed according to their specifications. Dashboard uses Youtube statistics to provide visualized analysis of data for the stake holders reference.',
        webLink: "https://plugstreaming.vercel.app",
        codeLink: "https://github.com/tyousofine/PStreaming"
    },
    {
        image: todoApp,
        title: "<TY/>'s Todo App",
        stack: ['JS', 'React Native', 'SQLite'],
        description: "Who hasn't done a todo App in their coding journey? And here is a mine. A simple todo app for Android devices, published in Google Playstore. App is built with React Native and uses SQLite and the device's local storage.",
        expoSnack: "https://snack.expo.dev/@tyousofine/tystodoapp?platform=android",
        googlePlay: "http://play.google.com/store/apps/details?id=com.ty.creations.todo.app"
    },
    {
        image: onTrack,
        title: 'OnTrack - Desktop app',
        stack: ['React', 'HTML', 'SCSS', 'Firebase'],
        description: 'A simple project and task managing desktop app, designed and effective for small to medium sized teams. App comes with authentication, data management, as well as a live chat and comments feature.',
        webLink: "https://ontrackk.vercel.app/",
        codeLink: "https://github.com/tyousofine/onTrack"
    },

    {
        image: portfolio,
        title: "<TY/> Portfolio",
        stack: ['JS', 'React', 'MatterJS'],
        description: "Personal portfolio website designed and built by this page owner, using react, and Matter.js for the Hero Animation. ",
        webLink: "https://tyoussefian.vercel.app",
        codeLink: "https://github.com/tyousofine/portfolio"
    },
    {
        image: orangeLogo,
        title: "COMMING SOON! - Pantry Pal",
        stack: ['JS', 'React', 'OpenAI'],
        description: "An AI powered app that will create custom recipe with an image, based on exact ingredients provided by the user. The recipes are generated using OpenAI's API.",
        webLink: "#",
        codeLink: "#",
    },
    {
        image: orangeLogo,
        title: "COMMING SOON! - Diversey Maintenance",
        stack: ['JS', 'Next', 'MongoDB'],
        description: "A ticketing system app to streamline the communication and repair requests between the operators and the maintenance department.",
        webLink: "#",
        codeLink: "#",
    },
    {
        image: orangeLogo,
        title: "COMMING SOON! - Dice & Spice",
        stack: ['Angular', 'MongoDB'],
        description: "A recipe website for my family. Family members can add, view and search for each others favorite recipes.",
        webLink: "#",
        codeLink: "#",
    },




]
