var app = (function(){
    return {
    getBlueprintByAuthor:function(){
            var autor = document.getElementById("autor").value;
            console.log("entro");
            $.get({
            url:"/blueprints/"+autor,
            success:function(data){
                console.log(data);
                document.getElementById("AuthorName").innerHTML = "Author "+autor;
                app.createTable(data);
            }
            });
        },
        createTable:function(data){
            tab ="<table class='table' style='width:480px;'><thead class='thead-dark'><tr><th scope='col'>Blue print name</th><th scope='col'>Number of points</th><th scope='col'>Open</th></tr></thead><tbody>"
            data.forEach(function(js){
                tab = tab+"<tr><td>"+js.name+"</td><td>"+js.points.length+"</td><td><button>Open</button></td></tr>";
            });
            tab = tab+"</tbody></table>"
            document.getElementById("result").innerHTML = tab;
        },
        updatePlanesByAuthor:function(){
            apimock.getBlueprintsByAuthor()
        },
        updatePlane:function(a,b){

        }
    };
 })();