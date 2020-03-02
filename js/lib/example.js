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
        _model_module_version : '1.1.0',
        _view_module_version : '1.1.0',
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
        target_el.style.width = "200px";
        target_el.style.height = "54px";
        target_el.style.padding = "12px 10px 0px 80px";
        target_el.style.border = "1px solid black";
        target_el.style.background = 'no-repeat 10px 50% url(' +
//            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48bGluZWFyR3JhZGllbnQgaWQ9ImExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEuNTkzIiB5MT0iMzIiIHgyPSI2MS44NTY1IiB5Mj0iMzIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0ZGRjdCMCIvPjxzdG9wIG9mZnNldD0iMC4yMSIgc3RvcC1jb2xvcj0iI0ZGRUM0MSIvPjxzdG9wIG9mZnNldD0iMC44NCIgc3RvcC1jb2xvcj0iI0UyQ0MwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0MzQUYwMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhMSkiIGQ9Ik01OC40NDksMjYuODAzbC0yNS44OTUsMC4yMDVsLTAuMTU4LTIuODYzYy0wLjAxMi0xLjAyMy0xLjIzOS0xLjQ1LTIuMDQxLTAuOTIxbC0yLjkxNiwyLjM4MWMtMS41MzUtMy4zMjctNC4yNTgtNi4wNzgtNy42MzQtNy40MDdjLTEuNTI3LTAuNjQ0LTMuMTU3LTAuOTM3LTQuNzgzLTAuOTIzYy0zLjU4LDAuMDI2LTcuMTU4LDEuNTQ5LTkuNjczLDQuMTg1Yy00LjUxMSw0LjUxNy01LjQwNCwxMi4xMDQtMi40MjIsMTcuNzM3YzIuNTQ1LDUuMDk0LDguMzE4LDguMTksMTMuODQ0LDcuNDA3YzQuOS0wLjU4OSw5LjAzMy00LjIzLDEwLjkzLTguODEybDMuNTA5LDIuMDE1YzEuMDI3LDAuNjQsMS42MDMtMC4xNjIsMS42MDMtMS4xMDRsLTAuMDY3LTMuNzYybDMuOTkzLDAuMDkzbDIuNzEzLDIuNTU1bDMuNTMzLTMuNTc4bDMuMjI5LDMuMDgyaDIuMzg3bDMuMzA2LTMuMzEzbDIuMzk1LDIuMDIzbDMuMDQ3LTAuMTI2bDIuNjQ0LTIuNTM5bDIuODQ3LTIuNjIyQzYyLjM1MywyOC45MDcsNjAuOTc4LDI3LjkxMyw1OC40NDksMjYuODAzeiBNOS4xNjEsMzQuNzA0Yy0xLjI1OCwwLjE2OC0yLjU3NC0wLjUwMi0zLjE1My0xLjYwMmMtMC42OC0xLjIxNS0wLjQ3NC0yLjg1MSwwLjU1MS0zLjgyN2MwLjgzNi0wLjgyNiwyLjE3OS0xLjE0NiwzLjI5NC0wLjY5OWMxLjE2OCwwLjQzNSwxLjk5OSwxLjU3NywyLjA0NSwyLjc5YzAuMDAyLDAuMDYxLDAuMDA2LDAuMTI0LDAuMDA2LDAuMTg4QzExLjk0MSwzMy4wNjIsMTAuNzIyLDM0LjUyNiw5LjE2MSwzNC43MDR6Ii8+PHBhdGggZmlsbD0iI0JFOTcwMCIgZD0iTTYxLjQwNywzMC4xNzdsLTM0LjMxLDAuNDI1bDMuOTM2LDEuMjMzbDI5LjE0My0wLjQyOGwxLjI2Mi0xLjE4N0M2MS40MjksMzAuMjA2LDYxLjQxNywzMC4xOTIsNjEuNDA3LDMwLjE3N3oiLz48bGluZWFyR3JhZGllbnQgaWQ9ImEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQyLjU4NDQiIHkxPSIyMC41NzMzIiB4Mj0iOS4wMjYzIiB5Mj0iNDMuOTU3MiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN0Q2NDAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkU5NzAwIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2EyKSIgZD0iTTE1LjA1MSw0Ny44ODljLTUuNDM0LDAtMTAuNzI1LTMuMjgzLTEzLjE2OC04LjE3MmMtMy4yODktNi4yMTUtMi4xODQtMTQuMjQ5LDIuNjQxLTE5LjA4YzIuNzExLTIuODQyLDYuNTQxLTQuNDk4LDEwLjQ4OC00LjUyNmMwLjAwMiwwLDAuMDAzLDAsMC4wMDQsMGMxLjkyLDAsMy42NDQsMC4zNDIsNS4yNDEsMS4wMTVjMy4wOTMsMS4yMTgsNS43OTIsMy42MTMsNy41NTUsNi42NzFsMS44MDctMS40NzVjMS44Ny0xLjI2LDMuOTE5LDAuMDM0LDMuOTQyLDEuODA5bDAuMDk1LDEuNzA1bDI0Ljc4NC0wLjE5N2MwLjIxMy0wLjAwNywwLjMyNywwLjAzMywwLjQ3NywwLjA5OGMyLjU1OSwxLjEyMyw0LjM5NSwyLjMwOSw1LjAzNCw0LjQ0NWMwLjEyOCwwLjQyNiwwLjAwMSwwLjg4OS0wLjMyNiwxLjE5bC01LjQ3NCw1LjE0NGMtMC4yMDQsMC4xOTctMC40NzQsMC4zMTItMC43NTgsMC4zMjRsLTMuMDQ2LDAuMTI3Yy0wLjI3LDAuMDItMC41NzYtMC4wODUtMC44LTAuMjc0bC0xLjU3Ni0xLjMzMmwtMi41NDgsMi41NTVjLTAuMjE5LDAuMjE5LTAuNTE2LDAuMzQyLTAuODI1LDAuMzQyaC0yLjM4N2MtMC4zLDAtMC41ODgtMC4xMTUtMC44MDQtMC4zMjNsLTIuNC0yLjI5MmwtMi43MjgsMi43NjRjLTAuNDQ0LDAuNDUtMS4xNjcsMC40NjItMS42MjcsMC4wM2wtMi4zODgtMi4yNDhsLTIuMzM0LTAuMDU1bDAuMDQ2LDIuNTQ4YzAsMS45OTQtMS43NCwzLjEzOC0zLjM4MywyLjExNGwtMi4zNjktMS4zNmMtMi4zMjgsNC41NDktNi42NDgsNy43NjUtMTEuMzE0LDguMzI1QzE2LjMxNSw0Ny44NDUsMTUuNjgyLDQ3Ljg4OSwxNS4wNTEsNDcuODg5eiBNMTUuMTI4LDE4LjQzOWMtMy4zNywwLjAyNS02LjY3NCwxLjQ1NC04LjkzOCwzLjgyNUMyLjExOCwyNi4zNDMsMS4xNjQsMzMuMzgsMy45NTQsMzguNjUzYzIuMzA0LDQuNjEyLDcuNTgxLDcuNTE3LDEyLjY1Myw2Ljc5OWM0LjI2OC0wLjUxNCw4LjE5MS0zLjY5NCwxMC4wMTctOC4xMDRjMC4xMjktMC4zMDksMC4zODQtMC41NDksMC43MDEtMC42NTdjMC4zMTYtMC4xMSwwLjY2NC0wLjA3NiwwLjk1NSwwLjA5MmwzLjM2NywxLjkzM2MwLTAuMDA1LDAtMC4wMDksMC0wLjAxM2wtMC4wNjctMy43NGMtMC4wMDYtMC4zMTgsMC4xMTgtMC42MjMsMC4zNDQtMC44NDdjMC4yMjQtMC4yMjMsMC41MzYtMC4zMjksMC44NDgtMC4zMzlsMy45OTMsMC4wOTNjMC4yODgsMC4wMDcsMC41NjMsMC4xMiwwLjc3MiwwLjMxN2wxLjg4NSwxLjc3NWwyLjczNC0yLjc3YzAuNDQ3LTAuNDUyLDEuMTcyLTAuNDY0LDEuNjMzLTAuMDI0bDIuODkxLDIuNzZoMS40MzdsMi45NjQtMi45NzFjMC40MjktMC40MjksMS4xMTQtMC40NTYsMS41NzYtMC4wNjdsMi4wNDksMS43M2wyLjE1Mi0wLjA4OWw0LjU4Mi00LjMxYy0wLjQ4Ni0wLjc4OC0xLjQ1NS0xLjQ1Mi0zLjIzMS0yLjI1bC0yNS42NDIsMC4yMDRjLTAuMDA0LDAtMC4wMDcsMC0wLjAxLDBjLTAuNjE3LDAtMS4xMjktMC40ODMtMS4xNjMtMS4xbC0wLjE1OC0yLjg2NGwtMy4wNTksMi4yOThjLTAuMjgsMC4yMjctMC42NSwwLjMxNi0wLjk5OCwwLjIzMmMtMC4zNS0wLjA4Mi0wLjY0NC0wLjMyLTAuNzk1LTAuNjQ3Yy0xLjQ1Mi0zLjE0OC00LjAwNS01LjYzLTcuMDA0LTYuODFDMTguMDQyLDE4LjcxOSwxNi42MjEsMTguNDM5LDE1LjEyOCwxOC40Mzl6IE04Ljc3MiwzNS44OTVjLTEuNTg3LDAtMy4wNzYtMC44ODMtMy43OTUtMi4yNWMtMC45NC0xLjY4LTAuNjE4LTMuODgzLDAuNzc5LTUuMjEzYzEuMTQzLTEuMTI5LDMuMDM0LTEuNTM1LDQuNTMtMC45MzdjMS41ODUsMC41ODksMi43MTEsMi4xMzEsMi43NzQsMy44MjhjMC4wMDEsMC4wMTQsMC4wMDcsMC4yMTYsMC4wMDcsMC4yM2MwLjA1NCwyLjExOC0xLjYzOSw0LjA2NS0zLjc3NCw0LjMwOUM5LjEzNCwzNS44ODIsOC45NTMsMzUuODk1LDguNzcyLDM1Ljg5NXogTTguNzgxLDI5LjUzOGMtMC41MiwwLTEuMDQ1LDAuMjExLTEuNDA0LDAuNTY1Yy0wLjYzMywwLjYwMy0wLjc4MSwxLjY2NS0wLjM1MiwyLjQzMWMwLjM2MSwwLjY4NiwxLjE5LDEuMTMsMS45ODMsMS4wMTdjMC45NTYtMC4xMDksMS43NTUtMS4wMjgsMS43MzEtMS45NjhjLTAuMDMzLTAuOTE2LTAuNTc0LTEuNjQ4LTEuMjkyLTEuOTE1QzkuMjIzLDI5LjU3OCw5LjAwOCwyOS41MzgsOC43ODEsMjkuNTM4eiIvPjwvc3ZnPg=='
            'data:image/png;base64,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)';
        target_el.style["border-radius"] = "8px";
        target_el.style["font-weigth"] = "bold";
        target_el.style["text-align"] = "center";
        target_el.textContent = "Drag and Drop your security credentials here";
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
