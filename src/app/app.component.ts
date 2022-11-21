import { Component, ViewChild, ElementRef } from '@angular/core';
import customerData from './customers.json';

interface Customer {
  theCustId: String;
  fullname: String;
  customernumber: String;
  sitename: String;
  invTwoLineAddress: String;
  invThreeLineAddress: String;
  invFourLineAddress: String;
  invFiveLineAddress: String;
  invSixLineAddress: String;
  invSevenLineAddress: String;
  theMainAddress: String;
  icountry: String;
  firstcontact: String;
  paymentType: String;
  cusPayID: String;
  phone: String;
  email: String;
  theStatus: String;
  unitlist: String;
  isactive: String;
  inccustu: String;
  inccustt: String;
  inccustk: String;
  theSiteId: String;
  startupDate: String;
  custcolourNum: String;
  taxLabel: String;
  checkBacs: String;
  theApsName: String;
  runBacs: String;
  bacsAsk: String;
  custVatRate: String;
  custVatCode: String;
  custVatName: String;
  CustColour: String;
  $$hashKey: String;
}


var fullname: String;
var theMainAddress: String;
var sitename: String;
var phone: String;
var unitlist: String;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app1';
  
  // This will enable the code know the <p> tag to insert into
  @ViewChild('fullname') fullnameView: ElementRef;
  @ViewChild('theMainAddress') theMainAddressView: ElementRef;
  @ViewChild('sitename') sitenameView: ElementRef;
  @ViewChild('phone') phoneView: ElementRef;
  @ViewChild('unitlist') unitlistView: ElementRef;
  
  // Put all customers data into array to be displayed on the webpage
  customer: Customer[] = customerData.customers.data;
  
  // Get the index of the array that was clicked
  getIndex(i: number) {

    // Assign only the clicked array to a new array to display the additional details
    let CustomerDetails = this.customer[i];
    fullname = CustomerDetails.fullname;
    theMainAddress = CustomerDetails.theMainAddress;
    sitename = CustomerDetails.sitename;
    phone = CustomerDetails.phone;
    unitlist = CustomerDetails.unitlist;

    // When you click on one of the customers display the following details below the table:
    this.fullnameView.nativeElement.innerHTML = "Name: " + fullname;
    this.theMainAddressView.nativeElement.innerHTML = "Main Address: " + theMainAddress;
    this.sitenameView.nativeElement.innerHTML = "Site: " + sitename;
    this.phoneView.nativeElement.innerHTML = "Phone Number: " + phone;
    this.unitlistView.nativeElement.innerHTML = "Unit(s): " + unitlist;
  }

}
