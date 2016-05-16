module MMain {
  interface IContent {
    menu: IMenu;
    bodyText: string;
  }

  interface IMenu {
    id: number;
    title: string;
    subTitles: Array<string>;
  }

  export class MainCtrl {
    public contents: Array<IContent>;
    public menus: Array<IMenu>;
    public activeContent: IContent;

    constructor() {
      this.contents = [
        {
          menu: {
            id: 0,
            title: 'Top',
            subTitles: ['ようこそ']
          },
          bodyText: 'おいでませ typescript & angularJS world.'
        },
        {
          menu: {
            id: 1,
            title: 'how to',
            subTitles: ['かんたんなルール']
          },
          bodyText: 'typescriptフォルダに色々詰めこむ(型定義ファイルも忘れずに).'
        }
      ];

      this.activeContent = this.contents[0];
    }

    public selectMenu(index): void {
      this.activeContent = this.contents[index];
    }
  }
}


let app = angular.module('app', []);
app.controller('MainCtrl', [MMain.MainCtrl]);
