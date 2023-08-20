// dinosaur.service.ts
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DinosaurService {
  private showDinosaurSubject = new BehaviorSubject<boolean>(true);
  showDinosaur$: Observable<boolean> = this.showDinosaurSubject.asObservable();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.showDinosaurSubject.next(params["dinosaur"] !== "off");
    });
  }

  toggleDinosaur(): void {
    const currentValue = this.showDinosaurSubject.value;
    this.showDinosaurSubject.next(!currentValue);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { dinosaur: currentValue ? "off" : "on" },
      queryParamsHandling: "merge",
      replaceUrl: true,
    });
  }
}
