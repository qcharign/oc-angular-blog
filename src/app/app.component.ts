import {Component} from '@angular/core';
import {Post} from './classes/post.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-blog';
  posts: Array<Post> = [];
  constructor() {
    this.posts.push(new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna mi, tempor eu tristique eu, tincidunt ut mauris.'));
    this.posts.push(new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id dictum ante. Lorem ipsum dolor sit amet, consectetur.'));
    this.posts.push(new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie efficitur sodales.'));
    this.posts.push(new Post('Le dernier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna mi, tempor eu tristique eu, tincidunt ut mauris.'));
  }
}
