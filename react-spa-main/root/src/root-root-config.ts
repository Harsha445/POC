/*import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// })



const data = {
  navBar: '',
  dashboard:''
}
const getData = (e)=>{
  console.log('root reciver', e);
  data.navBar = e;
}

registerApplication({
  name: "@navbar/nav",
  app: () => System.import("@navbar/nav"),
  activeWhen: ["/"],
  customProps: (name, location) => {
    return { authToken: 'd83jD63UdZ6RS6f70D0', getData, data: data.navBar};
  },
});

registerApplication({
  name: "@dashboard/dashboard",
  app: () => System.import("@dashboard/dashboard"),
  activeWhen: ["/"],
  customProps: (name, location) => {
    return { authToken: 'asdfaf', getData, data: data.dashboard };
  },
});


start({
  urlRerouteOnly: true,
}); */


import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

const routes = constructRoutes(document.querySelector("#root"));
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});
// Delay starting the layout engine until the styleguide CSS is loaded
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

  layoutEngine.activate();
  start();
