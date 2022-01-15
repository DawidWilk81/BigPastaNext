from django.db import models

class Pasta(models.Model):
    Tytul = models.CharField(max_length=64, null=False)
    Opis = models.CharField(max_length=128)
    Tresc = models.TextField()

    def __str__(self):
        return self.Tytul
