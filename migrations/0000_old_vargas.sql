CREATE TABLE `Post` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`date` text NOT NULL,
	`image` blob NOT NULL,
	`content` text NOT NULL
);
