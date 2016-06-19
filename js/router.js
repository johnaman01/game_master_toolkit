//Problem: The server must know where to find the creature file
//Solution: Use node.js to find files with function indicating path, i.e. "/" at line 9 and 23 below
  //These paths can be set inside the same .js file that creates the server

var Profile = require('./profile.js');


//handle HTTP route GET and POST
function home(request, response) {
  //if url == "/" && GET
  if (request.url === "/") {
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
    }
    //if url== "/" && POST
      //redirect to /:username
  }

//Handle HTTP route Get /:username i.e. /chalkers
function user(request, response) {
  //if url == "/.../"
  var username = request.url.replace('/', "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    
    //get json from (Treehouse)
    var studentProfile = new Profile(username);
      //on "end"
    studentProfile.on('end', function (profileJSON){
      //show profile
      
      //store values we requested (THESE vars WILL BE CREATURE PROPERTIES)
      var values = {
	var avatarUrl: '....',
	var username: '...',
	var badges: '...', 
	var javascriptPoints: '...',
	var gravatarUrl: '...'
      }
    response.write(values.username + "has" = values.badges + "badges.\n");
    response.end("Footer\n");
    });
    //on "error"
    studentProfile.on('error', function (error){
        //show error
    response.end("Footer\n");
    });
  }
}

module.exports.home = home;
module.exports.user = user;
















