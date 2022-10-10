import { Injectable } from "@angular/core";

export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppToastService {
  toasts: ToastInfo[] = [];

  show(header: string, body: string) {
    this.toasts.push({ header, body });
  }

  remove(toast: ToastInfo){
    let index = this.toasts.findIndex(x => x.body == toast.body);
      this.toasts.splice(index, 1);
  }
}
