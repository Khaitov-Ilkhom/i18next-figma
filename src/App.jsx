import './App.css'
import { Select } from "antd"
import "../src/locales/index.js"
import { useTranslation } from "react-i18next";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";

// const langOption = [
//   {
//     value: "uz",
//     label: (
//         <div style={{display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between"}}>
//           UZ
//         </div>
//     )
//   },
//   {
//     value: "en",
//     label: (
//         <div style={{display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between"}}>
//            EN
//         </div>
//     )
//   },
// ]
//
function App() {
//   const data = useTranslation()
//
//   const onLngChange = (e) => {
//     data.i18n.changeLanguage(e)
//     localStorage.setItem("lang", e)
//   }


    // <Select
    //     showSearch
    //     defaultValue={"uz"}
    //     onChange={onLngChange}
    //     options={langOption}
    //     style={{width: "100px"}}
    // />
    //
    // <h1>Title: {data.t("title")}</h1>
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
