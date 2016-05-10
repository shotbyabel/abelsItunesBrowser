import {Page, NavController} from 'ionic-angular';
//4. then we must import the actual SearchPage component into our file
import {SearchPage} from '../search/search';


@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})

export class GettingStartedPage {
  constructor(nav: NavController) {
    //2. need to access the NavController so we must create an instance of it inside thsi object
    this.nav = nav;
    //<--*1.using the navPush directive//
    this.theSearchPage = SearchPage;

  }
//1. initialize function from getting-started-html
  goToSearch() {
    //3. within the search function now we can create our page navigation with push
    // this.nav.push(SearchPage);
    this.nav.setRoot(SearchPage);

  }



}
