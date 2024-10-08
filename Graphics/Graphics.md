# GRAPHICS

## THREEJS

### Three.js and why is it used: A)

Three.js is a lightweight, cross-browser JavaScript library/API used to create and display animated 3D computer graphics in a web browser using WebGL. It abstracts the complexity of WebGL, allowing developers to create 3D content with more ease and efficiency. It's used for web applications that require 3D visualizations such as games, data visualizations, interactive simulations, and virtual reality experiences.

### How do you set up a basic Three.js scene: A)

To set up a basic Three.js scene, follow these steps:

• Scene: Create a scene object to hold all your 3D objects.

• Camera: Initialize a camera PerspectiveCamera is commonly used to define the point of view.

• Renderer: Create a WebGLRenderer, which will create a canvas element in the document where your scene will be rendered.

• Object: Define a geometry e.g. BoxGeometry for a cube, a material, and combine them into a mesh.

• Add Object to Scene: Add the mesh to your scene.

• Render: Call the renderer's render method in a loop to draw the scene from the camera's perspective.

### What are the main components of a Three.js application: A)

The core components include:

• Scene: A container that holds all your objects, lights, and cameras.

• Camera: Defines the POV from which the scene is rendered. Common types are PerspectiveCamera and OrthographicCamera.

• Renderer: Renders the scene from the camera's perspective; WebGLRenderer is widely used.

• Geometry: The shape of the object in 3D space.

• Material: Defines the appearance of the surface of the geometry.

• Mesh: Combines geometry and material. It is what you add to the scene.

### How does Three.js handle animations: A)

Animations in Three.js are commonly handled using the 'requestAnimationFrame' function, which calls a function before the next repaint. This function is used in a loop to update objects' positions, rotations, or any other properties over time, and then render the scene again with those updates, creating the animation effect.



## INTERMEDIATE THREEJS

### Explain the difference between Orthographic and Perspective cameras in Three.js. A)

PerspectiveCamera simulates the way the human eye sees; it's used for realistic 3D scenes where objects further away appear smaller. OrthographicCamera renders objects in uniform size, regardless of their distance from the camera, useful for 2D simulations or UI elements in 3D spaces.

### How can you add lighting to a Three.js scene: What are the different types of lights available in Three.js? A)

To add lighting, you instantiate a light object e.g., 'new THREE.PointLightcolor, intensity, distance@  and add it to your scene. Types of lights include:

• AmbientLight: Adds omnidirectional light without a source.

• PointLight: Emits light in all directions from a single point.

• DirectionalLight: Simulates sunlight, emitting parallel rays.

• SpotLight: A light that casts in a specific direction, with a cone-shaped beam.

• HemisphereLight: Simulates the scattering of light in the atmosphere, with different colors from the sky and ground.

### What does AmbientLight do in Three.js: A)

AmbientLight adds omnidirectional light to the scene without a specific source. It illuminates all objects equally, simulating a general ambient light in the environment.

### What does PointLight do in Three.js: A)

PointLight emits light in all directions from a single point in space. It creates a light source that radiates outwards, illuminating objects around it.

### What does DirectionalLight do in Three.js: A)

DirectionalLight simulates sunlight by emitting parallel rays of light in a specific direction. It's commonly used to create realistic lighting effects in 3D scenes.

### What does SpotLight do in Three.js: A)

SpotLight is a light source that casts light in a specific direction, with a cone-shaped beam. It's useful for creating focused lighting effects on specific objects or areas in the scene.

### What does HemisphereLight do in Three.js: A)

HemisphereLight simulates the scattering of light in the atmosphere, with different colors from the sky and ground. It creates a gradient of light that changes based on the orientation of the objects in the scene.

### How do you handle user input or interaction in a Three.js application: A)

User inputs like mouse clicks or movements and keyboard presses can be captured using standard JavaScript event listeners e.g., 'addEventListener'. Three.js provides the Raycaster' class to help detect which objects are intersected by a ray from the camera through the mouse position, enabling interaction with 3D objects.

### What is a material in Three.js and what types are available: A)

Materials in Three.js define how the surface of a geometry looks and reacts with light. Types include:

• MeshBasicMaterial: Displays a flat, single-colored object not affected by lights.

• MeshLambertMaterial: A material that reflects light diffusely, suitable for non-shiny surfaces.

• MeshPhongMaterial: For shiny surfaces with specular highlights.

• MeshStandardMaterial: A physically based material that provides more realistic results.

• Additional materials include MeshDepthMaterial, MeshNormalMaterial, and various others.

### How do you apply textures to objects in Three.js: A)

