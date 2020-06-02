$(document).ready(function () {
    show_recent_recipes();

});

function show_recent_recipes() {
    $.getJSON("https://api.jsonbin.io/b/5ed6810f60775a568586d656", function(data) {

        var recent_recipes = JSON.parse(localStorage.getItem("receitas_recentes"));
        //console.log(recent_recipes);
        if (recent_recipes != null) {
            for (var i = 0; i < recent_recipes.length; i++) {
            
                append_html(data[recent_recipes[i]], i + 1);
            }
    
            $(".titulo").click(function(event) {
                click_recipe_text(event);
            });
        
            $(".im").click(function(event) {
                click_recipe_id(event);
            });
        }
    });
}

function append_html(recipe, recipe_nr) {
    var html_code = '<div class="container recipe_container_right" style="background-color:rgba(240, 248, 255, 0.774);">' +
    '<div class="row" style="display: flex; flex-wrap:nowrap; flex-direction: row; justify-content: space-between;">' +
        '<div style="width:40%;float:left;">' +
            '<h5 class="titulo" style="margin-top:18%">' + recipe.title + '</h5>' +
        '</div>' +
        '<div style="max-width:60%;float:left;">' +
            '<img id=' + replace_accent(recipe.title).split(" ").join("_") + ' class="im" style="width:80%; height:auto; margin-top: 6%; margin-bottom: 4%;float:right" src="' + recipe.image_path + '">' +
    '</div>' +
        '</div>' +
    '</div>';

    $("#sec_receitas").append(html_code);
}

// acionada quando se clica numa imagem
function click_recipe_id(event) {
    var recipe_name = event.target.id;

    // console.log("Cliquei na imagem... " + recipe_name);
    window.location.assign("./recipe.html?param=" + recipe_name + "&prev_page=top10");
}

// acionada quando se clica no título duma receita
function click_recipe_text(event) {
    var recipe_name = replace_accent($(event.target).text().split(" ").join("_"));

    // console.log("Cliquei num título... " + recipe_name);
    window.location.assign("./recipe.html?param=" + recipe_name + "&prev_page=top10");
}

function replace_accent(text) {

    var text_norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log("Text with accents: " + text + "\n\tAnd now without accents: " + text_norm);
    return text_norm;
}