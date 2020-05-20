$(document).ready(function() {
    console.log("ready!");
    var dict = {
        "Francesinha": '<a  href="receitasHTML/francesinha.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 233, 197); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Francesinha</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(255, 190, 69);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 45</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/francesinha.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div></a>',
        "Almondegas de Soja c/ molho de tomate": '<a  href="receitasHTML/Almondegas_de_Soja_c_molho_de_tomate.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(251, 210, 203); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Almondegas de Soja c/ molho de tomate</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(196, 70, 70);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 40</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/meatball.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div></a>',
        "Bolo de Chocolate em Caneca": '<a  href="receitasHTML/Bolo_de_Chocolate_em_Caneca.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 241, 218); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Bolo de Chocolate em Caneca</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(117, 66, 32);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 5</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/cake.png" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div></a>',
        "Bacalhau com Natas": '<a  href="receitasHTML/Bacalhau_com_natas.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 240, 216); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Bacalhau com Natas</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(248, 219, 180);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 45</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/bacalhau.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div></a>',
        "Arroz de Marisco": '<a  href="receitasHTML/Arroz_de_marisco.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 188, 162); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Arroz de Marisco</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(248, 147, 88);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 50</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: rgb(227, 218, 215);"> <img id="imagem" src="img/marisco.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div></a>',
        "Frango com limao e oregaos": ' <a href="receitasHTML/Frango_com_limao_e_oregaos.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 248, 183); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Frango com limao e oregaos</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(255, 235, 124);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 45</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/frangolimao.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div></a>',
        "Sushi de Banana": '<a  href="receitasHTML/Sushi_de_banana.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 227, 210); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Sushi de Banana</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(226, 199, 175);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 15</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/sushi.jpg" style="width: 100%; height: 100%;cursor:pointer;"> </div> </div> </div> </div></a>',
        "Arroz de Pato": '<a  href="receitasHTML/arrozdepato.html" onclick="redirect(this.id)" ><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(236, 184, 188); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Arroz de Pato</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(160, 67, 79);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 80</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/pato.jpg" style="width: 100%; height: 100%; cursor:pointer;"> </div> </div> </div> </div></a>',
        "Salada fria de massa com salmao": '<a href="receitasHTML/Salada_fria_de_massa_com_salmao.html"><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(225, 255, 213); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Salada fria de massa com salmao</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(78, 160, 67);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 35</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/saladamassasalmao.jpg" style="width: 100%; height: 100%; cursor:pointer;"> </div> </div> </div> </div></a>',
        "Panquecas": '<a href="receitasHTML/Panquecas.html"><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(210, 222, 255); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Panquecas</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(80, 87, 180);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 15</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/panquecas.jpg" style="width: 100%; height: 100%; cursor:pointer;"> </div> </div> </div> </div></a>',
        "Salada de grao com atum": '<a href="receitasHTML/Salada_de_grao_com_atum.html"> <div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(255, 230, 232); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Salada de grao com atum</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(175, 31, 31);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 25</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/graoeatum.jpg" style="width: 100%; height: 100%; cursor:pointer;"> </div> </div> </div> </div></a>',
        "Lasanha": '<a href="receitasHTML/Lasanha.html"><div class="container" style="padding: 6%; padding-top: 0%;"> <div class="row" style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);"> <div class="container" style="background-color: rgb(255, 255, 255);"> <div class="row justify-content-center" style="word-break:break-word;padding:5%;background: rgb(233, 211, 201); "> <p id="title" style="margin:initial; text-align: center; color: rgb(0, 0, 0);">Lasanha</p> </div> <div class="row " style="word-break:break-all;padding:5%; display: flex; flex-wrap: nowrap; flex-direction: row; justify-content: space-evenly; background:rgb(190, 105, 84);"> <p style="margin:initial;"><i class=" far fa-clock "></i><span id="time"> 50</span> mins</p> <p id="estrelas" style="margin:initial;"><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i><i class="fas fa-star "></i></p> </div> <div class="row justify-content-center img_div" style="padding: 5%; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); background: #E3DFD7;"> <img id="imagem" src="img/lasanha.jpg" style="width: 100%; height: 100%; cursor:pointer;"> </div> </div> </div> </div></a>'

    };

    for (var i = localStorage.length; i < localStorage.length + dict.length; i++) {

    }
    try {
        console.log("inside try");
        var has_appended = false;
        for (var i = 0; i < localStorage.length; i++) {

            var titulo = JSON.parse(localStorage.getItem(localStorage.key(i))).title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            var keys = Object.keys(dict);
            for (var key = 0; key < keys.length; key++) {
                console.log(titulo + " - " + keys[key].normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                if (titulo.localeCompare(keys[key].normalize("NFD").replace(/[\u0300-\u036f]/g, "")) == 0) {
                    console.log("Found valid recepie");
                    $('#page').append(dict[keys[key]]);
                    has_appended = true;
                }
            }
        }

        if (has_appended == false) {
            console.log("No matching recepie")
            $('#page').append('<div class="jumbotron" style="padding:3em; background-color: aliceblue; text-align: center;"> <h2><i class="fa fa-times"></i> <p>Nao encontramos nenhuma receita com esses ingredientes...</p> </h2> <br> <h5>Tenta adicionar mais alguns!</h5> </div>');

        }

    } catch (e) {
        console.log("No local storage!");
        $('#page').append('<div class="jumbotron" style="padding:3em; background-color: aliceblue; text-align: center;"> <h2><i class="fa fa-times"></i> <p>Nao encontramos nenhuma receita com esses ingredientes...</p> </h2> <br> <h5>Tenta adicionar mais alguns!</h5> </div>');

    }

});