(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["70bb67e2"],{"70bb67e2":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return k;}});var n=a("852bbaa9"),r=a("f19d2b93");a("fa6f80f4");var d=n._(a("5b220c3d")),o=a("e22febe0"),l=a("915a4463"),s=a("c0f053f1"),i=a("9944ffaa"),u=a("7f663da5"),f=a("a9d1a279");let x=d.default.createContext({}),y=()=>{let{setActivatorNodeRef:e,listeners:t}=(0,d.useContext)(x);return(0,r.jsx)(f.Button,{type:"text",size:"small",icon:(0,r.jsx)(o.HolderOutlined,{}),style:{cursor:"move"},ref:e,...t});},c=[{key:"sort",align:"center",width:80,render:()=>(0,r.jsx)(y,{})},{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],b=[{key:"1",name:"John Brown",age:32,address:"Long text Long"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],g=e=>{let{attributes:t,listeners:a,setNodeRef:n,setActivatorNodeRef:o,transform:l,transition:s,isDragging:f}=(0,i.useSortable)({id:e["data-row-key"]}),y={...e.style,transform:u.CSS.Translate.toString(l),transition:s,...f?{position:"relative",zIndex:9999}:{}},c=(0,d.useMemo)(()=>({setActivatorNodeRef:o,listeners:a}),[o,a]);return(0,r.jsx)(x.Provider,{value:c,children:(0,r.jsx)("tr",{...e,ref:n,style:y,...t})});};var k=()=>{let[e,t]=d.default.useState(b);return(0,r.jsx)(l.DndContext,{modifiers:[s.restrictToVerticalAxis],onDragEnd:({active:e,over:a})=>{e.id!==(null==a?void 0:a.id)&&t(t=>{let n=t.findIndex(t=>t.key===(null==e?void 0:e.id)),r=t.findIndex(e=>e.key===(null==a?void 0:a.id));return(0,i.arrayMove)(t,n,r);});},children:(0,r.jsx)(i.SortableContext,{items:e.map(e=>e.key),strategy:i.verticalListSortingStrategy,children:(0,r.jsx)(f.Table,{rowKey:"key",components:{body:{row:g}},columns:c,dataSource:e})})});};}}]);