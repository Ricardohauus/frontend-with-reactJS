import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./pages/UserList/index";
import UserForm from "./pages/UserForm/index";
import UploadForm from "./pages/UploadForm/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact component={UserList} />
        <Route path="/users/create" component={UserForm} />
        <Route path="/users/edit/:id" component={UserForm} />
        <Route path="/upload/create" component={UploadForm} />
      </Switch>
    </BrowserRouter>
  );
}
