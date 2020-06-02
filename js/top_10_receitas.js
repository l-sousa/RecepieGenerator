$(document).ready(function() {
    $(".titulos_receita").click(function(event) {
        click_recipe_text(event);
    });

    $(".receita_imagem").click(function(event) {
        click_recipe_id(event);
    });
});

// acionada quando se clica numa imagem
function click_recipe_id(event) {
    var recipe_name = event.target.id.split("_").slice(1).join("_");

    // console.log("Cliquei na imagem... " + recipe_name);
    window.location.assign("./recipe.html?param=" + recipe_name + "&prev_page=top10");
}

// acionada quando se clica no título duma receita
function click_recipe_text(event) {
    var recipe_name = replace_accent($(event.target).text().split(" ").slice(1).join("_"));

    // console.log("Cliquei num título... " + recipe_name);
    window.location.assign("./recipe.html?param=" + recipe_name + "&prev_page=top10");
}

function replace_accent(text) {

    var text_norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log("Text with accents: " + text + "\n\tAnd now without accents: " + text_norm);
    return text_norm;
}