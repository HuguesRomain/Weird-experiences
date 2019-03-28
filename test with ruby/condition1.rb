
# Afficher un indication à l'utilisateur 
puts "Quel est votre age ?"

#Enregistrer dans une variable user ce que l'utilisateur rentre 
user = gets.chomp.to_i

#vérifier si son age est supérieur ou non à 18
if user > 18 
  puts "vous etes majeur"
else 
  puts "vous étes mineur"
end

