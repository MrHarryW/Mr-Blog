from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    # Maps to django user
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    tags = models.CharField(max_length=255)
    content = models.TextField()
    summary = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
