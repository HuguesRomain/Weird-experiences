# # coding: utf-8
# def main():
# #On écris le nom de l'utilisateur
#   username = "Hugues"
# #Création d'une variable age
#   age = 18
#   print(username, age)
#   age = age + 1
#   print("salut je m'appel " + username + "et j'ai " + str(age) + " ans")
  
# if __name__ == "__main__":
#   main()
    

# def main():
#   #récolter une première note
#   note1 = int(input("Entrer la première note"))
#   #récolter une seconde note
#   note2 = int(input("Entrer la seconde note"))
#   #récolter une troisèmre note
#   note3 = int(input("Entrer la troisèmre note"))
#   #Calculer la moyenne
#   result = (note1 + note2 + note3) / 3
#   #Afficher le résultat
#   print("La moyenne de l'éléve est de " + str(result))

# coding: utf-8
def main(): 
  #Récolter valeur porte monnaie
  wallet = 100
  print("vos économies sont de " + str(wallet))
  #Crée un produit qui aura pour valeur 50 
  product = 50 
  #Achat du produit 
  wallet = wallet - product 
  #Afficher valeur du porte monnaie aprés achat
  print("vos économies sont de " + str(wallet))

if __name__ == "__main__":
    main()