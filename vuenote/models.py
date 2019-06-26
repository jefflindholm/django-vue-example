from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=255, unique=True)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} {} {} {}".format(self.title, self.content, self.created, self.modified)