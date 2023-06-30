const {Kafka} = require("kafkajs");
const { Partitioners } = require('kafkajs')

const msg = process.argv[2];

const run = async () => {

    try {

        const kafka = new Kafka({
            "clientId" : "myapp",
            "brokers" : ["localhost:9092"]
        });

        const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });

        console.log("Connecting...");
        await producer.connect();
        console.log("Connected...");

        const partition = msg[0] < 'N' ? 0 : 1;

        const result = await producer.send({
            "topic" : "Users",
            "messages" : [
                {
                    "value" : msg,
                    "partition" : partition
                }
            ]
        })

        
        console.log(`Sent successfully... ${JSON.stringify(result)}`);
        await producer.disconnect();

    }   catch(err) {

        console.log(`Something bad happened ${err}`);

    } finally {

        process.exit(0);
    }
}

run();