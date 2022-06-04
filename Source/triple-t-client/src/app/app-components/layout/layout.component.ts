import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarDetailsModel, SnackBarServiceMode } from 'src/app/_models/snackbar-details';
import { UserModel } from 'src/app/_models/user-model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;

  recheckIfInMenu: boolean;
  private _snackBarDetails: SnackBarDetailsModel;

  @Output() clearSnackBarEvent = new EventEmitter();

  @Input() user: UserModel;
  @Input() isBusy: Boolean;
  @Input() isUserLoggedIn: Boolean;

  @Input()
  public set snackBarDetails(value: SnackBarDetailsModel) {
    this._snackBarDetails = value;
    this.showSnackBar(value);
  }

  constructor(private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.recheckIfInMenu = false;
  }

  openResourceMenu() {
    this.trigger.openMenu();
  }

  closeResourceMenu() {
    setTimeout(() => {
      if (this.recheckIfInMenu === false) {
        this.trigger.closeMenu();
      }
    }, 175);
  }

  showSnackBar(details: SnackBarDetailsModel) {
    console.log('Showing snack bar');
    console.log(details);

    if (details) {
      this._snackBar.open(details.message, '', {
        duration: details.time > 0 ? details.time : 2500,
        horizontalPosition: details.horizontalPosition,
        verticalPosition: details.verticalPosition,
        panelClass: this.getPanelClass(details.mode)
      }).afterDismissed().subscribe(x => this.clearSnackBarEvent.emit());
    }
  }

  getPanelClass(mode: SnackBarServiceMode) {
    switch (mode) {
      case 'Success':
        return ['primary-snackbar', 'login-snackbar'];
      case 'Info':
        return ['primary-snackbar', 'login-snackbar'];
      case 'Error':
        return ['red-snackbar', 'red-snackbar'];
      case 'Warn':
        return ['red-snackbar', 'red-snackbar'];
    }
  }

}
