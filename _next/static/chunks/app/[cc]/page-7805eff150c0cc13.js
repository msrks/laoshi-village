(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[574],{3863:function(e,r,t){Promise.resolve().then(t.bind(t,1439)),Promise.resolve().then(t.bind(t,1712)),Promise.resolve().then(t.bind(t,5217)),Promise.resolve().then(t.t.bind(t,413,23)),Promise.resolve().then(t.t.bind(t,8326,23))},1439:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return CarouselComponent}});var n=t(7437),l=t(2261),s=t(9598),a=t(2265),o=t(9394),i=t(1836),c=t(1628),d=t(3611);let u=a.createContext(null);function useCarousel(){let e=a.useContext(u);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=a.forwardRef((e,r)=>{let{orientation:t="horizontal",opts:l,setApi:s,plugins:o,className:d,children:f,...h}=e,[m,x]=(0,i.Z)({...l,axis:"horizontal"===t?"x":"y"},o),[p,v]=a.useState(!1),[b,N]=a.useState(!1),g=a.useCallback(e=>{e&&(v(e.canScrollPrev()),N(e.canScrollNext()))},[]),w=a.useCallback(()=>{null==x||x.scrollPrev()},[x]),y=a.useCallback(()=>{null==x||x.scrollNext()},[x]),j=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),w()):"ArrowRight"===e.key&&(e.preventDefault(),y())},[w,y]);return a.useEffect(()=>{x&&s&&s(x)},[x,s]),a.useEffect(()=>{if(x)return g(x),x.on("reInit",g),x.on("select",g),()=>{null==x||x.off("select",g)}},[x,g]),(0,n.jsx)(u.Provider,{value:{carouselRef:m,api:x,opts:l,orientation:t||((null==l?void 0:l.axis)==="y"?"vertical":"horizontal"),scrollPrev:w,scrollNext:y,canScrollPrev:p,canScrollNext:b},children:(0,n.jsx)("div",{ref:r,onKeyDownCapture:j,className:(0,c.cn)("relative",d),role:"region","aria-roledescription":"carousel",...h,children:f})})});f.displayName="Carousel";let h=a.forwardRef((e,r)=>{let{className:t,...l}=e,{carouselRef:s,orientation:a}=useCarousel();return(0,n.jsx)("div",{ref:s,className:"overflow-hidden",children:(0,n.jsx)("div",{ref:r,className:(0,c.cn)("flex","horizontal"===a?"-ml-4":"-mt-4 flex-col",t),...l})})});h.displayName="CarouselContent";let m=a.forwardRef((e,r)=>{let{className:t,...l}=e,{orientation:s}=useCarousel();return(0,n.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,c.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===s?"pl-4":"pt-4",t),...l})});m.displayName="CarouselItem";let x=a.forwardRef((e,r)=>{let{className:t,variant:l="outline",size:s="icon",...a}=e,{orientation:i,scrollPrev:u,canScrollPrev:f}=useCarousel();return(0,n.jsxs)(d.z,{ref:r,variant:l,size:s,className:(0,c.cn)("absolute  h-8 w-8 rounded-full","horizontal"===i?"left-12 top-1/2 -translate-y-1/2":"top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!f,onClick:u,...a,children:[(0,n.jsx)(o.Y4O,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});x.displayName="CarouselPrevious";let p=a.forwardRef((e,r)=>{let{className:t,variant:l="outline",size:s="icon",...a}=e,{orientation:i,scrollNext:u,canScrollNext:f}=useCarousel();return(0,n.jsxs)(d.z,{ref:r,variant:l,size:s,className:(0,c.cn)("absolute h-8 w-8 rounded-full","horizontal"===i?"right-12 top-1/2 -translate-y-1/2":"bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!f,onClick:u,...a,children:[(0,n.jsx)(o.LZ3,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Next slide"})]})});p.displayName="CarouselNext";var v=t(6691),b=t.n(v),N=t(1396),g=t.n(N),w=t(1712);let y={carouselItems:[{imgSrc:"/hero1_new.jpeg",title:"Hello from 海头老市村",titleCn:"Hello from 海头老市村",description:"For justice, love neighbor, wise living, be the best of yourself",descriptionCn:"为正义, 爱邻居, 明智生活, 做最好的自己",href:"/about"},{imgSrc:"/crab.jpeg",title:"Laoshi Nature School",titleCn:"老市自然学校",description:"Let the “village” become a school. Let more children grow up healthy and happy in the “village”, and let more people see the vitality of local communities and nature, and see the beauty that everyone is born with",descriptionCn:"让“村”, 成为一所学校。让更多的孩子在“村”里健康快乐成长, 让更多人看见地方社区与自然的生命力, 看见自己与每一个人与生俱来的美好",href:"/nature-school"}]};function CarouselComponent(e){let{lang:r,mobile:t=!1}=e;return(0,n.jsxs)(f,{className:"w-full overflow-hidden px-2"+(t?" sm:hidden px-0":" hidden sm:block"),plugins:[(0,l.Z)({delay:5e3})],children:[(0,n.jsx)(h,{children:y.carouselItems.map((e,l)=>(0,n.jsx)(m,{children:(0,n.jsx)(s.Zb,{children:(0,n.jsx)(s.aY,{className:"flex items-center justify-center",children:(0,n.jsxs)(w.AspectRatio,{ratio:t?9/16:16/9,className:"relative overflow-hidden",children:[(0,n.jsx)("div",{className:"absolute inset-0 z-10 bg-black/20 flex justify-center items-center",children:(0,n.jsx)(g(),{href:"".concat(r,"/").concat(e.href),children:(0,n.jsxs)("h1",{className:"hover:underline text-xl md:text-3xl font-bold text-white text-center p-2 max-w-6xl",children:["cn"===r?e.titleCn:e.title,(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"cn"===r?e.descriptionCn:e.description]})})}),(0,n.jsx)(b(),{src:e.imgSrc,alt:"",fill:!0,className:"object-cover bg-black/10 object-center"})]})})})},l))}),(0,n.jsx)(x,{className:"hidden sm:block"}),(0,n.jsx)(p,{className:"hidden sm:block"})]})}},1712:function(e,r,t){"use strict";t.r(r),t.d(r,{AspectRatio:function(){return l}});var n=t(4101);let l=n.f},3611:function(e,r,t){"use strict";t.d(r,{d:function(){return i},z:function(){return c}});var n=t(7437),l=t(2265),s=t(686),a=t(7111),o=t(1628);let i=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,r)=>{let{className:t,variant:l,size:a,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(i({variant:l,size:a,className:t})),ref:r,...d})});c.displayName="Button"},9598:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},SZ:function(){return c},Zb:function(){return a},aY:function(){return d},eW:function(){return u},ll:function(){return i}});var n=t(7437),l=t(2265),s=t(1628);let a=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...l})});a.displayName="Card";let o=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...l})});o.displayName="CardHeader";let i=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("font-semibold leading-none tracking-tight",t),...l})});i.displayName="CardTitle";let c=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...l})});c.displayName="CardDescription";let d=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("",t),...l})});d.displayName="CardContent";let u=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center ",t),...l})});u.displayName="CardFooter"},5217:function(e,r,t){"use strict";t.r(r),t.d(r,{Separator:function(){return o}});var n=t(7437),l=t(2265),s=t(6657),a=t(1628);let o=l.forwardRef((e,r)=>{let{className:t,orientation:l="horizontal",decorative:o=!0,...i}=e;return(0,n.jsx)(s.f,{ref:r,decorative:o,orientation:l,className:(0,a.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",t),...i})});o.displayName=s.f.displayName},1628:function(e,r,t){"use strict";t.d(r,{cn:function(){return cn}});var n=t(3920),l=t(550);function cn(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.m6)((0,n.W)(r))}}},function(e){e.O(0,[310,82,326,477,979,971,472,744],function(){return e(e.s=3863)}),_N_E=e.O()}]);