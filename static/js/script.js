var app = new Vue({
    // using Vue.js
    el: '#app',
    data: {
        blobUrl: '',
        imgExists: false,
        cocktails: [
            {
                name: "ジントニック",
                rgb: [10, 20, 40]
            },
            {
                name: "ラムコーク",
                rgb: [200, 10, 121]
            },
            {
                name: "カシスオレンジ",
                rgb: [65, 33, 11]
            },
            {
                name: "カルーアミルク",
                rgb: [143, 169, 210]
            },
            {
                name: "レモンサワー",
                rgb: [23, 154, 30]
            },
            {
                name: "モスコミュール",
                rgb: [87, 198, 145]
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
            console.log("入力された画像のRGB: ");
            console.log(vibrantRGB);
            let cocktail = this.calcMostNearestCocktail(vibrantRGB, this.cocktails);
            console.log("選ばれたカクテルは " + cocktail.name + " です");
        },
        /**
         * 入力されたRGBとカクテルのリストから、最も近いカクテルを選ぶ
         */
        calcMostNearestCocktail: function(rgb, cocktails) {
            var cocktail;
            var minD = 1000;
            for (var i in cocktails) {
                console.log("----calcrate start----");
                let _cocktail = cocktails[i];
                let distance = this.getRGBDistance(rgb, _cocktail.rgb);
                if (distance < minD) {
                    minD = distance;
                    cocktail = _cocktail;
                }
                console.log("入力した画像と" + _cocktail.name + "の距離:");
                console.log(distance);
                console.log("----calcreate end-----");
            }
            return cocktail;
        },
        /**
         * imgオブジェクトからRGBのリストを返す
         */
        getVibrantRGB: function(imgElement) {
            let vibrant = new Vibrant(imgElement);
            let swatches = vibrant.swatches();

            // 使う特徴を決める
            let vibBase;
            if (swatches.hasOwnProperty(Vibrant)) {
                vibBase = swatches.Vibrant;
            } else {
                vibBase = swatches.LightVibrant;
            }
            return vibBase.rgb;
        },
        /**
         * 2つのRGB値の配列[r, g, b]から距離を計算する
         */
        getRGBDistance: function(rgb1, rgb2) {
            let d = Math.sqrt((rgb1[0] - rgb2[0]) ** 2 + (rgb1[1] - rgb2[1]) ** 2 + (rgb1[2] - rgb2[2]) ** 2);
            return d;
        }
    }
});
