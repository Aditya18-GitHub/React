
function customrender(reactele,container){

        // const ele = document.createElement(reactele.type);

        // ele.setAttribute("href",reactele.props.href);
        // ele.setAttribute("target",reactele.props.target);

        // ele.innerHTML = reactele.children;

        // container.append(ele);


        const ele = document.createElement(reactele.type);

        ele.innerHTML = reactele.children;

        for (const p in reactele.props) {
            ele.setAttribute(p,reactele.props[p]);
        }

        container.append(ele);
}


const reactele = {
        type:"a",
        props:{
            href: "https://vitejs.dev/guide/",
            target:"_blank"
        },
        
        children: 'click me to visit web'
      
}


const container = document.querySelector("#root");

customrender(reactele,container);



