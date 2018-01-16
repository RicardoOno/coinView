var db = require('../../config/database');

var api = {};

api.adiciona = function(req, res) {
    
    db.insert(req.body, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

api.busca = function(req, res) {
   db.findOne({_id: req.params.fotoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.atualiza = function(req, res) {
    
    db.update({_id : req.params.fotoId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

api.lista = function(req, res) {
    db.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.listaPorGrupo = function(req, res) {
    var grupoId = parseInt(req.params.grupoId);
    db.find({grupo: grupoId}, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });

};

api.remove = function(req, res) {

    db.remove({ _id: req.params.fotoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

api.listaGrupos = function(req, res) {

    res.json([
        {
            _id: 1, 
            nome: 'esporte'
        }, 
        { 
            _id: 2, 
            nome: 'lugares', 
        }, 
        { 
            _id: 3, 
            nome: 'animais'
        }
    ]);
        
};

api.coins = function (req, res) {
    res.json([
        {
            "id": "bitcoin",
            "name": "Bitcoin",
            "symbol": "BTC",
            "rank": "1",
            "price_usd": "13453.7",
            "price_btc": "1.0",
            "24h_volume_usd": "12668600000.0",
            "market_cap_usd": "226091446555",
            "available_supply": "16805150.0",
            "total_supply": "16805150.0",
            "max_supply": "21000000.0",
            "percent_change_1h": "-2.42",
            "percent_change_24h": "-2.61",
            "percent_change_7d": "-11.8",
            "last_updated": "1516065262",
            "price_brl": "43268.44457",
            "24h_volume_brl": "40743484460.0",
            "market_cap_brl": "727132701266"
        },
        {
            "id": "ethereum",
            "name": "Ethereum",
            "symbol": "ETH",
            "rank": "2",
            "price_usd": "1255.68",
            "price_btc": "0.0944801",
            "24h_volume_usd": "4741570000.0",
            "market_cap_usd": "121807558754",
            "available_supply": "97005255.0",
            "total_supply": "97005255.0",
            "max_supply": null,
            "percent_change_1h": "-2.22",
            "percent_change_24h": "-8.08",
            "percent_change_7d": "6.57",
            "last_updated": "1516065250",
            "price_brl": "4038.392448",
            "24h_volume_brl": "15249363277.0",
            "market_cap_brl": "391745289709"
        },
        {
            "id": "ripple",
            "name": "Ripple",
            "symbol": "XRP",
            "rank": "3",
            "price_usd": "1.58616",
            "price_btc": "0.00011935",
            "24h_volume_usd": "2088180000.0",
            "market_cap_usd": "61446478761.0",
            "available_supply": "38739142811.0",
            "total_supply": "99993093880.0",
            "max_supply": "100000000000",
            "percent_change_1h": "-4.3",
            "percent_change_24h": "-15.06",
            "percent_change_7d": "-35.6",
            "last_updated": "1516065240",
            "price_brl": "5.101249176",
            "24h_volume_brl": "6715795698.0",
            "market_cap_brl": "197618020344"
        },
        {
            "id": "bitcoin-cash",
            "name": "Bitcoin Cash",
            "symbol": "BCH",
            "rank": "4",
            "price_usd": "2303.82",
            "price_btc": "0.173345",
            "24h_volume_usd": "1419930000.0",
            "market_cap_usd": "38966264323.0",
            "available_supply": "16913763.0",
            "total_supply": "16913763.0",
            "max_supply": "21000000.0",
            "percent_change_1h": "-3.69",
            "percent_change_24h": "-9.69",
            "percent_change_7d": "-4.8",
            "last_updated": "1516065252",
            "price_brl": "7409.315502",
            "24h_volume_brl": "4566636873.0",
            "market_cap_brl": "125319402688"
        },
        {
            "id": "cardano",
            "name": "Cardano",
            "symbol": "ADA",
            "rank": "5",
            "price_usd": "0.73548",
            "price_btc": "0.00005534",
            "24h_volume_usd": "888270000.0",
            "market_cap_usd": "19068841839.0",
            "available_supply": "25927070538.0",
            "total_supply": "31112483745.0",
            "max_supply": "45000000000.0",
            "percent_change_1h": "-4.7",
            "percent_change_24h": "-9.93",
            "percent_change_7d": "-18.77",
            "last_updated": "1516065254",
            "price_brl": "2.365377228",
            "24h_volume_brl": "2856765147.0",
            "market_cap_brl": "61327302239.0"
        },
        {
            "id": "litecoin",
            "name": "Litecoin",
            "symbol": "LTC",
            "rank": "6",
            "price_usd": "226.511",
            "price_btc": "0.0170432",
            "24h_volume_usd": "611979000.0",
            "market_cap_usd": "12406909698.0",
            "available_supply": "54773983.0",
            "total_supply": "54773983.0",
            "max_supply": "84000000.0",
            "percent_change_1h": "-2.29",
            "percent_change_24h": "-5.48",
            "percent_change_7d": "-11.36",
            "last_updated": "1516065240",
            "price_brl": "728.4820271",
            "24h_volume_brl": "1968185661.9",
            "market_cap_brl": "39901862280.0"
        },
        {
            "id": "nem",
            "name": "NEM",
            "symbol": "XEM",
            "rank": "7",
            "price_usd": "1.33543",
            "price_btc": "0.00010048",
            "24h_volume_usd": "108034000.0",
            "market_cap_usd": "12018869999.0",
            "available_supply": "8999999999.0",
            "total_supply": "8999999999.0",
            "max_supply": null,
            "percent_change_1h": "-3.07",
            "percent_change_24h": "-5.11",
            "percent_change_7d": "-20.14",
            "last_updated": "1516065244",
            "price_brl": "4.294876423",
            "24h_volume_brl": "347448147.4",
            "market_cap_brl": "38653887803.0"
        },
        {
            "id": "neo",
            "name": "NEO",
            "symbol": "NEO",
            "rank": "8",
            "price_usd": "180.574",
            "price_btc": "0.0135868",
            "24h_volume_usd": "1384440000.0",
            "market_cap_usd": "11737310000.0",
            "available_supply": "65000000.0",
            "total_supply": "100000000.0",
            "max_supply": null,
            "percent_change_1h": "-2.04",
            "percent_change_24h": "13.35",
            "percent_change_7d": "64.62",
            "last_updated": "1516065247",
            "price_brl": "580.7440414",
            "24h_volume_brl": "4452497484.0",
            "market_cap_brl": "37748362691.0"
        },
        {
            "id": "stellar",
            "name": "Stellar",
            "symbol": "XLM",
            "rank": "9",
            "price_usd": "0.565486",
            "price_btc": "0.00004255",
            "24h_volume_usd": "329809000.0",
            "market_cap_usd": "10116950699.0",
            "available_supply": "17890718248.0",
            "total_supply": "103610058900",
            "max_supply": null,
            "percent_change_1h": "-4.77",
            "percent_change_24h": "-10.81",
            "percent_change_7d": "-11.81",
            "last_updated": "1516065243",
            "price_brl": "1.8186595246",
            "24h_volume_brl": "1060698724.9",
            "market_cap_brl": "32537125144.0"
        },
        {
            "id": "iota",
            "name": "IOTA",
            "symbol": "MIOTA",
            "rank": "10",
            "price_usd": "3.33734",
            "price_btc": "0.00025111",
            "24h_volume_usd": "104556000.0",
            "market_cap_usd": "9276237595.0",
            "available_supply": "2779530283.0",
            "total_supply": "2779530283.0",
            "max_supply": "2779530283.0",
            "percent_change_1h": "-2.8",
            "percent_change_24h": "-10.35",
            "percent_change_7d": "-13.7",
            "last_updated": "1516065250",
            "price_brl": "10.733219174",
            "24h_volume_brl": "336262551.6",
            "market_cap_brl": "29833307728.0"
        }
    ]);
}


module.exports = api;