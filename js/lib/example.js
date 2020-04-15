var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');

// See example.py for the kernel counterpart to this file.


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var LoginModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'LoginModel',
        _view_name : 'LoginView',
        _model_module : 'pic-sure-jupyter-widgets',
        _view_module : 'pic-sure-jupyter-widgets',
        _model_module_version : '1.1.1',
        _view_module_version : '1.1.1',
        endpoint: "",
        token: "",
        resourceUUID: ""
    })
});


// Custom View. Renders the widget model.
var LoginView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        var target_el = document.createElement("div");
        target_el.style.width = "500px";
        target_el.style.height = "70px";
        target_el.style.padding = "12px 10px 0px 80px";
        target_el.style.border = "1px solid black";
        target_el.style.background = 'no-repeat 10px 50% url(' +
            'data:image/png;base64,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)';
        target_el.style["border-radius"] = "8px";
        target_el.style["font-weigth"] = "bold";
        target_el.style["text-align"] = "center";
        target_el.textContent = "Drag and drop your security credentials here.";
        target_el.ondrop = function(ev) {
            ev.preventDefault();
            const data = JSON.parse(ev.dataTransfer.getData("application/json"));
            console.dir(data);
            this.model.set("endpoint", data["Endpoint"]);
            this.model.set("token", data["Token"]);
            this.model.set("resourceUUID", data["ResourceUUID"]);
            this.model.save_changes();

            try {
                clearInterval(this._interval_timer);
            } catch(e) {}
            target_el.textContent = "Security credentials age: 00:00:00";
            let dropTime = new Date().getTime();
            this._interval_timer = setInterval(function() {
                    let dist = new Date().getTime() - dropTime;
                    let t_h = String(Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ))).padStart(2,"0");
                    let t_m = String(Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0");
                    let t_s = String(Math.floor((dist % (1000 * 60)) / 1000)).padStart(2,"0");
                    target_el.textContent = "Security credentials age: " + t_h + ":" + t_m + ":" + t_s;
                }, 1000
            );
        }.bind(this);
        target_el.ondragover = function(ev) {
            ev.preventDefault();
            ev.dataTransfer.dropEffect = "link"
        };
        this.el.appendChild(target_el);
    }
});


module.exports = {
    LoginModel: LoginModel,
    LoginView: LoginView
};
