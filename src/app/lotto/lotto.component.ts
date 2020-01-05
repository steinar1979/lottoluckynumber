import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})
export class LottoComponent implements OnInit {
  @Input() lottoChild: Boolean;
  lottonumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
  lottonumbers_picked=[]
  numbersofnumbers=7

  constructor() { }

  ngOnInit() {
    
    for(var i = 0; i < this.numbersofnumbers;i++) {
      var random_number = Math.floor(Math.random() * this.lottonumbers.length); 
      var compare=random_number+1

      if(this.lottonumbers_picked.includes(compare)){
            console.log(compare + " finnes")
            i--;

       }else{
           console.log(compare  + " finnes ikke")
           this.lottonumbers_picked.push(compare);
           
       }
     
  }
    this.lottonumbers_picked=this.lottonumbers_picked.sort(function(a, b){return a-b});
 
  }

}
