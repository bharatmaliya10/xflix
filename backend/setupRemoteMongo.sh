# Setup file template to upload data to MongoDB Atlas

mongoimport --uri "mongodb://ac-xj167z4-shard-00-00.wje6tql.mongodb.net:27017,ac-xj167z4-shard-00-01.wje6tql.mongodb.net:27017,ac-xj167z4-shard-00-02.wje6tql.mongodb.net:27017xflix?replicaSet=atlas-y26b2d-shard-0" --ssl --authenticationDatabase admin --username bharatmaliya100 --password 12@@Bharat --drop --collection videos --file data.json
