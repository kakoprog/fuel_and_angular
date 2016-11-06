var MMain;
(function (MMain) {
    var MainCtrl = (function () {
        function MainCtrl() {
            this.scrollContents = [];
            this.scrollUnit = 15;
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
        MainCtrl.prototype.selectMenu = function (index) {
            this.activeContent = this.contents[index];
        };
        MainCtrl.prototype.addScrollContents = function () {
            if (this.scrollContents.length <= 0) {
                this.scrollContents = Array(this.scrollUnit).slice();
                return;
            }
            var startNum = this.scrollContents.length;
            var endNum = startNum + this.scrollUnit;
            for (var i = startNum; i < endNum; i++) {
                this.scrollContents.push(i);
            }
        };
        return MainCtrl;
    }());
    MMain.MainCtrl = MainCtrl;
})(MMain || (MMain = {}));
var app = angular.module('app', ['infinite-scroll']);
app.controller('MainCtrl', [MMain.MainCtrl]);
//# sourceMappingURL=tsc.js.map