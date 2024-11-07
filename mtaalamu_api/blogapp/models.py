from django.db import models
from django.utils.text import slugify

class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)  # Slug field
    description = models.TextField()
    image_url = models.URLField(max_length=200)
    author = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)  # Date and time field
    time = models.TimeField(auto_now_add=True)  # New TimeField to store time
    likes = models.PositiveIntegerField(default=0)
    comments_count = models.PositiveIntegerField(default=0)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)  # Automatically generate a slug from the title
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    @classmethod
    def recent_posts(cls, count=5):
        """Retrieve the most recent posts."""
        return cls.objects.order_by('-date')[:count]  # Orders by date descending
