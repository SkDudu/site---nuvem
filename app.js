var express = require('express'); // importar o express
var app = express(); 
var path = require('path'); //importação da biblioteca 'path' (nativa do node.js)
var bodyParser = require('body-parser'); //importar o body-parser
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); //configurar os caminhos dos arquivos estaticos (html, css, js, img...)
app.use(bodyParser.json());

//configurar ejs
app.set('view engine', 'ejs'); // setar o motor de views
app.set('views', path.join(__dirname, '/views')); //caminho da pasta views

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


//request get
app.get('/', function(req, res) {
    res.render('index');
});

//request post
app.post('/soma', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var b = parseInt(body.b);
    var resultado = soma(a, b);

    function soma(a, b) {
        return a + b;
    }

    res.render('somatorio', {
        operacao: 'soma',
        a: a,
        b: b,
        resultado: resultado
    });
});

app.get('/soma', function(req, res) {
    res.render('somatorio', {resultado: ''});
});

app.post('/subtracao', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var b = parseInt(body.b);
    var resultado = subtrair(a, b);
    
    function subtrair(a, b) {
        return a - b;
    }
    
    console.log(body);
    res.render('subtracao', {
        operacao: 'subtracao',
        a: a,
        b: b,
        resultado: resultado
    });
});

app.get('/subtracao', function(req, res) {
    res.render('subtracao', {resultado: ''});
});

app.post('/divisao', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var b = parseInt(body.b);
    var resultado = dividir(a, b);

    function dividir(a, b) {
        return a / b;
    }

    console.log(body);
    res.render('divisao', {
        operacao: 'divisao',
        a: a,
        b: b,
        resultado: resultado
    });
});

app.get('/divisao', function(req, res) {
    res.render('divisao', {resultado: ''});
});

app.post('/multiplicacao', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var b = parseInt(body.b);
    var resultado = multiplicar(a, b);

    function multiplicar(a, b) {
        return a * b;
    }

    console.log(body);
    res.render('multiplicacao', {
        operacao: 'multiplição',
        a: a,
        b: b,
        resultado: resultado
    });
});

app.get('/multiplicacao', function(req, res) {
    res.render('multiplicacao', {resultado: ''});
});

app.post('/mdc', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var b = parseInt(body.b);
    var resultado = mdc(a, b);

    function mdc(a, b) {
        var resto;

    do {
        resto = a % b;

        a = b;
        b = resto;

    } while (resto != 0);

    return a;
    }
    console.log(body);
    res.render('mdc', {
        operacao: 'Máximo divisor comum',
        a: a,
        b: b,
        resultado: resultado
    });
});

app.get('/mdc', function(req, res) {
    res.render('mdc', {resultado: ''});
});

app.post('/contagem', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var b = parseInt(body.b);
    var resultado = contagem(a, b);

    function contagem(a, b) {
        if (a >= 0 && b >= 0) {
            var i = Math.min(a, b);
            while (i <= Math.max(a, b)) console.log(i++);
      }
    }

    console.log(body);
    res.render('contagem', {
        operacao: 'contagem',
        a: a,
        b: b,
        resultado: resultado
    });
});

app.get('/contagem', function(req, res) {
    res.render('contagem', {resultado: ''});
});

app.post('/fibonacci', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var resultado = fibonacci(a);

    function fibonacci(i) 
    {    
        if(a==0) 
            return 0; 
        if (a == 1) 
            return 1; 
        return fibonacci(a - 1) + fibonacci(a - 2); 
    } 

    console.log(body);
    res.render('fibonacci', {
        operacao: 'fibonacci',
        a: a,
        resultado: resultado
    });
});

app.get('/fibonacci', function(req, res) {
    res.render('fibonacci', {resultado: ''});
});

app.post('/primo', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var divisores = 0;
    for(var count=1; count<=a; count++){
        if(a % count == 0){
            divisores++;
            console.log(divisores);
        }
        if(divisores==2){
            resultado = 'é primo';
        }else{
            resultado = 'não é primo';
        }
    }
    res.render('primo', {
        operacao: resultado,
        a: a,
        resultado: resultado
    });
});

app.get('/primo', function(req, res) {
    res.render('primo', {resultado: ''});
});

app.post('/ordena', function(req,res){
    var body=req.body;
    var a = parseInt(body.a);
    var resultado = Quicksort(a);

    function Quicksort(array) {
        if (array.length <= 1) {
          return array;
        }
      
        var pivot = array[0];
        
        var left = []; 
        var right = [];
      
        for (var i = 1; i < array.length; i++) {
          array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
      
        return Quicksort(left).concat(pivot, Quicksort(right));
      };
      
      var unsorted = [23, 45, 16, 37, 3, 99, 22];
      var sorted = Quicksort(unsorted);
      
      console.log('Sorted array', sorted);

    console.log(body);
    res.render('ordena', {
        operacao: 'Quicksort',
        resultado: resultado
    });
});

app.get('/ordena', function(req, res) {
    res.render('ordena', {resultado: ''});
});