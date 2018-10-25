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
                word: "いつも希望を捨てない",
                img: "oc-jinTonic.png"
            },
            {
                name: "マティーニ",
                rgb: [215, 219, 228],
                word: "知的で堅実な",
                img: "oc-martini.png"
            },
            {
                name: "モスコミュール",
                rgb: [226, 167, 7],
                word: "どんな人とも溶け合える",
                img: "oc-moscowMule.png"
            },
            {
                name: "ジンライム",
                rgb: [187, 194, 198],
                word: "いつまでもロマンチックな",
                img: "oc-jinLime.png"
            },
            {
                name: "カンパリオレンジ",
                rgb: [245, 48, 44],
                word: "どこまでも自由を求める",
                img: "oc-campariOrange.png"
            },
            {
                name: "カシスソーダ",
                rgb: [172, 14, 9],
                word: "誰をも魅了する",
                img: "oc-cassisSoda.png"
            },
            {
                name: "ブラッディ・メアリー",
                rgb: [125, 37, 35],
                word: "勝利への強い意思を持つ",
                img: "oc-bloodyMary.png"
            },
            {
                name: "キール",
                rgb: [174, 42, 1],
                word: "小さな出会いをも大切にする",
                img: "oc-kir.png"
            },
            {
                name: "レッドアイ",
                rgb: [193, 38, 43],
                word: "弱き者にも手を差し伸べられる",
                img: "oc-redEye.png"
            },
            {
                name: "テキーラ・サンライズ",
                rgb: [189, 117, 37],
                word: "熱烈な恋をしている",
                img: "oc-tequilaSunrise.png"
            },
            {
                name: "アプリコットフィズ",
                rgb: [245, 107, 18],
                word: "自分の想いに気づいて欲しい",
                img: "oc-aplicotFizz.png"
            },
            {
                name: "オレンジ・ブロッサム",
                rgb: [188, 156, 76],
                word: "純潔な",
                img: "oc-orangeBlossom.png"
            },
            {
                name: "ファジーネーブル",
                rgb: [241, 201, 4],
                word: "感謝の気持ちを忘れない",
                img: "oc-fuzzyNavel.png"
            },
            {
                name: "スクリュードライバー",
                rgb: [240, 170, 36],
                word: "多くの人の心を奪う",
                img: "oc-screwDriver.png"
            },
            {
                name: "ソルティドッグ",
                rgb: [199, 149, 92],
                word: "守りたいと感じさせる",
                img: "oc-saltyDog.png"
            },
            {
                name: "シャンディガフ",
                rgb: [213, 187, 70],
                word: "無駄なことも楽しめる",
                img: "oc-shandyGaff.png"
            },
            {
                name: "ジンバック",
                rgb: [186, 165, 146],
                word: "誠実で正しい心を持つ",
                img: "oc-jinBuck.png"
            },
            {
                name: "カシスオレンジ",
                rgb: [183, 90, 46],
                word: "魅力的という言葉が似合う",
                img: "oc-cassisOrange.png"
            },
            {
                name: "アラウンド・ザ・ワールド",
                rgb: [81, 184, 75],
                word: "冒険心が旺盛な",
                img: "oc-aroundTheWorld.png"
            },
            {
                name: "デビル",
                rgb: [78, 162, 113],
                word: "危険な香りのする",
                img: "oc-devil.png"
            },
            {
                name: "チャイナブルー",
                rgb: [67, 175, 183],
                word: "自分を大切にできる自信家な",
                img: "oc-chinaBlue.png"
            },
            {
                name: "ブルーハワイ",
                rgb: [35, 173, 168],
                word: "空想・連想が好きな",
                img: "oc-blueHawaii.png"
            },
            {
                name: "ガルフストリーム",
                rgb: [17, 209, 208],
                word: "クールに見えて本当は優しい",
                img: "oc-gulfStream.png"
            },
            {
                name: "キスインザダーク",
                rgb: [177, 38, 65],
                word: "日常に刺激を求める",
                img: "oc-kissInTheDark.png"
            },
            {
                name: "コスモポリタン",
                rgb: [211, 12, 23],
                word: "大人っぽく華麗な",
                img: "oc-cosmopolitan.png"
            },
            {
                name: "シンガポール・スリング",
                rgb: [212, 151, 169],
                word: "一見読めない魔性な面を持つ",
                img: "oc-singaporeSling.png"
            },
            {
                name: "ブルー・ムーン",
                rgb: [131, 98, 147],
                word: "誘惑を断ち切りたい",
                img: "oc-blueMoon.png"
            },
            {
                name: "バイオレット・フィズ",
                rgb: [121, 95, 204],
                word: "いつまでも覚えていて欲しい",
                img: "oc-violetFizz.png"
            },
            {
                name: "カルーア・ミルク",
                rgb: [151, 129, 143],
                word: "無邪気でいたずら好きな",
                img: "oc-kahluaMilk.png"
            },
            {
                name: "アメリカーノ",
                rgb: [162, 33, 37],
                word: "届かぬ想いを抱く",
                img: "oc-americano.png"
            },
            {
                name: "カミカゼ",
                rgb: [209, 213, 178],
                word: "大切な人を守りたいと想う",
                img: "oc-kamikaze.png"
            },
            {
                name: "ギムレット",
                rgb: [162, 163, 165],
                word: "遠い人を想う",
                img: "oc-gimlet.png"
            },
            {
                name: "マルガリータ",
                rgb: [234, 230, 223],
                word: "無言の愛情を届けたい",
                img: "oc-margarita.png"
            },
            {
                name: "スプリッツァー",
                rgb: [177, 170, 141],
                word: "真実を愛する",
                img: "oc-spritzer.png"
            },
            {
                name: "XYZ",
                rgb: [225, 225, 225],
                word: "永遠に全てを捧げたい",
                img: "oc-xyz.png"
            },
            {
                name: "ブラック・ベルベット",
                rgb: [32, 4, 7],
                word: "忘れないで欲しい",
                img: "oc-blackVelvet.png"
            },
            {
                name: "ブラック・ルシアン",
                rgb: [44, 38, 42],
                word: "憎むほど愛しい",
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
            this.isCalculating = true;
            var vibrantRGB = this.getVibrantRGB(this.imgElement);
            var cocktail = this.calcMostNearestCocktail(vibrantRGB, this.cocktails);
            this.result = cocktail;
            this.resultColor = this.getColorCodeFromRGB(cocktail.rgb);

            var self = this;
            setTimeout(function() {
                self.isCalculating = false;
                self.resultAnimation()
            }, 8000);

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
            TweenMax.from(".logo", 0.75, {
                ease: Power2.easeOut,
                x: isSp ? -50 : -25,
                opacity: 0
            });
            TweenMax.from("#logo", 0.75, {
                delay: isSp ? 0.8 : null,
                ease: Power2.easeOut,
                y: 25,
                opacity: 0
            });
            TweenMax.from(".modal-open", 0.75, {
                delay: isSp ? 0.8 : null,
                ease: Power2.easeOut,
                y: 25,
                opacity: 0
            });
            TweenMax.from("#upload-img", 0.75, {
                delay: 1,
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
                y: isSp ? -25 : -225
            });
            TweenMax.from("#result-area", 0.75, {
                delay: 1,
                ease: Power3.easeOutIn,
                opacity: 0,
                x: isSp ? null : 190,
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
        resultColorCode: function() {
            if (this.result === null) {
                return '';
            }
            var rgb = this.result.rgb;
            var colorCode = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.5)';
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
    },
    mounted: function() {
        this.pageMountedAnimation();
        // 画像の先読み
        var bgGif = new Image();
        bgGif.src = "./static/img/bartender.gif";
    }
});
