import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.page.html',
  styleUrls: ['./footer-button.page.scss'],
})
export class FooterButtonPage implements OnInit {

  buttonDisabled: boolean = true;

  constructor(
    private changeRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  toggleDisable() {
    if (!this.buttonDisabled) {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
    this.changeRef.detectChanges();
  }

}
