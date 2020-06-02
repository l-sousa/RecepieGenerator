
var ingredients;
var recipe_index;

$(document).ready(function() {
    $('#first').trigger('click');

    ingredients = localStorage.getItem("ingredientes_disponiveis");

    add_favorites();

    display_recipe_info(window.location.search.substring(1).split("&")[0].split("=")[1]);    
});

function fav_or_not(index) {
    var fav_recipes = JSON.parse(localStorage.getItem("receitas_favoritas"));

    if (fav_recipes != null) {
        //console.log(recipe_index);
        if (fav_recipes.includes(index))
            $("#Chinatown").attr('src','imagens/removefav.png');
    }
}

function add_favorites() {
    // <i class="fas fa-heart-broken"></i>    <i class="fas fa-heart"></i>
    $("#bt_adicionar_favoritos").click(function() {
        var fav_recipes = JSON.parse(localStorage.getItem("receitas_favoritas"));

        if (fav_recipes == null) {
            fav_recipes = [recipe_index];
            $("#Chinatown").attr("src","imagens/removefav.png") ;                // muda a imagem    $("#my_image").attr("src","second.jpg");
        } else {
            if (fav_recipes.includes(recipe_index)) {
                fav_recipes = arrayRemove(fav_recipes, recipe_index);
                $("#Chinatown").attr("src","imagens/addfav.png");
            } else {
                fav_recipes.push(recipe_index);
                $("#Chinatown").attr("src","imagens/removefav.png");
            }
        }

        localStorage.setItem("receitas_favoritas", JSON.stringify(fav_recipes));
    })
}

function arrayRemove(arr, value) {
    return arr.filter(function(ele){ return ele != value; });
}

function display_recipe_info(recipe_name) {
    recipe_name = recipe_name.split("_").join(" ");
    $.getJSON("https://api.jsonbin.io/b/5ed6810f60775a568586d656", function(data) {

        var current_recipe;
        for (var i = 0; i < data.length; i++) {
            current_recipe = data[i];
            //console.log(current_recipe);
            if (replace_accent(current_recipe.title).toUpperCase() === recipe_name.toUpperCase()) {
                if (current_recipe.ingredients.length != current_recipe.quantity.length)
                    alert("Erro nas quantidades");
                
                recipe_index = i;                 // variável global
                add_to_recent_viewed(i);         // adicionar a visto recentemente

                fav_or_not(i);                   // verificar se já se encontra nos favoritos
                
                change_text(current_recipe); // change text on html
                return;
            }
        }

        alert("Recipe not found!\n\tRecipe name: " + recipe_name);
    });
}

function previous_page() {
    window.history.back();
}

function change_text(recipe) {
    //console.log(recipe);
    var i;

    // change all the text in html with the given recipe 
    $("#page_title").text(recipe.title);
    $("#p_title").text(recipe.title);
    $("#p_preview").text(recipe.preview);
    //$("#img_recipe").attr("src", "./img/panquecas.jpg"); // TEM DE SER ALTERADO
    $("#img_recipe").attr("src", recipe.image_path);

    // Add the ingredients
    for (i = 0; i < recipe.ingredients.length; i++) {
        //console.log(recipe.ingredients[i] + " e " + recipe.quantity[i])
        append_to_London(recipe.ingredients[i], recipe.quantity[i]);
    }
    if (window.location.search.substring(1).split("&")[1].split("=")[1] === "top10") {
        var glovo = "<div>"+
        "<p id=\"bttn_comprar\" style='cursor:pointer;font-size:90%;font-weight:bold;color:rgb(12, 141, 96);padding:2%;border-radius:25px;text-align:center;background-color: rgb(253, 190, 2)'><i class='fas fa-shopping-basket'></i> Encomende os ingredientes com a Glovo!</p>"+
        "</div>";

        $("#London").append(glovo);
    } else if (window.location.search.substring(1).split("&")[1].split("=")[1] === "recipe_search") {
        var glovo = "<div>"+
        "<p id=\"bttn_comprar\" style='cursor:pointer;font-size:90%;font-weight:bold;color:rgb(12, 141, 96);padding:2%;border-radius:25px;text-align:center;background-color: rgb(253, 190, 2)'><i class='fas fa-shopping-basket'></i> Encomende os ingredientes em falta com a Glovo!</p>"+
        "</div>";

        $("#London").append(glovo);
    }

    $("#London").append("</br>");
    $("#London").append("</br>");
    $("#London").append("</br>");
    
    // alertar que ao clicar no botão de compra
    $("#bttn_comprar").click(function() {
        alert("Esta funcionalidade seria implementada quando se contactasse a globo para disponibilizar API.")
    });
    


    // Now adding steps
    $("#Paris").append("</br>");
    for (i = 0; i < recipe.steps.length; i++) {
        append_to_Paris(i + 1, recipe.steps[i]);
    }
    $("#Paris").append("</br>");
    $("#Paris").append("</br>");
    $("#Paris").append("</br>");
}

