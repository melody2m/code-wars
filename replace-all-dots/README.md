https://www.codewars.com/kata/fixme-replace-all-dots/javascript

this was about replacing dots with dashes.
the trick here was that the dot is a special character in javascript regular expressions that equates to any character. so you have to make the dot unspecial using a backslash in front of it.
you also have to add the 'g' flag to indicate all instances of the non-special dot character should be replaced. 