/* eslint-disable no-debugger */
/*
 * @Author: 庞昭昭
 * @Date: 2021-08-09 15:55:14
 * @LastEditTime: 2021-09-03 17:00:36
 * @LastEditors: 庞昭昭
 * @Description: 侧边栏
 * @FilePath: \shell-demo\src\components\web-components\ploading\main.js
 * 记得注释
 */
const Ploading = function() {
  // 配置模板
  const getEemplate = () => {
    // 创建模板
    const template = document.createElement('template');
    // 给模板设置id 方便查找
    template.id = 'Ploading';

    template.innerHTML = `
    <style>
      #container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .loading {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border-left: 4px solid #fff!important;
        border-top: 4px solid #fff!important;
        animation: load 0.5s linear 0s infinite;
        -moz-animation:load 0.5s linear 0s infinite;
        -webkit-animation: load 0.5s linear 0s infinite;
        -o-animation:load 0.5s linear 0s infinite;
      }
      @-webkit-keyframes load {
        from {
          -webkit-transform:rotate(0deg);
        }
        to {
          -webkit-transform:rotate(360deg);
        }
      }
      @-moz-keyframes load {
        from {
          -moz-transform:rotate(0deg);
        }
        to {
          -moz-transform:rotate(360deg);
        }
      }
      @-o-keyframes load {
        from {
          -o-transform:rotate(0deg);
        }
        to {
          -o-transform:rotate(360deg);
        }
      }
      .refresh-text {
        margin-top: 8px;
        font-size: 12px;
      }
      #shadow {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: none;
        background: rgba(0, 0, 0, 0.1);
        z-index:9000;
      }
    </style>
    <div class="content" id="container">
      <div class="loading" id="loading"></div>
      <span class="refresh-text" id="refresh-text">加载中...</span>
      <div id="shadow"></div>
    </div>
    `;

    return template;
  };
  // 将模板放到dom结构中去
  const createEemplate = () => {
    document.body.appendChild(getEemplate());
  };

  createEemplate();
  class Ploading extends HTMLElement {
    constructor() {
      super();
      this.creatShadow();
      // 显示隐藏
      this.defaultVisible = false;
      // loading颜色
      this.defaultColor = '#00BCB7';
      // 传入配置参数
      // 显示隐藏
      this.visible = false;
      // loading颜色
      this.color = '';
    }

    /**
     * 封闭内部dom
     */
    creatShadow() {
      this.shadow = this.attachShadow({
        mode: 'closed'
      });
    }

    /**
     * 创建内部显示内容
     */
    creatContent() {
      const templateElem = document.getElementById('Ploading');
      let content = templateElem.content.cloneNode(true);

      // 按钮显隐
      const visible = this.visible || this.defaultVisible; // 如果此时传入配置参数无值、使用默认参数
      // 按钮颜色
      const color = this.color || this.defaultColor;

      // 获取loading dom
      const container = content.querySelector('#container');
      // 获取loading dom
      const loading = content.querySelector('#loading');
      // 获取loading文案
      const refreshText = content.querySelector('#refresh-text');

      if (visible === 'true') {
        container.style.display = 'flex';
      } else {
        container.style.display = 'none';
      }
      loading.style.border = `4px solid ${color}`;
      refreshText.style.color = color;

      this.shadow.appendChild(content);
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     * 相当于mounted
     */
    connectedCallback() {
      setTimeout(() => {
        // 使用setTimeout目的是为了在所在环境mounted阶段后执行
        this.creatContent(); // 获取结果后，渲染dom树
      });
    }

    /**
     * 当自定义元素与文档DOM断开连接时被调用。
     * 与beforeDestroy类似
     */
    disconnectedCallback() {
      console.log('disconnectedCallback');
    }

    /**
     * 当自定义元素被移动到新文档时被调用。
     */
    adoptedCallback() {
      console.log('adoptedCallback');
    }

    /**
     * 更新自定义元素
     */
    doUpdataAttr(name, newValue) {
      switch (name) {
        // 按钮颜色
        case 'color':
          this.color = newValue;
          break;
        // 显示隐藏
        case 'visible':
          this.visible = newValue === 'true';
          break;
      }
    }

    /**
     * 暴露哪些属性可以被监听
     * @returns {string[]}
     */
    static get observedAttributes() {
      return ['visible', 'color'];
    }

    /**
     * 当自定义元素的一个属性被增加、移除或更改时被调用。
     */
    attributeChangedCallback(name, oldValue, newValue) {
      // 记录此次更改的属性，第一次监听触发可能还未生成改组件dom树，后续在生成阶段使用记录的属性
      this.doUpdataAttr(name, newValue);
      const childrenNodes = this.shadow; // 获取阴影dom节点
      if (childrenNodes.children.length === 0) return; // 如果此时还没有渲染dom，直接返回，后续在creatContent会根据 记录更改的属性做渲染。

      if (name === 'visible') {
        // 获取loading dom
        const container = childrenNodes.querySelector('#container');
        if (newValue === 'true') {
          container.style.display = 'flex';
        } else {
          container.style.display = 'none';
        }
      }
      if (name === 'color') {
        // 获取loading dom
        const loading = childrenNodes.querySelector('#loading');
        // 获取loading文案
        const refreshText = childrenNodes.querySelector('#refresh-text');
        loading.style.border = `4px solid ${newValue}`;
        refreshText.style.color = newValue;
      }
    }
  }

  // 判定是否已经被注册
  !window.customElements.get('p-loading') &&
    window.customElements.define('p-loading', Ploading);
};
Ploading();
