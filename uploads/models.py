from django.db import models
from django.utils.timezone import now


# Create your models here.

def upload_to(instance, filename):
    return '{filename}'.format(filename=filename)


class Upload(models.Model):
    url = models.FileField(upload_to=upload_to, blank=True, null=True)
    # uploadtime = models.DateTimeField()
    # filetype =  models.CharField(
    #     max_length=20, blank=False, null=False)
    uploadtime = models.DateTimeField(default=now, editable=False)

    def _str_(self):
        return self.url
