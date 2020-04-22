import ipywidgets as widgets
from traitlets import Unicode

# See js/lib/example.js for the frontend counterpart to this file.

@widgets.register
class PicSureLogin(widgets.DOMWidget):
    """An example widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('LoginView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('LoginModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('pic-sure-jupyter-widgets').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('pic-sure-jupyter-widgets').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.
    endpoint = Unicode('').tag(sync=True)
    token = Unicode('').tag(sync=True)
    resourceUUID = Unicode('').tag(sync=True)



@widgets.register
class PicSureLoginWindow(widgets.DOMWidget):
    """An example widget."""

    # Name of the widget view class in front-Snd
    _view_name = Unicode('LoginWindowView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('LoginWindowModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('pic-sure-jupyter-widgets').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('pic-sure-jupyter-widgets').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.
    endpoint = Unicode('').tag(sync=True)
    token = Unicode('').tag(sync=True)
    resourceUUID = Unicode('').tag(sync=True)
    windowURL = Unicode('').tag(sync=True)