import ReduxStudy from './pages/ReduxStudy';
import ReactReduxStudy from './pages/ReactReduxStudy';
import ReduxToDoList from './pages/ReduxToDoList';
import ReactMap from './pages/ReactMap';
import ReactLoop from './pages/ReactLoop';
import ReactExcelDownload from './pages/ReactExcelDownload';
import ChinaWater from './pages/ChinaWater';
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
  },
  {
    path:"/react/loop",
    component:ReactLoop
  },
  {
    path:"/react/excel",
    component:ReactExcelDownload
  },
  {
    path:"/china/water",
    component:ChinaWater
  }
]

export {basicRoutes}
