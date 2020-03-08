import {LaunchList, InfoHed} from "./components/launch_list";
import selectLaunchYear from "./components/select_year";

const app=document.querySelector('#app');
const header=document.createElement('header');
const info_hed=InfoHed();
header.append(info_hed)

const filters=document.createElement('section');
const select=selectLaunchYear()
const ispis = document.createElement('div')
filters.appendChild(select)
filters.append(ispis)

const launch_list=LaunchList();

const footer=document.createElement('footer');
footer.innerHTML=`Created by IT Bootcamp`

app.append(header,filters,launch_list,footer);
export {filters, ispis}
