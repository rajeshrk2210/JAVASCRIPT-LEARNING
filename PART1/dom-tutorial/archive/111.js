// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);
// const htmlELementNode = rootNode.childNodes[0];
// console.log(htmlELementNode); // JS object
// console.dir(htmlELementNode); // Gives Object representation
// console.log(htmlELementNode.childNodes);
// const headElementNode = htmlELementNode.childNodes[0];
// const textNode1 = htmlELementNode.childNodes[1];
// const bodyElementNode = htmlELementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);
// console.log(headElementNode.parentNode);
// sibling relation
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);
// console.log(headElementNode.nextElementSibling);

// Browser by default sets the white-space property to normal which ignores white space and new lines
// to include we can set
/* 
*{
    white-space: pre;
}
*/
// console.log(headElementNode.childNodes);

// const h1 = document.querySelector("h1");
// console.log(h1);
// const div = h1.parentNode;
// console.log(div);
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333";
// const body = h1.parentNode.parentNode;
// console.log(body);
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title);
// console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children);