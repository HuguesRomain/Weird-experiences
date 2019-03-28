#Méthode 

# def hello_world
#   puts 'hello world'
# end

# puts hello_world

# def calcul 
#   a = 1
#   b = 2 
#   return a + b
# end 

# puts calcul

# def calcul(a, b)
#   return a + b
# end

# puts calcul(1, 20)

# def is_superior?(a, b)
#   if a > b
#     return "vrai"
#   else 
#     return 'faux'
#   end
# end

# puts is_superior?(2, 10)

module Multiplication 
  def self.table(a)
    puts "nous voulons la table de #{a}"
  end

  def self.is_valid?(a)
    max = 10 
    if a <= 10
      return "Disponible"
    else
      return "Non disponible"
    end
  end
end