To apply textures to objects in Three.js, you load an image using 'THREE.TextureLoader' and set it as the map property of a material. You can control how the texture is mapped onto the object using UV wrapping, repeat, and other texture mapping options.



# ADVANCED THREEJS QUESTIONS

### How do you optimize a Three.js application for performance: A)

Performance can be optimized by:

• Minimizing the number of draw calls by merging geometries or using instancing.

• Reducing the complexity of geometries lowering vertex count.

• Using power-of-two textures and mipmaps for efficiency.

• Applying Level of Detail LOD, showing simpler models for distant objects.

• Culling objects outside of the camera's view.

### Can you explain what a shader is and how it's used in Three.js: A)

Shaders are small programs written in GLSL that run on the GPU. They determine how vertices and pixels fragments are processed to render the graphical effects seen on the screen. In Three.js, shaders can be customized for materials using "ShaderMaterial' or "RawShaderMaterial' to create unique visual effects not available with the standard materials.

### How does Three.js handle textures and materials: A)

Textures in Three.js are images that are mapped onto the surfaces of geometries to give them more detail. You apply a texture to a material by loading the image using 'THREE.TextureLoader' and then setting it as the map property of a material. Three.js supports various texture mappings, such as UV wrapping and repeat, to control how these images fit onto objects.

### What are some ways to load external models into a Three.js scene: A)

Three.js uses loaders to import external models in various formats. Common loaders include:

• GLTFLoader for gLTF files, a standard format for efficient transmission and loading of 3D models.

• FBXLoader for FBX files, widely used in 3D animation.

• OBJLoader for OBJ files, a common format for 3D models.

These loaders asynchronously load model data, which can then be added to the scene.

### How do you create custom shaders in Three.js: A)

To create custom shaders in Three.js, you can use the 'ShaderMaterial' or 'RawShaderMaterial' classes. These classes allow you to define custom vertex and fragment shaders written in GLSL, which determine how the geometry and materials are rendered on the screen. You can create unique visual effects by customizing these shaders to achieve specific rendering results.

### What is Level of Detail LOD in Three.js and how is it used: A)

Level of Detail LOD is a technique used in Three.js to optimize performance by showing simpler models for distant objects. By dynamically switching between different levels of detail based on the distance from the camera, you can reduce the complexity of the scene and improve rendering performance. LOD is commonly used in applications with large scenes or many objects to maintain smooth performance while preserving visual quality.

### How can you implement shadows in a Three.js scene: A)

To implement shadows in a Three.js scene, you need to enable shadow mapping on the renderer and lights. You can set the 'castShadow' and 'receiveShadow' properties on objects to control whether they cast or receive shadows. By configuring the shadow properties of lights and materials, you can create realistic shadow effects in your 3D scene. Shadows add depth and realism to the scene, enhancing the visual quality of the rendered objects.

### What is Raycasting in Three.js and how is it used for interaction: A)

Raycasting in Three.js is a technique used to detect which objects in the scene are intersected by a ray projected from the camera through a specific point in 3D space. By using the 'Raycaster' class, you can determine which objects are clicked or hovered over by the mouse cursor, enabling interactive features in your 3D application. Raycasting is commonly used for object picking, object selection, and other user interaction tasks in Three.js applications.

### How can you create particle effects in Three.js: A)

To create particle effects in Three.js, you can use the 'Points' or 'ParticleSystem' classes to generate and render a large number of small particles in the scene. By defining the properties of the particles, such as position, size, color, and velocity, you can create various visual effects like fire, smoke, rain, or snow. Particle effects add dynamism and visual interest to the scene, enhancing the overall immersive experience of the 3D environment.

### What is post-processing in Three.js and how can it enhance visual effects: A)

Post-processing in Three.js involves applying additional effects to the rendered scene after the initial rendering pass. By using post-processing shaders, you can add effects like bloom, depth of field, motion blur, or color grading to enhance the visual quality of the scene. Post-processing can create cinematic effects, improve realism, and add visual interest to the rendered 3D graphics, making the scene more engaging and immersive for the viewer.

### How can you create interactive 3D UI elements in Three.js: A)

To create interactive 3D UI elements in Three.js, you can use HTML elements overlaid on the 3D scene using CSS positioning. By combining HTML elements with the 3D scene, you can create interactive buttons, menus, sliders, or other UI controls that respond to user input. You can use event listeners to capture user interactions with the HTML elements and update the 3D scene accordingly, enabling interactive features in your 3D application. Integrating 3D UI elements with the 3D scene enhances the user experience and provides intuitive controls for interacting with the 3D content.

### How can you implement physics simulations in Three.js: A)

