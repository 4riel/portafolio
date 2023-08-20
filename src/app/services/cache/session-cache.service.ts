import { Injectable } from "@angular/core";
import { ICacheService } from "./icache-service";

@Injectable({
  providedIn: "root",
})
// Work in Progress
export class SessionCacheService implements ICacheService<any> {
  setItem(key: string, item: any): void {
    try {
      const serializedValue = JSON.stringify(item);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Failed to set item in session cache:", error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const serializedValue = sessionStorage.getItem(key);
      return serializedValue ? (JSON.parse(serializedValue) as T) : null;
    } catch (error) {
      console.error("Failed to get item from session cache:", error);
      return null;
    }
  }

  clearItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clearAll(): void {
    sessionStorage.clear();
  }
}
