from django.urls import include, re_path
from rest_framework.routers import DefaultRouter
from django.urls import path

from api import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'game', views.WorldCupGameViewSet)
router.register(r'team', views.TeamViewSet)
router.register(r'group', views.GroupViewSet)
router.register(r'user', views.UserViewSet, 'user')
router.register(r'prediction', views.PredictionViewSet, 'predictions')
router.register(r'vote', views.VoteViewSet, 'votes')
router.register(r'leaderboard', views.LeaderboardViewSet)
router.register(r'myleaderboard', views.MyCustomLeaderboardViewSet, 'myleaderboard')
router.register(r'topcontenders', views.TopContendersViewSet)
router.register(r'trend', views.TrendViewSet)
# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^social/(?P<backend>[^/]+)/$', views.exchange_token, name='google_login'),
    re_path(r'^wildcard/', views.choose_winner, name='choose_wildcard'),
    re_path(r'^guess/', views.guess_game_result, name='guess_result'),
    re_path(r'^follow/add/', views.follow, name='follow'),
    re_path(r'^follow/remove/', views.unfollow, name='unfollow'),
    re_path(r'^follow/reset/', views.reset_custom_leaderboard, name='reset'),
    re_path(r'^logout/', views.Logout.as_view()),
]