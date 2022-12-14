import * as THREE from'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
 
    let renderer;
    let dirLight;
    let gridHelper;
    let axisHelper;
 
    init();
    animate();
 
    function init() {
        dirLight = new THREE.SpotLight(0xffffff,1.5);//color,強度
            dirLight.position.set(-30, 40, 30);
            scene.add(dirLight);

        renderer = new THREE.WebGLRenderer();
        
        //renderer.setClearColor(new THREE.Color(0x000000));
        renderer.setSize(window.innerWidth, window.innerHeight);  
        
        const controls = new OrbitControls(camera, document.body);
        controls.enableDamping = true;
        controls.dampingFactor = 0.2;
 
        // gridHelper 
        gridHelper = new THREE.GridHelper(10,5) 
        scene.add(gridHelper);

        var gridHelper2 = new THREE.GridHelper(10, 5);
        gridHelper2.rotation.x = 0;
        gridHelper2.position.y = 2;
        gridHelper2.position.z = 0;
        scene.add( gridHelper2 );

        var gridHelper3 = new THREE.GridHelper(10, 5);
        gridHelper3.rotation.x = 0;
        gridHelper3.position.y = 4;
        gridHelper3.position.z = 0;
        scene.add( gridHelper3 )

        var gridHelper4 = new THREE.GridHelper(10, 5);
        gridHelper4.rotation.x = 0;
        gridHelper4.position.y = 6;
        gridHelper4.position.z = 0;
        scene.add( gridHelper4 )
        
        var gridHelper5 = new THREE.GridHelper(10, 5);
        gridHelper5.rotation.x = 0;
        gridHelper5.position.y = 8;
        gridHelper5.position.z = 0;
        scene.add( gridHelper5 )

        var gridHelper6 = new THREE.GridHelper(10, 5);
        gridHelper6.rotation.x = 0;
        gridHelper6.position.y = 10;
        gridHelper6.position.z = 0;
        scene.add( gridHelper6 )
 
        var gridHelper7 = new THREE.GridHelper(10, 5);
        gridHelper7.rotation.x = Math.PI/2;
        gridHelper7.position.y = 5;
        gridHelper7.position.z = -5;
        scene.add( gridHelper7 )
        
        var gridHelper8 = new THREE.GridHelper(10, 5);
        gridHelper8.rotation.x = Math.PI/2;
        gridHelper8.position.y = 5;
        gridHelper8.position.z = -3;
        scene.add( gridHelper8 )

        var gridHelper9 = new THREE.GridHelper(10, 5);
        gridHelper9.rotation.x = Math.PI/2;
        gridHelper9.position.y = 5;
        gridHelper9.position.z = -1;
        scene.add( gridHelper9 )

        var gridHelper10 = new THREE.GridHelper(10, 5);
        gridHelper10.rotation.x = Math.PI/2;
        gridHelper10.position.y = 5;
        gridHelper10.position.z = 1;
        scene.add( gridHelper10 )

        var gridHelper11 = new THREE.GridHelper(10, 5);
        gridHelper11.rotation.x = Math.PI/2;
        gridHelper11.position.y = 5;
        gridHelper11.position.z = 3;
        scene.add( gridHelper11 )

        var gridHelper12 = new THREE.GridHelper(10, 5);
        gridHelper12.rotation.x = Math.PI/2;
        gridHelper12.position.y = 5;
        gridHelper12.position.z = 5;
        scene.add( gridHelper12 )
        
        axisHelper = new THREE.AxisHelper(20); 
        scene.add(axisHelper);
 
        document.getElementById("WebGL-output").appendChild(renderer.domElement);
    }
    function animate() {
        requestAnimationFrame(animate);
        
    }
