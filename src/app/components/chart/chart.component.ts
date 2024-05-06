import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart',
  /* standalone: true, */
  /* imports: [CommonModule, NgxChartsModule, FormsModule], */
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {

  @Input({ required: true }) data: ChartModel[];

  view: [number, number] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'NB Value';
  showYAxisLabel = true;
  yAxisLabel = 'confActId';
  roundEdges: boolean = true;
  showDataLabel: boolean = true;
  animations: boolean = true;
  scheme: string = 'aqua';

  public renderData: any[];

  constructor() {}
  ngOnInit(): void {
    this.renderData = this.filterData(this.data);
  }

  filterData(array: ChartModel[]) {
    const countsByKey = array.reduce(
      (countsByKey: { [key: string]: any }, obj: ChartModel) => {
        const key = obj.confActId;

        if (countsByKey[key]) {
          countsByKey[key] += 1;
        } else {
          countsByKey[key] = 1;
        }
        return countsByKey;
      },
      {}
    );

    return Object.keys(countsByKey).map((key) => ({
      name: key,
      value: countsByKey[key],
    }));
  }
}

type ChartModel = {
  _id: string;
  hash: string;
  updatedd: number;
  removedd: number;
  removedBy: string;
  dataType: string;
  actUid: string;
  confActId: string;
  price: number;
  percent: number;
  teeth: string;
  doctorId: string;
  patientId: string;
  projectId: string;
  lastUpdate: number;
  relact: boolean;
  _rev: string;
};
