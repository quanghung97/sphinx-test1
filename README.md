# Step 1
download sphinx
download mysql
# Step 2
in ```/etc```

using setting sphinx.conf.dist => sphinx.conf and copy to /bin 

# Step 3
Create sample data from ```/etc/example.sql```
we have two table documents and tags from table if you wants
```
DROP TABLE IF EXISTS db.documents;
CREATE TABLE db.documents
(
	id			INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	group_id	INTEGER NOT NULL,
	group_id2	INTEGER NOT NULL,
	date_added	DATETIME NOT NULL,
	title		VARCHAR(255) NOT NULL,
	content		TEXT NOT NULL
);

REPLACE INTO db.documents ( id, group_id, group_id2, date_added, title, content ) VALUES
	( 1, 1, 5, NOW(), 'test one', 'this is my test document number one. also checking search within phrases.' ),
	( 2, 1, 6, NOW(), 'test two', 'this is my test document number two' ),
	( 3, 2, 7, NOW(), 'another doc', 'this is another group' ),
	( 4, 2, 8, NOW(), 'doc number four', 'this is to test groups' );

DROP TABLE IF EXISTS db.tags;
CREATE TABLE db.tags
(
	docid INTEGER NOT NULL,
	tagid INTEGER NOT NULL,
	UNIQUE(docid,tagid)
);

INSERT INTO db.tags VALUES
	(1,1), (1,3), (1,5), (1,7),
	(2,6), (2,4), (2,2),
	(3,15),
	(4,7), (4,40);

```

# Step 4
open terminal ```indexer.exe --all``` or re-index all ```rotate```

# Step 5

open another terminal running searchd ```searchd.exe``` to open port ```9306```

# Step 6
Reading sphinx.conf and guest how sphinx indexing from mysql to sphinxQL data

Reading index.js and guest how connect to port 9306 and query data
