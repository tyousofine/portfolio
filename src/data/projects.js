import onTrack from '../images/onTrack.png';
import plugStreaming from '../images/PlugStreaming.png';
import todoApp from '../images/todoApp.png';

export const projects = [{
    image: onTrack,
    title: 'OnTrack',
    stack: ['React', 'HTML', 'SCSS', 'Firebase'],
    description: 'A simple project and task managing desktop app, designed and effective for small to medium sized teams. App comes with authentication, data management, as well as a live chat and comments feature.',
    webLink: "https://ontrackk.vercel.app/",
    codeLink: "https://github.com/tyousofine/onTrack"
},
{
    image: plugStreaming,
    title: 'Library and Dashboard for Plug Streaming',
    stack: ['JS', 'D3', 'HTML', 'CSS'],
    description: 'A library and Dashboard for a streaming service Called Plug Streaming, according to their specifications. Dashboard uses Youtube statistics to provide visualized analysis of data for the stake holders reference.',
    webLink: "https://plugstreaming.vercel.app",
    codeLink: "https://github.com/tyousofine/PStreaming"
},
{
    image: todoApp,
    title: "TY's Todo App",
    stack: ['JS', 'React Native', 'SQLITE'],
    description: "Who hasn't done a todo App in their coding journey? And here is a mine. A simple todo app for Android devices, published in Google Playstore. App is built with React Native and uses SQLite and the device's local storage.",
    expoSnack: "https://snack.expo.dev/@tyousofine/tystodoapp?platform=android",
    googlePlay: "http://play.google.com/store/apps/details?id=com.ty.creations.todo.app"
}


]
