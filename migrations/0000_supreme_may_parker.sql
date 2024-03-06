CREATE TABLE `linkShare` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`url` text NOT NULL,
	`title` text NOT NULL,
	`remark` text,
	`created` integer NOT NULL,
	`modified` integer NOT NULL,
	`deleted` integer
);
