(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),s=n(5),l=n(4),r=n(1),u=n.n(r),m=(n(12),n(0)),b=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={time:new Date},t.timerId=void 0,t.runClock=function(){t.setState({time:new Date}),console.log(t.state.time.toLocaleString())},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.runClock,1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.clockName,n=this.props.clockName;e!==n&&console.log("The Clock was renamed from ".concat(e," to ").concat(n))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("p",{children:["Current time:"," ",this.state.time.toLocaleTimeString()]})}}]),n}(u.a.Component),h=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:0},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t.randomName=function(){t.setState({clockName:Math.floor(100*Math.random())})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.isClockVisible;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(b,{clockName:this.state.clockName}),Object(m.jsxs)("div",{className:"btn-group ",role:"group","aria-label":"Basic mixed styles example",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.showClock,children:"Show Clock"}),Object(m.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.hideClock,children:"Hide Clock"}),Object(m.jsx)("button",{type:"button",className:"btn btn-warning",onClick:this.randomName,children:"Set random name"})]})]})}}]),n}(u.a.Component),d=h;o.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ad8339f6.chunk.js.map