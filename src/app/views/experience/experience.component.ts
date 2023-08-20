import { Component } from "@angular/core";
import { slideInAnimation } from "src/app/app-animations";
import { Experience } from "src/app/models/experience";
import { ExperienceService } from "src/app/services/experience.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.less"],
})
export class ExperienceComponent {
  experiences: Experience[] = [];
  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe((data) => {
      this.experiences = data;
    });
  }
}
