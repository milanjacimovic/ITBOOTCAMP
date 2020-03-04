import {LaunchList, InfoHed} from "./components/launch_list";
const app=document.querySelector('#app');
// const header=Header()
const header=document.createElement('header');
const filters=document.createElement('section');
const launch_list=LaunchList();
const info_hed=InfoHed();
const footer=document.createElement('footer');
footer.className="Futer"
footer.innerHTML="developed by ITBootCamp"
header.append(info_hed)
app.append(header,filters,launch_list,footer);