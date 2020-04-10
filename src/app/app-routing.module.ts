import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "swachha-dhara",
    pathMatch: "full"
  },
  {
    path: "swachha-dhara",
    children: [
      {
        path: "",
        redirectTo: "privacy-policy",
        pathMatch: "full"
      },
      {
        path: "privacy-policy",
        component: PrivacyPolicyComponent
      }
    ]
  },
  {
    path: "go-corona",
    children: [
      {
        path: "",
        redirectTo: "privacy-policy",
        pathMatch: "full"
      },
      { path: "privacy-policy", component: PrivacyPolicyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
