import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JsonApiService } from '../../core/api/json-api.service';
import { Contact } from '../../shared/models/contact';
import { AuthService } from '../../+auth/auth.service';
import { NotificationService } from '../../shared/utils/notification.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html'
})
export class ContactAddComponent implements OnInit {
  loading=false;
  @Input() ApiKey: string;
  @Input() JsonApiService: JsonApiService;

  @Output() onCancelContact = new EventEmitter<boolean>();
  public browserclass;
  public contact_data: Contact;

  constructor(private authService: AuthService, private notificationService : NotificationService) { }
  ngOnInit() {
    this.ResetContact();
    this.browserclass="true";
  }

  public CancelContact() {
    this.onCancelContact.emit(false);
  }
  ResetContact() {
    this.contact_data = new Contact();
    this.contact_data.Status = 'Customer';
    this.contact_data.Company = this.authService.LoggedInUser.selectedAccount.Company;
    this.contact_data.Nletstat = 'Good';
    this.contact_data.PortalAcc = 'Yes';
    this.contact_data.RelNotif = 'No';
    this.contact_data.PAccessTyp = 'User';
    this.contact_data.Pswd = 'P@ssw0rd';
    this.contact_data.FName='';
    this.contact_data.LName='';
    this.contact_data.BPhone='';
  }
  SubmitContact() {
    this.browserclass="true";
    if(this.contact_data.Company  =='' || this.contact_data.Company  == undefined)
    {      
      this.browserclass="false";
       return false;
       
    }
    else if( this.contact_data.FName  =='' || this.contact_data.FName  == undefined)
    {
      this.browserclass="false";
      return false;
    }
    else if( this.contact_data.LName  =='' || this.contact_data.LName  == undefined)
    {
      this.browserclass="false";
      return false;
    }
    else if( this.contact_data.BPhone  =='' || this.contact_data.BPhone  == undefined)
    {
      this.browserclass="false";
      return false;
    }
    this.loading=true;
    this.contact_data.add(this.ApiKey, this.JsonApiService, 'Account', this.authService.LoggedInUser.selectedAccount.AcctID)
      .subscribe(() => {
        this.notificationService.soffrontalert('Contact has been submitted successfully');
       this.ResetContact();
          this.onCancelContact.emit(false);
          this.loading=false;
        });
  }
}
