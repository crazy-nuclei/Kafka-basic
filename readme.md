
1. Run zookeeper and kafka containers : 
    ```bash
    docker-compose up -d
    ```
2. Create topic using topic.js
    ```bash 
    node topic.js
    ```
3. Send data to the topic using producer.js
    ```bash 
    node producer.js
    ```