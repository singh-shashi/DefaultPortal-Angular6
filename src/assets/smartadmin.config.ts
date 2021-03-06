export const config: any = {

  defaultLocale: 'us',

  API_URL: 'assets/api',

  menu_speed: 200,

  smartSkin: 'smart-style-4',
  soffrontcontact: {
    UserEmailField: 'email',
    PasswordField: 'LoginNam',
    PortalAccessField: 'PortalAcc',
    PortalAccessTypeField: 'PAccessTyp',
    FullNameField: 'Fullname'
  },
  soffrontaccount: {
    AcctIDField: 'CustID',
    CompanyField: 'Company',
    CustomerStatusValue: 'Customer'
  },
  soffrontnote: {
    NoteAccessField: 'ShowP',
    NoteAccessFieldValue: 'Yes'
  },
  soffrontapi: {
    webapiurl: 'sf104.soffront.com',
    webdeveloperkey: 'MjIwLjIyNS44OC4xNjV8UUZEQlNSVlJ8MnxRRkRCfENSTQ==',
    webapi: 'SFWEBAPI/',
    webadminuser: 'TrackWebTickets',
    webadminuserpassword: 'sTeKcItBeWkCaRt',
    ServerName: 'SF_CRM',
    ProjectName: 'SF_CRM'
  },
  KBUrl: 'https://sf104.soffront.com/NEWCRMKMS/SQLTRACKSERVER/KB/KMS_NEWCRMDEMO',

  skins: [
    {
      name: 'smart-style-0',
      logo: 'assets/img/soffront-crmPiotech-logo.png',
      skinBtnClass: 'btn btn-block btn-xs txt-color-white margin-right-5',
      style: {
        backgroundColor: '#4E463F'
      },
      label: 'Smart Default'
    },

    {
      name: 'smart-style-1',
      logo: 'assets/img/soffront-crmPiotech-logo.png',
      skinBtnClass: 'btn btn-block btn-xs txt-color-white',
      style: {
        background: '#3A4558'
      },
      label: 'Dark Elegance'
    },

    {
      name: 'smart-style-2',
      logo: 'assets/img/soffront-crmPiotech-logo.png',
      skinBtnClass: 'btn btn-xs btn-block txt-color-darken margin-top-5',
      style: {
        background: '#fff'
      },
      label: 'Ultra Light'
    },

    {
      name: 'smart-style-3',
      logo: 'assets/img/soffront-crmPiotech-logo.png',
      skinBtnClass: 'btn btn-xs btn-block txt-color-white margin-top-5',
      style: {
        background: '#f78c40'
      },
      label: 'Google Skin'
    },

    {
      name: 'smart-style-4',
      logo: 'assets/img/soffront-crmPiotech-logo.png',
      skinBtnClass: 'btn btn-xs btn-block txt-color-white margin-top-5',
      style: {
        background: '#bbc0cf',
        border: '1px solid #59779E',
        color: '#17273D !important'
      },
      label: 'PixelSmash'
    },

    {
      name: 'smart-style-5',
      logo: 'assets/img/soffront-crmPiotech-logo.png',
      skinBtnClass: 'btn btn-xs btn-block txt-color-white margin-top-5',
      style: {
        background: 'rgba(153, 179, 204, 0.2)',
        border: '1px solid rgba(121, 161, 221, 0.8)',
        color: '#17273D !important'
      },
      label: 'Glass'
    }

  ],

  GOOGLE_API_KEY: 'AIzaSyDd8YW8k_J-Jkti-W4QNk5dL8O_5_2QUWY',

  sound_path: 'assets/sound/',
  sound_on: true,


  /**
   * DEBUGGING MODE
   * debugState = true; will spit all debuging message inside browser console.
   * The colors are best displayed in chrome browser.
   */

  debugState: false,
  debugStyle: 'font-weight: bold; color: #00f;',
  debugStyle_green: 'font-weight: bold; font-style:italic; color: #46C246;',
  debugStyle_red: 'font-weight: bold; color: #ed1c24;',
  debugStyle_warning: 'background-color:yellow',
  debugStyle_success: 'background-color:green; font-weight:bold; color:#fff;',
  debugStyle_error: 'background-color:#ed1c24; font-weight:bold; color:#fff;',


  /**
   *  VOICE CONTROL
   */
  voice_command: true,
  voice_command_auto: false,

  showAttachment: true,
  showNote: true,
  showDefect: true,
  showMenuDefect: false,
  showMenuRequest: true,
  showMenuContact: false,

  ticketstatusqueryconfig: {
    closedStatus: 'CLOSED',
    // waitingCustomerReplyStatus: 'WAITING CUSTOMER REPLY',
    waitingCustomerReplyStatus: ' Eng Enhancement, Escalated, Defect',
    openStatus: 'Open,Assigned,Agent Queue,Analyst Responded,Customer Responded,Enhancement Request,' +
      'Group Queue,Sustainment,Tier 3 Triage,Waiting Analyst Reply,Customer Responded,' +
      'Reopened,Waiting Customer Reply,Waiting Customer Verification',
    resolvedStatus: 'RESOLVED',
    defectStatus: 'DEFECT'
  },

  /**
   *  Sets the language to the default 'en-US'. (supports over 50 languages
   *  by google)
   *
   *  Afrikaans         ['af-ZA']
   *  Bahasa Indonesia  ['id-ID']
   *  Bahasa Melayu     ['ms-MY']
   *  Catal??            ['ca-ES']
   *  ????e????tina         ['cs-CZ']
   *  Deutsch           ['de-DE']
   *  English           ['en-AU', 'Australia']
   *                    ['en-CA', 'Canada']
   *                    ['en-IN', 'India']
   *                    ['en-NZ', 'New Zealand']
   *                    ['en-ZA', 'South Africa']
   *                    ['en-GB', 'United Kingdom']
   *                    ['en-US', 'United States']
   *  Espa????ol          ['es-AR', 'Argentina']
   *                    ['es-BO', 'Bolivia']
   *                    ['es-CL', 'Chile']
   *                    ['es-CO', 'Colombia']
   *                    ['es-CR', 'Costa Rica']
   *                    ['es-EC', 'Ecuador']
   *                    ['es-SV', 'El Salvador']
   *                    ['es-ES', 'Espa????a']
   *                    ['es-US', 'Estados Unidos']
   *                    ['es-GT', 'Guatemala']
   *                    ['es-HN', 'Honduras']
   *                    ['es-MX', 'M????xico']
   *                    ['es-NI', 'Nicaragua']
   *                    ['es-PA', 'Panam????']
   *                    ['es-PY', 'Paraguay']
   *                    ['es-PE', 'Per????']
   *                    ['es-PR', 'Puerto Rico']
   *                    ['es-DO', 'Rep????blica Dominicana']
   *                    ['es-UY', 'Uruguay']
   *                    ['es-VE', 'Venezuela']
   *  Euskara           ['eu-ES']
   *  Fran????ais         ['fr-FR']
   *  Galego            ['gl-ES']
   *  Hrvatski          ['hr_HR']
   *  IsiZulu           ['zu-ZA']
   *  ????slenska         ['is-IS']
   *  Italiano          ['it-IT', 'Italia']
   *                    ['it-CH', 'Svizzera']
   *  Magyar            ['hu-HU']
   *  Nederlands        ['nl-NL']
   *  Norsk bokm????l     ['nb-NO']
   *  Polski            ['pl-PL']
   *  Portugu????s        ['pt-BR', 'Brasil']
   *                    ['pt-PT', 'Portugal']
   *  Rom????n????          ['ro-RO']
   *  Sloven????ina       ['sk-SK']
   *  Suomi             ['fi-FI']
   *  Svenska           ['sv-SE']
   *  T????rk????e          ['tr-TR']
   *  ????????????????????????????????????['bg-BG']
   *  P?????????????????????????     ['ru-RU']
   *  ????????????????????????      ['sr-RS']
   *  ????????????????????         ['ko-KR']
   *  ??????????????            ['cmn-Hans-CN', '??????????????????? (???????????????????????????)']
   *                    ['cmn-Hans-HK', '??????????????????? (?????????????)']
   *                    ['cmn-Hant-TW', '?????????????? (????????????)']
   *                    ['yue-Hant-HK', '???????????? (?????????????)']
   *  ???????????????????         ['ja-JP']
   *  Lingua lat????na    ['la']
   */
  voice_command_lang: 'en-US',
  /**
   *  Use localstorage to remember on/off (best used with HTML Version)
   */
  voice_localStorage: false,
  /**
   * Voice Commands
   * Defines all voice command variables and functions
   */

  voice_commands: {
    'show home': {
      type: 'navigate', payload: ['/dashboard/+soffrontdashboard']
    },
    'show dashboard': {
      type: 'navigate', payload: ['/dashboard/+soffrontdashboard']
    },
    'show my open tickets': {
      type: 'navigate', payload: ['/requests/myopentickets']
    },
    'show my account tickets': {
      type: 'navigate', payload: ['/requests/myaccounttickets']
    },
    'show requests awaiting reply': {
      type: 'navigate', payload: ['/requests/requestsawaitingreply']
    },
    'show requests awaiting verification': {
      type: 'navigate', payload: ['/requests/requestswaitingverification']
    },
    'show open defects': {
      type: 'navigate', payload: ['/defects/opendefects']
    },
    'show manage contacts': {
      type: 'navigate', payload: ['/contacts/managecontacts']
    },
    'go back': (): any => {
      history.back();
    },
    'scroll up': (): any => {
      jQuery('html, body').animate({ scrollTop: 0 }, 100);
    },
    'scroll down': (): any => {
      jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 100);
    },
    'hide navigation': {
      type: 'layout',
      payload: 'hide navigation'
    },
    'show navigation': {
      type: 'layout',
      payload: 'show navigation'
    },
    'mute': {
      type: 'sound',
      payload: 'mute',
    },
    'sound on': {
      type: 'sound',
      payload: 'sound on',
    },
    'stop': {
      type: 'voice',
      payload: 'stop'
    },
    'logout': {
      type: 'navigate',
      payload: ['/auth/login'],
    },
  },
  dataTableConfig:
  {
    pageLength: 5,
    lengthMenu: [[5, 10, 25, 50, 100], [5, 10, 25, 50, 100]]
  }
};


// required for SmartNotification
window['jQuery'].sound_on = config.sound_on;
window['jQuery'].sound_path = config.sound_path;
