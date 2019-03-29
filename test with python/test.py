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
    

def main():
  #récolter une première note
  note1 = int(input("Entrer la première note"))
  #récolter une seconde note
  note2 = int(input("Entrer la seconde note"))
  #récolter une troisèmre note
  note3 = int(input("Entrer la troisèmre note"))
  #Calculer la moyenne
  result = (note1 + note2 + note3) / 3
  #Afficher le résultat
  print("La moyenne de l'éléve est de " + str(result))

if __name__ == "__main__":
    main()