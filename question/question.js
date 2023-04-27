//全体のレイアウト
const quiz = [
    {
        questionN:'第1問',
        question: [
            'アメリカ合衆国カルフォルニア州ホーソーンに本社を置き、',
            '近年Twitter買収でも話題になったイーロン・マスクにより',
            '設立された航空宇宙の民間企業の社名は？'
        ],
        answers:[
            'SpaceX',
            'NASA',
            'Rocket Lab',
            'Amazon'
        ],
        correct:'SpaceX',
        explanation: 'SpaceXの月周回旅行をZOZO創業者の前澤友作氏が、定員の9人分全席大人買いしたことが話題となっている。チケット代の総額は公表されていないが、7~800億円程度と言われています。'
    },{
        questionN:'第2問',
        question : ['地球の外に広がっており、重力が弱まった影響で大気（空気）',
                    'がほとんど無くなった空間のことを宇宙空間（宇宙）とみな',
                    'されるが、高度何キロから上が宇宙空間と定義されるか？'
        ],
        answers:[
            '45km',
            '100km',
            '80km',
            '500km'
        ],
        correct:'100km',
        explanation:'国際航空連盟(FAI)という組織が、高度100kmから上を宇宙と定義している。なお、米国空軍は80kmから上を宇宙と定義している。'
    },{
        questionN:'第3問',
        question :['宇宙に人が長期滞在するための施設を国際宇宙ステーション',
                    '(ISS)という。高度400km上あたりで地球をグルグル周回',
                    'しながら、新薬開発や半導体等の新素材開発などの最先端',
                    'の研究に貢献しているが、国際宇宙ステーションは1周あ',
                    'たり何分くらいかけて周回しているか？'
        ],
        answers :[
            '90分',
            '300分',
            '180分',
            '2000分'
        ],
        correct:'90分',
        explanation:'ISSを地上に置くとしたら、サッカー場がすっぽり収まるほどの大きさ。一部では民間による商業利用も始まっており、今最も注目されている商業利用は民間人のISS滞在で、映画の撮影や宇宙ホテルとしての利用があげられる。'
    },{
        questionN:'第4問',
        question:['通常の通信網やインターネット網は、地上のありとあらゆる',
                  'ところに電波塔を建て、地上や海底などにケーブルを敷く必要',
                  'がある。現在ケーブル網が届かず、インターネットを自由に',
                  '利用できない人およそ何人存在するか？'],
        answers:[
            '1000万人',
            '2億4000万人',
            '4000万人',
            '30億人'
        ],
        correct:'30億人',
        explanation:'現在世界40%以上の人がインターネットを利用できない。しかし、宇宙に配置した人工衛星を活用すれば、いつでもどこでもインターネットにつながることが出来るようになる。エベレストにて、グーグルマップで下山ルートをチェックなんて時代も来るかもしれない。'
    },{
        questionN:'第5問',
        question:['日本の宇宙業界でも近年様々なスタートアップ企業が生ま',
                  'れてきている。日本のAEL社が立ち上げたプロジェクト',
                  '「SKY CANVAS」の一環で東北大学と共同であるものを',
                  '人工的に再現したのですがそれは何でしょうか？'
        ],
        answers:[
            'UFO',
            '流れ星',
            '星座',
            '太陽'
        ],
        correct:'流れ星',
        explanation:'人工衛生から流星源を放出し大気圏に突入させることで流れ星のような発光を再現することができます。イベント、フェス、エンターテイメント施設など、指定の場所と時間で流れ星体験が可能になります。'
    },{
        questionN:'第6問',
        question:['ロケットやスペースプレーンの離発着場、つまり空港の',
                  '宇宙版のことを宇宙港(スペースポート)という。現在',
                  '世界各国で開発が進んでおり、アメリカでは既に12カ所',
                  '宇宙港が存在している。そんな中、他の国々と比較して',
                  '日本は宇宙港に最強の立地と言えるのだが、それは何故か？'
        ],
        answers:[
            '東方が開けている',
            '山間部が少ない',
            '降水量が少ない',
            '赤道に近い'
        ],
        correct:'東方が開けている',
        explanation:'ロケットやスペースプレーンを打ち上げる場合、通常、東方向や南北が開けている必要があります。この条件に当てはまるエリアは地球上で限られており、東と南が公海の日本は非常に有利な場所に位置していると言えます。日本では大分、沖縄、北海道等で開発が進んでいる。'
    },{
        questionN:'第7問',
        question:['宇宙事業が進むことで、人やモノの輸送手段も変化していく。',
                  '高速で高度100km付近の宇宙空間を通り、短時間で地球上',
                  'の二地点間を移動する輸送手段を、二地点間高速輸送という。',
                  'この手段をSpaceX社の大型宇宙船スターシップで実現すること',
                  'でシンガポール⇒東京間を約何分で移動できるようになるか？',
                  'ちなみに現在の飛行機だと約7時間。'
        ],
        answers:[
            '30分',
            '210分',
            '140分',
            '300分'
        ],
        correct:'30分',
        explanation:'将来、二地点間高速輸送が当たり前になると世界のどこでも30~50分で移動が可能になります。こうした旅客機の離発着を行う宇宙港は、世界経済・文化の中心地となっていく可能性大です。'
    },{
        questionN:'第8問',
        question:['通信、輸送、テクノロジー、ビッグデータ、創薬や資源エネ',
                  'ルギーといった業界だけでなく一見関係ないようなさまざま',
                  'な業界が宇宙を使ったビジネスへとシフトしていくことにな',
                  'ります。2040年代には宇宙産業の市場規模はどれくらいにな',
                  'る見込みでしょうか？'
        ],
        answers:[
            '10兆円',
            '100兆円',
            '50兆円',
            '1垓円'
        ],
        correct:'100兆円',
        explanation:'宇宙ビジネスは、2040年代には市場規模100兆円を超える一大産業となる見込みですが、日本の宇宙ビジネスへの投資額は、米国などに比べるとまだまだ少ないのが現状です。いかにマネーを呼び込むかが、今後の課題と言えるでしょう。'
    }
];

