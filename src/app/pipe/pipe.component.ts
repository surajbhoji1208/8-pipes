import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
empDetails=[
  {id:1,name:'suraj',company:'senwell',dob:'12-12-1999'},
  {id:2,name:'suraj',company:'senwell',dob:'1/23/2000'},

  {id:3,name:'suraj',company:'senwell',dob:'3/2/1988'},

  {id:4,name:'suraj',company:'senwell',dob:'4/7/1981'},

  {id:5,name:'suraj',company:'senwell',dob:'6/8/1995'},

  {id:6,name:'suraj',company:'senwell',dob:'12/12/1992'},

  {id:7,name:'suraj',company:'senwell',dob:'12/20/1975'},

]
  ngOnInit(): void {
  }

}
