(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955],{5782:function(e,t,r){Promise.resolve().then(r.bind(r,1991)),Promise.resolve().then(r.bind(r,1712)),Promise.resolve().then(r.t.bind(r,413,23))},1991:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ActivitiesView}});var a=r(7437),n=r(2265),s=r(9394),d=r(7425),i=r(1628),o=r(3611);function Calendar(e){let{className:t,classNames:r,showOutsideDays:n=!0,...l}=e;return(0,a.jsx)(d._W,{showOutsideDays:n,className:(0,i.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,i.cn)((0,o.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:(0,i.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md","range"===l.mode?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:(0,i.cn)((0,o.d)({variant:"ghost"}),"h-8 w-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start",day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...r},components:{IconLeft:e=>{let{...t}=e;return(0,a.jsx)(s.wyc,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,a.jsx)(s.XCv,{className:"h-4 w-4"})}},...l})}function CalendarDemo(e){let{dateList:t,date:r,setDate:n}=e;return(0,a.jsx)(Calendar,{mode:"multiple",selected:r,onSelect:n,disabled:e=>!t.includes(e.toISOString().split("T")[0]),className:"rounded-md border"})}Calendar.displayName="Calendar";var l=r(1712),c=r(7111);let u=(0,c.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Badge(e){let{className:t,variant:r,...n}=e;return(0,a.jsx)("div",{className:(0,i.cn)(u({variant:r}),t),...n})}var f=r(9598),m=r(8203),x=r(6386),p=r(6142),g=r(6489),h=r(5750),v=r(6691),y=r.n(v),b=r(1396),j=r.n(b);function ActivityCard(e){let{activity:t}=e;return console.log(t),(0,a.jsx)(j(),{href:"/cn/".concat(t.slug),children:(0,a.jsxs)(f.Zb,{className:"w-[350px] overflow-hidden",children:[(0,a.jsx)(f.aY,{children:(0,a.jsx)(l.AspectRatio,{ratio:16/9,className:"relative overflow-hidden",children:(0,a.jsx)(y(),{src:t.image,alt:"",fill:!0,className:"object-cover hover:scale-105"})})}),(0,a.jsxs)(f.Ol,{children:[(0,a.jsx)(f.ll,{children:t.title}),(0,a.jsxs)(f.SZ,{className:"flex gap-2",children:[(0,a.jsx)(m.Z,{className:"size-4"}),t.dateItems.map(e=>e.split("T")[0]).join(", ")]}),(0,a.jsxs)(f.SZ,{className:"flex gap-2",children:[(0,a.jsx)(x.Z,{className:"size-4"}),t.time]}),(0,a.jsxs)(f.SZ,{className:"flex gap-2",children:[(0,a.jsx)(p.Z,{className:"size-4"}),t.location]}),(0,a.jsxs)(f.SZ,{className:"flex gap-2",children:[(0,a.jsx)(g.Z,{className:"size-4"}),t.age]}),(0,a.jsxs)(f.SZ,{className:"flex gap-2",children:[(0,a.jsx)(h.Z,{className:"size-4"}),t.capacity]})]}),(0,a.jsx)(f.eW,{className:"flex px-6 pb-4 flex-wrap gap-2",children:t.keywords.split(",").map((e,t)=>(0,a.jsx)(Badge,{variant:"secondary",children:e},t))})]})})}function ActivitiesView(e){let{activities:t}=e,[r,s]=(0,n.useState)(void 0);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex sm:flex-row flex-col items-start",children:[(0,a.jsx)("div",{className:"flex-none mr-2 mb-4",children:(0,a.jsx)(CalendarDemo,{dateList:t.flatMap(e=>e.dateItems).map(e=>e.split("T")[0]),date:r,setDate:s})}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:t.filter(e=>!r||0===r.length||r.some(t=>e.dateItems.map(e=>e.split("T")[0]).includes(t.toISOString().split("T")[0]))).map((e,t)=>(0,a.jsx)(ActivityCard,{activity:e},t))})]})})}},1712:function(e,t,r){"use strict";r.r(t),r.d(t,{AspectRatio:function(){return n}});var a=r(4101);let n=a.f},3611:function(e,t,r){"use strict";r.d(t,{d:function(){return o},z:function(){return l}});var a=r(7437),n=r(2265),s=r(686),d=r(7111),i=r(1628);let o=(0,d.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef((e,t)=>{let{className:r,variant:n,size:d,asChild:l=!1,...c}=e,u=l?s.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(o({variant:n,size:d,className:r})),ref:t,...c})});l.displayName="Button"},9598:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},SZ:function(){return l},Zb:function(){return d},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var a=r(7437),n=r(2265),s=r(1628);let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...n})});d.displayName="Card";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});i.displayName="CardHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...n})});o.displayName="CardTitle";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});l.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("",r),...n})});c.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center ",r),...n})});u.displayName="CardFooter"},1628:function(e,t,r){"use strict";r.d(t,{cn:function(){return cn}});var a=r(3920),n=r(550);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}}},function(e){e.O(0,[310,82,326,477,273,971,472,744],function(){return e(e.s=5782)}),_N_E=e.O()}]);