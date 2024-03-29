!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    function c(b) {
        var c = !1;
        return a('[data-notify="container"]').each(function (d, e) {
            var f = a(e), g = f.find('[data-notify="title"]').html().trim(), h = f.find('[data-notify="message"]').html().trim(), i = g === a("<div>" + b.settings.content.title + "</div>").html().trim(), j = h === a("<div>" + b.settings.content.message + "</div>").html().trim(), k = f.hasClass("alert-" + b.settings.type);
            return i && j && k && (c = !0), !c
        }), c
    }

    function d(d, e, f) {
        var g = {
            content: {
                message: "object" == typeof e ? e.message : e,
                title: e.title ? e.title : "",
                icon: e.icon ? e.icon : "",
                url: e.url ? e.url : "#",
                target: e.target ? e.target : "-"
            }
        };
        f = a.extend(!0, {}, g, f), this.settings = a.extend(!0, {}, b, f), this._defaults = b, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !c(this)) && this.init()
    }

    var b = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        allow_duplicates: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {from: "top", align: "right"},
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {enter: "animated fadeInDown", exit: "animated fadeOutUp"},
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        onClick: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };
    String.format = function () {
        var a = arguments, b = arguments[0];
        return b.replace(/(\{\{\d\}\}|\{\d\})/g, function (b) {
            if ("{{" === b.substring(0, 2))return b;
            var c = parseInt(b.match(/\d/)[0]);
            return a[c + 1]
        })
    }, a.extend(d.prototype, {
        init: function () {
            var a = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function (b, c) {
                    var d = {};
                    "string" == typeof b ? d[b] = c : d = b;
                    for (var e in d)switch (e) {
                        case"type":
                            this.$ele.removeClass("alert-" + a.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + a.settings.type), a.settings.type = d[e], this.$ele.addClass("alert-" + d[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + d[e]);
                            break;
                        case"icon":
                            var f = this.$ele.find('[data-notify="icon"]');
                            "class" === a.settings.icon_type.toLowerCase() ? f.removeClass(a.settings.content.icon).addClass(d[e]) : (f.is("img") || f.find("img"), f.attr("src", d[e])), a.settings.content.icon = d[b];
                            break;
                        case"progress":
                            var g = a.settings.delay - a.settings.delay * (d[e] / 100);
                            this.$ele.data("notify-delay", g), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", d[e]).css("width", d[e] + "%");
                            break;
                        case"url":
                            this.$ele.find('[data-notify="url"]').attr("href", d[e]);
                            break;
                        case"target":
                            this.$ele.find('[data-notify="url"]').attr("target", d[e]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + e + '"]').html(d[e])
                    }
                    var h = this.$ele.outerHeight() + parseInt(a.settings.spacing) + parseInt(a.settings.offset.y);
                    a.reposition(h)
                },
                close: function () {
                    a.close()
                }
            }
        }, buildNotify: function () {
            var b = this.settings.content;
            this.$ele = a(String.format(this.settings.template, this.settings.type, b.title, b.message, b.url, b.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        }, setIcon: function () {
            "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        }, styleDismiss: function () {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        }, styleURL: function () {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: this.settings.z_index + 1
            })
        }, placement: function () {
            var b = this, c = this.settings.offset.y, d = {
                display: "inline-block",
                margin: "0px auto",
                position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                transition: "all .5s ease-in-out",
                zIndex: this.settings.z_index
            }, e = !1, f = this.settings;
            switch (a('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                c = Math.max(c, parseInt(a(this).css(f.placement.from)) + parseInt(a(this).outerHeight()) + parseInt(f.spacing))
            }), this.settings.newest_on_top === !0 && (c = this.settings.offset.y), d[this.settings.placement.from] = c + "px", this.settings.placement.align) {
                case"left":
                case"right":
                    d[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case"center":
                    d.left = 0, d.right = 0
            }
            this.$ele.css(d).addClass(this.settings.animate.enter), a.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (a, c) {
                b.$ele[0].style[c + "AnimationIterationCount"] = 1
            }), a(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (c = parseInt(c) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(c)), a.isFunction(b.settings.onShow) && b.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function () {
                e = !0
            }).one(this.animations.end, function () {
                b.$ele.removeClass(b.settings.animate.enter), a.isFunction(b.settings.onShown) && b.settings.onShown.call(this)
            }), setTimeout(function () {
                e || a.isFunction(b.settings.onShown) && b.settings.onShown.call(this)
            }, 600)
        }, bind: function () {
            var b = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
                    b.close()
                }), a.isFunction(b.settings.onClick) && this.$ele.on("click", function (a) {
                    a.target != b.$ele.find('[data-notify="dismiss"]')[0] && b.settings.onClick.call(this, a)
                }), this.$ele.mouseover(function () {
                    a(this).data("data-hover", "true")
                }).mouseout(function () {
                    a(this).data("data-hover", "false")
                }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                b.$ele.data("notify-delay", b.settings.delay);
                var c = setInterval(function () {
                    var a = parseInt(b.$ele.data("notify-delay")) - b.settings.timer;
                    if ("false" === b.$ele.data("data-hover") && "pause" === b.settings.mouse_over || "pause" != b.settings.mouse_over) {
                        var d = (b.settings.delay - a) / b.settings.delay * 100;
                        b.$ele.data("notify-delay", a), b.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", d).css("width", d + "%")
                    }
                    a <= -b.settings.timer && (clearInterval(c), b.close())
                }, b.settings.timer)
            }
        }, close: function () {
            var b = this, c = parseInt(this.$ele.css(this.settings.placement.from)), d = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), b.reposition(c), a.isFunction(b.settings.onClose) && b.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function () {
                d = !0
            }).one(this.animations.end, function () {
                a(this).remove(), a.isFunction(b.settings.onClosed) && b.settings.onClosed.call(this)
            }), setTimeout(function () {
                d || (b.$ele.remove(), b.settings.onClosed && b.settings.onClosed(b.$ele))
            }, 600)
        }, reposition: function (b) {
            var c = this, d = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])', e = this.$ele.nextAll(d);
            this.settings.newest_on_top === !0 && (e = this.$ele.prevAll(d)), e.each(function () {
                a(this).css(c.settings.placement.from, b), b = parseInt(b) + parseInt(c.settings.spacing) + a(this).outerHeight()
            })
        }
    }), a.notify = function (a, b) {
        var c = new d(this, a, b);
        return c.notify
    }, a.notifyDefaults = function (c) {
        return b = a.extend(!0, {}, b, c)
    }, a.notifyClose = function (b) {
        "undefined" == typeof b || "all" === b ? a("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === b || "info" === b || "warning" === b || "danger" === b ? a(".alert-" + b + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : b ? a(b + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : a('[data-notify-position="' + b + '"]').find('[data-notify="dismiss"]').trigger("click")
    }, a.notifyCloseExcept = function (b) {
        "success" === b || "info" === b || "warning" === b || "danger" === b ? a("[data-notify]").not(".alert-" + b).find('[data-notify="dismiss"]').trigger("click") : a("[data-notify]").not(b).find('[data-notify="dismiss"]').trigger("click")
    }
});
function getInput(name) {
    return $("input[name=" + name + "]").val();
}
function getSelect(name) {
    return $("select[name=" + name + "]").val();
}
function getTextarea(name) {
    return $("textarea[name=" + name + "]").val();
}

