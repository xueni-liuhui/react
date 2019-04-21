import ReduxStudy from './pages/ReduxStudy';
import ReactReduxStudy from './pages/ReactReduxStudy';
import ReduxToDoList from './pages/ReduxToDoList';
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
  }
]

export {basicRoutes}
