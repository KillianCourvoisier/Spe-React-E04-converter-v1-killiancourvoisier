# Inputs controlés

Avec React, dés qu'on a des inputs à gérer, on va faire en sorte d'en faire des input controlés.

KEZAKO ?

Un input controlé est un input avec 2 caractéristiques:

* Il dispose forcément d'un "onChange" pour que je contrôle ce qui doit se passer quand l'user tape dedans (généralement -> modifier le state)
* On lui donne FORCÉMENT une value (et pas une defaultValue) nous même qui vient du state. 

Si je donne une value à la main à un input, cet input affichera ce que je lui donne comme value, et rien d'autre.

Ça n'est donc plusl'user qui a la main sur ce qui est affiché dans l'input, c'est moi.

Et je vais faire en sorte que l'input affiche toujours un texte que je vais sauver dans mon state. Et si l'user tape quelque-chose dans l'input, je vais aller modifier mon state. Et

En faisant ça, je m'assure à 10000000000000% que le texte que je vois dans l'input est strictement identique à ce que j'ai dans mon state. 
