puts 'quel est votre age ?'

user = gets.chomp.to_i

#Si l'utilisateur à - de 18 ans => mineur 

#Si l'utilisateur est compris entre 18 et 25 => majeur et jeune actif

#Si l'utilisateur > 25 ans => bien ancré dans la vie active 

if user >= 18 && user < 25 
  puts 'Majeur et jeune actif'
elsif user == 25 || user > 25 
  puts 'Majeur et bien ancré dans la vie active'
else 
  puts 'Mineur !'
end