const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
html.removeChild(body);

const newBody = document.createElement("body");

newBody.innerHTML = `
<section class="main">
  <h1>câștigă-ți timpul</h1>
</section>
`;
html.appendChild(newBody);
