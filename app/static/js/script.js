var app = new Vue({
    el: '#app',
    data: {
        blobUrl: '',
        imgSetted: false,
        imgLoaded: false,
        imgElement: null,
        isCalculating: false,
        result: null,
        cocktails: [
            {
                name: "ジントニック",
                rgb: [193, 199, 214],
                word:"いつも希望を捨てないあなたへ",
                img: "c1.jpg"
            },
            {
                name: "マティーニ",
                rgb: [215, 219, 228],
                word:"知的で堅実なあなたへ",
                img: "c1.jpg"
            },
            {
                name: "モスコミュール",
                rgb: [226, 167, 7],
                word:"どんな人とも溶け合えるあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ジンライム",
                rgb: [187, 194, 198],
                word:"いつまでもロマンチックなあなたへ",
                img: "c1.jpg"
            },
            {
                name: "カンパリオレンジ",
                rgb: [245, 48, 44],
                word:"どこまでも自由を求めるあなたへ",
                img: "c1.jpg"
            },
            {
                name: "カシスソーダ",
                rgb: [172, 14, 9],
                word:"誰をも魅了するあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ブラッディ・メアリー",
                rgb: [125, 37, 35],
                word:"勝利への強い意思を持つあなたへ",
                img: "c1.jpg"
            },
            {
                name: "キール",
                rgb: [174, 42, 1],
                word:"小さな出会いをも大切にするあなたへ",
                img: "c1.jpg"
            },
            {
                name: "レッドアイ",
                rgb: [193, 38, 43],
                word:"弱き者にも手を差し伸べられるあなたへ",
                img: "c1.jpg"
            },
            {
                name: "アプリコット・クーラー",
                rgb: [245, 107, 18],
                word:"いくつになっても素敵なあなたへ",
                img: "c1.jpg"
            },
            {
                name: "アプリコットフィズ",
                rgb: [245, 107, 18],
                word:"自分の想いに気づいて欲しいあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ミモザ",
                rgb: [245, 135, 14],
                word:"真心あふれるあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ファジーネーブル",
                rgb: [241, 201, 4],
                word:"感謝の気持ちを忘れないあなたへ",
                img: "c1.jpg"
            },
            {
                name: "スクリュードライバー",
                rgb: [240, 170, 36],
                word:"多くの人の心を奪うあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ソルティドッグ",
                rgb: [199, 149, 92],
                word:"守りたいと感じさせるあなたへ",
                img: "c1.jpg"
            },
            {
                name: "シャンディガフ",
                rgb: [213, 187, 70],
                word:"無駄なことも楽しめるあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ジンバック",
                rgb: [186, 165, 146],
                word:"誠実で正しい心を持つあなたへ",
                img: "c1.jpg"
            },
            {
                name: "カシスオレンジ",
                rgb: [183, 90, 46],
                word:"魅力的という言葉が似合うあなたへ",
                img: "c1.jpg"
            },
            {
                name: "アラウンド・ザ・ワールド",
                rgb: [81,184,75],
                word:"冒険心が旺盛なあなたへ",
                img: "c1.jpg"
            },
            {
                name: "エメラルドアイル",
                rgb: [78,162,113],
                word:"ストイックで美しいあなたへ",
                img: "c1.jpg"
            },
            {
                name: "チャイナブルー",
                rgb: [67,175,183],
                word:"自分を大切にできる自信家なあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ブルーハワイ",
                rgb: [35,173,168],
                word:"空想・連想が好きなあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ガルフストリーム",
                rgb: [17,209,208],
                word:"クールに見えて本当は優しいあなたへ",
                img: "c1.jpg"
            },
            {
                name: "キスインザダーク",
                rgb: [177,38,65],
                word:"日常に刺激を求めるあなたへ",
                img: "c1.jpg"
            },
            {
                name: "コスモポリタン",
                rgb: [211,12,23],
                word:"大人っぽく華麗なあなたへ",
                img: "c1.jpg"
            },
            {
                name: "シンガポールスリング",
                rgb: [212,151,169],
                word:"一見読めない魔性な面を持つあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ブルー・ムーン",
                rgb: [131,98,147],
                word:"誘惑を断ち切りたいあなたへ",
                img: "c1.jpg"
            },
            {
                name: "バイオレットフィズ",
                rgb: [121,95,204],
                word:"いつまでも覚えていて欲しいあなたへ",
                img: "c1.jpg"
            },
            {
                name: "カルーアミルク",
                rgb: [151,129,143],
                word:"無邪気でいたずら好きなあなたへ",
                img: "c1.jpg"
            },
            {
                name: "アメリカーノ",
                rgb: [162,33,37],
                word:"届かぬ想いを抱くあなたへ",
                img: "c1.jpg"
            },
            {
                name: "カミカゼ",
                rgb: [209,213,178],
                word:"大切な人を守りたいと思うあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ギムレット",
                rgb: [162,163,165],
                word:"遠い人を想うあなたへ",
                img: "c1.jpg"
            },
            {
                name: "マルガリータ",
                rgb: [234,230,223],
                word:"無言の愛情を届けたいあなたへ",
                img: "c1.jpg"
            },
            {
                name: "スプリッツァー",
                rgb: [177,170,141],
                word:"真実を愛するあなたへ",
                img: "c1.jpg"
            },
            {
                name: "XYZ",
                rgb: [225,225,225],
                word:"永遠に全てを捧げたいあなたへ",
                img: "c1.jpg"
            },
            {
                name: "ブラックベルベット",
                rgb: [32,4,7],
                word:"忘れないで",
                img: "c1.jpg"
            },
            {
                name: "ブラックルシアン",
                rgb: [44,38,42],
                word:"強敵",
                img: "c1.jpg"
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
            }, 5500);
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
                (rgb1[0] - rgb2[0]) * (rgb1[0] - rgb2[0])
                + (rgb1[1] - rgb2[1]) * (rgb1[1] - rgb2[1])
                + (rgb1[2] - rgb2[2]) *(rgb1[2] - rgb2[2]));
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
    },
    computed: {
        resultColorCode: function() {
            if (typeof this.result === 'undefined') {
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
            return './static/img/cocktail/' + this.result.img
        },
        resultShareUri: function() {
            return "https://twitter.com/intent/tweet?url=http://cooktail.edgenium.com&text=私の写真は" + this.result.name + "に変換されました！";
        }
    }
});
