from curses import def_prog_mode
import random

class main:


    def __init__(self):
        self.number = []
        self.score = 300
        self.input = ""
        

    def random (self):
        rand = random.randint(1, 13)
        return rand

    def check_input(random, scored):
        user = int(input('guess the next is it high or low by entering [h/l]: '))
        if user >= random:
            score += 100
        elif user <= random:
            scored -= 75


