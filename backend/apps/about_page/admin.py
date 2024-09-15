from django.contrib import admin
from .models import Card, Timeline, Team, SocialNetwork, TeamSocialNetwork


admin.site.register(Card)
admin.site.register(Timeline)


class TeamSocialNetworkInline(admin.TabularInline):
    model = TeamSocialNetwork
    extra = 0


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    inlines = [TeamSocialNetworkInline]


admin.site.register(SocialNetwork)
