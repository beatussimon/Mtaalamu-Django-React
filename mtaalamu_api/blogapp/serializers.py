from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'slug', 'description', 'image_url', 'author', 'date', 'likes', 'comments_count']
        read_only_fields = ['id', 'slug', 'date', 'likes', 'comments_count']  # Make these fields read-only

    def create(self, validated_data):
        """Create and return a new Post instance."""
        return Post.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """Update and return an existing Post instance."""
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image_url = validated_data.get('image_url', instance.image_url)
        instance.author = validated_data.get('author', instance.author)
        instance.save()
        return instance

class UserSerializer(serializers.Serializer):
    class Meta:
        model= User
        fields= ['id', 'username', 'password']

        """To make the passwords invisible in postman when the users data is requested"""
        extra_kwargs = {
            'password':{
                'write_only':True,
                'required': True
            }
        }

        def create(self, validated_data):
            """Create and return a new User instance."""
            user = User.objects.create(**validated_data)
            Token.objects.create(user=user)
            return user