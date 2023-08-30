"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6843],{47606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(25773),o=(a(27378),a(35318)),i=a(92975);const s={title:"Release Notes - Podman Desktop 1.3",description:"Podman Desktop 1.3 has been released!",slug:"podman-desktop-release-1.3",authors:["dgolovin"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.3.webp"},l=void 0,p={permalink:"/blog/podman-desktop-release-1.3",source:"@site/blog/2023-08-16-release-1.3.md",title:"Release Notes - Podman Desktop 1.3",description:"Podman Desktop 1.3 has been released!",date:"2023-08-16T00:00:00.000Z",formattedDate:"August 16, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"openshift",permalink:"/blog/tags/openshift"}],readingTime:5.195,hasTruncateMarker:!1,authors:[{name:"Denis Golovin",title:"Principal Software Engineer",url:"https://github.com/cdrage",imageURL:"https://github.com/dgolovin.png",key:"dgolovin"}],frontMatter:{title:"Release Notes - Podman Desktop 1.3",description:"Podman Desktop 1.3 has been released!",slug:"podman-desktop-release-1.3",authors:["dgolovin"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.3.webp"},nextItem:{title:"Release Notes - Podman Desktop 1.2",permalink:"/blog/podman-desktop-release-1.2"}},r={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Compose group Logs tab #3176",id:"compose-group-logs-tab-3176",level:3},{value:"Podman user-mode networking support to Windows/WSL #3251",id:"podman-user-mode-networking-support-to-windowswsl-3251",level:3},{value:"Compose group Summary tab #3317,",id:"compose-group-summary-tab-3317",level:3},{value:"Compose group Inspect tab #3316",id:"compose-group-inspect-tab-3316",level:3},{value:"<code>Deploy to kubernetes</code> in compose actions #3299",id:"deploy-to-kubernetes-in-compose-actions-3299",level:3},{value:"<code>Generate Kube</code> in Compose actions and <code>Kube</code> tab in compose details #3253",id:"generate-kube-in-compose-actions-and-kube-tab-in-compose-details-3253",level:3},{value:"Install multiple extensions using extension pack #3150",id:"install-multiple-extensions-using-extension-pack-3150",level:3},{value:"Customize icons from extension #3131",id:"customize-icons-from-extension-3131",level:3},{value:"Resource details page update #1923",id:"resource-details-page-update-1923",level:3},{value:"<code>Node&#39;s container image</code> field added to <code>Create a Kind cluster</code> form #3508",id:"nodes-container-image-field-added-to-create-a-kind-cluster-form-3508",level:3},{value:"Support Docker Desktop extensions using a backend #3435",id:"support-docker-desktop-extensions-using-a-backend-3435",level:3},{value:"Initial onboarding implementation for podman (experimental) #3308",id:"initial-onboarding-implementation-for-podman-experimental-3308",level:3},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:3},{value:"Community Thank You",id:"community-thank-you",level:3},{value:"Final Notes",id:"final-notes",level:3}],m={toc:d};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podman Desktop 1.3 Release! \ud83c\udf89"),(0,o.kt)("p",null,"This is essentially a bug-fix release to fix various issues in UI, extension engine and featured extensions, but as usual we also added a few new features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman 4.6.1"),": Podman 4.6.1 included in Windows and Mac installers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman user-mode networking support to Windows/WSL"),": A new switch `User mode networking' is available when creating Podman machine on Windows for Podman 4.6.0+ to configure podman to work in certain VPN setups and other specialized networking configurations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compose group new UI elements"),": You can now see summary, inspect, deploy to kubernetes, generate kube yaml and view logs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extension packs and extension dependencies"),": Install group of extensions in one click"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource details page update"),": See summary and log for resource"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create Kind cluster form update"),": A new ",(0,o.kt)("inlineCode",{parentName:"li"},"Node's container image")," field can be used to specify the Kubernetes version used for the control-planed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Support Docker Desktop extensions using a backend"),": When loading Docker Desktop extension the containers are created in the backend as described in the vm section of extension's descriptor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman Initial Onboarding (preview)"),": Install and configure podman using included installer")),(0,o.kt)("p",null,"Podman Desktop 1.3 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podman-desktop-1-3-bug-swatting",src:a(46714).Z,width:"1920",height:"1080"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"release-details"},"Release Details"),(0,o.kt)("h3",{id:"compose-group-logs-tab-3176"},"Compose group Logs tab ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3176"},"#3176")),(0,o.kt)("p",null,"When clicking on the group of containers, you can now view the logs of the entire group of compose containers and don't need to open\nlog for every component individually."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/containers/podman-desktop/assets/6422176/743a4ffc-e291-4697-8ac5-8052cc921946",alt:"Screenshot 2023-07-11 at 12 48 47 PM"})),(0,o.kt)("h3",{id:"podman-user-mode-networking-support-to-windowswsl-3251"},"Podman user-mode networking support to Windows/WSL ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3251"},"#3251")),(0,o.kt)("p",null,"Certain VPN setups or other specialized networking configs will block traffic from the virtual WSL networking device, resulting in the podman WSL backend from being unable to contact systems on the VPN, and potentially losing internet access altogether. The new switch allows you to create a podman VM machine configured to work correctly in mentioned above networking environments."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/containers/podman-desktop/assets/620330/2f521576-b6a6-42b5-b24d-08df5b432608",alt:"user"})),(0,o.kt)("h3",{id:"compose-group-summary-tab-3317"},"Compose group Summary tab ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3317"},"#3317"),","),(0,o.kt)("p",null,"Compose group Summary tab shows all containers in the group and let you navigate to Details page for specific container."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://github.com/containers/podman-desktop/assets/620330/6dd6dacd-a0d8-478d-b11e-2b414108bd20",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"compose-group-inspect-tab-3316"},"Compose group Inspect tab ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3316"},"#3316")),(0,o.kt)("p",null,'Compose group Inspect tab shows an array of "container inspect" from docker / podman.'),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/255658081-4a2ce4ce-bdc7-435d-9114-1071ab1ec3c5.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"deploy-to-kubernetes-in-compose-actions-3299"},(0,o.kt)("inlineCode",{parentName:"h3"},"Deploy to kubernetes")," in compose actions ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3295"},"#3299")),(0,o.kt)("p",null,"A button to deploy to kubernetes added to Compose group."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/254973806-1ce57225-3422-4d36-8d09-b70a2825869f.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"generate-kube-in-compose-actions-and-kube-tab-in-compose-details-3253"},(0,o.kt)("inlineCode",{parentName:"h3"},"Generate Kube")," in Compose actions and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Kube")," tab in compose details ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3253"},"#3253")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Generate Kube"),' item added to Compose actions and "Kube" tab is now available in Compose details view.'),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/254337805-98268722-4dde-4c0e-afdf-4873fa4f43fe.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"install-multiple-extensions-using-extension-pack-3150"},"Install multiple extensions using extension pack ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3150"},"#3150")),(0,o.kt)("p",null,"An Extension pack introduced in Extension engine is a way to declare set of extensions to install them all at once."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/251741571-0cd4a199-06f4-4890-8414-4e93ca9178bc.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"customize-icons-from-extension-3131"},"Customize icons from extension ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3131"},"#3131")),(0,o.kt)("p",null,"Extensions now can customize icons for list elements using ",(0,o.kt)("inlineCode",{parentName:"p"},"when")," clause."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/containers/podman-desktop/assets/49404737/7aae5347-4f07-4854-ba11-1f629b5ccf22",alt:"image"})),(0,o.kt)("h3",{id:"resource-details-page-update-1923"},"Resource details page update ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1923"},"#1923")),(0,o.kt)("p",null,"If you click on the arrow icon next to a resource name it will open up a details page (similarly to how clicking on a container in the container list opens up a details page)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/229542404-bae44f89-5cd3-4baf-8b08-e934e4462697.gif",alt:"image"})),(0,o.kt)("h3",{id:"nodes-container-image-field-added-to-create-a-kind-cluster-form-3508"},(0,o.kt)("inlineCode",{parentName:"h3"},"Node's container image")," field added to ",(0,o.kt)("inlineCode",{parentName:"h3"},"Create a Kind cluster")," form ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3508"},"#3508")),(0,o.kt)("p",null,"The new ",(0,o.kt)("inlineCode",{parentName:"p"},"Node's container image")," field can be used to specify the Kubernetes version used for the control-planed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/containers/podman-desktop/assets/42176370/b2a63faf-629f-436d-8496-7c0cd8158679",alt:"image"})),(0,o.kt)("h3",{id:"support-docker-desktop-extensions-using-a-backend-3435"},"Support Docker Desktop extensions using a backend ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3435"},"#3435")),(0,o.kt)("p",null,"Podman Desktop now loads the containers in the backend as described in the vm section of extension descriptor the same way as Docker Desktop does."),(0,o.kt)("h3",{id:"initial-onboarding-implementation-for-podman-experimental-3308"},"Initial onboarding implementation for podman (experimental) ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/3308"},"#3308")),(0,o.kt)("p",null,"This is the initial implementation for the onboarding feature. It only covers a simple onboarding for podman. Check system requirements -> install podman -> yay! Done!"),(0,o.kt)("h3",{id:"notable-bug-fixes"},"Notable Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updating videos to be adaptive for mobile by @mairin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3229"},"#3229")),(0,o.kt)("li",{parentName:"ul"},"Consistent max width and padding in settings by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3232"},"#3232")),(0,o.kt)("li",{parentName:"ul"},"Settings navigation bar resizing by @deboer-tim in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3231"},"#3231")),(0,o.kt)("li",{parentName:"ul"},"Move new registry button to header by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3245"},"#3245")),(0,o.kt)("li",{parentName:"ul"},"Bigger lima logo by @afbjorklund ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3248"},"#3248")),(0,o.kt)("li",{parentName:"ul"},"Horizontal docker logo by @afbjorklund ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3236"},"#3236")),(0,o.kt)("li",{parentName:"ul"},"Respect LIMA_HOME environment variable by @afbjorklund ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3254"},"#3254")),(0,o.kt)("li",{parentName:"ul"},"Add check before writing to terminal by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3263"},"#3263")),(0,o.kt)("li",{parentName:"ul"},"Wait until remote side has fully initialized the extensions by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3257"},"#3257")),(0,o.kt)("li",{parentName:"ul"},"Fix loader not centered horizontally by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3270"},"#3270")),(0,o.kt)("li",{parentName:"ul"},"Troubleshooting still waiting after failure by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3354"},"#3354")),(0,o.kt)("li",{parentName:"ul"},"Store error for build by @cdrage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3365"},"#3365")),(0,o.kt)("li",{parentName:"ul"},"Missing checkbox tooltips by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3380"},"#3380")),(0,o.kt)("li",{parentName:"ul"},"Load compose logs async not await by @cdrage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3377"},"#3377")),(0,o.kt)("li",{parentName:"ul"},"Set rootful connection when starting rootful machine by @lstocchi ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3364"},"#3364")),(0,o.kt)("li",{parentName:"ul"},"Default last page by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3388"},"#3388")),(0,o.kt)("li",{parentName:"ul"},"Avoid dashboard displaying providers starting while they don't by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3451"},"#3451")),(0,o.kt)("li",{parentName:"ul"},"Do not use extensionInfo until it is defined by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3450"},"#V")),(0,o.kt)("li",{parentName:"ul"},"Allow BASIC authentication (all caps) by @cdrage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3471"},"#3471")),(0,o.kt)("li",{parentName:"ul"},"Allow single domain registry such as localhost:5000 by @cdrage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3468"},"#3468")),(0,o.kt)("li",{parentName:"ul"},"Create /usr/local/bin directory if it does not exist on binary install by @cdrage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3425"},"#3425")),(0,o.kt)("li",{parentName:"ul"},"Only delete selected pods by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3378"},"#")),(0,o.kt)("li",{parentName:"ul"},"Add back 'Done' text on the button by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3487"},"#3487")),(0,o.kt)("li",{parentName:"ul"},"Do not wait for more than 5s when checking for podman ping by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3497"},"#3497")),(0,o.kt)("li",{parentName:"ul"},"Add proxy support for extension using patching get and request approach by @dgolovin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2825"},"#2825")),(0,o.kt)("li",{parentName:"ul"},"Refresh component when field is updated by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3525"},"#3525")),(0,o.kt)("li",{parentName:"ul"},"Higher-res icons for featured extensions list by @mairin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3511"},"#3511")),(0,o.kt)("li",{parentName:"ul"},"Main nav selection by @deboer-tim ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3510"},"#3510")),(0,o.kt)("li",{parentName:"ul"},"kube event error when switching context by @jeffmaury ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3494"},"#3494")),(0,o.kt)("li",{parentName:"ul"},"Reset error message each time we pull image by @benoitf ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3550"},"#3550"))),(0,o.kt)("h3",{id:"community-thank-you"},"Community Thank You"),(0,o.kt)("p",null,"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better."),(0,o.kt)("p",null,"A warm welcome to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rostalan"},"@rostalan")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axel7083"},"@axel7083")," who made their first contribution to the project in this release."),(0,o.kt)("h3",{id:"final-notes"},"Final Notes"),(0,o.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.3.0"},"here"),"."),(0,o.kt)("p",null,"Get the latest release from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}u.isMDXComponent=!0},46714:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/title-bug-swatting-8a5058958e05e545e61c1e5e689335d3.png"}}]);