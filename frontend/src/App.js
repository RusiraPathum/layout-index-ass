import "./App.css";

import Header from "./components/Header";
import CategoryAdd from "./components/category/CategoryAdd";
import CategoryList from "./components/category/CategoryList";
// import CategoryEdit from "./components/category/CategoryEdit";
import SubCategoryAdd from "./components/subCategory/SubCategoryAdd";
import SubCategoryList from "./components/subCategory/SubCategoryList";
import SubCategoryEdit from "./components/subCategory/SubCategoryEdit";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <AddStudent /> */}
        {/* <Route path="/" exact component={AllStudent}/> */}
        
        <Route path="/category" exact component={CategoryList} />

        <Route path="/categoryAdd" exact component={CategoryAdd} />

        {/* <Route path="/categoryEdit/:id" exact component={CategoryEdit} /> */}

        <Route path="/subCategoryAdd" exact component={SubCategoryAdd} />

        <Route path="/subCategoryList" exact component={SubCategoryList} />

        <Route path="/subCategoryEdit/:id" exact component={SubCategoryEdit} />

      </div>
    </Router>
  );
}

export default App;
