import codecs
from unidecode import unidecode

# unaccented_string = unidecode.unidecode(accented_string)

def htmlcode(categoria, alimento):
    s = "_".join(unidecode(alimento).split(" "))
    html_c = '<div style="padding: 3%; "><input class="cat custom" type="checkbox" name="' + categoria + '" id="' + s + '" value="' + alimento + '" /><label for="' + s + '">' + alimento + '</label></div>'
    return html_c

html = open("codigo_html.txt", "w")

categoria = ""
with codecs.open('./ALIMENTOS.txt', 'r', encoding='utf8') as file:
    for line in file:
        line = line.strip()
        if line.isupper():
            categoria = line
            html.write(line)
        else:
            html.write(categoria, line)
        


html.close()
