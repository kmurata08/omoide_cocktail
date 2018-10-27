var app = new Vue({
    el: '#app',
    data: {
        blobUrl: '',
        imgSetted: false,
        imgLoaded: false,
        imgElement: null,
        isCalculating: false,
        result: null,
        currentScrollY: 0,
        cocktails: [{
                name: "ジントニック",
                rgb: [193, 199, 214],
                word: "いつも希望を捨てない\nあなたへ",
                img: "oc-jinTonic.png"
            },
            {
                name: "マティーニ",
                rgb: [215, 219, 228],
                word: "知的でちょっと\n硬めなあなたへ",
                img: "oc-martini.png"
            },
            {
                name: "モスコミュール",
                rgb: [226, 167, 7],
                word: "どんな人とも\n溶け合えるあなたへ",
                img: "oc-moscowMule.png"
            },
            {
                name: "ジンライム",
                rgb: [187, 194, 198],
                word: "ロマンチックが\n止まらないあなたへ",
                img: "oc-jinLime.png"
            },
            {
                name: "カンパリオレンジ",
                rgb: [245, 48, 44],
                word: "どこまでも\n自由なあなたへ",
                img: "oc-campariOrange.png"
            },
            {
                name: "カシスソーダ",
                rgb: [172, 14, 9],
                word: "生きとし生けるもの\nを魅了するあなたへ",
                img: "oc-cassisSoda.png"
            },
            {
                name: "ブラッディ・メアリー",
                rgb: [125, 37, 35],
                word: "何事にも勝利したい\nあなたへ",
                img: "oc-bloodyMary.png"
            },
            {
                name: "キール",
                rgb: [174, 42, 1],
                word: "小さな出会いを\n大切にするあなたへ",
                img: "oc-kir.png"
            },
            {
                name: "レッドアイ",
                rgb: [193, 38, 43],
                word: "いつでも献身的な\nあなたへ",
                img: "oc-redEye.png"
            },
            {
                name: "テキーラ・サンライズ",
                rgb: [189, 117, 37],
                word: "今熱烈な恋をしている\nあなたへ",
                img: "oc-tequilaSunrise.png"
            },
            {
                name: "アプリコットフィズ",
                rgb: [245, 107, 18],
                word: "自分の想いに気づいて\n欲しいあなたへ",
                img: "oc-aplicotFizz.png"
            },
            {
                name: "オレンジ・ブロッサム",
                rgb: [188, 156, 76],
                word: "ピュアすぎるあなたへ",
                img: "oc-orangeBlossom.png"
            },
            {
                name: "ファジーネーブル",
                rgb: [241, 201, 4],
                word: "感謝の気持ちを\n忘れないあなたへ",
                img: "oc-fuzzyNavel.png"
            },
            {
                name: "スクリュードライバー",
                rgb: [240, 170, 36],
                word: "多くの人の\n心を奪うあなたへ",
                img: "oc-screwDriver.png"
            },
            {
                name: "ソルティドッグ",
                rgb: [199, 149, 92],
                word: "守りたいと\n感じさせるあなたへ",
                img: "oc-saltyDog.png"
            },
            {
                name: "シャンディガフ",
                rgb: [213, 187, 70],
                word: "無駄なことも\n楽しめるあなたへ",
                img: "oc-shandyGaff.png"
            },
            {
                name: "ジンバック",
                rgb: [186, 165, 146],
                word: "誠実で正しい心を持つ\nあなたへ",
                img: "oc-jinBuck.png"
            },
            {
                name: "カシスオレンジ",
                rgb: [183, 90, 46],
                word: "魅力という言葉が\n似合うあなたへ",
                img: "oc-cassisOrange.png"
            },
            {
                name: "アラウンド・ザ・ワールド",
                rgb: [81, 184, 75],
                word: "冒険心が旺盛な\nあなたへ",
                img: "oc-aroundTheWorld.png"
            },
            {
                name: "デビル",
                rgb: [78, 162, 113],
                word: "危険な香りのする\nあなたへ",
                img: "oc-devil.png"
            },
            {
                name: "チャイナブルー",
                rgb: [67, 175, 183],
                word: "自分を大切にできる\n自信家なあなたへ",
                img: "oc-chinaBlue.png"
            },
            {
                name: "ブルーハワイ",
                rgb: [35, 173, 168],
                word: "空想や連想が好きな\nあなたへ",
                img: "oc-blueHawaii.png"
            },
            {
                name: "ガルフストリーム",
                rgb: [17, 209, 208],
                word: "クールに見えて\n実は優しいあなたへ",
                img: "oc-gulfStream.png"
            },
            {
                name: "キスインザダーク",
                rgb: [177, 38, 65],
                word: "日常に刺激を\n求めるあなたへ",
                img: "oc-kissInTheDark.png"
            },
            {
                name: "コスモポリタン",
                rgb: [211, 12, 23],
                word: "大人っぽく華麗な\nあなたへ",
                img: "oc-cosmopolitan.png"
            },
            {
                name: "シンガポール・スリング",
                rgb: [212, 151, 169],
                word: "一見読めない魔性な\n一面を持つあなたへ",
                img: "oc-singaporeSling.png"
            },
            {
                name: "ブルー・ムーン",
                rgb: [131, 98, 147],
                word: "誘惑を断ち切りたい\nあなたへ",
                img: "oc-blueMoon.png"
            },
            {
                name: "バイオレット・フィズ",
                rgb: [121, 95, 204],
                word: "いつまでも覚えていて\n欲しいあなたへ",
                img: "oc-violetFizz.png"
            },
            {
                name: "カルーア・ミルク",
                rgb: [151, 129, 143],
                word: "無邪気でいたずら\n好きなあなたへ",
                img: "oc-kahluaMilk.png"
            },
            {
                name: "アメリカーノ",
                rgb: [162, 33, 37],
                word: "届かぬ想いを抱く\nあなたへ",
                img: "oc-americano.png"
            },
            {
                name: "カミカゼ",
                rgb: [209, 213, 178],
                word: "大切な人を守りたいと\n想うあなたへ",
                img: "oc-kamikaze.png"
            },
            {
                name: "ギムレット",
                rgb: [162, 163, 165],
                word: "遠い人を想うあなたへ",
                img: "oc-gimlet.png"
            },
            {
                name: "マルガリータ",
                rgb: [234, 230, 223],
                word: "無言の愛情を\n届けたいあなたへ",
                img: "oc-margarita.png"
            },
            {
                name: "スプリッツァー",
                rgb: [177, 170, 141],
                word: "嘘が大嫌いなあなたへ",
                img: "oc-spritzer.png"
            },
            {
                name: "XYZ",
                rgb: [225, 225, 225],
                word: "全てを捧げたい\nあなたへ",
                img: "oc-xyz.png"
            },
            {
                name: "ブラック・ベルベット",
                rgb: [32, 4, 7],
                word: "常に話題にされたい\nあなたへ",
                img: "oc-blackVelvet.png"
            },
            {
                name: "ブラック・ルシアン",
                rgb: [44, 38, 42],
                word: "愛と憎しみに\n翻弄されたいあなたへ",
                img: "oc-blackRussian.png"
            },
        ]
    },
    methods: {
        reset: function() {
            this.blobUrl = '';
            this.imgSetted = false;
            this.imgLoaded = false;
            this.imgElement = null;
            this.isCalculating = false;
            this.result = null;
        },
        /**
         * 画像がセットされたら、blobUrlを作成して画像存在フラグを立てる
         */
        setImg: function(e) {
            e.preventDefault();
            var file = e.target.files[0];
            this.blobUrl = window.URL.createObjectURL(file); // Blob URLの作成
            this.imgSetted = true;
            this.imgLoaded = false;
        },
        /**
         * 画像が読み込まれたらonLoadImg発動
         */
        onLoadImg: function(e) {
            this.imgLoaded = true;
            this.imgElement = e.target;
        },
        convert: function() {
            var self = this;
            setTimeout(function() {
                var vibrantRGB = self.getVibrantRGB(self.imgElement);
                var cocktail = self.calcMostNearestCocktail(vibrantRGB, self.cocktails);
                self.result = cocktail;
                self.resultColor = self.getColorCodeFromRGB(cocktail.rgb);
                self.isCalculating = false;
                self.resultAnimation()
            }, 8000);
            this.isCalculating = true;
            this.calcBarAnimation();
        },
        /**
         * 入力されたRGBとカクテルのリストから、最も近いカクテルを選ぶ
         */
        calcMostNearestCocktail: function(rgb, cocktails) {
            var cocktail;
            var minD = 1000;
            for (var i in cocktails) {
                var _cocktail = cocktails[i];
                var distance = this.getRGBDistance(rgb, _cocktail.rgb);
                if (distance < minD) {
                    minD = distance;
                    cocktail = _cocktail;
                }
            }
            return cocktail;
        },
        /**
         * imgオブジェクトからRGBのリストを返す
         */
        getVibrantRGB: function(imgElement) {
            var pallete = 200;
            var quality = 3;
            var vibrant = new Vibrant(imgElement, pallete, quality);
            var swatches = vibrant.swatches();

            var vibBase = swatches.Vibrant;
            if (typeof vibBase === "undefined") {
                vibBase = swatches.LightVibrant;
            }
            if (typeof vibBase === "undefined") {
                vibBase = swatches.DarkVibrant;
            }
            return vibBase.rgb;
        },
        /**
         * 2つのRGB値の配列[r, g, b]から距離を計算する
         */
        getRGBDistance: function(rgb1, rgb2) {
            var d = Math.sqrt(
                (rgb1[0] - rgb2[0]) * (rgb1[0] - rgb2[0]) +
                (rgb1[1] - rgb2[1]) * (rgb1[1] - rgb2[1]) +
                (rgb1[2] - rgb2[2]) * (rgb1[2] - rgb2[2]));
            return d;
        },
        /**
         * RGBのリストから、カラーコードの文字列を返す
         */
        getColorCodeFromRGB: function(rgb) {
            var rhex = rgb[0].toString(16);
            var ghex = rgb[1].toString(16);
            var bhex = rgb[2].toString(16);
            var colorCode = '#' + rhex + ghex + bhex;
            return colorCode;
        },
        pageMountedAnimation: function() {
            var isSp = isMobile.phone || isMobile.tablet;
            TweenMax.from(".bg", 1.75, {
                delay: 0.5,
                ease: Power2.easeOut,
                opacity: 0
            });
            TweenMax.from(".logo", 1, {
                delay: 1.75,
                ease: Power2.easeOut,
                y: 25,
                opacity: 0
            });
            TweenMax.from("#logo", 1, {
                delay: 1.75,
                ease: Power2.easeOut,
                y: 25,
                opacity: 0
            });
            TweenMax.from(".modal-open", 1, {
                delay: 1.75,
                ease: Power2.easeOut,
                y: 25,
                opacity: 0
            });
            TweenMax.from("#upload-img", 1, {
                delay: 2,
                ease: Power2.easeOut,
                y: 25,
                opacity: 0
            });

        },
        calcBarAnimation: function() {
            var isSp = isMobile.phone || isMobile.tablet;
            TweenMax.from("#bar", 1.75, {
                repeat: -1,
                x: isSp ? 240 : 290,
                yoyo: true
            });
        },
        resultAnimation: function() {
            var isSp = isMobile.phone || isMobile.tablet;
            TweenMax.to("#result-img", 0.75, {
                delay: 0.8,
                ease: Power3.easeOutIn,
                y: isSp ? -25 : null,
                x: isSp ? null : -225
            });
            TweenMax.from("#result-area", 0.75, {
                delay: 1,
                ease: Power3.easeOutIn,
                opacity: 0,
                x: isSp ? null : 190,
                y: 25
            });
            TweenMax.from("#cocktail-1", 0.75, {
                delay: 2,
                ease: Power3.easeOutIn,
                opacity: 0,
            });
            TweenMax.from("#cocktail-img", 0.75, {
                delay: 3.5,
                ease: Power3.easeOutIn,
                opacity: 0,
                y: 25
            });
            TweenMax.from("#cocktail-2", 0.75, {
                delay: 3.5,
                ease: Power3.easeOutIn,
                opacity: 0,
                y: 25
            });
            TweenMax.from("#words-1", 0.75, {
                delay: 5.5,
                ease: Power3.easeOutIn,
                opacity: 0,
            });
            TweenMax.from("#words-2", 0.75, {
                delay: 7,
                ease: Power3.easeOutIn,
                opacity: 0,
                y: 25
            });
            TweenMax.from("#btn-result", 0.75, {
                delay: 8.5,
                ease: Power3.easeOutIn,
                opacity: 0,
                y: 25
            });
        },
        infoModalOpen: function() {
            var scrollY = $(window).scrollTop();
            this.currentScrollY = scrollY;
            $('body').css({
                position: 'fixed',
                width: '100%',
                top: -1 * scrollY
            });
            $('body').append('<div class="modal-overlay"></div>');
            $('.modal-overlay').fadeIn('fast');
            var modal = '#info-modal';
            modalResize();
            $(modal).fadeIn('fast');
            // リサイズしたら表示位置を再取得
            $(window).on('resize', function() {
                modalResize();
            });
            // モーダルコンテンツの表示位置を設定する関数
            function modalResize() {
                var w = $(window).width();
                var x = (w - $(modal).outerWidth(true)) / 2;
                $(modal).css({
                    'left': x + 'px'
                });
            }
        },
        modalClose: function() {
            $('.modal-content,.modal-overlay').fadeOut(300);
            $('body').attr({
                style: ''
            });
            $('html, body').prop({
                scrollTop: this.currentScrollY
            });
            $('.modal-overlay').remove();
        }
    },
    computed: {
        resultColorRgba: function() {
            if (this.result === null) {
                return '';
            }
            var rgb = this.result.rgb;
            var rgba = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.3)';
            return rgba;
        },
        resultColorCode: function() {
            if (this.result === null) {
                return '';
            }
            var rgb = this.result.rgb;
            var rhex = rgb[0].toString(16);
            var ghex = rgb[1].toString(16);
            var bhex = rgb[2].toString(16);
            var colorCode = '#' + rhex + ghex + bhex;
            return colorCode;
        },
        resultImgUri: function() {
            if (this.result === null) {
                return '';
            }
            return './static/img/cocktail/' + this.result.img
        },
        resultShareUri: function() {
            if (this.result === null) {
                return '';
            }
            return "https://twitter.com/intent/tweet?url=http://cooktail.edgenium.com&text=わたしの思い出が「" + this.result.name + "」に変換されました！%0A&hashtags=おもいでカクテル";
        },
        resultName: function() {
            if (this.result === null) {
                return '';
            }
            return this.result.name;
        },
        resultWord: function() {
            if (this.result === null) {
                return '';
            }
            return this.result.word;
        }
    },
    mounted: function() {
        this.pageMountedAnimation();
        // 画像の先読み
        var bgGif = new Image();
        bgGif.src = "./static/img/oc-bartender.gif";
    }
});
