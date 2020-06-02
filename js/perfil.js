$(document).ready(function() {
    save_at_localStorage();

    btn_save();
    
});

function save_at_localStorage() {
    localStorage.setItem("nome", $("#nome_perfil").text());
    localStorage.setItem("username", $("#username").text());
    localStorage.setItem("aniversario", $("#span_aniversario").text());
}

function btn_save() {
    $("#btn_guardar").click(function() {
        var name = document.getElementById("inputNome").value;
        if (name != "")
            localStorage.setItem("nome", name);

        var username = document.getElementById("inputConta").value;
        if (username != "")
            localStorage.setItem("username", username);

        var birthday = document.getElementById("inputData").value;
        if (birthday != "")
            localStorage.setItem("aniversario", birthday);

        //console.log(name + " " + username + " " + birthday);
        update();
    });
}

function update() {
    $("#nome_perfil").text(localStorage.getItem("nome"));
    $("#username").text("@" + localStorage.getItem("username"));
    $("#span_aniversario").text(date(localStorage.getItem("aniversario")));
}

function date(date_string) {
    var date_array = date_string.split("-");
    if (date_array.length != 3)
        return;
    return date_array[2] + " " + month(date_array[1]) + " " + date_array[0];
}

function month(m) {
    if (parseInt(m) === 1) {
        return "Janeiro";
    } else if (parseInt(m) === 2) {
        return "Fevereiro";
    } else if (parseInt(m) === 3) {
        return "Março";
    } else if (parseInt(m) === 4) {
        return "Abril";
    } else if (parseInt(m) === 5) {
        return "Maio";
    } else if (parseInt(m) === 6) {
        return "Junho";
    } else if (parseInt(m) === 7) {
        return "Julho";
    } else if (parseInt(m) === 8) {
        return "Agosto";
    } else if (parseInt(m) === 9) {
        return "Setembro";
    } else if (parseInt(m) === 10) {
        return "Outubro";
    } else if (parseInt(m) === 11) {
        return "Novembro";
    } else if (parseInt(m) === 12) {
        return "Dezembro";
    } else {
        alert("Erro a fazer conversão do mês.");
    }
}