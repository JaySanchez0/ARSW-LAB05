var app = (function(){
	var author = null;
	var li = []
	var getSum = function(total,i){
		return total+i.numberpoints;
	};
	var getBlueprintsByAuthor = function(error,data){
		var li = data.map(function(x){
			return {nombre:x.name,numberpoints:x.points.length};
		});
		if(error!=null){
			Console.log("unvalid");
			return;
		}
		$("#AuthorName").text("Author "+author);
		var total = li.reduce(getSum,0);
		$("#result").html(loadTable(li)+"<br/><h1>Total: "+total+"</h1>");
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
    	},
    	setName:function(name){
    		author=name;
    	}
    };
 })();