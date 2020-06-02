var filters = [];
var ingredients = [];

$(document).ready(function () {
    responsive_checkbox();

    clear_storage();
});

function clear_storage() {
    if (window.location.search == "") {
        var firstTime = localStorage.getItem("primeira_vez");

        if (!firstTime) {
            localStorage.clear();
            localStorage.setItem("primeira_vez", "1");
            localStorage.setItem("remover", "1");                   // dps o coisa é que tem de colocar a 0
        } else {
            if (firstTime == "0") {
                localStorage.clear();
                localStorage.setItem("primeira_vez", "1");
                localStorage.setItem("remover", "1");
            } else {
                var ing = JSON.parse(localStorage.getItem("ingredientes_disponiveis"));
                var fil = JSON.parse(localStorage.getItem("filtros"));
                if (ing != null)
                    ingredients = ing;
                if (fil != null)
                    filters = fil;
            }
        }
    } else {
        if (localStorage.getItem("remover") == "1") {
            localStorage.removeItem("ingredientes_disponiveis");

            localStorage.removeItem("receitas");

            localStorage.removeItem("filtros");
            localStorage.setItem("primeira_vez", "0");
        } else {
            var ing = JSON.parse(localStorage.getItem("ingredientes_disponiveis"));
            var fil = JSON.parse(localStorage.getItem("filtros"));
            if (ing != null)
                ingredients = ing;
            if (fil != null)
                filters = fil;

            localStorage.setItem("remover", "1");
            localStorage.setItem("primeira_vez", "0");
        }
    }
}

function responsive_checkbox() {
    // Para os filtros
    $(".customFilter").change(function () {
        var val = $(this).val();
        if (this.checked) {
            if (!filters.includes(val))
                filters.push(val);
        } else {
            if (filters.includes(val))
                filters = arrayRemove(filters, val);
        }
    });

    // Para o resto das checkboxes
    $(".custom").change(function () {
        var val = $(this).val();
        if (this.checked) {
            if (!ingredients.includes(val))
                ingredients.push(val);
        } else {
            if (ingredients.includes(val))
                ingredients = arrayRemove(ingredients, $(this).val());
        }
    });
}

function arrayRemove(arr, value) {
    return arr.filter(function (ele) { return ele != value; });
}

function replace_accent(text) {

    var text_norm = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log("Text with accents: " + text + "\n\tAnd now without accents: " + text_norm);
    return text_norm;
}

function make_search() {
    // retirar valores previamente guardados no localStorage
    // localStorage.setItem("manter_ingredientes", true);

    //console.log(filters);
    //console.log(ingredients);

    var recipes = [];

    $.getJSON("https://api.jsonbin.io/b/5ed6810f60775a568586d656", function (data) {

        var current_recipe;
        for (var i = 0; i < data.length; i++) {
            current_recipe = data[i];
            //console.log(current_recipe);
            if (filters.includes(current_recipe.category) || filters.length === 0) {
                var percentage = check_similar_arr(ingredients, current_recipe.ingredients);

                recipes.push([i, percentage, current_recipe.ingredients.length]);
            }

        }

        recipes.sort(function (a, b) {
            var res = b[1] - a[1];
            if (res != 0) {
                return res;
            } else {                        // caso o valor em percentagem seja igual
                return a[2] - b[2];         // nesse caso em 1o lugar aparece a receita com menos ingredientes
            }
        });

        if (recipes.length > 10)            // se existirem mais de 10 receitas a dar match
            recipes = recipes.slice(0, 10);           // então retiramos o subarray com as primeiras 10 e ignoramos o resto

        localStorage.setItem("filtros", JSON.stringify(filters));
        localStorage.setItem("receitas", JSON.stringify(recipes));
        localStorage.setItem("ingredientes_disponiveis", JSON.stringify(ingredients))

        //var url = "recepie_landing.html" + "?param1=" + encodeURIComponent(JSON.stringify(recipes)) + "&param2=" + encodeURIComponent(JSON.stringify(ingredients));
        window.location.assign("recepie_landing.html");
    });


}

function check_similar_arr(arr_ing, arr_ing_rec) {
    var similar = 0;
    for (var i = 0; i < arr_ing_rec.length; i++) {
        if (arr_ing.includes(arr_ing_rec[i]))
            similar++;
    }
    return similar / arr_ing_rec.length;
}
