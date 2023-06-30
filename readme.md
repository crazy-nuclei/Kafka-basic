
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
    node producer.js "REPLACE THIS WITH THE MSG"
    ```
4. Start consumer.js on two terminals inside same consumer group so that each will recieve data from one shard of topic 
    ```bash 
    node consumer.js
    ```