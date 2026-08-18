 GUIDE POUR MODIFIER LE SITE 

CE QU'IL Y A DANS CE DOSSIER
-----------------------------
- index.html   -> le contenu du site (textes, liens, images)
- style.css    -> l'apparence du site (couleurs, tailles, mise en page)
- assets/      -> toutes les photos utilisees sur le site




COMMENT MODIFIER UN TEXTE
---------------------------
1. Ouvrir "index.html" avec un simple editeur de texte (le Bloc-notes
   Windows fonctionne, mais un logiciel comme "Notepad++" ou
   "Visual Studio Code" (gratuits) est plus confortable).
2. Il suffit de reperer le texte lisible
   et de le remplacer par le nouveau texte, sans toucher aux < >.




COMMENT CHANGER UNE PHOTO
---------------------------
1. Deposer la nouvelle image dans le dossier "assets".
2. Dans "index.html", chercher la ligne qui affiche l'ancienne image
   (elle ressemble a : src="assets/nom-de-l-image.jpg")
3. Remplacer "nom-de-l-image.jpg" par le nom exact du nouveau fichier
   (attention aux majuscules/minuscules et a l'extension .jpg/.png).


COMMENT AJOUTER OU SUPPRIMER UNE CARTE D'EVENEMENT
-----------------------------------------------------
Dans la section "Evenements et Resources", chaque carte est un bloc
qui commence par <div class="carte"> et se termine par </div>.

- Pour AJOUTER une carte : copier un bloc entier (du <div class="carte">
  jusqu'au </div> qui lui correspond), le coller juste apres, puis
  changer son titre, son lien (href="...") et son image (src="...").
- Pour SUPPRIMER une carte : selectionner tout le bloc concerne
  (du <div class="carte"> jusqu'a son </div>) et le supprimer.


COMMENT MODIFIER UN LIEN
--------------------------
Chercher href="" ou href="#" pres du texte concerne, et ecrire
l'adresse entre les guillemets, par exemple :
    href="https://www.blaisepascal.fr"
Pour un lien qui ouvre une adresse email :
    href="mailto:anciens63000@blaisepascal.fr"


COMMENT CHANGER UNE COULEUR
------------------------------
Ouvrir "style.css" avec un editeur de texte. Tout en haut du fichier,
un commentaire indique les couleurs principales utilisees sur le site
et ou les retrouver. Il suffit de remplacer le code de couleur
(par exemple rgb(163, 122, 45)) par un autre.


LE SITE S'ADAPTE-T-IL AUX TELEPHONES ?

Oui, il s'affiche correctement sur
ordinateur, tablette et telephone. Ces reglages
se trouvent tout en bas du fichier "style.css", dans la partie intitulee
"RESPONSIVE / ADAPTATION MOBILE". Il n'y a rien a modifier dans cette
partie sauf si vous ajoutez un tout nouvel element au site.


JE PEUX VOUS AIDEZ AVEC PLAISIR SI VOUS AVEZ BESOIN D'AIDEZ
mon email: mousdieng10@gmail.com


