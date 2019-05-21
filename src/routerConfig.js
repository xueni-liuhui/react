import ReduxStudy from './pages/ReduxStudy';
import ReactReduxStudy from './pages/ReactReduxStudy';
import ReduxToDoList from './pages/ReduxToDoList';
import ReactMap from './pages/ReactMap';
const  basicRoutes=[
  {
    path:"/redux/study",
    component:ReduxStudy
  },
  {
    path:"/react/redux/study",
    component:ReactReduxStudy
  },
  {
    path:"/redux/todo/list",
    component:ReduxToDoList
  },
  {
    path:"/react/map",
    component:ReactMap
  }
]

export {basicRoutes}
