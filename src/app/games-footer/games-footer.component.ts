import { Component, OnInit, HostListener } from '@angular/core';

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
    },
    {
      id: 'events',
      text: 'Events & Album',
      subElements: [
        {
          subId: 'upcomingEvents',
          text: 'Upcoming Events',
          url: '/games/upcomingEvents'
        },
        {
          subId: 'album',
          text: 'Album',
          url: '/games/album'
        }
      ]
    }
  ];

  @HostListener('window:resize') onWindowResize() {
    if (window.innerWidth < 680) {
      this.navGroupStyles = { 'width.%': 100 };
      this.navGroupState = Array(this.navGroupElementsNum).fill(false);
    } else {
      this.navGroupStyles = { 'width.%': 100 / this.navGroupElementsNum };
      this.navGroupState = Array(this.navGroupElementsNum).fill(true);
    }
  }



  navGroupState: Array<boolean>;
  navGroupStyles: any;
  navGroupElementsNum: number;

  constructor() { }

  ngOnInit() {
    this.navGroupElementsNum = this.navigationElements.length;
    this.onWindowResize();
  }

  changeState(index: number) {
    if (window.innerWidth < 680) {
      this.navGroupState[index] = !this.navGroupState[index];
    }
  }

}
