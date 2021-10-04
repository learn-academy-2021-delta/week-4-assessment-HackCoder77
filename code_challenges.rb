# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
if num1 % 2 === 1
p "#{num1} is odd"
end

num2 = 42
# Expected output: '42 is even'
if num2 % 2 === 0
    p"#{num2} is even"
end

num3 = 221
# Expected output: '221 is odd'
if num3 % 2 === 1
    p "#{num3} is odd"
end



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'

album1.delete "a,e,i,o,u"

album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'

album2.delete "a,e,i,o,u"

album3 = 'Abbey Road'
# Expected output: 'bby Rd'

album3.delete "a,e,i,o,u"



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome?(string)
    if string.downcase == string.downcase.reverse
        return "#{string} is a palindrome"
    else
        p "#{string} is NOT a palindrome"
    end
end