function notify(json) {
    var data = "";
    var title = "";
    try {
        data = JSON.parse(json);
    }
    catch (e) {
        json = JSON.stringify({type: "danger", message: "Error receive type data"});
        data = JSON.parse(json);
    }

    switch (data.type) {
        case "info":
            title = site_title_msg_info;
            break;

        case "success":
            title = site_title_msg_success;
            break;

        case "danger":
            title = site_title_msg_danger;
            break;
    }

    $.notify({
        icon: 'glyphicon glyphicon-warning-sign',
        title: title + "!",
        message: data.message
    }, {
        // settings
        element: 'body',
        position: null,
        type: data.type,
        allow_dismiss: false,
        newest_on_top: true,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 9999,
        delay: 5000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: 'pause',
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss"><span aria-hidden="true">&times;</span></button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><b>{1}</b></span><br>' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

function acceptRules() {
    $.get(site + "/post.php?post=accept_rules", function (data) {
        location.reload();
    });
}

function commentsList(id, page) {
    $.get(site + "/post.php?post=comments&id=" + id,function(data) { $("#SComments").html(data);});
}

$(document).ready(function () {
    $("input[name=SSearch]").on("keyup", function () {
        var value = $("input[name=SSearch]").val();
        window.history.pushState("", "", "/search/" + value);
        $.ajax({
            url: site + "/post.php?post=search",
            type: "POST",
            data: {search: value, js: true},
            success: function (data) {
                $("#SContent").html(data);
            }
        });
    });

    $("button[name=authStart]").on('click', function () {
        $.ajax({
            url: site + "/post.php?post=post",
            type: "POST",
            data: {
                "c": "User",
                "f": "authUser",
                "d": "username=" + getInput("auth_username") + ";;password=" + getInput("auth_password")
            },
            success: function (data) {
                var json = JSON.parse(data);
                if (json.type == "reload") {
                    location.reload();
                } else {
                    notify(data);
                }
            }
        });
    });

    $("button[name=registrationUser]").on('click', function () {
        $.ajax({
            url: site + "/post.php?post=adduser",
            type: "POST",
            data: {
                "username": getInput("add_username"),
                "password1": getInput("add_password1"),
                "password2": getInput("add_password2"),
                "email": getInput("add_email")
            },
            success: function (data) {
                var json = JSON.parse(data);
                if (json.type == "reload") {
                    location.reload();
                } else {
                    notify(data);
                }
            }
        });
    });

    $("button[name=addComment]").on('click', function () {
        var url = location.pathname.split('/post/');
        url = url[1].split('-');
        $.ajax({
            url: site + "/post.php?post=addcomment",
            type: "POST",
            data: {
                "post": url[0],
                "text": getTextarea('comments')
            }, success: function (data) {
                commentsList(url[0]);
                notify(data);
            }
        });
    });

    $("button[name=reset]").on('click', function () {
        $.ajax({
            url: site+"/post.php?post=reset",
            type: "POST",
            data: {
                "user": getInput("reset_user")
            }, success: function (data) {
                notify(data)
            }
        });
    });

});
