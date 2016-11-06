module MMain {
  interface IContent {
    menu: IMenu;
    bodyText: string;
    scrollContentFlg: boolean;
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
    public scrollContents: Array<number> = [];
    private scrollUnit: number = 15;

    constructor() {
      this.contents = [
        {
          menu: {
            id: 0,
            title: 'Top',
            subTitles: ['ようこそ']
          },
          bodyText: 'おいでませ typescript & angularJS world.',
          scrollContentFlg: false
        },
        {
          menu: {
            id: 1,
            title: 'how to',
            subTitles: ['かんたんなルール']
          },
          bodyText: 'typescriptフォルダに色々詰めこむ(型定義ファイルも忘れずに).',
          scrollContentFlg: false
        },
        {
          menu: {
            id: 2,
            title: 'sample infinite scroll',
            subTitles: ['サンプル - 無限スクロール']
          },
          bodyText: '無限スクロール作ってみた.',
          scrollContentFlg: true
        }
      ];

      this.activeContent = this.contents[0];
      this.scrollContents = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    }

    public selectMenu(index:number): void {
      this.activeContent = this.contents[index];
    }

    public addScrollContents(): void {
      if (this.scrollContents.length <= 0) {
        this.scrollContents = [...Array(this.scrollUnit)];
        return;
      }
      let startNum = this.scrollContents.length;
      let endNum = startNum + this.scrollUnit;
      for (let i = startNum; i < endNum; i++) {
        this.scrollContents.push(i);
      }
    }
  }
}


let app = angular.module('app', ['infinite-scroll']);
app.controller('MainCtrl', [MMain.MainCtrl]);
