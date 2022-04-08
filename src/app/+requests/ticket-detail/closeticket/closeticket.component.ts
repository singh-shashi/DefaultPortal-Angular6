import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JsonApiService } from '../../../core/api/json-api.service';
import { FadeInTop } from '../../../shared/animations/fade-in-top.decorator'      // "../../shared/animations/fade-in-top.decorator";
import { NotificationService } from './../../../shared/utils/notification.service';
import { AuthService } from '../../../+auth/auth.service';

@FadeInTop()

@Component({
  selector: 'app-closeticket',
  templateUrl: './closeticket.component.html',
  styleUrls: ['./closeticket.component.css']
})
export class CloseticketComponent implements OnInit {
  @Input() ApiKey: string;
  @Input() JsonApiService: JsonApiService;
  @Input() TicketID: number;
  @Input() AssignTo: string;
  @Output() onCancelcloseticform = new EventEmitter<void>();
  @Output() onrefreshdetailviewform = new EventEmitter<void>();

  public loading = false;
  public callsatisfied;
  public callManager;
  public expAnalyst;
  public expSupport;
  public reasonableTimeFrame;
  public expAnalyst_note;
  public expSupport_note;
  public noteText;
  public starsrating;
  public starsratingcus;
  public analystnote;
  public supportnote;

  constructor(private authService: AuthService ,private notificationService: NotificationService) { }

  ngOnInit() {
    this.callsatisfied = '';
    this.callManager = '';
    this.expAnalyst = '';
    this.expSupport = '';
    this.reasonableTimeFrame = '';
    this.expAnalyst_note = '';
    this.expSupport_note = '';
    this.noteText = '';
    this.analystnote = '';
    this.supportnote = '';
    this.starsratingcus = '';
    this.starsrating = '';
  }

  functiondosurvey() {
    // debugger;
    this.expAnalyst = this.starsratingcus;
    this.expSupport = this.starsrating;
    this.analystnote = this.expAnalyst_note;
    this.supportnote = this.expSupport_note;
    this.functicketclose();
    this.ngOnInit();
  }
  cancelticketclose() {
    this.onCancelcloseticform.emit();
  }
  functicketclose() {
    const data = {
      'SQuestion1': this.callsatisfied,
      'SQuestion2': this.callManager,
      'SQuestion3': this.expAnalyst,
      'SQuestion4': this.expSupport,
      'SQ3_Note': this.analystnote,
      'SQ4_Note': this.expSupport_note,
      'SQuestion5': this.supportnote,
      'SComments': this.noteText,
      'CustStatus': 'Closed',
      'Status': 'Closed',
      'Closedat': this.authService.convertLocalToUtc(new Date(), -5),
      'ResolvDT': this.authService.convertLocalToUtc(new Date(), -5)
    };
    this.loading = true;
    this.JsonApiService.UpdateRecFun(this.ApiKey, 'Ticket', this.TicketID, data, 'Close').subscribe(
      () => {
        // alert('Success');
        this.notificationService.soffrontalert('Ticket has been closed successfully');
        this.loading = false;
        this.onrefreshdetailviewform.emit();
      })


  }


}
