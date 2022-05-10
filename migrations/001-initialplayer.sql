-- UP

CREATE TABLE Player (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    score INTEGER
);

INSERT INTO Player (name,score) values ('bruno',2240);
INSERT INTO Player (name,score) values ('vanya',228);

-- Down
DROP TABLE Player;

