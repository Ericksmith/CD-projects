import { Component, OnInit } from '@angular/core';
import { MainService} from "./../main.service"

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  searchString: any;
  allBikes
  filteredBikes

  constructor(private _api:MainService) { }

  ngOnInit() {
  this.searchString = ""
  this.allBikes = []
  this.loadBikes()
  }

  search(){
    this.allBikes = this.filteredBikes.filter((bike)=>{
      console.log(bike.title.includes(this.searchString));
      return bike.title.toLowerCase().includes(this.searchString) || bike.discription.toLowerCase().includes(this.searchString)
    })
  }

  loadBikes(){
    this._api.getBikes().subscribe((res)=>{
      console.log(res.json());
      this.allBikes = res.json()
      this.filteredBikes = res.json()
    })
  }

}
