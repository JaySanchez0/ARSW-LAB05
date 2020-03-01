var app = (function(){
	var author = null;
	var li = []
	var getBlueprintsByAuthor = function(error,data){
		var li = data.map(function(x){
			return {nombre:x.name,numberpoints:x.points.length};
		});
		if(error!=null){
			Console.log("unvalid");
			return;
		}
		$("#AuthorName").text("Author "+author);
		$("#result").html(loadTable(li));
	};
	var loadTable=function(data){
		var tab = "<table class='table'><tr class='row'><td>Name</td><td>points</td></tr>";
		data.forEach(function(obj){
			tab=tab+"<tr class='row'><td>"+obj.nombre+"</td><td>"+obj.numberpoints+"</td><td><button class='btn btn-primary'>Open</button></td></tr>"
		});
		return tab+"</table>"
	}
    return {
    	updatePlane:function(authorName){
    		app.setName(authorName);
    		var blueprint = apimock.getBlueprintsByAuthor(authorName,getBlueprintsByAuthor);
    		if(blueprint!=null){
    			return blueprint.size();
    		}
    	},
    	setName:function(name){
    		author=name;
    	}
    };
 })();