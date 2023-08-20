import { Component } from "@angular/core";
import { RouteService } from "src/app/services/route.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.less"],
})
export class NavComponent {
  constructor(public routeService: RouteService) {}
}
