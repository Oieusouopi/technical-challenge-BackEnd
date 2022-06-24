# Technich challenge - Back-End

For any problems with the project contact us via email rafasc866@gmail.com

## About
The company Ebytr is having problems with productivity/control because collaborating people have been having diifficulty in organizing their individual tasks. For this reason the product management Carolina Bigonha decided to implement a new way of organizing individual tasks.

## Before starting the project

  🐳 Using docker

  > Use the services `node` and `db` with the command `docker-compose up -d`.
  - these services will initialize the `node_technicalChallenger`, `ubuntu_SO` and `todoList_db` containers.
  - From here you can use the node_technicalChallenger container by CLI or open in VS Code.

  > Use the command `docker exec -it node_technicalChallenger bash`.
  - It will give you access to the interactive terminal of the container created by docker-compose, which is running in the background.

  > install dependecies with `npm install`

  ⚠ Wanted ⚠ if you choose to  use Docker **ALL** the commnads in `package.json` (npm start, npm test, npm run dev, ...) must be executed **IN** container, that is, in the terminal that appears after executing the command `docker exec` mentioned above. 