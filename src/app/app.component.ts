import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hath';
  name = 'hadeptrai';

  updateName(event) {
    this.name = event.target.value
  }

  Student = {
    name: 'Thạch Hoàng Hà',
    mssv: 'ph09667',
    age: 20,
    address: 'Tuyên Quang',
    sdt: '0975869291',
    email: 'hathph09667',
    avatar: 'https://nld.mediacdn.vn/thumb_w/540/2019/12/18/photo-3-1576655764752750978133.jpg'
  }
  // Edit(phone) {
  //   phone = phone.replace(/[^\d]/g);
  //   if(phone.length === 10){
  //     return phone.replace(/^(+84)/, phone)
  //   }
  //   return false
  // }

}
