import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { text, blob, sqliteTable } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('Post', {
	id: text('id'),
	title: text('title').notNull(),
	date: text('date').notNull(),
	image: blob('image').notNull(),
	content: text('content').notNull(),
});

export type SelectPost = InferSelectModel<typeof posts>;
export type InsertPost = InferInsertModel<typeof posts>;
