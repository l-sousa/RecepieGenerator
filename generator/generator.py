
dic = {}
with open("ALIMENTOS.txt", "r") as file:
    ing_list = []

    counter = -1

    for i in file:
        counter += 1

        if counter == 0:
            continue

        ing_list.append(i.rstrip())

        print("- " + i)

        if counter == 25:
            break

    dic["LACTICÍNIOS"] = ing_list

    key = ""
    ing_list = []
    counter = 0
    for i in file:
        counter += 1

        if (i[0].isupper() and counter > 4):
            dic[key] = ing_list
            key = i.rstrip()
            ing_list = []
            continue

        ing_list.append(i.rstrip())

with open("ALIMENTOS.txt", "r") as file:
    size = 0
    for i in file:
        if i[0].isupper():
            size += 1

del dic[""]
dic["VEGETAIS"] = ['cebola', 'alho', 'batata', 'cenoura', 'pimento', 'manjericão', 'salsa', 'brócolos', 'milho', 'espinafre', 'cogumelo', 'gengibre', 'piri-piri',
                   'pimento picante', 'rosmaninho', 'alface', 'cebola roxa', 'pepino', 'batata doce', 'picles', 'abacate', 'azeitona', 'couve', 'couve-flor', 'beringela', 'abóbora', 'xuxu']

out = open("result.txt", "a")

i = 0 
x = 0
for key in dic:
    #NOMEDOCOLLAPSE vai ser collapse i
    out.write('<div class="container " style="padding: 4%;">')
    out.write('<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#' + "collapse" + str(i) + '" aria-expanded="false" aria-controls="' + "collapse" + str(i) + '" style="width: 100%; background-color: #63c76a; border-radius: 0px; height: 5em;">'+key+'</button>')
    out.write('<div class="collapse " id="' + "collapse" + str(i) + '">')
    out.write('<div class="card card-body " style="box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);">')
    out.write('<div class="row" style="display: flex; flex-wrap: wrap; flex-direction: initial;justify-content: space-evenly;">')

    for ing in dic[key]:
        out.write('<div style="padding: 3%; ">')
        out.write('<input type="checkbox" name="'+ key + '" id="checkbox-'+str(x)+'" value="'+ing+'" class="custom" />')
        out.write('<label for="checkbox-'+str(x)+'">'+ing+'</label>')
        out.write('</div>')
        x += 1
    out.write('</div>')
    out.write('<div class="row d-flex flex-row-reverse" style="padding-right: 4%;">')
    out.write('<button id="categoria' + str(i) + "close" + '" class="btn btn-primary" value="'+ key +'" onclick="close_card(this.id)" type="button" data-toggle="collapse" data-target="#' + "collapse" + str(i) + '" aria-expanded="false" aria-controls="' + "collapse" + str(i) + '">Done</button>')
    out.write('</div>')
    out.write('</div>')
    out.write('</div>')
    out.write('</div>')
    i += 1
    out.write("")