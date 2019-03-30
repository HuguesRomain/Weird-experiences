# coding: utf-8
# wallet = 5000
# computer_price = 900

# # vérifier que le prix de l'ordinateur est inférieur a 1000e 
# if computer_price < 1000: 
#   print("le prix de l'ordinateur est inférieur à 1000") 
# else:
#   print("le prix de l'ordinateur est supérieur à 1000")

# while wallet > computer_price: 
#   print("Vous acheté un ordinateur, il vous reste {}e".format(wallet))
#   wallet -= computer_price


#SYSTÉME DE VÉRIFICATION DE MOT DE PASSE 
# password = ''


# def is_valid(): 
#   enter_password = input("Entré votre mot de passe pour vous connecté")

#   if enter_password == password: 
#     print("Bravo vous étes connecté !")
#   else:
#     print("Votre mot de passe n'est pas bon")

# def mdp():
#   password = str(input("entré votre mot de passe"))
#   print(password)
#   password_confirm = str(input("confirmé votre mot de passe")) 
#   print(password_confirm)

#   if password == password_confirm: 
#     print(password)
#   else:
#     print("Votre mdp n'est pas valide")

# if __name__ == "__main__":
#   mdp()

password = input("Entrer votre mot de passe") 
password_lenght = len(password)

if password_lenght <= 8: 
  print("mot de passe est trop court !") 
else:
  print("Mot de passe valide !")

print(password_lenght)