import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-picklottery',
  templateUrl: './picklottery.component.html',
  styleUrls: ['./picklottery.component.scss']
})
export class PicklotteryComponent implements OnInit {
lotto : Boolean;
vikinglotto: Boolean;

  constructor() { }

  ngOnInit() {
  }

  lotteryChosen(event){

      
       if(event.value==="lotto"){
      
          this.lotto=true
          this.vikinglotto=false
       }
       else if(event.value==="vikinglotto"){
       
          this.vikinglotto=true
          this.lotto=false
       }

  }

}
