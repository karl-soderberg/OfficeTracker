import { useState } from "react"
import './App.css'
import { NavBottom } from "./shared_pages/NavBottom";
import { ChartPage } from "./pages/ChartPage";
import { FormPage } from "./pages/FormPage";
import { NewFormPage } from "./pages/NewFormPage";
import { AdminPage } from "./pages/AdminPage";

function App() {
  const [page, setPage] = useState("AdminPage");

  return (
    <>
      <NavBottom 
        page={page}
        setPage={(page) => setPage(page)}
      />
      <main className="page-container">
        <FormPage 
            className={"formpage-container " + (page == "FormPage" && "active")}
          />
        <NewFormPage 
          className={"newformpage-container " + (page == "NewFormPage" && "active")}
        />
        <ChartPage 
          className={"chartpage-container " + (page == "ChartPage" && "active")}
        />
        <AdminPage 
          className={"adminpage-container " + (page == "AdminPage" && "active")}
        />
      </main>
    </>
  )
}

export default App
