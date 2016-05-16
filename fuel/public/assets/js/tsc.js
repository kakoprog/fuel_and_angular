var MMain;
(function (MMain) {
    var MainCtrl = (function () {
        function MainCtrl() {
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
        MainCtrl.prototype.selectMenu = function (index) {
            this.activeContent = this.contents[index];
        };
        return MainCtrl;
    }());
    MMain.MainCtrl = MainCtrl;
})(MMain || (MMain = {}));
var app = angular.module('app', []);
app.controller('MainCtrl', [MMain.MainCtrl]);
//# sourceMappingURL=tsc.js.map