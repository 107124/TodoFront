(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,o){t.exports=o(61)},60:function(t,e,o){},61:function(t,e,o){"use strict";o.r(e);var n=o(21),a=o(2),c=o(3),s=o(6),d=o(4),r=o(7),i=o(0),l=o.n(i),u=o(19),p=o.n(u),h=o(20),m=o.n(h),f=o(5),b=o.n(f),E=function(t){function e(t){var o;return Object(a.a)(this,e),(o=Object(s.a)(this,Object(d.a)(e).call(this,t))).toggleDone=function(){fetch("https://kst-todo-list.herokuapp.com/todo/".concat(o.props.todoItem.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:o.props.todoItem.title,done:!o.state.done})}).then(o.setState({done:!o.state.done})).catch(function(t){return console.log(t)})},o.state={done:t.todoItem.done},o}return Object(r.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"todo-item"},l.a.createElement("p",{"data-tip":"Delete"},l.a.createElement("button",{className:"delete-btn",onClick:function(){return t.props.deleteItem(t.props.todoItem.id)}},"x")),l.a.createElement(b.a,null),l.a.createElement("input",{onClick:this.toggleDone,type:"checkbox",defaultChecked:this.state.done}),l.a.createElement("p",{className:this.state.done?"done":null},this.props.todoItem.title))}}]),e}(l.a.Component),k=(o(60),function(t){function e(){var t;return Object(a.a)(this,e),(t=Object(s.a)(this,Object(d.a)(e).call(this))).renderTodos=function(){return t.state.todos.map(function(e){return l.a.createElement(E,{key:e.id,todoItem:e,deleteItem:t.deleteItem})})},t.handleChange=function(e){t.setState({todo:e.target.value}),console.log(t.state.todo)},t.handleSubmit=function(e){e.preventDefault(),m()({method:"post",url:"https://kst-todo-list.herokuapp.com/add-todo",headers:{"content-type":"application/json"},data:{title:t.state.todo,done:!1}}).then(function(e){t.setState({todos:[].concat(Object(n.a)(t.state.todos),[e.data]),todo:""})}).catch(function(t){return console.log(t)})},t.deleteItem=function(e){fetch("https://kst-todo-list.herokuapp.com/todo/".concat(e),{method:"DELETE"}).then(t.setState({todos:t.state.todos.filter(function(t){return t.id!==e})}))},t.state={todo:"",todos:[]},t}return Object(r.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://kst-todo-list.herokuapp.com/todos").then(function(t){return t.json()}).then(function(e){return t.setState({todos:e})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"ToDo List"),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"add-todo"},l.a.createElement("input",{type:"text",placeholder:"Add Todo",value:this.state.todo,onChange:this.handleChange}),l.a.createElement("p",{"data-tip":"Add to List"},l.a.createElement("button",{className:"add-btn",type:"submit"},"+")),l.a.createElement(b.a,null)),this.renderTodos())}}]),e}(l.a.Component)),j=document.getElementById("root");p.a.render(l.a.createElement(k,null),j)}},[[22,1,2]]]);
//# sourceMappingURL=main.96468928.chunk.js.map