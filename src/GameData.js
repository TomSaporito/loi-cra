class Calamity{
    constructor(opt){
        this.trueOutcome = opt.plus;
        this.falseOutcome = opt.minus;
        this.dieNums = opt.dieNums;
        this.cost = genCost();
        this.ministryEffected = null;
        this.borderColor = opt.borderColor;
        this.action =`${getRand(GameData.enemies)} ${getRand(GameData.enemyTactic)} the `;
    }

    setAction(x){
        this.action += x;
    }
}

/**
 * UTILITY functions
 */

function getRand(arr, startingNum){
    return arr[generateRandom((startingNum? startingNum: 0),(arr.length-1))];
}

function generateRandom(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function genCost(){
    const n = generateRandom(0,2);
    switch(n){
        case 0:
        return 'labor';
        case 1:
        return 'money';
        default:
        return 'labor/money';
    }
}

function genMinistry(){
    return GameData.ministries[generateRandom(0,(GameData.ministries.length -1))]
}

function makeMinistry(n, a,b,c){
    return(
        {
            _uid: (GameData.ministries.length + 1),
            name: n,
            utilities: [
                a,
                b,
                c
            ]
        }
    );
}

const GameData = {
    years: 0,
    ministries: [],
    enemies: [
        'Jesuits',
        'Jews',
        'Muslims',
        'Buddhists',
        'Hindus',
        'A chinaman',
        'Dirty bums',
        'Fat white guys',
        'A tangle of black dudes',
        'A cannibal',
        'A very tall woman',
        'A cat with Down Syndrome',
        'A lesbian clown',
        'Several Holocaust-deniers',
        'Barbarians',
        'A racist leper',
        'Othesda, the totally straight witch,',
        'A demon',
        'A tongueless soothsayer',
        'Damarneous, the long-cocked,',
        'A swingers\' party',
        'Masturbation addicts',
        'A completely naked carpenter',
        'A giant turd',
        'Some chatty Cathies',
        'A recently widowed grandmother',
        'An old man with nothing to live for',
        'The guy once accused of sorcery',
        'A tranny wizard',
        'Ten skinny hitmen',
        'The Village Idiot',
        'A boy with no nose',
        'A giant eagle',
        'The Old Fool',
        'A wet Italian man',
        'Two dope cats',
        'An orangutan',
        'A gaggle of geese',
        'Three deaf swordsmen',
        'Eleven beared salesmen',
        'Open-minded warriors',
        'A fat necromancer',
        'Kids with rad hats',
        'A shitty relative',
        'A jilted lover',
        'A fancy gal',
        'A garish ombudsman',
        'Five beguiling mothers',
        'Intoxicated dancers',
        'Kelador, the Severely Burned,',
        'The gay guy you met the other day',
        'A large bawd',
        'Three sloppy jugglers',
        'A pair of queers',
        'Nine rapists',
        'A nihilist',
        'Seven bloated swimmers'
    ],
    enemyTactic: [
        'destroyed',
        'consumed some of',
        'tore down',
        'torched',
        'knocked down',
        'slapped',
        'sat upon',
        'diarrhea\'d all over',
        'swallowed',
        'stole',
        'shamed',
        'fucked the shit out of',
        'sneezed upon',
        'basically undid',
        'ruined',
        'hijacked',
        'vandalized',
        'really fouled up',
        'kind of dismembered',
        'will not stop shouting at',
        'tipped over',
        'aggressively scolded',
        'sullied the reputation of',
        'poisoned',
        'manhandled',
        'karate chopped',
        'begrundled',
        'engulfed',
        'gargled',
        'completely picked apart',
        'exacted revenge on',
        'uncoupled',
        'undermined',
        'sabatoged',
        'laid waste to',
        'took umbrage with',
        'became emotional over',
        'shattered the confidence of',
        'repeatedly hewed',
        'unleashed Armageddon on',
        'publicly shamed',
        'critiqued',
        'dismantled',
        'thrashed upon',
        'recited gypsy spells to',
        'cursed',
        'awakened a beasted within',
        'sexually confused'
    ]
}
/**
 * DOM manipulation
 */
export function genCard(){
    const randomNum = generateRandom(1,100);
    const randomDem = generateRandom(1,12);
    const years = Math.floor(randomNum/randomDem)

    if(randomNum % randomDem === 0){
        // $('#text').text(`You have aged ${age} years!`);
        // GameData.years += age;
        // $('#age').text(GameData.years);
        // $('#game').css('border-color', getRandomColor());
        // if(GameData.years >= 1000){
            // $('#text').append('<h1>SOCIETY WINS!</h1>');
            // $('#btn').attr('disabled', true);
        // }
        return years;
    } else {
        const card = new Calamity(
            {
                plus: generateRandom(1,3),
                minus: generateRandom(-3,0),
                dieNums: [
                    generateRandom(1,6),
                    generateRandom(1,6),
                    generateRandom(1,6)
                ],
                borderColor: getRandomColor()
            }
        );

        const ministry = genMinistry();
        card.ministryEffected = ministry.name;
        card.setAction(getRand(ministry.utilities));

        return card;

        // $('#text').text(JSON.stringify(card, null, 2));
        // $('#game').css('border-color', getRandomColor());
    }
};



const Ministries= [
    ['Sanitation', 'Pest Control Team', 'Sewage Pipes', 'Waste Management System'],
    ['Defense', 'Wall', 'Guards', 'Fire Department'],
    ['Judicial System', 'Police', 'Court', 'Prison'],
    ['Marketplace', 'Texttile District', 'Carpenter Shop', 'Stockroom'],
    ['Food', 'Livestock', 'Garden', 'Fishing Dock'],
    ['Education', 'Science Labs', 'Art Museum', 'Library'],
    ['Religion', 'Inner Peace', 'Moral Fabric of Society', 'sense of community'],
    ['Healthcare', 'Medicine Inventory', 'Hospital', 'Senior Center'],
    ['Water', 'Potable Water', 'Water Supply', 'Piping Infrastructure']
];

Ministries.forEach(arr=>GameData.ministries.push(makeMinistry(...arr)));
