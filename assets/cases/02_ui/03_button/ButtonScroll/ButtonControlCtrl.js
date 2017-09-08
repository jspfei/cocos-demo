const il8n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        button_1:cc.Button,
        button_2:cc.Button,
        display: cc.Label
    },

    // use this for initialization
  
    onClickedButton_1: function() {
        console.log('button_1 clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.1");
    },

    onClickedButton_2: function() {
        console.log('button_2 clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.2");
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
