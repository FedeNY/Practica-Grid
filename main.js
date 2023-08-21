const container = document.getElementById("cosas");

const Array = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];











Array.forEach(e => {

        container.innerHTML += `
        
            <div class="${e.name}  atr">Hola</div>
        
        `

});