To implement physics simulations in Three.js, you can use libraries like Ammo.js or Cannon.js to add realistic physics behavior to objects in the 3D scene. By defining properties like mass, velocity, friction, and collision shapes for objects, you can simulate physical interactions like gravity, collisions, and forces in the 3D environment. Physics simulations add realism and dynamism to the scene, making the objects behave according to real-world physics principles and enhancing the overall interactive experience of the 3D application.

### What is the role of shaders in Three.js and how can they be customized: A)

Shaders in Three.js are small programs written in GLSL that run on the GPU and determine how vertices and pixels are processed to render the graphical effects seen on the screen. Shaders can be customized by defining custom vertex and fragment shaders using the 'ShaderMaterial' or 'RawShaderMaterial' classes in Three.js. By writing custom GLSL code, you can create unique visual effects, textures, lighting, and materials that are not available with the standard materials. Custom shaders allow you to achieve specific rendering results and create visually stunning 3D graphics in your application.



## THREE JS SCENARIOS

### You need to create a web application that visualizes large datasets in 3D. How would you approach this using Three.js: A)

• For large datasets, consider using instancing with 'THREE, Instancedesh@  to render many objects with a single draw call. Employ Level of Detail LOD to present simpler models for objects that are further away. Additionally, optimize the data structure for quick access and manipulation, and consider using workers for processing data off the main thread.

### How would you implement VR or AR experiences using Threejs: A)

• Three js supports WebXR for VR and AR experiences. Start by creating a "WebGLRenderer"

with Cantialias: true and enabling VR with @  xx. enabled = true@ . Use the

XRSession@  to handle VR display and input. For AR, the process is similar but includes additional considerations for blending digital and physical realities, such as handling environmental understanding and light estimation.



# UNITY

### What is Unity, and what are its main features: A)

Unity is a cross-platform game engine developed by Unity Technologies. It's widely used for developing video games for web plugins, desktop platforms, consoles, and mobile devices. Its main features include:

• Cross-Platform Development: Unity supports a wide range of platforms, including Windows, macOS, Linux, IOS, Android, and many others, allowing developers to create games and applications that can be deployed across multiple platforms with minimal changes.

• Integrated Development Environment IDE: Unity provides a comprehensive and user-friendly IDE that integrates numerous tools for game development, such as a graphics editor, a physics engine, and a scripting editor, among others.

• Asset Store: Unity has an Asset Store where developers can buy and sell assets, tools, and plugins to enhance their game development process.

• Scripting: Unity uses C# for scripting, which is a powerful and versatile programming language that allows developers to implement game logic, control animations, and manage user interactions.

• 3D and 2D Game Development: Unity supports both 3D and 2D game development, providing a versatile environment for creating a wide variety of games.

### Can you explain the difference between the Awake and Start methods in Unity: A)

• Awake: This method is called when the script instance is being loaded. It's used to initialize variables or game state before the game starts. 'Awake' is called only once during the lifetime of the script instance and is called even if the script component is disabled.

• StartO: This method is called just before any of the 'Update' methods for the first time. Unlike

'Awake' , 'Start' is called only if the script component is enabled. This makes it ideal for tasks that require all objects to be initialized.

### What are Prefabs in Unity: A)

Prefabs are assets in Unity that allow developers to store a pre-configured game object complete with its components, property values, and child game objects as a reusable asset. Prefabs enable developers to create, configure, and store a game object template once and then instantiate and reuse that template anywhere within the game. This is highly beneficial for creating multiple instances of the same object, ensuring consistency and efficiency in game development.

### How do you handle collisions in Unity: A)

In Unity, collisions are handled by attaching Collider components to game objects and optionally using Rigidbody components to make objects respond to physics. Unity supports different types of colliders e.g. box, sphere, capsule, mesh for various shapes of objects. When two objects with Collider components come into contact, Unity's physics engine detects the collision, and developers can respond to collisions by implementing specific callback methods such as

'OnCollisionEnter', 'OnCollisionStay", and 'OnCollisionExit'. These methods can be used in scripts to define custom behavior when collisions occur.

### What is the difference between FixedUpdate and Update® methods: A)

• FixedUpdate: This method is called at a fixed interval and is independent of the frame rate.

It's primarily used for updating physics calculations and other fixed-frame-rate updates. Since physics updates are performed at a consistent rate, using 'FixedUpdate' ensures smooth physics behavior.

• Update: This method is called once per frame and is used for most frame-dependent operations, such as receiving user input, moving non-physics objects, or triggering animations. The frequency of Update calls can vary depending on the frame rate of the



