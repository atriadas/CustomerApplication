import { Component, Injector, OnInit ,ChangeDetectionStrategy} from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {HttpClient, HttpClientModule} from "@angular/common/http"


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  // styleUrls: ['./page1.component.css']
  changeDetection: ChangeDetectionStrategy.OnPush
  

})
export class Page1Component implements OnInit {
  //popover
  title = 'ngx-smart-popover-demo';

  //dropdown list
  items = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Node Js'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'Django'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Vue'},
    {id: 8, name: 'ReactJs'},
  ];

//http

  constructor(_injector:Injector, public httpc:HttpClient) { }
  GetUsersInfo(){
    this.httpc.get("http://10.198.3.62:8089/Group/AllGroups").subscribe(res =>{
        this.Success(res)
    }, err =>{
        this.Error(err)
    })
    }
    Error(res){
        console.debug(res)
    }

    Success(res)
    {
     console.log(res);   
     
    }
    //
  dropdownSettings:IDropdownSettings;
  dropdownList = [];
  selectedItems = [];
  
 
  ngOnInit() {
    this.GetUsersInfo();

  //   this.dropdownList = [
  //     { item_id: 1, item_text: 'Mumbai' },
  //     { item_id: 2, item_text: 'Bangaluru' },
  //     { item_id: 3, item_text: 'Pune' },
  //     { item_id: 4, item_text: 'Navsari' },
  //     { item_id: 5, item_text: 'New Delhi' }
  //   ];
  //   this.selectedItems = [
  //     // { item_id: 3, item_text: 'Pune' },
  //     // { item_id: 4, item_text: 'Navsari' }
  //   ];
  //   this.dropdownSettings = {
  //     singleSelection: false,
  //     idField: 'item_id',
  //     textField: 'item_text',
  //     selectAllText: 'Select All',
  //     unSelectAllText: 'UnSelect All',
  //     itemsShowLimit: 8,
  //     allowSearchFilter: true
  //   };
  // }
  // onItemSelect(item: any) {
  //   console.log(item);
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }

  // AddItem(){
  //   this.dropdownList.push({ item_id: this.dropdownList.length+1, item_text: 'Atria'+this.dropdownList.length })
  //   console.log(this.dropdownList)
  // }
}}