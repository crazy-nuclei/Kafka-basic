const {Kafka} = require("kafkajs");

const run = async () => {

    try {

        const kafka = new Kafka({
            "clientId" : "myapp",
            "brokers" : ["localhost:9092"]
        });

        const consumer = kafka.consumer({
            "groupId" : "HELLO"
        });

        console.log("Connecting...");
        await consumer.connect();
        console.log("Connected...");

        await consumer.subscribe({
            "topic" : "Users",
            "fromBeginning" : true
        });

        consumer.run({
            "eachMessage" : async result => {
                console.log(`Received msg ${result.message.value} on partition ${result.partition}`);
            }
        })
        

    }   catch(err) {

        console.log(`Something bad happened ${err}`);

    }
}

run();