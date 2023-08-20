export interface ICacheService<T> {
  setItem(key: string, item: T): void;
  getItem(key: string): T | null;
  clearItem(key: string): void;
  clearAll(): void;
}
