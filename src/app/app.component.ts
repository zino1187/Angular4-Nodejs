import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ng4app2';
  name: string;
  age: number;
  job: string;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  /* 등록하기 */
  regist(_name, _age, _job): void {

    this.http.post("/api/regist", {
      name: _name,
      age: _age,
      job: _job
    }).subscribe(data => {
      var obj = JSON.stringify(data);
      alert(JSON.parse(obj).msg);
    });
  }

  /* 리스트 구하기 */

  /* 수정하기 */

  /* 삭제하기 */
}
