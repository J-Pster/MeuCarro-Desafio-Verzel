from rest_framework.routers import DefaultRouter
from api.views import CarrosViewSet


app_name = "api"

router = DefaultRouter(trailing_slash=False)
router.register(r"carros", CarrosViewSet)

urlpatterns = router.urls
