
import employeeManagerImg from "../assets/images/portfolio-images/employeeManager.png";
import noteTakerImg from "../assets/images/portfolio-images/notetaker.png";
import teamBuilderImg from "../assets/images/portfolio-images/teamBuilder.png";
import devConnectImg from "../assets/images/portfolio-images/devConnect.png";
import jateImg from "../assets/images/portfolio-images/Jate.png";
import workDayImg from "../assets/images/portfolio-images/workDayScheduler.png";
import weatherDashImg from "../assets/images/portfolio-images/weatherDash.png";


function PortfolioList(name, description, img, appLink, githubLink) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.appLink = appLink;
    this.githubLink = githubLink;
};

const weatherDashboard = new PortfolioList(
    "Weather Dashboard",
    "Weather dashboard application that gives the user live weather updates based on the user's location, allows the user to search by city and saves the stored searches. The application also provides a 5-day forecast so the user can plan accordingly.",
    weatherDashImg,
    "https://mikejmarin25.github.io/Weather-Dashboard-Ch-06/index.html",
    "https://github.com/mikejmarin25/Weather-Dashboard-Ch-06/"
);

const textEditor = new PortfolioList(
    "Progressive Web Application - Text editor",
    "This application is a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Additionally, the application features a number of data persistence techniques that serve as redundancies in case one of the options is not supported by the browser. The application also functions offline.",
    jateImg,
    "https://mikejmarin25.github.io/ProgressiveWebApplication-TextEditor-Ch-19",
    "https://github.com/mikejmarin25/ProgressiveWebApplication-TextEditor-Ch-19"
);

const employeeManager = new PortfolioList(
    "Employee Manager",
    "A command-line application that accepts user input to perform management tracking functions such as: following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role, as well as perform all crud operations",
    employeeManagerImg,
    "https://mikejmarin25.github.io/ProgressiveWebApplication-TextEditor-Ch-19",
    "https://github.com/mikejmarin25/ProgressiveWebApplication-TextEditor-Ch-19"
);

const noteTaker = new PortfolioList(
    "Note Taker",
    "Write down your todo list. Note taker is a note app created using expressJS. Note taker allows you to write down, save and delete your notes to help manage your daily tasks",
    noteTakerImg,
    "https://mikejmarin25.github.io/NoteTaker-Ch-11/",
    "https://github.com/mikejmarin25/NoteTaker/"
);

const employeeDirectory = new PortfolioList(
    "Employee Directory",
    "Keep your company's employee in a neat and tidy list. This React based app allows you to sort and search through your employee list and get their informations quickly",
    teamBuilderImg,
    "https://mikejmarin25.github.io/Team-Profile-Generator-Ch-10/",
    "https://github.com/mikejmarin25/Team-Profile-Generator-Ch-10/"
);

const devConnect = new PortfolioList(
    "Dev Connect",
    "Dev Connect is a social media for developers. Our project combines features popular on other social networks, such as sharing posts, creating your own profile, and connecting with other professionals. With the added spin that our site is set up specifically for developers to be able to easily share their work with their friends and colleagues. Dev connect is like a mashup between linkedin, github, and instagram all rolled into one user friendly website.",
    devConnectImg,
    "https://dev-connect-portfolio-sharing.herokuapp.com/",
    "https://github.com/mikejmarin25/dev-connect-portfolio-sharing"
);

const workDayScheduler = new PortfolioList(
    "Work Day Scheduler",
    "Third-Party APIs Challenge: Work Day Scheduler Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery",
    workDayImg,
    "https://mikejmarin25.github.io/Work-Day-Scheduler-Ch-05/",
    "https://github.com/mikejmarin25/Work-Day-Scheduler-Ch-05"
);




let portfolioList = [weatherDashboard, textEditor, employeeManager, noteTaker, devConnect, employeeDirectory, workDayScheduler];

export default portfolioList;