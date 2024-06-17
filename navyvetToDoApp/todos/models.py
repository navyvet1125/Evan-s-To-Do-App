"""This is the models.py file for the todos app."""
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.

class TodoList(models.Model):
    """This is the model for the TodoList object."""
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """This is the string representation of the TodoList object."""
        return self.title
    
    def add_to_list(self, list):
        """Method to add a task to a list."""
        self.items.add(list)
        self.save()

class TodoItem(models.Model):
    """This is the model for the TodoItem object."""
    title = models.CharField(max_length=200)
    done = models.BooleanField(default=False)
    completed = models.DateTimeField(blank=True, null=True)
    completion_notes = models.TextField(blank=True, null=True)
    completion_image = models.ImageField(
        upload_to='images/',
        blank=True,
        null=True
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    due_by = models.DateTimeField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    list = models.ForeignKey(TodoList, on_delete=models.CASCADE)
    PRIORITY_CHOICES = [
        ('L', 'Low'),
        ('M', 'Medium'),
        ('H', 'High'),
    ]
    priority = models.CharField(
        max_length=1,
        choices=PRIORITY_CHOICES,
        default='M',
    )
    DIFFICULTY_LEVEL =[
        ('XS', 'XS'),
        ('S', 'S'),
        ('M', 'M'),
        ('L', 'L'),
        ('XL', 'XL'),
    ]
    difficulty = models.CharField(
        max_length=2,
        choices=DIFFICULTY_LEVEL,
        default='M',
    )
    CATEGORY_CHOICES = [
        ('P', 'Personal'),
        ('W', 'Work'),
        ('S', 'School'),
        ('O', 'Other'),
    ]
    category = models.CharField(
        max_length=1,
        choices=CATEGORY_CHOICES,
        default='O',
    )

    def __str__(self):
        """This is the string representation of the TodoItem object."""
        return self.title

    def mark_done(self, notes=None, image=None):
        """Method to mark a task as done."""
        self.done = True
        self.completion_notes = notes
        self.completion_image = image
        self.completed = datetime.now()
        self.save()
    
    def mark_not_done(self):
        """Method to mark a task as not done."""
        self.done = False
        self.completion_notes = None
        self.completion_image = None
        self.completed = None
        self.save()