function append_to_London(product, quantity) {

    // caso a página anterior tenha sido a top_10_receitas...
    if (window.location.search.substring(1).split("&")[1].split("=")[1] === "top10") {
        var html_code = "<div class=\"row\">" +
            "<div class=\"col-6\">" +
            "<p style=\"float:left; margin-left: 20%;\">" + product + "</p>" +
            "</div>" +
            "<div class=\"col-6\">" +
            "<p style=\"float: right; margin-right: 20%;\">" + quantity + "</p>" +
            "</div>" +
            "</div>";

    } else if(window.location.search.substring(1).split("&")[1].split("=")[1] === "recipe_search" ) {                                            // caso tenha sido através da pesquisa de receitas...
        var html_code = "<div class=\"row\">" +
            "<div class=\"col-1\">" +
            "</div>" +
            "<div class=\"col-5\">" +
            check_ingredient(product) + product + "</p>" +
            "</div>" +
            "<div class=\"col-6\">" +
            "<p style=\"float: right; margin-right: 20%;\">" + quantity + "</p>" +
            "</div>" +
            "</div>";
    } else {
        alert("Unkown previous page");
    }

    $("#London").append(html_code);
}

function append_to_Paris(step_number, step_description) {
    var html_code = "<div class=\"row\">" +
        "<p class=\"mx-auto steps\" style=\"color:rgb(255, 190, 137)\">Passo " + step_number + "</p>" +
        "<p class=\"mx-auto steps\">" + step_description + "</p>" +
        "</div>";

    $("#Paris").append(html_code);
}

function check_ingredient(product) {
    if (ingredients.includes(product)) 
        return "<p style=\"float:left; margin-left: 5%;\">";
    else
        return "<p style=\"float:left; margin-left: 5%;color:red;\">";
}

function replace_accent(text) {

    var text_norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log("Text with accents: " + text + "\n\tAnd now without accents: " + text_norm);
    return text_norm;
}

function openCity(evt, cityName) {
    //console.log(cityName);
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.target.className += " active";
}

function add_to_recent_viewed(index) {
    var array_receitas = JSON.parse(localStorage.getItem("receitas_recentes"));

    if (array_receitas == null) {
        array_receitas = [index];
    } else {
        if (array_receitas.includes(index)) {              // se a receita já
            array_receitas = array_move(array_receitas, array_receitas.indexOf(index), 0);          // move o elemento para a primeira posição do array
        } else {
            if (array_receitas.length >= 10)          // permite apenas o histórico relativo a 10 receitas
                array_receitas.pop();
        
            array_receitas.unshift(index);
        }
    }

    localStorage.setItem("receitas_recentes", JSON.stringify(array_receitas));
}

/*
function add_to_recent_viewed(recipe, index) {
    var array_receitas = JSON.parse(localStorage.getItem("receitas_recentes"));

    if (array_receitas == null) {
        array_receitas = [[recipe, index]];
    } else {
        if (arr_contain(array_receitas, recipe)) {              // se a receita já
            array_receitas = array_move(array_receitas, this.arr_index(array_receitas, recipe), 0);          // move o elemento para a primeira posição do array
        } else {
            if (array_receitas.length >= 10)          // permite apenas o histórico relativo a 10 receitas
                array_receitas.pop();
        
            array_receitas.unshift([recipe, index]);
        }
    }

    localStorage.setItem("receitas_recentes", JSON.stringify(array_receitas));
}*/

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};
/*
function arr_index(arr, recipe) {
    var current_index;
    for (var i = 0; i < arr.length; i++) {
        current_index = arr[i];
        if (current_index.includes(recipe))
            return i;
    }

    return null;
}

function arr_contain(arr, recipe) {
    var current_index;
    for (var i = 0; i < arr.length; i++) {
        current_index = arr[i];
        if (current_index.includes(recipe))
            return true;
    }

    return false;
}*/