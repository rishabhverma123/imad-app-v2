var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
    
     'article-one':{
        title:"article one",
        heading:"Article one",
        date : "february 10 2017",
        content:`  <div>
                    <p>
                        Hello everyone this is fun learning with node!!
                    </p>
                </div>
                <div>
                    <p>
                        Hello everyone this is fun learning with node!! Hello everyone this is fun learning with node!!
                         Hello everyone this is fun learning with node!! Hello everyone this is fun learning with node!!
                    </p> 
                </div>`
        
        
    },
    'article-two':{
        
        title:"article two",
        heading:"Article two",
        date : "february 10 2017",
        content:`  <div>
                    <p>
                        Hello everyone this is fun learning with node!!
                    </p>
                </div>
                <div>
                    <p>
                        Hello everyone this is fun learning with node!! Hello everyone this is fun learning with node!!
                         Hello everyone this is fun learning with node!! Hello everyone this is fun learning with node!!
                    </p> 
                </div>`
        
    },
    'article-three':{
        title:"article three",
        heading:"Article three",
        date : "february 10 2017",
        content:`  <div>
                    <p>
                        Hello everyone this is fun learning with node!!
                    </p>
                </div>
                <div>
                    <p>
                        Hello everyone this is fun learning with node!! Hello everyone this is fun learning with node!!
                         Hello everyone this is fun learning with node!! Hello everyone this is fun learning with node!!
                    </p> 
                </div>`
        
    }, 
};

function createTemplate(data){
    var date= data.date;
    var content = data.content;
    var heading= data.heading;
    var title= data.title;

    var htmlTemplate=`
    
    <html>
        <head>
            <title>
               ${title}
            </title> 
          <meta name="viewport" content="width=device-width, initial-scale=1">
           <link href="/ui/style.css" rel="stylesheet" />
          
        </head>
        <body>
            <div class="container">
                <div>
                <h1>
                   ${heading}
                </h1>
                </div>
                <hr>
                <div>
                    <p>
                        <a href="http://rishabhverma123.imad.hasura-app.io/">Home</a>
                    </p>
                </div>
                <hr>
                <div>
                    <p>
                       ${date}
                    </p>
                </div>
                ${content}
            </div>
        </body>    
    </html>
    
    `;

return "htmlTemplate";
}

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
    
    var articleName=req.params.articleName;
  res.sendFile(createTemplate(articles[articleName]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
