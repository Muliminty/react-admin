
import {
    createBrowserRouter,
    // RouterProvider,
} from "react-router-dom";

import App from "../App";
import BaiduMap from '../page/BaiduMap/index'
import TableDemo from '../page/Table/index'
import EchartDemo from '../page/Echart/index'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/baiduMap",
        element: <BaiduMap />
    },
    {
        path: "/TableDemo",
        element: <TableDemo />
    },
    {
        path: "/EchartDemo",
        element: <EchartDemo />
    },
]);

export default router