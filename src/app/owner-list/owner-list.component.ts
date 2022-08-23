import { Component, OnInit } from '@angular/core';
import { Gender } from '../enums/gender.enum';
import { OwnerClass } from '../Models/owner.model';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
  ownerList: OwnerClass[] = [{_id:'01',firstName:'Marius',lastName:'Moga',cnp:'012345',birthDate:new Date('1999-09-20'),gender:Gender.M },
  {_id:'02',firstName:'Claudia',lastName:'Pop',cnp:'054321',birthDate:new Date('2000-08-22'),gender:Gender.F }];
  private _ownerService: any;
  private _router: any;


  constructor() { }

  ngOnInit(): void {
  }
  
  editValues(selectedOwner: OwnerClass) {
    this._ownerService.editOwnerClicked$.next(selectedOwner);
    // this._router.navigate([`owner/edit/${selectedOwner._id}`])
  }

   private updateOwnerInTabe(owner: OwnerClass) {
    // For now this is the easiest way to raplace an object
    const foundIndex = this.ownerList.findIndex((it: OwnerClass) => owner._id === it._id);
    this.ownerList[foundIndex] = owner;
  } 

}
