import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vikinglotto',
  templateUrl: './vikinglotto.component.html',
  styleUrls: ['./vikinglotto.component.scss']
})
export class VikinglottoComponent implements OnInit {
  @Input() vikinglottoChild: Boolean;
  vikinglottonumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]
  vikinglottonumbers_picked=[]
  numbersofnumbers=6

  constructor() { }

  ngOnInit() {
    for(var i = 0; i < this.numbersofnumbers;i++) {
      var random_number = Math.floor(Math.random() * this.vikinglottonumbers.length); 
      var compare=random_number+1

      if(this.vikinglottonumbers_picked.includes(compare)){
            console.log(compare + " finnes")
            i--;

       }else{
           console.log(compare  + " finnes ikke")
           this.vikinglottonumbers_picked.push(compare);
           
       }
     
  }
    this.vikinglottonumbers_picked=this.vikinglottonumbers_picked.sort(function(a, b){return a-b});
  }

}
