            var valor = document.getElementById("pecinco").offsetWidth;
            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });
            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Diego Vera");
                select("#aprendizaje").html("por lo menos un poco de modelaje 3D");
            }
            
           function draw() {
              background(212,0,60);
               
              ambientLight(100);
               
              let mx = mouseX - 50;
              let my = mouseY - 50;
               
              pointLight(43, 255, 195, mx, my, 10);
               
               specularMaterial(106,0,30);
               
              orbitControl();
               
              cone(90, 99, 7, 0, false);
            }