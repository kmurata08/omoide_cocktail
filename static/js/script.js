var app = new Vue({
    // using Vue.js
    el: '#app',
    data: {
        blobUrl: '',
        imgExists: false,
        result: null,
        resultColor: null,
        cocktails: [
            {
                name: "ジントニック",
                rgb: [193, 199, 214],
                word:"強い意志／いつも希望を捨てないあなたへ"
            },
            {
                name: "マティーニ",
                rgb: [215, 219, 228],
                word:"知的な愛"
            },
            {
                name: "モスコミュール",
                rgb: [226, 167, 7],
                word:"喧嘩したら、その日のうちに仲直り"
            },
            {
                name: "ジンライム",
                rgb: [187, 194, 198],
                word:"色褪せぬ恋"
            },
            {
                name: "カンパリオレンジ",
                rgb: [245, 48, 44],
                word:"自由"
            },
            {
                name: "カシスソーダ",
                rgb: [172, 14, 9],
                word:"貴方は魅力的"
            },
            {
                name: "ブラッディ・メアリー",
                rgb: [125, 37, 35],
                word:"私の心は燃えている、断固として勝つ"
            },
            {
                name: "キール",
                rgb: [174, 42, 1],
                word:"最高の巡り会い、陶酔"
            },
            {
                name: "レッドアイ",
                rgb: [193, 38, 43],
                word:"同情"
            },
            {
                name: "アプリコット・クーラー",
                rgb: [245, 107, 18],
                word:"素晴らしい"
            },
            {
                name: "アプリコットフィズ",
                rgb: [245, 107, 18],
                word:"振り向いてください"
            },
            {
                name: "ミモザ",
                rgb: [245, 135, 14],
                word:"真心"
            },
            {
                name: "ファジーネーブル",
                rgb: [241, 201, 4],
                word:"感謝の気持ちを忘れない"
            },
            {
                name: "スクリュードライバー",
                rgb: [240, 170, 36],
                word:"あなたに心を奪われた/油断"
            },
            {
                name: "ソルティドッグ",
                rgb: [199, 149, 92],
                word:"あなたを守りたい"
            },
            {
                name: "シャンディガフ",
                rgb: [213, 187, 70],
                word:"無駄なこと"
            },
            {
                name: "ジンバック",
                rgb: [186, 165, 146],
                word:"正しき心"
            },
            {
                name: "カシスオレンジ",
                rgb: [183, 90, 46],
                word:"あなたは魅力的"
            },
            {
                name: "モヒート",
                rgb: [179,196,134],
                word:"心の渇きを癒して"
            },
            {
                name: "アラウンド・ザ・ワールド",
                rgb: [81,184,75],
                word:"冒険"
            },
            {
                name: "エメラルドアイル",
                rgb: [78,162,113],
                word:"厳しくも美しい"
            },
            {
                name: "チャイナブルー",
                rgb: [67,175,183],
                word:"自分心を宝物だと思える自信家"
            },
            {
                name: "ブルーハワイ",
                rgb: [35,173,168],
                word:"連想"
            },
            {
                name: "ブルーラグーン",
                rgb: [69,198,206],
                word:"誠実な愛"
            },
            {
                name: "ピンク・レディ",
                rgb: [255,118,163],
                word:"いつも美しい"
            },
            {
                name: "ミリオンダラー",
                rgb: [207,78,49],
                word:"栄光"
            },
            {
                name: "カサブランカ",
                rgb: [243,92,100],
                word:"甘く切ない想い出"
            },
            {
                name: "ブルー・ムーン",
                rgb: [131,98,147],
                word:""
            },
            {
                name: "バイオレットフィズ",
                rgb: [121,95,204],
                word:"私を覚えていて"
            },
            {
                name: "カルーアミルク",
                rgb: [151,129,143],
                word:"いたずら好き/臆病"
            },
            {
                name: "アメリカーノ",
                rgb: [162,33,37],
                word:"届かぬ想い"
            },
            {
                name: "カミカゼ",
                rgb: [209,213,178],
                word:"あなたを救う"
            },
            {
                name: "ギムレット",
                rgb: [162,163,165],
                word:"遠い人を想う"
            },
            {
                name: "マルガリータ",
                rgb: [234,230,223],
                word:"無言の愛"
            },
            {
                name: "スプリッツァー",
                rgb: [177,170,141],
                word:"真実"
            },
            {
                name: "XYZ",
                rgb: [225,225,225],
                word:"永遠にあなたのもの"
            },
            {
                name: "ブラックベルベット",
                rgb: [32,4,7],
                word:"忘れないで"
            },
            {
                name: "ブラックルシアン",
                rgb: [44,38,42],
                word:"強敵"
            },
        ]
    },
    methods: {
        /**
         * 画像がセットされたら、blobUrlを作成して画像存在フラグを立てる
         */
        setImg: function(e) {
            e.preventDefault();
            let file = e.target.files[0];
            this.blobUrl = window.URL.createObjectURL(file); // Blob URLの作成
            this.imgExists = true;
        },
        /**
         * 画像が読み込まれたらonLoadImg発動
         */
        onLoadImg: function(e) {
            let vibrantRGB = this.getVibrantRGB(e.target);
            let cocktail = this.calcMostNearestCocktail(vibrantRGB, this.cocktails);
            this.result = cocktail;
            this.resultColor = this.getColorCodeFromRGB(cocktail.rgb);
        },
        /**
         * pixcel配列から、与えられたRGB値とのヒットするピクセル数をカウント
         */
        calcHitPixcelCount(rgb, pixcelArray) {
            var hitCount = 0;
            var d;
            for (var i = 0; i < pixcelArray.length; i += 4) {
                d = this.getRGBDistance(rgb, [pixcelArray[i], pixcelArray[i + 1], pixcelArray[i + 2]]);

                // 指定した色とピクセルの色の距離が20以下であればヒット
                if (d < 50) {
                    hitCount++;
                }
            }
            return hitCount;
        },
        /**
         * 画像のRGBAピクセル配列を返す
         * [R, G, B, A, R, G, B, A, R, ..., A]
         */
        getRGBAPixcelArray: function(imgElement) {
            var cv = document.createElement('canvas');

            cv.width = imgElement.naturalWidth;
            cv.height = imgElement.naturalHeight;

            var ct = cv.getContext('2d');

            ct.drawImage(imgElement, 0, 0);

            return ct.getImageData(0, 0, cv.width, cv.height).data;
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
            let vibrant = new Vibrant(imgElement);
            let swatches = vibrant.swatches();

            // 画像のRGBを出す
            let pixcelArray = this.getRGBAPixcelArray(imgElement);


            let vibrants = [swatches.Vibrant, swatches.LightVibrant, swatches.DarkVibrant];

            // 最もピクセル数の多いvibrantを選ぶ
            let vibBase;
            var hitPixcelMax = -1;
            for (i in vibrants) {
                if (typeof vibrants[i] === "undefined") {
                    continue;
                }
                let hitCount = this.calcHitPixcelCount(vibrants[i].rgb, pixcelArray);
                if (hitCount > hitPixcelMax) {
                    vibBase = vibrants[i];
                    hitPixcelMax = hitCount;
                }
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
        }
    }
});
