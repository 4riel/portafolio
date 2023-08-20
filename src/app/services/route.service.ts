import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RouteService {
  routes = [
    { path: "", label: "About me" },
    { path: "experience", label: "Experience" },
    { path: "skills", label: "Skills" },
    { path: "pokemon", label: "", icon: "bug" },
  ];

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return (
      this.router.url === "/" + path || (path === "" && this.router.url === "/")
    );
  }
}
