import { AbstractControl } from '@angular/forms';

export function validateTag(control: AbstractControl) {
  //if (!control.value.includes ('#')) {
    let tag = control.value;
    if (tag && tag.indexOf("#") != -1) { 
    return { validTag: true };
  }
  return null;
}