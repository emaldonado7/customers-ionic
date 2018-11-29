import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { DetailPage } from '../../pages/detail/detail';




@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  customers: any;

  constructor(
    public navCtrl: NavController,
    public httpClient: HttpClient
  ) {

    this.httpClient.get("https://test-server-emc.herokuapp.com/api/v1/customers").subscribe((data)=>{
      this.customers = data;
    });

  }

  itemSelected(customer){
    this.navCtrl.push(DetailPage, {customer: customer});
  }

}