//変数を定義
const quizLength = quiz.length; //クイズの数
let quizIndex = 0; //quizのリスト番号
const $button = document.getElementsByTagName('button'); //ボタンの情報取得
const buttonLength = $button.length; //ボタンの数
let score =0; //現在の正解数
const $li = document.getElementsByTagName('li'); //問題文の情報取得
const liLength = $li.length; //問題文の文章の数
const buttonClose = document.getElementById('restart');//モーダルのボタンの情報取得


//クイズの問題文、選択肢を定義
const setupQuiz = () =>{
    //問題番号を出力
    document.getElementById('sss').textContent=quiz[quizIndex].questionN;
    //何行目かの変数
    let liIndex = 0;
    //問題文の数だけ問題文を表示
    while(liIndex <liLength){
        $li[liIndex].textContent = quiz[quizIndex].question[liIndex];
        liIndex++;
    }
    //どのボタンを示すための変数
    let buttonIndex = 0;
    //ボタンに選択肢を表示
    while(buttonIndex <buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//clickHandlerの定義
const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        //正解の場合
        window.alert('正解！！\n正解は「'+quiz[quizIndex].correct+'」\n'+quiz[quizIndex].explanation);
        score++;
    }else{
        //不正解の場合
        window.alert('不正解！！\n正解は「'+quiz[quizIndex].correct+'」\n'+quiz[quizIndex].explanation);
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        //問題数がもうなければこちらを実行
        //モーダルの起動
        modal.style.display = "block";
        if(score == 8){
            //全問正解の場合
            document.getElementById('rank').textContent = 'ランクS';
        }else if(score >= 6){
            //正解数が6以上7以下の場合
            document.getElementById('rank').textContent = 'ランクA';
        }else if(score >= 3){
            //正解数が3以上5以下の場合
            document.getElementById('rank').textContent = 'ランクB';
        }else if(score >= 1){
            //正解数が1以上2以下の場合
            document.getElementById('rank').textContent = 'ランクC';
        }else{
            //全問不正解の場合
            document.getElementById('rank').textContent = 'ランクD';
        }
        document.getElementById('score').textContent = '終了!あなたの正解数は'+score+'/'+ quizLength+'です!';
        buttonClose.addEventListener('click',(e)=>{
            location.href = '../index.html';
        })
    }
};

//ボタンをクリックしたらclickHandlerを起動
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;    
}


