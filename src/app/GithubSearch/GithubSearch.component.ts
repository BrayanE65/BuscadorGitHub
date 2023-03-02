import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-GithubSearch',
  templateUrl: './GithubSearch.component.html',
  styleUrls : ['./GithubSearch.component.css']
})
export class GithubSearchComponent {
   query: string ;
   users: any[] ; 

  constructor(private githubService: GithubService) {}

  public search() {
    this.githubService.searchUsers(this.query).then((response) => {
      this.users = response.data.items;
    });
  }
}
