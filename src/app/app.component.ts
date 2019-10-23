import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Vestibulum libero lorem, pretium quis nulla nec, ullamcorper sodales magna. Vestibulum dapibus odio erat, vitae vehicula leo tempor et. Nullam consequat est viverra enim accumsan euismod. Nunc eget enim vel tellus tempus ullamcorper pulvinar vitae lectus. Suspendisse rhoncus ligula sit amet turpis suscipit convallis. Quisque cursus eu sem molestie ornare. Praesent non mi finibus, venenatis orci vel, finibus mauris. Duis lobortis enim id nisi viverra convallis. Donec quis enim malesuada, finibus tellus id, ullamcorper ipsum. Nam ullamcorper aliquam nisi. Nulla posuere rutrum ante. Nullam justo metus, dictum eu accumsan sit amet, tempus et lacus. Suspendisse tincidunt libero et turpis fermentum, id hendrerit erat egestas. Curabitur tincidunt dui sapien, et gravida nulla placerat a. Sed porttitor sapien a ornare gravida.',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'Maecenas eget vehicula ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin volutpat urna dui, ac congue mi consequat ut. Aliquam erat volutpat. Fusce blandit malesuada urna ac vulputate. Fusce dignissim laoreet massa quis eleifend. Morbi et viverra quam.',
      loveIts: -4,
      created_at: new Date()
    },
    {
      title: 'Mon troisieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper elit. In luctus erat at velit blandit, vitae ultricies nisi rutrum. Praesent mauris ante, feugiat in egestas quis, sagittis volutpat justo. Pellentesque tempor porta blandit. Nam molestie lorem elit, eget varius odio lacinia fermentum. Nam blandit justo nec urna pulvinar porttitor. Sed varius libero velit, vel sollicitudin quam tristique nec.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
