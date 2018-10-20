var app = new Vue({
    el: '#app',
    data: {
        blobUrl: '',
        imgSetted: false,
        imgLoaded: false,
        imgElement: null,
        isCalcrating: false,
        result: null,
        resultColor: null,
        shareHref: '',
        cocktails: [
            {
                name: "ジントニック",
                rgb: [193, 199, 214],
                word:"強い意志／いつも希望を捨てないあなたへ",
                img: "c1.jpg"
            },
            {
                name: "マティーニ",
                rgb: [215, 219, 228],
                word:"知的な愛",
                img: "c1.jpg"
            },
            {
                name: "モスコミュール",
                rgb: [226, 167, 7],
                word:"喧嘩したら、その日のうちに仲直り",
                img: "c1.jpg"
            },
            {
                name: "ジンライム",
                rgb: [187, 194, 198],
                word:"色褪せぬ恋",
                img: "c1.jpg"
            },
            {
                name: "カンパリオレンジ",
                rgb: [245, 48, 44],
                word:"自由",
                img: "c1.jpg"
            },
            {
                name: "カシスソーダ",
                rgb: [172, 14, 9],
                word:"貴方は魅力的",
                img: "c1.jpg"
            },
            {
                name: "ブラッディ・メアリー",
                rgb: [125, 37, 35],
                word:"私の心は燃えている、断固として勝つ",
                img: "c1.jpg"
            },
            {
                name: "キール",
                rgb: [174, 42, 1],
                word:"最高の巡り会い、陶酔",
                img: "c1.jpg"
            },
            {
                name: "レッドアイ",
                rgb: [193, 38, 43],
                word:"同情",
                img: "c1.jpg"
            },
            {
                name: "アプリコット・クーラー",
                rgb: [245, 107, 18],
                word:"素晴らしい",
                img: "c1.jpg"
            },
            {
                name: "アプリコットフィズ",
                rgb: [245, 107, 18],
                word:"振り向いてください",
                img: "c1.jpg"
            },
            {
                name: "ミモザ",
                rgb: [245, 135, 14],
                word:"真心",
                img: "c1.jpg"
            },
            {
                name: "ファジーネーブル",
                rgb: [241, 201, 4],
                word:"感謝の気持ちを忘れない",
                img: "c1.jpg"
            },
            {
                name: "スクリュードライバー",
                rgb: [240, 170, 36],
                word:"あなたに心を奪われた/油断",
                img: "c1.jpg"
            },
            {
                name: "ソルティドッグ",
                rgb: [199, 149, 92],
                word:"あなたを守りたい",
                img: "c1.jpg"
            },
            {
                name: "シャンディガフ",
                rgb: [213, 187, 70],
                word:"無駄なこと",
                img: "c1.jpg"
            },
            {
                name: "ジンバック",
                rgb: [186, 165, 146],
                word:"正しき心",
                img: "c1.jpg"
            },
            {
                name: "カシスオレンジ",
                rgb: [183, 90, 46],
                word:"あなたは魅力的",
                img: "c1.jpg"
            },
            {
                name: "モヒート",
                rgb: [179,196,134],
                word:"心の渇きを癒して",
                img: "c1.jpg"
            },
            {
                name: "アラウンド・ザ・ワールド",
                rgb: [81,184,75],
                word:"冒険",
                img: "c1.jpg"
            },
            {
                name: "エメラルドアイル",
                rgb: [78,162,113],
                word:"厳しくも美しい",
                img: "c1.jpg"
            },
            {
                name: "チャイナブルー",
                rgb: [67,175,183],
                word:"自分心を宝物だと思える自信家",
                img: "c1.jpg"
            },
            {
                name: "ブルーハワイ",
                rgb: [35,173,168],
                word:"連想",
                img: "c1.jpg"
            },
            {
                name: "ブルーラグーン",
                rgb: [69,198,206],
                word:"誠実な愛",
                img: "c1.jpg"
            },
            {
                name: "ピンク・レディ",
                rgb: [255,118,163],
                word:"いつも美しい",
                img: "c1.jpg"
            },
            {
                name: "ミリオンダラー",
                rgb: [207,78,49],
                word:"栄光",
                img: "c1.jpg"
            },
            {
                name: "カサブランカ",
                rgb: [243,92,100],
                word:"甘く切ない想い出",
                img: "c1.jpg"
            },
            {
                name: "ブルー・ムーン",
                rgb: [131,98,147],
                word:"",
                img: "c1.jpg"
            },
            {
                name: "バイオレットフィズ",
                rgb: [121,95,204],
                word:"私を覚えていて",
                img: "c1.jpg"
            },
            {
                name: "カルーアミルク",
                rgb: [151,129,143],
                word:"いたずら好き/臆病",
                img: "c1.jpg"
            },
            {
                name: "アメリカーノ",
                rgb: [162,33,37],
                word:"届かぬ想い",
                img: "c1.jpg"
            },
            {
                name: "カミカゼ",
                rgb: [209,213,178],
                word:"あなたを救う",
                img: "c1.jpg"
            },
            {
                name: "ギムレット",
                rgb: [162,163,165],
                word:"遠い人を想う",
                img: "c1.jpg"
            },
            {
                name: "マルガリータ",
                rgb: [234,230,223],
                word:"無言の愛",
                img: "c1.jpg"
            },
            {
                name: "スプリッツァー",
                rgb: [177,170,141],
                word:"真実",
                img: "c1.jpg"
            },
            {
                name: "XYZ",
                rgb: [225,225,225],
                word:"永遠にあなたのもの",
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
            this.isCalcrating = false;
            this.result = null;
            this.resultColor = null;
            this.shareHref = '';
        },
        /**
         * 画像がセットされたら、blobUrlを作成して画像存在フラグを立てる
         */
        setImg: function(e) {
            e.preventDefault();
            let file = e.target.files[0];
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
            this.isCalcrating = true;
            let vibrantRGB = this.getVibrantRGB(this.imgElement);
            let cocktail = this.calcMostNearestCocktail(vibrantRGB, this.cocktails);
            this.result = cocktail;
            this.resultColor = this.getColorCodeFromRGB(cocktail.rgb);
            this.shareHref = "https://twitter.com/intent/tweet?url=http://cooktail.edgenium.com&text=あなた写真は" + this.result.name + "へと変わりました";

            var self = this;
            setTimeout(function() {
                self.isCalcrating = false;
            }, 2000);
        },
        /**
         * 入力されたRGBとカクテルのリストから、最も近いカクテルを選ぶ
         */
        calcMostNearestCocktail: function(rgb, cocktails) {
            var cocktail;
            var minD = 1000;
            for (var i in cocktails) {
                let _cocktail = cocktails[i];
                let distance = this.getRGBDistance(rgb, _cocktail.rgb);
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
            let pallete = 200;
            let quality = 3;
            let vibrant = new Vibrant(imgElement, pallete, quality);
            let swatches = vibrant.swatches();

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
            let d = Math.sqrt((rgb1[0] - rgb2[0]) ** 2 + (rgb1[1] - rgb2[1]) ** 2 + (rgb1[2] - rgb2[2]) ** 2);
            return d;
        },
        /**
         * RGBのリストから、カラーコードの文字列を返す
         */
        getColorCodeFromRGB: function(rgb) {
            let rhex = rgb[0].toString(16);
            let ghex = rgb[1].toString(16);
            let bhex = rgb[2].toString(16);
            let colorCode = '#' + rhex + ghex + bhex;
            return colorCode;
        },
    }
});

/**
 * 画像アップロードプレビュー
 */
