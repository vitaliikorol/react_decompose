(this.webpackJsonpreact_decompose=this.webpackJsonpreact_decompose||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),i=n(2),r=n.n(i),u=n(3),s=n(4),m=n(6),o=n(5),c=(n(12),function(e){Object(m.a)(n,e);var a=Object(o.a)(n);function n(){var e;Object(u.a)(this,n);for(var t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={minSliderValue:50,maxSliderValue:51,minInputMaxValue:50,maxInputMinValue:51},e.minThumbMovement=function(a){var n=+a.target.value;e.handleMouseDownMinSlider(),+n<e.state.maxSliderValue&&e.setState((function(e){return{minSliderValue:+n}}))},e.maxThumbMovement=function(a){var n=+a.target.value;e.handleMouseDownMaxSlider(),+n>e.state.minSliderValue&&e.setState((function(e){return{maxSliderValue:+n}}))},e.handleMouseDownMinSlider=function(){e.setState((function(e){return{minInputMaxValue:e.maxSliderValue-1,maxInputMinValue:e.maxSliderValue}}))},e.handleMouseDownMaxSlider=function(){e.setState((function(e){return{maxInputMinValue:e.minSliderValue+1,minInputMaxValue:e.minSliderValue}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,a=e.minSliderValue,n=e.maxSliderValue,t=e.minInputMaxValue,i=e.maxInputMinValue;return l.a.createElement("div",{className:"control"},l.a.createElement("p",{className:"control__header"},"I'm a double range-slider"),l.a.createElement("div",{className:"control__displays"},l.a.createElement("input",{disabled:!0,className:"control__display",value:a}),l.a.createElement("input",{disabled:!0,className:"control__display",value:n})),l.a.createElement("div",{className:"slider slider__wrapper"},l.a.createElement("div",{className:"slider__bar"}),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"slider__thumb",style:{width:"".concat(3*t+15,"px")},type:"range",min:"0",max:t,onChange:this.minThumbMovement,onMouseDown:this.handleMouseDownMinSlider}),l.a.createElement("input",{style:{width:"".concat(3*(100-i)+15,"px")},className:"slider__thumb",type:"range",min:i,max:"100",onChange:this.maxThumbMovement,onMouseDown:this.handleMouseDownMaxSlider}))))}}]),n}(l.a.PureComponent));r.a.render(l.a.createElement(c,null),document.getElementById("root"))},7:function(e,a,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.83a6142b.chunk.js.map