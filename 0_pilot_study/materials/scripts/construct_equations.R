library(tidyverse)
library(glue)

set.seed(4982753)

correct_equations = c()

for (i in c("1", "2", "3", "4", "5", "6")) {
  for (j in c("1", "2", "3", "4", "5", "6")) {
    for (op in c("+", "-")) {
      
      if(op == "+") {
        
        ans = as.numeric(i) + as.numeric(j)
        
        equation = str_c(i, " + ", j, " = ", ans)
        correct_equations = c(correct_equations, equation)
      }
      
      
      if(op == "-") {
        ans = as.numeric(i) - as.numeric(j)
        
        if(ans >= 0) {
          equation = str_c(i, " - ", j, " = ", ans)
          correct_equations = c(correct_equations, equation)
        }
      }
    }
  }
}

# randomly shuffle equations
correct_equations = sample(correct_equations, length(correct_equations))



incorrect_equations = c()

for (i in c("1", "2", "3", "4", "5", "6")) {
  for (j in c("1", "2", "3", "4", "5", "6")) {
    for (op in c("+", "-")) {
      
      if(op == "+") {
        
        deviation = sample(c(1,2), 1)
        
        ans = as.numeric(i) + as.numeric(j)
        
        equation = str_c(i, " + ", j, " = ", ans+deviation)
        incorrect_equations = c(incorrect_equations, equation)
      }
      
      
      if(op == "-") {
        
        deviation = sample(c(1,2), 1)
        coinflip  = sample(c(TRUE, FALSE), 1)
        
        if (coinflip) {
          ans = as.numeric(i) - as.numeric(j) + deviation
        } else {
          ans = as.numeric(i) - as.numeric(j) - deviation
        }
        
        if(ans < 0) {
         
          ans = ans + 2*deviation
         
        }
        
        
        if(i >= j) {
          equation = str_c(i, " - ", j, " = ", ans)
          incorrect_equations = c(incorrect_equations, equation)
        }
      }
    }
  }
}

# shuffle incorrect equations
incorrect_equations = sample(incorrect_equations, length(incorrect_equations))


# Make sure correct and incorrect equations are equally spread out over the practice trials, and that half of the real trials are correct on each O-span version.
correct_practice = c("correct", "correct", "incorrect", "correct", "incorrect", "incorrect", "correct", "incorrect", "incorrect", "correct", "correct", "incorrect", "correct", "correct")
correct_standard = sample(c(rep("correct", 24), rep("incorrect", 24)))
correct_adapted= sample(c(rep("correct", 24), rep("incorrect", 24)))

correct = c(correct_practice, correct_standard, correct_adapted)


all_equations = c()
n_correct = 1
n_incorrect = 1

for (i in 1:length(correct)) {
  
  if(correct[[i]] == "correct") {
    all_equations <- c(all_equations, correct_equations[[n_correct]])
    n_correct = n_correct + 1
  }
  
  if(correct[[i]] == "incorrect") {
    all_equations <- c(all_equations, incorrect_equations[[n_incorrect]])
    n_incorrect = n_incorrect + 1
  }
}

practice_equations = all_equations[1:14]
standard_equations = all_equations[15:62]
adapted_equations = all_equations[63:110]


# Glue output for easy copy-pasting to Javascript
glue("'{correct}',")
glue("'{practice_equations}',")
glue("'{standard_equations}',")
glue("'{adapted_equations}',")
