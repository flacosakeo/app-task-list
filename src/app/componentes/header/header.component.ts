import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/servicios/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Mi Task List';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private uiService:UiService, private router:Router) { 
    this.subscription = this.uiService.onToogle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toogleAddTask(){
    this.uiService.toogleAddTask();
  }

  hasRoute(route:String){
    return this.router.url===route;
  }

}
