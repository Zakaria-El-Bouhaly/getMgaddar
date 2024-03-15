import { Component, Input } from '@angular/core';

@Component({
  selector: 'mg-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent {


  @Input() yValues: number[] = [];
  @Input() xValues: string[] = [];

  data: any;
  options: any;

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.yValues.length > 0 && this.xValues.length > 0) {
      this.data = {
        labels: this.xValues,
        datasets: [
          {
            label: 'Duration',
            data: this.yValues,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      }
    }
  }



}