import { Component } from "@angular/core";
import { slideInAnimation } from "./app-animations";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  animations: [slideInAnimation],
})
export class AppComponent {
  constructor(private title: Title) {
    this.title.setTitle("Ariel Marti Carlini - Software Engineer");
  }
}
