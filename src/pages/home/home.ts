import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  static ICONS: string[] = ["camera-retro", "heartbeat", "cutlery"]
  static COLORS: string[] = ["primary", "secondary", "danger", "light"]
  static SIZES: string[] = ["lg", "2x", "3x", "4x", "5x"]

  iconIdx: number = 0;
  colorIdx: number = 0;
  sizeIdx: number = 0;

  get icon(): string {
    return HomePage.ICONS[this.iconIdx];
  }

  get color(): string {
    return HomePage.COLORS[this.colorIdx];
  }

  get size(): string {
    return HomePage.SIZES[this.sizeIdx];
  }

  constructor(public navCtrl: NavController) {
    setInterval(() => {
      if (++this.iconIdx == HomePage.ICONS.length) {
        this.iconIdx = 0;
      }
      if (++this.colorIdx == HomePage.COLORS.length) {
        this.colorIdx = 0;
      }
      if (++this.sizeIdx == HomePage.SIZES.length) {
        this.sizeIdx = 0;
      }
    }, 1000);
  }
}
