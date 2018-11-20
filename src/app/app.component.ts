import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = '제목입니당';
  profiles:Profile []=new Array();
  profile:Profile;

  p:number;
  n:string;
  a:number;
  j:string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getList();
  }

  /* 등록하기 */
  regist(_name, _age, _job): void {

    this.http.post("/api/regist", {
      name: _name,
      age: _age,
      job: _job
    }).subscribe(data => {
      var obj = JSON.stringify(data);
      //alert(JSON.parse(obj).msg);
      this.getList();
    });
  }

  /* 리스트 구하기 */
  getList(): void {
    this.http.get("/api/list").subscribe(d => {
      //d는 object 형이므로 string으로 형변환
      var obj=JSON.stringify(d);

      //string은 객체로 사용할 수 없으므로, json으로 형번환
      var json=JSON.parse(obj);
      //console.log(json.records.length);
   
      var n=json.records.length;
      for(var i=0;i<n;i++){
        this.profiles[i] =new Profile(
          json.records[i][0],
          json.records[i][1],
          json.records[i][2],
          json.records[i][3]);
      }
      console.log(this.profiles);
    });
  }

  /* 상세보기 */
  getDetail(id):void{
    //alert(id);

    this.http.get("/api/detail?profile_id="+id).subscribe(d=>{
      //d는 오브젝트 이므로 json 스트링으로 변환후 다시 json 객체로 변신
      var str=JSON.stringify(d);      
      var json=JSON.parse(str);
      console.log(json.record);

      this.p=json.record[0];
      this.n=json.record[1];
      this.a=json.record[2];
      this.j=json.record[3];
      
      console.log(this.p, this.n, this.a, this.j);

       this.profile =new Profile(
        json.record[0],
        json.record[1],
        json.record[2],
        json.record[3]);
         
    });

  }

  /* 수정하기 */
  edit(_profile_id,_name, _age, _job):void{
    console.log(_profile_id, _name, _age, _job);
    alert(_profile_id+","+ _name+","+ _age+","+ _job);
    
  }
  /* 삭제하기 */
}
