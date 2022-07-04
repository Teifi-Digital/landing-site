# Arena Teifi Site 2022 Landing
## ⏳ Installation
- Access ``backend/`` run ``npm install``
- Access ``frontend/`` run ``npm install``
- Database backup file ``dump-arena_teifi_site-3`` for postgres in ``.saved/``
- After recover db data access `backend/` then run ``npm run _build``. This command will ensure remove ``.cache/`` and ``build/`` folders that created on prior run build before run build Strapi source again.**Note: this command will build the Strapi source with all declared Enviroment variables in ``.env`` file.
- After build Strapi source successfully without any errors. Run ``npm run start`` to start Strapi server. You can change the port Strapi use to run before this command in ``backend/config/server.js``
- Access to ``frontend/`` run ``npm run build``. **Note: you have to start Strapi server first before build code frontend because NextJS has the feature that it get the server data on build stage then cache them to accelerate loading speed. That why if Strapi server still not run there will be errors occure.
- After build frontend code, run ``npm run start`` for starting NextJS. By default, NextJS use port 3000 for running you can change this by modify the starting code in ``frontend/package.json`` the following code ``"start": "next start"`` to ``"start": "next start -p <port number>"`` to change it to your port

## 🖐 Requirements
- NodeJS >= 14 <= 16
- NPM >= 6.x

## Links
- https://www.figma.com/file/xKE4ooCAgiM7JiCwLrx2Uz/%5BEXT%5D-Teifi-Site-2022-(Copy)
