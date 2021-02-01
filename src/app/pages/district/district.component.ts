import { Component, OnInit } from '@angular/core';
import {DistrictInfo} from '../../shared/interfaces';
import {DistrictService} from '../../common/services';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  public districtInfo: DistrictInfo[] = [];
  public deleteDistrictInfo : DistrictInfo[] = [];
  public numberOfDistrict = 0;
  public numberOfDeletedDistrict = 0;

  public deleteDistrictList(value : any): void{
    this.deleteDistrictInfo = value;
    console.log(value);
  }

  constructor(private districtService: DistrictService) {
    this.setDistrictList();

  }
  private  setDistrictList(): void{
    this.districtService.getStudentList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.districtInfo = this.getRectifiedDistrict(res.data);
        this.setNumberOfDistrict(this.districtInfo);
      }
      else {
        console.log('Error', res);
      }
    });
  }

  ngOnInit(): void {
  }

  // get rectified districts
  private getRectifiedDistrict(districtList: DistrictInfo[]): DistrictInfo[]{
    for (const dist of districtList){
      dist.density = Math.floor(dist.population / dist.areaSqKm);
    }
    return districtList;
  }

  private setNumberOfDistrict(arr: DistrictInfo[]): void{
    this.numberOfDistrict = arr.length;
  }
  public reCount(event: number): void{
    this.numberOfDistrict = this.districtInfo.length;
  }

}
