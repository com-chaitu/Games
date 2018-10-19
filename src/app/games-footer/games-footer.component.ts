import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games-footer',
  templateUrl: './games-footer.component.html',
  styleUrls: ['./games-footer.component.css']
})
export class GamesFooterComponent implements OnInit {

  navigationElements = [
    {
      id: 'whyAbc',
      text: 'Why abc',
      subElements: [
        {
          subId: 'benefits',
          text: 'Benefits',
          url: '/games/benefits'
        },
        {
          subId: 'ourStory',
          text: 'Our Story',
          url: '/games/ourStory'
        },
        {
          subId: 'career',
          text: 'Career',
          url: '/games/career'
        }
      ]
    },
    {
      id: 'help',
      text: 'Help & Support',
      subElements: [
        {
          subId: 'contactUs',
          text: 'Contact Us',
          url: '/games/contactUs'
        },
        {
          subId: 'faq',
          text: 'FAQs',
          url: '/games/faqs'
        }
      ]
    }
  ];

  navGroupState: Array<boolean>;
  constructor() { }

  ngOnInit() {
    this.navGroupState = Array(this.navigationElements.length).fill(false);
  }

  changeState(index: number) {
    this.navGroupState[index] = !this.navGroupState[index];
  }

  

}
