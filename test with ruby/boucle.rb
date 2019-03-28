# for i in 1..5 do 
#   puts "nombre #{i}"
# end 

# (0..5).each do |i|
#   puts "nombre de #{i}"
# end 

# [0, 1, 2, 3, 4, 5].each do |i|
#   puts "nombre de #{i}"
# end


# array = ['jean', 'michel', 'billy', 'george', 'pierre', 'fabrice']
# array.each do |nom|
#   puts "hello #{nom}"
# end


# 6.times do |i|
#   puts "hello #{i}"
# end 

# i = 0 

# while i <= 5 do 
#   puts "nombre #{i}"
#   i = i + 1
# end 

# until i > 5 do 
#   puts "until #{i}"
#   i = i + 1
# end

i = 0 

loop do 
  break if i > 5
  puts "nombre #{i}"
  i = i + 1
end
