(function(win) {


  function dialog(opts, callback) {
    this.init(opts,callback);
  }

  dialog.prototype = {

    constructor:dialog,
    //初始化
    init: function(opts, callback) {
      //弹出框样式配置
       var  configs = {
              content:opts.content || null,
              fontSize:opts.fontSize || '15px',
              border:opts.border || '1px solid #ddd',
              backGround:opts.bgcolor || 'white',
            },
            error = '未填写警告内容content！';

            //判断是否输入警告内容
            if(!configs.content){
              console.log(error);
              return false;
            }

            el = document.createElement('div');
            body = document.body;
            dialogEl = this.addStyle(el,configs);

            body.appendChild(dialogEl);
            this.remove(body,callback);
    },

    //初始化弹出框的样式和内容
    addStyle: function(el,conf) {
      el.setAttribute("style","font-size:"+conf.fontSize+";border:"+conf.border+";background:"+conf.backGround);
      el.className = 'dialog';
      el.innerHTML = conf.content;
      return el;
    },

    //移除弹出框节点
    remove:function(body,callback) {
      var dia = document.getElementsByClassName('dialog')[0];
      setTimeout(function(){
        body.removeChild(dia);
        callback();
      },2500)
    }

  }

  win.dialog = dialog;
}(window))
